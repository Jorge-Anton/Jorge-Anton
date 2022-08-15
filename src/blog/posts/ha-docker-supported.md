---
title: Install supported Home Assistant with Docker
tags: ["post", "home-assistant"]
excerpt: In this publication, you will find a step-by-step guide to perform a supported home assistant installation with docker.
featuredImage: /assets/images/docker-lg.png
featuredImageMini: /assets/images/docker-mini.png
imageAlt: Docker
layout: post.njk
---

# {{title}}
## Requirements:
- To be minimally familiar with linux and the terminal, since the installation is done from the terminal.
- A fresh installation of **Debian 11**, since this is the only distribution with which we can have a supported installation. If you don't know how to install debian 11, see [this post]() where I explain how to optimally install Debian for use with Home Assistant.
- An internet connection.

## Steps:
1. Change to the root user. To do this, enter the following command in the terminal and provide the root password.
```bash
su
```
2. Check if the size of our PATH includes the necessary paths.
```bash
which ldconfig
```
- If the command returns nothing, it means that our PATH does not include the necessary paths. To fix this run the following command.
```bash
PATH=$PATH:/usr/local/sbin:/usr/sbin:/sbin
```

3. Update the system.
```bash
apt update && apt upgrade
```
4. Install the necessary dependencies.
```bash
apt-get install jq wget curl udisks2 libglib2.0-bin network-manager dbus -y
```
5. Instalar docker.
```bash
curl -fsSL get.docker.com | sh
```
6. Install the OS-Agent.
    1. In the following [link](https://github.com/home-assistant/os-agent/releases) we look for the latest available version of the OS-Agent for our platform. If your machine has a 64-bit processor, the package must contain at the end of its name **linux_x86_64.deb**.

    2. Copy the package link.

    3. Create a folder for the download.
    ```bash
    mkdir ha && cd ha
    ```

    4. Download the package. Replace **package-link** with the link you copied.
    ```bash
    wget package-link
    ```

    5. Install the package. Replace **package-name** with the name of the package you downloaded in the previous step. In order to see the name of the downloaded package enter the command **ls** in the terminal.
    ```bash
    dpkg -i package-name
    ```
7. Install the Debian package for Home Assistant supervised.
```bash
wget https://github.com/home-assistant/supervised-installer/releases/latest/download/homeassistant-supervised.deb
dpkg -i homeassistant-supervised.deb
```
8. Reboot the machine.
```bash
reboot
```

9. Once restarted, we only have to wait for all the containers to start up. This process can take several minutes.
- We can see how the containers are starting up by executing the following command:
```bash
su
watch -n 1 docker ps
```

10. Once we see several containers with the previous step, we will be ready to access the Home Assistant interface and we will have finished the installation.
- To access the interface, enter in a browser the ip address of the machine where Home Assistant is running followed by :8123. The url should look like this: ip-address:8123.
- If you do not know the ip address of the machine, run the following command:
```bash
ip route get 8.8.8.8 | sed -n '/src/{s/.*src *\([^ ]*\).*/\1/p;q}'
```