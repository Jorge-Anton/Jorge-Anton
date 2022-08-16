---
title: Instala Debian 11 preparado para alojar servicios
tags: ["postEs", "linuxEs"]
excerpt: En esta publicación, podrás encontrar una guía paso a paso para llevar acabo una instalación de Debian optimizada para hostear servicios.
featuredImage: /assets/images/debian-logo-lg.png
featuredImageMini: /assets/images/debian-logo-mini.png
imageAlt: Debian
layout: postEs.njk
---

# {{title}}:
## Requisitos:
- Un ordenador en el que instalar Debian.
- Una unidad USB de 1GB de almacenamienro como mínimo.

## Pasos:
1. Descargar la ISO de Debian:
- Si el ordenador en el que vamos a instalar Debian tiene una conexión a internet cableada, podemos descargar la ISO de instalación por internet. Si no es el caso, deberemos descargar la ISO completa del sistema.
    - [ISO para instalación por red](https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-11.4.0-amd64-netinst.iso)
    - [ISO completa del sistema](https://chuangtzu.ftp.acc.umu.se/debian-cd/current/amd64/iso-dvd/debian-11.4.0-amd64-DVD-1.iso)

2. Flashear la ISO en un pendrive:
- Para esto puedes utilizar el programa que quieras, pero mi recomendación es [balenaEtcher](https://www.balena.io/etcher/), ya que hace este proceso basante sencillo.

3. Arrancar desde la unidad USB:
- Para poder arrancar el ordenador en donde vamos a instalar debian desde el pendrive, primero tendremos que acceder a la BIOS y modificar el Boot Order para que arranque desde el pendrive. Guardamos los cambios y salimos de la BIOS.

4. Iniciar la instalación gráfica:
- Nos aparecerá un menú como el siguiente en donde seleccionaremos la instalación gráfica presionando Enter.
![Graphic Install](/assets/images/Graphic-Install-Es.png)

5. Llevar a cabo la instalación:
- El proceso es bastante sencillo, solo hay que seguir los pasos que se nos indican.
- Cuando nos pida el nombre de la máquina, podemos dejar el valor por defecto (debian) o poner cualquier otro nombre. Este nombre nos permite encontrar la máquina en la red
![Machine Name](/assets/images/Machine-Name-Es.png)
- Cuando nos pida un nombre de dominio, continuamos sin poner nada.
- El siguiente paso es establecer la clave de superusuario. Es muy importante recordar esta contraseña o apuntarla en algún sitio.
- Lo siguiente es establecer un nombre y contraseña para el ususario con bajos privilegios.
- En el particionado de discos seleccionamos la opción de **Guiado - Utilizar todo el disco**
![Partition](/assets/images/Partition-Es.png)
- Seleccionamos el disco en el que queremos instalar el sistema.
- En el esquema de particionado seleccionamos **Todos los ficheros en una partición (recomendado para novatos)**.
- Finalizamos el particionado.
- Confirmamos los cambios en el disco.
- A continuación se instalará el sistema base.
- Cuando nos pregunte si deseamos analizar medios de instalación adicionales seleccionaremos que **NO**.
- Si no estamos utilizando la ISO de instalación por red, nos preguntará si deseamos hacer una réplica de red, a los que seleccionaremos que **NO**
- En la seeción de seleccionar programas, dejaremos la selección de paquetes de la siguiente manera:
![Packages](/assets/images/Packages-Es.png)
- Cuando nos pregunte si deseamos instalar el cargador de arranque GRUB seleccionamos que **SI** y continuamos seleccionando el disco en donde se instalará GRUB.
- Una vez se haya instalado, habremos finalizado la instalación. Solo tenemos que reiniciar y asegurarnos de que hemos extraído el pendrive para que no vuelva a arrancar desde el medio de instalación.
- Una vez hayamos iniciado sesión, actualizaremos el sistema con los siguientes comandos:
```bash
su 
apt update && apt upgrade
```
- Ya está, ya has instalado Debian con éxito!!