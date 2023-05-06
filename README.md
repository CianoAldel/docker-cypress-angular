# install cypress

ng new [your-project-name]
npm install cypress -D : your project

# run cypress unit test

npx cypress open

# docker root container_id for setting jenkins cypress

docker exec -it --user root 87b872492144 /bin/bash

# install docker compose linux

https://docs.docker.com/compose/install/linux/

# command for linux install dependencies cypress and docker

sudo apt update
apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
sudo apt install docker.io
