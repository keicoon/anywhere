
// initialize to 'index.html'
// 1. make elements

function init_page() {
    const body_ele = document.body;

    const canvas_ele = document.createElement("canvas");

    // set canvas attributes
    // TODO: get size_info from util.js with web window size
    canvas_ele.id = "canvas";
    canvas_ele.width = 500;
    canvas_ele.height = 500;

    body_ele.appendChild(canvas_ele);

}

// TODO: replace 'class timer'
function loop() {

    const canvas_ele = document.getElementById("canvas");
    const ctx_2d = canvas_ele.getContext("2d");
    function render() {

        // TODO:
        // canvas render
        ctx_2d.fillStyle = "black";
        ctx_2d.font = "48px serif";
        ctx_2d.fillText("Hello world!", 50, 50);
    }

    const interval_id = setInterval(() => {
        render();
    }, 33 // 30 fps
    );

    // TODO: remove by id
    // clearInterval(interval_id);
}

// adjust initial jobs
init_page();

loop();