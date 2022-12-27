## Crea un usuario con permisos
sudo su -
passwd ubuntu
ubuntu pass
adduser USERNAME

## configuracion de hostname

- sudo hostnamectl set-hostname tatsite.arasait.com
- hostnamectl set-hostname nombre.dominio.com

```yml
Static hostname: ip-172-26-12-32
Icon name: computer-vm
Chassis: vm
Machine ID: 199d2c8323144599ab8b21798af24ea4
Boot ID: 85220d20f2d94d5ba254fbb339247d73
Virtualization: xen
Operating System: Ubuntu 20.04.5 LTS
Kernel: Linux 5.4.0-1018-aws
Architecture: x86-64
```

# configuracion ngixn
sudo nginx -t
sudo systemctl restart nginx

modifica
`sudo nano /etc/nginx/sites-available/tatsite.arasait.com`
```
server {
        listen 80 default_server;
        listen [::]:80 default_server;
        root /var/www/html;
        proxy_read_timeout 300;
        proxy_connect_timeout 300;
        proxy_send_timeout 300;
        server_name 107.20.241.137 tatsite.arasait.com www.tatsite.arasait.com;

        location / {
                proxy_pass http://localhost:3000;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
        }

        location /:8000 {
                proxy_pass http://localhost:3000;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;

                # include proxy_params;
                # proxy_pass http://unix:/home/ubuntu/web/backend/config.sock;
        }
 }
```
 

```
server {
        server_name 107.20.241.137 tatsite.arasait.com www.tatsite.arasait.com;

        proxy_read_timeout 300;
        proxy_connect_timeout 300;
        proxy_send_timeout 300;

        # location = /favicon.ico { access_log off; log_not_found off; }
        # location /static/ {
        #         root home/ubuntu/web/backend/static;
        # }

        location /front/ {
                proxy_pass http://localhost:3000;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
                # root /home/ubuntu/web/frontend/.next/static;
        }
        location / {
                include proxy_params;
                proxy_pass http://unix:/run/gunicorn.sock;
                # proxy_pass http://unix:/home/ubuntu/web/backend/config.sock;
        }
}
```


tatsite.arasait.com
/etc/nginx/sites-available/tatsite.arasait.com
copia la configuracion por default
`sudo cp /etc/nginx/sites-available/default /etc/nginx/sites-available/tatsite.arasait.com`

habilitar
`sudo ln -s /etc/nginx/sites-available/tatsite.arasait.com /etc/nginx/sites-enabled`


sudo ln -s /etc/nginx/sites-available/myproject /etc/nginx/sites-enabled




# configuracion gunicorn
https://www.digitalocean.com/community/tutorials/how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-20-04

sudo vim /etc/systemd/system/gunicorn.service
```yml
[Unit]
Description=gunicorn daemon
Requires=gunicorn.socket
After=network.target

[Service]
User=ubuntu
Group=www-data
WorkingDirectory=/home/ubuntu/web/backend
ExecStart=/home/ubuntu/web/backend/env/bin/gunicorn \
          --access-logfile - \
          --workers 3 \
          --bind unix:/run/gunicorn.sock \
          config.wsgi:application

[Install]
WantedBy=multi-user.target
```

gunicorn --bind 0.0.0.0:8000 config.wsgi



sudo systemctl start gunicorn.socket
sudo systemctl status gunicorn.socket
sudo systemctl daemon-reload.socket && sudo systemctl restart gunicorn.socket


gunicorn app:application --preload -b 0.0.0.0:8000 


PYTHONPATH=`pwd`/.. gunicorn --bind 0.0.0.0:8000 config.wsgi:application



# configuracion servicio nginx backend

```bash
server {
        listen 80;
        server_name IP;
        location = /favicon.ico { access_log off; log_not_found off; }
        location /static/ {
            root /home/ubuntu/web;
        }
        location / {
            include proxy_params;
            proxy_pass http://unix:/home/ubuntu/web/backend/config.sock;
        }
    }
```





## certificado ssl
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d tatsite.arasait.com -d www.tatsite.arasait.com


# ejecuciones de ngixn


habilita
`sudo ln -s /etc/nginx/sites-available/tatsite.arasait.com /etc/nginx/sites-enabled`

sudo vim /etc/nginx/sites-available/tatsite.arasait.com
sudo vim /etc/nginx/sites-enabled/tatsite.arasait.com
sudo rm -rf  /etc/nginx/sites-available/*
sudo rm -rf  /etc/nginx/sites-enabled/*

sudo nginx -t
sudo systemctl restart nginx


# restar server

### backend
sudo systemctl start gunicorn.socket
sudo systemctl status gunicorn.socket
sudo systemctl daemon-reload && sudo systemctl restart gunicorn 


### frontend next
cd web/frontend
pm2 start "npm run start -- -p 3000" --name nextfrontend
$ pm2 stop     <app_name|namespace|id|'all'|json_conf>
$ pm2 restart  <app_name|namespace|id|'all'|json_conf>
$ pm2 delete   <app_name|namespace|id|'all'|json_conf>

pm2ls
pm2 restart nextfrontend 

http://tatsite.arasait.com/
# referencias

https://austinogiza.medium.com/deploying-react-and-django-rest-framework-with-nginx-and-gunicorn-7a0553459500

https://www.shawndsilva.com/blog/systems-administration-and-devops/hosting-multiple-full-stack-web-projects-on-one-vps-using-nginx-and-docker

https://dev.to/nsengiyunva/deploy-a-python-django-and-reactjs-restful-app-with-gunicorn-supervisor-and-nginx-on-a-linux-ubuntu-server-3b3n

https://www.digitalocean.com/community/tutorials/how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-20-04