docker build -t ds_project01_task15 . &&
docker tag ds_project01_task15 dpodpryatov/iu:ds_project01_task15 &&
docker push dpodpryatov/iu:ds_project01_task15 &&
docker stack deploy -c docker-compose.yml ds_project01_task15
