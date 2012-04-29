    var socket = io.connect('http://localhost:2000/');
    var client = null;
    
    socket.emit('buildClient', {initial:true, client:new Client()});
    
    socket.on('getClients', function(data) {
        for(var i = 0; i < data.length; i++) {
            Thunder.Clients.push(data[i]);
            data[i].player.addToWorld(); 
        }
    });
    
    socket.on('onClientConnect', function(data) {
        if(data.client != client) {
            Thunder.Clients.push(data.client);
            data.client.addToWorld();
            console.log('new client entering game world');
        }
    });
    
    socket.on('onClientDisconnect', function(data){
        for(var i = 0; i < Thunder.Clients.length; i++) {
            if(data === Thunder.Clients[i]) {
                Thunder.Clients.splice(i, 1);
                data.player.removeFromWorld();
            }
        }
    });