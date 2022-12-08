#!/usr/bin/env bash

set -euo pipefail

RAILWAY_BINARY="/tmp/railway"
RAILWAY_VERSION="1.8.4"

# Install the Railway CLI
VERSION="$RAILWAY_VERSION" INSTALL_DIR="$RAILWAY_BINARY" sh -c "$(curl -sSL https://raw.githubusercontent.com/railwayapp/cli/master/install.sh)"

$RAILWAY_BINARY version

affected_projects=$(pnpm nx print-affected --base="$BASE_COMMIT" --head=HEAD --select=projects --type='app')
for project in ${affected_projects//,/ }
do
    echo "Processing: '$project'..."
    parameterized_name=$(echo $project | tr '-' '_')
    branch_name="$(git branch --show-current)"
    env_variable=RAILWAY_TOKEN__"$parameterized_name"_"$branch_name"
    final_env_variable=$(echo "$env_variable" | awk '{print toupper($0)}')
    railway_token="$(jq -r ."$final_env_variable" ./dist/secrets.json)"
    # trigger the deploy
    RAILWAY_TOKEN="$railway_token" $RAILWAY_BINARY up --detach --verbose
done
