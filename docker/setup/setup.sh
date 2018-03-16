service nginx start
curl -sL https://deb.nodesource.com/setup_9.x -o nodesource_setup.sh
bash nodesource_setup.sh
apt-get update
apt-get install nodejs -y
apt-get install build-essential -y
cd /opt/FrontEnd/build
python -m SimpleHTTPServer 3050&
cd /opt/BackEnd
node app.js&
bash