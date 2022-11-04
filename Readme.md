
Comandos de docker:


`docker-compose build`
`docker rm $(docker ps -aq) -f`  ⇒ Fuerza a detener y eliminar los contenedores
`docker rmi $(docker images -aq)` ⇒ Script que elimina todas las imagenes 