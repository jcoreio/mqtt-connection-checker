# mqtt-connection-checker

Tests whether an MQTT server can do an SSL handshake and accept a username and password

## Usage on Windows with Zip File

- Download and unzip [the latest zip bundle](https://github.com/jcoreio/mqtt-connection-checker/releases/download/v1.0.0/mqtt-connection-checker-v1.0.0.zip).
- Edit index.js and replace url, username, and password with values for your server.
- Open a command prompt and navigate to the unzipped folder
- Run `node index.js`

## Usage with Git and NPM

```sh
git clone https://github.com/jcoreio/mqtt-connection-checker.git
cd mqtt-connection-checker
npm install
URL=mqtts://my-server.mydomain.com USERNAME=myUsername PASSWORD=myPassword node index.js
```
