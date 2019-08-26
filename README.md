# mqtt-connection-checker

Tests whether an MQTT server can do an SSL handshake and accept a username and password

## Usage with Zip File

Download and unzip [the latest zip bundle](https://github.com/jcoreio/mqtt-connection-checker/releases/download/v1.0.0/mqtt-connection-checker-v1.0.0.zip),
then run the following from a command prompt:

```sh
cd <unzip folder>
URL=mqtts://my-server.mydomain.com USERNAME=myUsername PASSWORD=myPassword node index.js
```

## Usage with Git and NPM

```sh
git clone https://github.com/jcoreio/mqtt-connection-checker.git
cd mqtt-connection-checker
npm install
URL=mqtts://my-server.mydomain.com USERNAME=myUsername PASSWORD=myPassword node index.js
```
