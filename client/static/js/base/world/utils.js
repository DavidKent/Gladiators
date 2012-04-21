Thunder.Utils = {
    gridify: function(val){
        return Math.round(val / Thunder.gridSize) * Thunder.gridSize;
    },
    
    stError: function(z1, z2) {
        var mean = ( z1 + z2 ) / 2;
        return Math.sqrt( Math.pow( ( z1 - mean ), 2 ) + Math.pow( ( z2 - mean ), 2 ) / 2 );
    },

    lerp: function(v1, v2, a) {
        return v1 + (v2 - v1) * a;
    },
    
    Array2D: function(rows,cols) {
        var u = new Array(rows);
        for (i = 0; i < u . length; ++ i)
            u[i] = new Array (cols);  
        return u; 
    },
    
    distance: function(p1, p2) {
        return Math.sqrt( Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2) );
    },

    /*
    getWorldPosFromScreenXY: function(pt, distance) {
        var vector = new THREE.Vector3(pt.x, Thunder.Scene.height - pt.y, 0.5 );
        var projector = new THREE.Projector();
        projector.unprojectVector( vector, Thunder.Scene.camera );
        var d = distance === null ? 30 : distance;
        vector.multiplyScalar( d ).addSelf( Thunder.Scene.camera.position ); //distance of 30 units
        return vector;
    },
    */
}