
# docker

### docker file 
docker build -t django .
docker run -p 8000:8000 django-s
docker run -it django bash 

### Comandos de docker compose:

`docker-compose build` guarda las modificaciones realizadas de los archivos dockerfile
`docker-compose up` levanta el servidor de (de manera interactiva con nuestro codigo)

`docker rm $(docker ps -aq) -f`  ⇒ Fuerza a detener y eliminar los contenedores
`docker rmi $(docker images -aq)` ⇒ Script que elimina todas las imagenes 
docker rm $(docker ps -aq) -f && docker rmi $(docker images -aq)

### debugg

export DOCKER_BUILDKIT=0 
sudo rm ~/.docker/config.json

### Hoja de comandos para la administracion de docker:
“Docker hub para ver las imágenes disponibles” docker images ⇒ verifica todas las imagenes disponibles

```
- docker version
- docker pull hello-word ⇒ descarga la imagen
- docker run hello-word ⇒ ejecuta la imagen

- docker search [nombre de la imagen] ⇒ Busca las versiones de las imágenes
- docker run ubuntu echo 'hello world' ⇒ ejecuta los programas disponibles dentro de la imagen
- docker run -it ubuntu bash ⇒ ejecuta de manera interactiva los programas disponibles dentro de la imagen
- “ todos los contenedores al crearse mueren vuelven a un estado en stop automáticamente”

- docker ps ⇒ muestra las imágenes que están en ejecución y sus datos
- docker ps -a ⇒ todos los contenedores existentes en stop
- docker ps -aq ⇒ todos los contenedores existentes en stop solo mostrando una lista de id’s
- docker rm [id o nombre] ⇒ elimina del historial un contenedor ejecutado a través del nombre o id devuelto en el historial
- docker rm $(docker ps -aq) ⇒ Script que elimina todos los contenedores en stop
- docker rm $(docker ps -aq) -f ⇒ Fuerza a detener y eliminar los contenedores
- docker rmi [nombre de la imagen] ⇒ elimina una imagen del sistema
- docker rmi $(docker images -aq) ⇒ Script que elimina todas las imagenes

- docker start [id o nombre] ⇒ vuelve a ejecutar un contenedor del historial o en stop
- docker stop [id o nombre] ⇒ detiene el contenedor en ejcucion
- docker exec -it [id o nombre] bash ⇒ ejecuta un programa disponible dentro del contenedor en un contenedor previamente creado
```

# Backend: 