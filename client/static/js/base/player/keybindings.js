$(document).ready(setup_hook);
function setup_hook() {
    $(document).keypress(document_onKeyPress);
}

function document_onKeyPress(e) {
    switch(e.keyCode) {
        case 49:
            Thunder.Scene.controls.activeLook = !Thunder.Scene.controls.activeLook;
        break;
        case 32:
            //testJump();
        break;
    }
}