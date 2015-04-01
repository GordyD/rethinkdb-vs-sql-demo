sudo su
source /etc/lsb-release && echo "deb http://download.rethinkdb.com/apt $DISTRIB_CODENAME main" | sudo tee /etc/apt/sources.list.d/rethinkdb.list
wget -qO- http://download.rethinkdb.com/apt/pubkey.gpg | sudo apt-key add -
add-apt-repository ppa:rwky/nodejs
apt-get update
apt-get install -y language-pack-en build-essential 
apt-get install -y postgresql nodejs rethinkdb
DEBIAN_FRONTEND=noninteractive apt-get -y install mysql-server