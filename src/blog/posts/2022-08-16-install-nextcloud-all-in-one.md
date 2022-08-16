---
tags:
  - post
  - nextcloud
layout: post.njk
title: Install Nextcloud All in One in a simple way
excerpt: In this publication, you will find a step-by-step guide to perform a Nextcloud All in One installation.
featuredImage: /assets/images/nextcloudAIO-lg.png
featuredImageMini: /assets/images/nextcloudAIO-mini.png
imageAlt: Nextcloud AIO
---

# {{title}}:
## Introduction:
- {{excerpt}}
- The original documentation can be found [here.](https://github.com/nextcloud/all-in-one)

## Requirements:

- Be minimally familiar with linux and the terminal, since the installation is done from the terminal.
- Have a computer with a linux distribution on which to install Nextcloud. If you do not have a computer with a distribution installed, you can follow [this guide](/en/blog/posts/install-debian11/) to install the Debian distribution ready to host services.


## Steps:
1. Upgrade the system:

    **Debian derivatives**
    ````bash
    sudo apt update && sudo apt upgrade
    ```
	**Fedora derivatives
	````bash
	sudo dnf upgrade
	```

2. Install docker:

- The following command will download and install docker.

	```bash
	curl -fsSL get.docker.com | sudo sh
	```

3. Install Nextcloud:

- The following commands will download and install Nextcloud AIO depending on the machine architecture.

	For x64 processors:
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
	<summary>For ARM processors such as the Raspberry Pi:</summary>

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

4. Once the docker images have been downloaded and the containers have been started, we will be able to access the interface through port 8080. Example: https://ip-address:8080

5. To complete the installation we need a domain pointing to our server. If you already have a domain configured you can skip this step.

	To get a domain pointing to our server we can use [duckdns.](https://www.duckdns.org/)
	1. The first thing we have to do is to create an account.
	2. The next step is to add a domain.
	3. Now we have to go to the NAT/PAT section of our router to open port 443 and redirect it to port 443 of the ip of the machine where Nextcloud is running. The steps in each router may vary but it should look something like this.
	![Port forwarding](/assets/images/port-forwarding.png)
	4. Once the previous steps are done we will have our domain configured.

6. Once we have logged into the interface with step 4, we will have to provide our domain:

- The prefix https:// should not be used.
![Domain](/assets/images/domain.png)

7. In the Optional Addons section, my recommendation is to disable Collabora and Nextcloud Talk and only enable OnlyOffice if you want an integrated office suite.
![Optional Addons](/assets/images/Optional-Addons.png)

8. In the section Timezone Change, we will have to select our time zone, we can see which is our time zone in the [following link](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)
![Timezone Change](/assets/images/Timezone.png)

9. Once our preferences have been configured, we will finish the installation by pressing the **Start containers** button.