import jump from "jump.js";

var jumping = false;
function jumpTo(id) {
    if (jumping == false) {
        jumping = true;
        jump(id, {
            callback: () => {jumping = false}
        });
    }
}

export default jumpTo;