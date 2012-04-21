exports.handlePackets = function(socket) {
    socket.on('rotate', function (data) {
                socket.get('ID', function(err, ID){
                
                });
            });
            
    socket.on('setID', function(data){
        var id = data.name == null ? "GUEST" + parseInt(Math.random() * 10000) : data.name;
        socket.set('ID', id, function() {
            console.log("Set ID for user: " + id);
            socket.emit('updateClientHandle', {});
        });
    });
    
    socket.on('clientConnect', function(data) { 
        socket.emit('onClientConnect', {});
    });
}