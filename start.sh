docker build -t project01_task07 . &&
docker tag project01_task07 dpodpryatov/ds:project01_task07 &&
docker push dpodpryatov/ds:project01_task07 &&
docker stack deploy -c docker-compose.yml project01_task07
