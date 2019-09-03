const WebSocket = require('ws');
const port = process.argv[2] || 9999;
const wss = new WebSocket.Server({ port });

console.log(`now running the server on port ${port}`)

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});