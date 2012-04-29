function Client(clientID) {
    this.clientID = clientID;
    this.player = new Player(this);
}

function Player(client) {
    this.health = 100;
    this.color = 0xffffff;
    this.client = client;
    this.model;
}

Client.prototype.toJSON = function() {
    var client = {};
    client.clientID = this.clientID;
    return client;
}

Player.prototype.onDeath = function() {
    console.log(this.client.clientID  + " has died.");
}

Player.prototype.addToWorld = function() {
    this.color = Math.random()*0x990033;
    this.model = new THREE.Mesh( new THREE.SphereGeometry( 1, 3, 4 ), 
    new THREE.MeshLambertMaterial( { color:this.color} ) );
    Thunder.Scene.scene.add( this.model );
}

Player.prototype.setPosition = function(pos) {
    this.model.position = pos;
}

Player.prototype.setRotation = function(rot) {
    this.model.rotation = rot;
}

Player.prototype.removeFromWorld = function() {
    Thunder.Scene.scene.remove( this.model ) ;
}

getClientObject = function(data) {
    return new Client(data.clientID);
}