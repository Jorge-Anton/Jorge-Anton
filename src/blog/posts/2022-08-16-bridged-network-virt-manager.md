---
tags:
  - post
  - linux
layout: post.njk
title: Add a bridged connection in virt-manager
excerpt: In this publication, you will find a step-by-step guide to add a bridged connection in virt-manager.
featuredImage: /assets/images/bridge-lg.png
featuredImageMini: /assets/images/bridge-mini.png
imageAlt: Bridged
---

# {{title}}:
## Introduction:
- {{excerpt}}
- When we create a virtual machine, the connection that is automatically created is of the NAT type, this establishes a virtual network between the host and the guest machine. This allows the virtual machine to have an output to the internet, but the physical devices are not able to see the virtual machine on the network. So, for example, we cannot use this type of connection if we want to host a web server in our virtual machine, since we will not be able to access it.
- A bridged connection, however, causes the virtual machine to be recognized on the network as another device, being visible to all devices on the network.

## Requirements:
- A wired connection.

## Steps:
1. Open the connection editor on the physical machine. To do this, open a terminal and execute the following command:
```bash
nm-connection-editor
```

2. Delete the ethernet connection profile. To do this, select the connection and delete it with the delete button in the bottom left corner.
![Delete Profile](/assets/images/delete-profile.png)

3. Add a wired connection with the add button in the bottom left corner.
![Add Bridged](/assets/images/add-bridge.png)

4. We change the connection name to be the same as the interface name.
![Configure Bridged](/assets/images/Configure-bridge.png)

5. In the bridging section we add a ethernet connection.

6. Select the device that will act as a bridge and save. 
![Configure Wired](/assets/images/configure-wired.png)

7. The activation of the interface may take a couple of minutes. We will know that it has been activated, when executing the following command, we see a response as shown in the image.
```bash 
ip ad
```
![Bridge Validation](/assets/images/bridge-validate.png)

8. We open the virtual machine manager.

9. Select the virtual machine to which you want to change the connection and with the right click select the open option.

10. In the show system hardware section go to the NIC option and change the network source to bridge device. In the option Device name: we will write the name of the interface that we have previously created.
![Bridge Network](/assets/images/bridge-network.png)

11. Once the previous step is done, we apply the changes and we will be finished.