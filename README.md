# Governance

## How to run the project ?
Run all the docker container and deploy the proxy console for hasura
```zsh
make
make hasura-console
```


## Project structure
- [**Hasura console**](http://localhost:9695/console)
The console is used as a backoffice to handle the graphQL server and to innerlink all the microservices.
- [**Vue client**](http://localhost:3000/)
This is the main web app client used to access the whole array of services.
- [**Django admin**](http://localhost:8000/admin/)
The admin backoffice is used to manage the different accounts


## Clean the project
```zsh
make clean
```

## Doc
- [**Notion**](https://www.notion.so/governance-assembly)
