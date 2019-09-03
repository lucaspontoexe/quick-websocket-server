const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 9999 });

console.log('now running the server on port 9999')

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});