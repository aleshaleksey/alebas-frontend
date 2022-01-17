console.log("Starting");

var exampleSocket = new WebSocket("wss://www.example.com/socketserver", "protocolOne");
console.log("Websocket status after running:",exampleSocket.readyState);