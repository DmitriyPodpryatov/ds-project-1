docker build -t project01_task15 . &&
docker tag project01_task15 dpodpryatov/ds:project01_task15 &&
docker push dpodpryatov/ds:project01_task15 &&
docker stack deploy -c docker-compose.yml project01_task15
