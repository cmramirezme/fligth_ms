docker pull mongo
docker run -p 27017:27017 -v \data\db:"c:\Users\Cristian\Documents\Semestres\Semestre 2023-2\Arquisoft\Prototipos\Prototipo_Flights_1\data_db" --name databaseflights mongo
docker network create --attachable flight_network 
docker network connect flight_network databaseflights 
docker build -t flight_ms_1 . 
docker run -it -p 5000:5000 --name flight_ms flight_ms_1 
docker network connect flight_network "flight_ms"
