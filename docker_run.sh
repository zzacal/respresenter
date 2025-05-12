#!/bin/bash
docker stop respresenter|| true &&
docker container rm respresenter|| true &&
docker image rm respresenter:local || true &&
docker build -t respresenter:local . &&
docker run \
  -v ./appsettings:/data/appsettings/ \
  --name=respresenter \
  -p 5242:3000 \
  respresenter:local
  