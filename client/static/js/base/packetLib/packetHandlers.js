    var socket = io.connect('http://localhost:2000/');
    var clientID = null;
    var client = new Client();
    
    socket.emit('clientConnect', {});
    
    socket.on('getClientList', function(data) {
        for(var i = 0; i < data.clientList.length; i++) {
            var obj = getClientObject(data.clientList[i]);
            Thunder.Clients.push(obj);
            obj.player.addToWorld(); 
        }
        clientID = "GUEST" + data.count;
        socket.emit('addToList', {clientID: clientID});
    });
    
    //Others events
    socket.on('onClientConnect', function(data) {
        console.log(data.clientID + "  " + clientID);
        if(data.clientID != clientID) {
            var obj = getClientObject(data);
            Thunder.Clients.push(obj);
            obj.player.addToWorld();
            console.log('New client entering game world');
        }
    });
    
    socket.on('onClientDisconnect', function(data){
        for(var i = 0; i < Thunder.Clients.length; i++) {
            if(data.clientID === Thunder.Clients[i].clientID) {
                var targetObj = Thunder.Clients[i];
                Thunder.Clients.splice(i, 1);
                targetObj.player.removeFromWorld();
                targetObj = null;
            }
        }
    });