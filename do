#!/bin/bash -eu

# update submodules
update() {
    git submodule init
    git submodule update
    git submodule foreach 'git checkout main && git pull || :'
}

# db.reload             Drop the db, re-creates it, and loads test fixtures
db.reload() {
    db_name=$(djcli setting -r DATABASES.default.NAME)
    # if platform is not Mac OS
    if [ "$(uname)" != "Darwin" ]; then
      sudo -u postgres dropdb $db_name || echo could not drop $db_name
      sudo -u postgres createdb -O $USER -E UTF8 $db_name
    else
      dropdb $db_name || echo could not drop $db_name
      createdb -O $USER -E UTF8 $db_name
    fi
    backend/manage.py migrate
    backend/manage.py loaddata backend/data.json
}

# compose               Wrapper for docker-compose
#                       Adds an extra command: ./do compose apply
compose() {
    if [ "$1" = "apply" ]; then
        compose build
        compose down
        compose up -d
        compose logs
        compose ps
        return
    fi

    if [ -n "${SUDO_UID-}" ]; then
        export hostuid="$SUDO_UID"
    else
        export hostuid="$UID"
    fi

    docker-compose $@
}

# install all submodules with lerna
install() {
    for dir in backend frontend; do
        {
            mkdir -p $dir/node_modules/.yarn_cache
            yarn install --cwd $dir --cache-folder $dir/node_modules/.yarn_cache | sed "s/^/[$dir] /"
            if [ "${PIPESTATUS[0]}" = "0" ]; then
                printf "\e[32mSUCCESS $dir\e[0m\n"
            else
                printf "\e[31mFAILED $dir\e[0m\n"
                exit 1
            fi
        } &
    done
    wait $(jobs -p)
}


if [ -z "${1-}" ]; then
    grep '^# ' $0
else
    fun=$1
    shift
    set -x
    $fun $*
fi
