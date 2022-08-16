---
tags:
  - postEs
  - nextcloudEs
layout: postEs.njk
title: Instala Nextcloud All in One de forma sencilla
excerpt: En esta publicación, podrás encontrar una guía paso a paso para llevar acabo una instalación de Nextcloud All in One.
featuredImage: /assets/images/nextcloudAIO-lg.png
featuredImageMini: /assets/images/nextcloudAIO-mini.png
imageAlt: Nextcloud AIO
---
# {{title}}:
## Introducción:
- {{excerpt}}
- La documentación original se puede encontrar [aquí.](https://github.com/nextcloud/all-in-one)

## Requisitos:

- Estar mínimamente familiarizado con linux y la terminal, ya que la instalación se realiza desde la terminal.
- Tener un ordenador con una distribución de linux en donde instalar Nextcloud. Si no tienes un ordenador con una distribución instalada, puedes seguir [esta guía](/es/blog/posts/instala-debian11/) para instalar la distribución Debian preparada para alojar servicios.

## Pasos:
1. Actualizar el sistema:

    **Derivados de Debian**
    ```bash
    sudo apt update && sudo apt upgrade
    ```
	**Derivados de Fedora**
	```bash
	sudo dnf upgrade
	```
2. Instalar docker:

- El siguiente comando descargará e instalará docker.

	```bash
	curl -fsSL get.docker.com | sudo sh
	```

3. Instalar Nextcloud:

- Los siguientes comandos descargarán e instalarán Nextcloud AIO dependiendo de la arquitectura de la máquina.

	Para procesadores x64:
	```bash
	# For x64 CPUs:
	sudo docker run -it \
	--name nextcloud-aio-mastercontainer \
	--restart always \
	-p 80:80 \
	-p 8080:8080 \
	-p 8443:8443 \
	--volume nextcloud_aio_mastercontainer:/mnt/docker-aio-config \
	--volume /var/run/docker.sock:/var/run/docker.sock:ro \
	nextcloud/all-in-one:latest
	```
	<details>
	<summary>Para procesadores ARM como la Raspberry Pi:</summary>

	```bash
	# For arm64 CPUs:
	sudo docker run -it \
	--name nextcloud-aio-mastercontainer \
	--restart always \
	-p 80:80 \
	-p 8080:8080 \
	-p 8443:8443 \
	--volume nextcloud_aio_mastercontainer:/mnt/docker-aio-config \
	--volume /var/run/docker.sock:/var/run/docker.sock:ro \
	nextcloud/all-in-one:latest-arm64
	```
	</details>

4. Una vez se hayan descargado las imágenes de docker e iniciado los contenedores, podremos acceder a la interfaz por el puerto 8080. Ejemplo: https://dirección-ip:8080

5. Para completar la instalación necesitamos un dominio que apunte a nuestro servidor. Si ya tienes un dominio configurado puedes saltarte este paso.

	Para conseguir un dominio que apunte a nuestro servidor  podemos utilizar [duckdns.](https://www.duckdns.org/)
	1. Lo primero que tenemos q hacer es crearnos una cuenta.
	2. El siguiente paso es añadir un dominio.
	3. Ahora tenemos que ir a la sección NAT/PAT de nuestro router para abrir el puerto 443 y redireccionarlo al puerto 443 de la ip de la máquina en la que está corriendo Nextcloud. Los pasos en cada router pueden variar pero debería quedar algo así.
	![Port forwarding](/assets/images/port-forwarding.png)
	4. Una vez  hechos los pasos anteriores ya tendremos nuestro dominio configurado.

6. Una vez hayamos iniciado sesión en la interfaz con el paso 4, tendremos que proporcionar nuestro dominio:

- No hay que poner el prefijo https://
![Domain](/assets/images/domain.png)

7. En la sección de Optional Addons, mi recomendación es desactivar Collabora y Nextcloud Talk y solo activar OnlyOffice si quieres una suite ofimática integrada.
![Optional Addons](/assets/images/Optional-Addons.png)

8. En la sección Timezone Change, deberemos seleccionar nuestra zona horaria, podemos ver cual es nuestra zona horaria en el [siguiente enlace.](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)
![Timezone Change](/assets/images/Timezone.png)

9. Ya una vez configuradas nuestras preferencias terminaremos la instalación presionando el botón **Start containers**.