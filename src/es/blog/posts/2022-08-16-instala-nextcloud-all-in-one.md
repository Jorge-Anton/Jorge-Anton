---
tags:
  - postEs
  - NextcloudEs
layout: postEs.njk
title: Instala Nextcloud All in One
excerpt: En esta publicación, podrás encontrar una guía paso a paso para llevar
  acabo una instalación de Nextcloud All in One (docker).
featuredImage: /assets/images/nextcloudAIO-lg.png
featuredImageMini: /assets/images/nextcloudAIO-mini.png
imageAlt: Nextcloud AIO
---
# {{title}}:
## Introducción:
- {{excerpt}}
- La documentación origina se puede encontrar [aquí](https://github.com/nextcloud/all-in-one)

## Requisitos:

- Estar mínimamente familiarizado con linux y la terminal, ya que la instalación se realiza desde la terminal.
- Tener un ordenador con una distribución de linux en donde instalar Nextcloud.

## Pasos:
1. Actualizar el sistema:
- **Derivados de Debian**
```bash
sudo apt update && sudo apt upgrade
```
- **Derivados de Fedora**
```bash
sudo dnf upgrade
```
2. Instalar docker:
```bash
curl -fsSL get.docker.com | sudo sh
```
3. Instalar Nextcloud:
- Para procesadores x64:
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
<details><summary>Para procesadores ARM como la Raspberry Pi:</summary>
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
