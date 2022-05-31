docker-compose up -d

docker-compose exec mongo mongorestore -u root -p password
docker-compose exec mongo mongosh -u root -p password

docker-compose down -v
