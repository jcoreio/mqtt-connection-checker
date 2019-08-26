# mqtt-connection-checker

Tests whether an MQTT server can do an SSL handshake and accept a username and password

## Usage

```sh
git clone https://github.com/jcoreio/mqtt-connection-checker.git
cd mqtt-connection-checker
npm install
URL=mqtts://my-server.mydomain.com USERNAME=myUsername PASSWORD=myPassword node index.js
```
