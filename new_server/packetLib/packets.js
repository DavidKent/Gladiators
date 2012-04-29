var clients = [];
var connections = 0;

exports.handlePackets = function(socket, io) {
    
    socket.on('rotate', function (data) {
                socket.get('ID', function(err, ID){
                
                });
            });
    
    socket.on('clientConnect', function(data) {
        socket.emit('getClientList', {clientID: null, clientList: clients, count: ++connections});
    });
    
    socket.on('addToList', function(data) {
        clients.push(data.clientID);
        alertClientConnected(data.clientID);
        console.log('New connection: ' + data.clientID);
    });
    
    function alertClientConnected(id) {
        io.sockets.emit('onClientConnect', {clientID: id});
    }
}
