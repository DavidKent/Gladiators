    var socket = io.connect('http://localhost:2000/');
    
    socket.emit('setID', {});
    socket.emit('clientConnect', {});
    
    socket.on('updateClientHandle', function(data){ 
        Gladiator.nickname = data.nickname;
    });
    
    socket.on('getClients', function(data) {
        for(var i = 0; i < data.length; i++) {
            Thunder.Clients.push(data[i]);
            data[i].player.addToWorld(); 
        }
    });
    
    socket.on('onClientConnect', function(data) {
        Thunder.Clients.push(data);
        data.addToWorld();
    });
    
    socket.on('onClientDisconnect', function(data){
        for(var i = 0; i < Thunder.Clients.length; i++) {
            if(data === Thunder.Clients[i]) {
                Thunder.Clients.splice(i, 1);
                data.player.removeFromWorld();
            }
        }
    });