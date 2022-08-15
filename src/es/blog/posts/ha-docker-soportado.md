---
title: Instala Home Assistant soportado con Docker
tags: ["postEs", "home-assistantEs"]
excerpt: En esta publicación, podrás encontrar una guía paso a paso para llevar acabo una instalación soportada de home assistant con docker.
featuredImage: /assets/images/docker-lg.png
featuredImageMini: /assets/images/docker-mini.png
imageAlt: Docker
layout: postEs.njk
---

# {{title}}:
## Requisitos:
- Estar mínimamente familiarizado con linux y la terminal, ya que la instalación se realiza desde la terminal.
- Una instalación nueva de **Debian 11**, ya que esta es la única distribución con la que podemos tener una instalación soportada. Si no sabes como instalar debian 11, mira [esta publicación]() en la que explico como instalar de forma óptima Debian para su uso con Home Assistant.
- Una conexión a internet.

## Pasos:
1. Cambiar al usuario administrador. Para ello, introducimos el siguiente comando en la terminal y proporcionamos la contraseña de administrador.
```bash
su
```
2. Comprobar si el tamaño de nuestro PATH incluye las rutas necesarias.
```bash
which ldconfig
```
- Si el comando no devuelve nada, significa que nuestro PATH no incluye las rutas necesarias. Para arreglar esto ejecuta el siguiente comando.
```bash
PATH=$PATH:/usr/local/sbin:/usr/sbin:/sbin
```

3. Actualizar el sistema.
```bash
apt update && apt upgrade
```
4. Instalar las dependencias necesarias.
```bash
apt-get install jq wget curl udisks2 libglib2.0-bin network-manager dbus -y
```
5. Instalar docker.
```bash
curl -fsSL get.docker.com | sh
```
6. Instalar el OS-Agent.
    1. En el siguiente [enlace](https://github.com/home-assistant/os-agent/releases) buscamos la última versión disponible del OS-Agent para nuestra plataforma. Si tu máquina tiene un procesador de 64-bits, el paquete debe contener al final de su nombre **linux_x86_64.deb**
    
    2. Copiar el enlace del paquete.

    3. Creamos una carpeta para la descarga.
    ```bash
    mkdir ha && cd ha
    ```
    
    4. Descargar el paquete. Sustituye **enlace-del-paquete** por el enlace que has copiado.
    ```bash
    wget enlace-del-paquete
    ```
    5. Instalar el paquete. Sustituye **nombre-del-paquete** por el nombre del paquete que has descargado con el paso anterior. Para poder ver el nombre del paquete descargado introduce el comando **ls** en la terminal.
    ```bash
    dpkg -i nombre-del-paquete
    ```
7. Instalar el paquete de Debian para Home Assistant supervisado.
```bash
wget https://github.com/home-assistant/supervised-installer/releases/latest/download/homeassistant-supervised.deb
dpkg -i homeassistant-supervised.deb
```
8. Reiniciar la máquina.
```bash
reboot
```

9. Una vez reiniciado, ya solo nos queda esperar a que se pongan en marcha todos los contenedores. Este proceso puede tardar varios minutos.
- Podemos ver como va el arranque de los contenedores ejecutando el siguiente comando:
```bash
su
watch -n 1 docker ps
```

10. Una vez veamos ya varios contenedores con el paso anterior, estaremos listos para acceder a la interfaz de Home Assistant y habremos finalizado la instalación.
- Para acceder a la interfaz, introduciremos en un navegador la dirección ip de la máquina en la que está corriendo Home Assistant seguido de :8123. la url deberá quedar con la siguiente estructura: dirección-ip:8123.
- Si no sabes cual es la dirección ip de la máquina, ejecuta el siguiente comando:
```bash
ip route get 8.8.8.8 | sed -n '/src/{s/.*src *\([^ ]*\).*/\1/p;q}'
```
