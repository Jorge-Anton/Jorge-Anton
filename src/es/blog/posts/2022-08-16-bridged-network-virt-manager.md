---
tags:
  - postEs
  - linuxEs
layout: postEs.njk
title: Añade una conexión puente (bridged) en virt-manager
excerpt: En esta publicación, podrás encontrar una guía paso a paso para añadir una conexión puente (bridged connection) en virt-manager.
featuredImage: /assets/images/bridge-lg.png
featuredImageMini: /assets/images/bridge-mini.png
imageAlt: Bridged
---

# {{title}}:
## Introducción:
- {{excerpt}}
- Cuando creamos una máquina virtual, la conexión que se crea automáticamente es del tipo NAT, esto establece una red virtual entre el host y la máquina invitada. Esto permite que la máquina virtual tenga una salida a internet, pero los dispositivos físicos no son capaces de ver en la red a la máquina virtual. Con lo que por ejemplo no podemos utilizar este tipo de conexión si lo que queremos es alojar un servidor web en nuestra máquina virtual, ya que no podremos acceder a ella.
- Sin embargo, una conexión puente, hace que la máquina virtual sea reconocida en la red como un dispositivo más, siendo visible para todos los dispositivos de la red.

## Requisitos:
- Una conexión cableada.

## Pasos:
1. Abrir el editor de conexiones en la máquia física. Para ello abrimos una terminal y ejecutamos el siguiente comando:
```bash
nm-connection-editor
```

2. Eliminar el perfil de conexión cableada. Para ello seleccionamos la conexión y la eliminamos con el botón de eliminar de la esquina inferior izquierda.
![Delete Profile](/assets/images/delete-profile-es.png)

3. Añadimos una conexión cableada con el botón de añadir de la esquina inferior izquierda.
![Add Bridged](/assets/images/add-bridge-es.png)

4. Cambiamos el nombre de la conexión para que sea igual al nombre de la interfaz.
![Configure Bridged](/assets/images/Configure-bridge-es.png)

5. En la sección conexiones puente añadimos una conexión cableada.

6. Seleccionamos el dispositivo que va a hacer de puente y guardamos. 
![Configure Wired](/assets/images/configure-wired-es.png)

7. La activación de la interfaz puede tardar un par de minutos. Sabremos que se ha activado, cuando al ejecutar el siguiente comando, veamos una respuesta como muestra la imagen.
```bash 
ip ad
```
![Bridge Validation](/assets/images/bridge-validate.png)

8. Abrimos virtual-machine-manager.

9. Seleccionamos la máquina virtual a la cual queremos cambiar la conexión y con el click derecho seleccionamos la opción abrir.

10. En la sección mostrar hardware del sistema vamos a la opción de NIC y cambiamos la fuente de red por dispositivo de puente. En la opción Nombre del dispositivo: escribiremos el nombre de la interfaz que previamente hemos creado.
![Bridge Network](/assets/images/bridge-network-es.png)

11. Una vez hecho el paso anterior, aplicamos los cambios y ya habremos finaizado.