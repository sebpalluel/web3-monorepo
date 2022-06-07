#!/bin/bash

HASURA_FOLDER=/usr/src/hasura/app
HASURA_PATH=$HOME/bin/hasura
cd $HASURA_FOLDER || {
    echo "Hasura folder '$HASURA_FOLDER' not found"
    exit 1
}

# Workaround for https://github.com/hasura/graphql-engine/issues/2824#issuecomment-801293056
socat TCP-LISTEN:$HASURA_PORT,fork TCP:backend-hasura-engine:$HASURA_PORT &
socat TCP-LISTEN:$HASURA_CONSOLE_PORT,fork,reuseaddr,bind=backend-hasura-console TCP:127.0.0.1:$HASURA_CONSOLE_PORT &
socat TCP-LISTEN:9693,fork,reuseaddr,bind=backend-hasura-console TCP:127.0.0.1:9693 &
{
    # Apply migrations
    $HASURA_PATH migrate apply --database-name=default || exit 1

    # Apply metadata changes
    $HASURA_PATH metadata apply || exit 1

    # Run console if specified
    if [[ -v HASURA_RUN_CONSOLE ]]; then
        echo "Starting console..."
        $HASURA_PATH console --log-level DEBUG --address "127.0.0.1" --no-browser --admin-secret ${HASURA_GRAPHQL_ADMIN_SECRET} || exit 1
    else
        echo "Started without console"
        tail -f /dev/null
    fi
}
