    var socket = io.connect('http://localhost:2000/');
    var Gladiator = {};
    socket.emit('setID', {});
    socket.on('clientSetNickName', function(data){ 
        Gladiator.nickname = data.nickname;
    });
    
    socket.on('newConnection', function(data) {
        var player = new THREE.Mesh(new THREE.SphereGeometry( 1, 3, 4 ), new THREE.MeshLambertMaterial({ color:(Math.random()*0x990033)}));
        player.position = data.position;
        player.rotation = data.rotation;
        Thunder.Scene.scene.add( player );
        var client = new Client(player, data.nickname);
        Thunder.Clients.push(client);
    });