const mqtt = require('mqtt')

const url = process.env.URL
const username = process.env.USERNAME
const password = process.env.PASSWORD

const client = mqtt.connect(url, { username, password })

client.on('connect', () => {
  console.log(`successfully connected to ${url}`)
  process.exit(0)
})

client.on('error', (err) => {
  console.log(`could not connect to ${url}:`, err)
  process.exit(1)
})

const TIMEOUT_SECS = 10
setTimeout(() => {
  console.log(`could not connect to ${url} after ${TIMEOUT_SECS} seconds`)
  process.exit(1)
}, TIMEOUT_SECS * 1000)
