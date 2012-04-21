Thunder.Scene.clock = new THREE.Clock;
Thunder.Scene.width = window.innerWidth, Thunder.Scene.height = window.innerHeight;

Thunder.Scene.init = function() {
    (function() {
        Thunder.Scene.container = document.createElement('div');
        document.body.appendChild(Thunder.Scene.container);
    })();

    (function() {
        Thunder.Scene.camera = new THREE.PerspectiveCamera(35, (Thunder.Scene.width) / (Thunder.Scene.height), 1, 100000);
        Thunder.Scene.camera.target = new THREE.Vector3(0, 0, 0);
        Thunder.Scene.camera.position = new THREE.Vector3(20,21,-30);
    })();

    (function() {
        Thunder.Scene.scene = new THREE.Scene();
        Thunder.Scene.scene.add(Thunder.Scene.camera);
        Thunder.Scene.camera.lookAt(Thunder.Scene.scene.position);
    })();

    (function() {
        Thunder.Scene.controls = new THREE.FirstPersonControls ( Thunder.Scene.camera );
        var controls = Thunder.Scene.controls;
        controls.movementSpeed = 35;
        controls.lookSpeed = 0.1; 
        controls.noFly = true;
        controls.lon = -229;
        controls.lat = -29;
    })();

    (function() {
        var directionalLight = new THREE.DirectionalLight(0xffffff);
        directionalLight.position.set(12, 16, -13).normalize();
        directionalLight.lookAt(Thunder.Scene.scene.position);
        Thunder.Scene.scene.add(directionalLight);
        Thunder.Scene.scene.add(new THREE.AmbientLight(0x00020));
        var pl = new THREE.PointLight(0xffffff, 3, 20);
        pl.y = 1;
        Thunder.Scene.scene.add(pl);
    })();

    (function() {
        Thunder.Scene.renderer = new THREE.WebGLRenderer({antialias:true});
        Thunder.Scene.renderer.AA = 12;
        Thunder.Scene.renderer.setSize(Thunder.Scene.width, Thunder.Scene.height);
        Thunder.Scene.container.appendChild(Thunder.Scene.renderer.domElement);
    })();

    (function() {
        Thunder.Scene.stats = new Stats();
        Thunder.Scene.stats.domElement.style.position = 'absolute';
        Thunder.Scene.stats.domElement.style.top = '0px';
        Thunder.Scene.container.appendChild( Thunder.Scene.stats.domElement );
    })();

     this.setupTerrain = (function() {
        buildTerrain('assets/terrain/mission1_heightMap.png','assets/terrain/mission1_diffuseMap.png');
     })();

    (function() {
        loadSkybox();
    })();
    
    (function() {
        Thunder.Scene.animate();
    })();

};

Thunder.Scene.animate = function() {
    Thunder.Scene.stats.update();
    requestAnimationFrame(Thunder.Scene.animate);
    Thunder.Scene.render();
};

Thunder.Scene.render = function() {
    //this.handleGizmoMovement();
    //this.camera.lookAt(Thunder.Mouse.to3DSpace);
    try{
        socket.emit('rotate', this.camera.rotation);
    } catch(err) {
        //console.log('Connection to server failed');
    }
    this.renderer.render( this.scene, this.camera );
    this.controls.update( this.clock.getDelta() );
};
    
