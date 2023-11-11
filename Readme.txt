docker pull mongo
docker run -d -p 27017:27017 -v D:\user\Documents\Arquisoft\fligth_ms\data_db:/data/db --name databaseflights mongo
docker network create --attachable flight_network 
docker network connect flight_network databaseflights 

docker build -t flight_ms_1 . 
docker run -it -p 4999:5000 --network="flight_network" --name flight_ms flight_ms_1 

docker build -t swarch2023i_ag .
docker run -p 5000:5000 --name ap swarch2023i_ag
