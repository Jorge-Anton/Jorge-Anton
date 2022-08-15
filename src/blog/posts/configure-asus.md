---
tags:
  - post
  - linux
layout: post.njk
title: Install Asus USB-AC56 driver on
excerpt: In this post, you will find a step by step tutorial on how to setup the
  Asus USB AC-56 Wi-Fi dongle on Linux.
featuredImage: /assets/images/blog/thumbnails/large/2022/8/asus-usb.png
featuredImageMini: /assets/images/blog/thumbnails/small/2022/8/asus-usb.png
imageAlt: USB AC-56
---

# Install Asus USB-AC56 driver on Linux:
## Introduction
- In this post, you will find a step by step tutorial on how to setup the Asus USB AC-56 WiFi dongle on Linux.
- This tutorial also works for all adapters which have the Realtek RTL8812AU chipset.

## Tutorial
- Getting the adapter to work on Linux may seem like a difficult task, but luckily the [aircrack-ng](https://github.com/aircrack-ng) developers have a repository to make it work even in monitor mode and package injection.
 

### Steps:
1. First of all we have to open a terminal and update our system.

- **Debian based:**
```bash
sudo apt update && sudo apt upgrade
```
- **Fedora based:**
```bash
sudo dnf update && sudo dnf upgrade
```

2. Install DKMS and an additional package for fedora. DKMS will automatically recompile and install a kernel module when a new kernel gets installed or updated.
- **Debian based:**
```bash
sudo apt install dkms
```
- **Fedora based:**
```bash
sudo dnf install dkms
sudo dnf install kernel-devel
```

3. Then we need to clone [this repository](https://github.com/aircrack-ng/rtl8812au) from github.
``` bash
git clone https://github.com/aircrack-ng/rtl8812au
```

4. Go into the source code directory and install the driver
```bash
sudo make dkms_install
```

5. Finally, reboot the machine so that the driver is fully installed. Once rebooted, the Wi-Fi adapter will work without any problems. 

