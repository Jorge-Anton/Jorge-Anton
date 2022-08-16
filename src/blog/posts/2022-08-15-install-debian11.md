---
title: Install Debian 11 ready for hosting services
tags: ["post", "linux"]
excerpt: In this post, you will find a step-by-step guide to perform a Debian installation optimized for hosting services.
featuredImage: /assets/images/debian-logo-lg.png
featuredImageMini: /assets/images/debian-logo-mini.png
imageAlt: Debian
layout: post.njk
---

# {{title}}:
## Requirements:
- A computer to install Debian on.
- A USB drive with at least 1GB of storage.

## Steps:
1. Download the Debian ISO:
- If the computer on which we are going to install Debian has a wired Internet connection, we can download the net installation ISO. If this is not the case, we will have to download the complete system ISO.
    - [ISO for network installation](https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-11.4.0-amd64-netinst.iso)
    - [Full system ISO](https://chuangtzu.ftp.acc.umu.se/debian-cd/current/amd64/iso-dvd/debian-11.4.0-amd64-DVD-1.iso)

2. Flash the ISO on a flash drive:
- For this you can use any program you want, but my recommendation is [balenaEtcher](https://www.balena.io/etcher/), as it makes this process quite simple.

3. Boot from USB drive:
- To be able to boot the computer where we are going to install debian from the USB drive, first we will have to access the BIOS and modify the Boot Order to boot from the USB drive. Save the changes and exit the BIOS.

4. Start the graphical installation:
- A menu like the following one will appear where we will select the graphical installation by pressing Enter.
![Graphic Install](/assets/images/Graphic-Install-En.png)

5. Carry out the installation:
- The process is quite simple, just follow the steps indicated.
- When asked for the hostname, we can leave the default value (debian) or put any other name. This name allows us to find the machine on the network.
![Hostname](/assets/images/Machine-Name-En.png)
- When it asks for a domain name, we continue without putting anything.
- The next step is to set the superuser password. It is very important to remember this password or write it down somewhere.
- The next step is to set a name and password for the user with low privileges.
- In disk partitioning select the **Guided - Use entire disk** option.
![Partition](/assets/images/Partition-En.png)
- Select the disk on which you want to install the system.
- In the partitioning scheme select **All files in one partition (recommended for new users)**.
- We finish the partitioning.
- We confirm the changes in the disk.
- Next, the base system will be installed.
- When asked if we want to scan extra installation media we will select **NO**.
- If we are not using the network installation ISO, it will ask us if we want to make a network mirror, to which we will select **NO**.
- In the program selection section, we will leave the package selection as follows:
![Packages](/assets/images/Packages-En.png)
- When asked if we want to install the GRUB boot loader we select **YES** and continue selecting the disk where GRUB will be installed.
- Once it has been installed, the installation is complete. We only have to reboot and make sure that we have removed the USB drive so that it does not restart from the installation media.

- Once logged in, we will update the system with the following commands:
```bash
su 
apt update && apt upgrade
```
- That's it, you have successfully installed debian!
