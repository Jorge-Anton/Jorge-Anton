---
title: Instala el driver para Asus USB-AC56 en Linux
tags: ["postEs", "linuxEs"]
excerpt: En esta publicación, encontrarás una guía paso a paso para hacer funcionar el adaptador Wi-Fi Asus USB AC-56 en Linux.
featuredImage: /assets/images/asus-usb-lg.png
featuredImageMini: /assets/images/asus-usb-mini.png
imageAlt: USB AC-56
layout: postEs.njk
---

# {{title}}
## Introducción
- {{excerpt}}
- Este tutorial también funciona para todos los adaptadores que tienen el chipset Realtek RTL8812AU.

## Tutorial
- Conseguir que el adaptador funcione en Linux puede parecer una tarea difícil, pero por suerte los desarrolladores de [aircrack-ng](https://github.com/aircrack-ng) tienen un repositorio para hacerlo funcionar incluso en modo monitor e inyección de paquetes.
 

### Pasos:
1. En primer lugar tenemos que abrir un terminal y actualizar nuestro sistema.

- **Derivados de Debian:**
```bash
sudo apt update && sudo apt upgrade
```
- **Derivados de Fedora:**
```bash
sudo dnf update && sudo dnf upgrade
```

2. Instala DKMS y un paquete adicional para fedora. DKMS recompilará e instalará automáticamente un módulo del kernel cuando se instale o actualice un nuevo kernel.
- **Derivados de Debian:**
```bash
sudo apt install dkms
```
- **Derivados de Fedora:**
```bash
sudo dnf install dkms
sudo dnf install kernel-devel
```

3. Luego tenemos que clonar [este repositorio](https://github.com/aircrack-ng/rtl8812au) de github.
``` bash
git clone https://github.com/aircrack-ng/rtl8812au
```

4. Entra en el directorio del código fuente e instala el controlador.
```bash
sudo make dkms_install
```

5. Por último, reinicie la máquina para que el controlador esté completamente instalado. Una vez reiniciado, el adaptador Wi-Fi funcionará sin problemas. 

