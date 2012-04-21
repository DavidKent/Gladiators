$(document).ready(document_onReady);
Thunder.projector = new THREE.Projector();

function document_onReady() {
    $(document).mousedown(onMouseDown);
    $(document).mouseup(onMouseUp);
    $(document).mousemove(onMouseMove);
    $(document).bind("contextmenu", function(e){ return false; });
    Thunder.Player.toggleFirstPerson();
};

function onMouseDown(e) {
    /*
   if( e.which == 3 ) {
        Thunder.Scene.controls.activeLook = true;
        $(Thunder.Scene.container).css("cursor", "none");
    }
    else
    {   
        var my = - ( e.clientY / Thunder.Scene.height) * 2 + 1, mx = ( e.clientX / Thunder.Scene.width) * 2 - 1;
        var vector = new THREE.Vector3( mx, my, 1 );
        THREE.CameraHelper.__projector.unprojectVector( vector, Thunder.Scene.camera );
        var ray = new THREE.Ray( Thunder.Scene.camera.position, vector.subSelf( Thunder.Scene.camera.position ).normalize() );
        ray.setPrecision(0.0000001);
        
        var _objects = [];
        for ( obj in Thunder.Scene.scene.objects )
            if( Thunder.doNotSelect.indexOf(Thunder.Scene.scene.objects[obj] ) == -1)
                _objects.push(Thunder.Scene.scene.objects[obj]);
        var intersects = ray.intersectObjects( _objects );
        if ( intersects == undefined || intersects.length == 0) {
            Thunder.selected = null;
            Thunder.selector.position = Thunder.Scene.scene.position.clone()
            Thunder.selector.visible = false;
            Thunder.translateGizmo.hide();
            return;
        }
        var target = intersects[0].object;
        var targetGizmo = false;
        for ( obj in intersects ) {
            if( intersects[obj].object.gizmoHandle != undefined && intersects[obj].object.gizmoHandle.parent.visible ) {
                target = intersects[obj].object;
                targetGizmo = true;
                break;
            }
        }
        if ( target.gizmoHandle != undefined && !target.gizmoHandle.parent.visible && intersects.length > 1)
            for( obj in intersects ) {
                if( intersects[obj].object.gizmoHandle === undefined ) {
                        target = intersects[obj];
                        break;
                }
                    
        }
        if ( Thunder.selected != Thunder.selector && !targetGizmo ) {
            if( target.position === undefined )
                return;
            Thunder.selector.position = target.position.clone();
            var size = new THREE.Vector3;
            size = target.scale.clone();
            Thunder.selector.scale = size;
            Thunder.selector.scaleBounds = target.scaleBounds;
            Thunder.selector.scale.addScalar( 0.5 );
            Thunder.selected = target;
            Thunder.selector.visible = true;
            Thunder.translateGizmo.position(Thunder.selector.position);
            Thunder.translateGizmo.show();
        }
        else if ( targetGizmo ) {
            Thunder.isMovingAlongGizmo = true;
            Thunder.selectedGizmoHandle = target.gizmoHandle;
            switch(Thunder.selectedGizmoHandle.type) {
                case "x":
                    $(Thunder.Scene.container).css("cursor", "move");
                break;
                case "y":
                    $(Thunder.Scene.container).css("cursor", "n-resize");
                break;
                case "z":
                    $(Thunder.Scene.container).css("cursor", "move");
                break;
            }
            Thunder.mouseLast = {x:mx, y:my};
        }
    }*/
}

function onMouseMove(e) {
    // var projector = Thunder.projector;
    // var camera = Thunder.Scene.camera;
    // var u = Thunder.Mouse.currentPosition;
    // u = {x: e.pageX, y: e.pageY};
    // u.x = (u.x / window.innerWidth) * 2 - 1;
    // u.y = (u.y / window.innerHeight) * 2 + 1;
    
    // var
    // startVector = new THREE.Vector3(),
    // endVector = new THREE.Vector3(),
    // dirVector = new THREE.Vector3(),
    // goalVector = new THREE.Vector3(),
    // t;

    // startVector.set( u.x, u.y, -1.0 );
    // endVector.set( u.x, u.y, 1.0 );

    // // Convert back to 3D world coordinates
    // startVector = projector.unprojectVector( startVector, camera );
    // endVector = projector.unprojectVector( endVector, camera );
    
    // // Get direction from startVector to endVector
    // dirVector.sub( endVector, startVector );
    // dirVector.normalize();
    
    // // Find intersection where y = 0
    // t = startVector.y / - ( dirVector.y );

    // // Find goal point
    // goalVector.set( startVector.x + t * dirVector.x,
    // startVector.y + t * dirVector.y,
    // startVector.z + t * dirVector.z );
    // Thunder.Mouse.to3DSpace = goalVector;
}


function onMouseUp(e) {
    /*
    Thunder.isMovingAlongGizmo = false;
    $(Thunder.Scene.container).css("cursor", "default");
     if(e.which == 3)
    {
       Thunder.Scene.controls.activeLook = false;
    }*/
}
