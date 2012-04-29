exports.handlePackets = function(socket) {
    var connectionCount = 0;
    var clients = [];
    
    socket.on('rotate', function (data) {
                socket.get('ID', function(err, ID){
                
                });
            });
            
    socket.on('buildClient', function(data){
        var id = data.name == null ? "GUEST" + connectionCount : data.name;
        data.client.name = id;
        var client = data.client;
        socket.set('client', data.client, function() {
            console.log("Set ID for user: " + id);
            if(data.initial === false) {
                socket.emit('updateClientHandle', {});
                return;
            }
            clients.push(data.client);
            connectionCount++;
        });
    });
}