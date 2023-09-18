let ratio = Math.SQRT1_2;

let h = 500;
let w = h / ratio;
let Sx = 10;
let Sy = Sx * ratio;


let canvas = document.getElementById("canvas");
canvas.width = w;
canvas.height = h;
let ctx = canvas.getContext('2d');

let widthInput = document.getElementById("width");
let heightInput = document.getElementById("height");
let SxInput = document.getElementById("sections-x");
let SyInput = document.getElementById("sections-y");
let r1_1Input = document.getElementById("r1:1");
let r1_sqrt2Input = document.getElementById("r1:sqrt2");
let rnoneInput = document.getElementById("rnone");
let labelInput = document.getElementById("label");

setInputs();



widthInput.onchange = () => {
    w = parseFloat(widthInput.value);
    if (ratio != "none") {
        h = w * ratio;
    }
    setInputs();
}
heightInput.onchange = () => {
    h = parseFloat(heightInput.value);
    if (ratio != "none") {
        w = h / ratio;
    }
    setInputs();
}
SxInput.onchange = () => {
    Sx = parseFloat(SxInput.value);
    if (ratio != "none") {
        Sy = Sx * ratio;
    }
    setInputs();

}
SyInput.onchange = () => {
    Sy = parseFloat(SyInput.value);
    if (ratio != "none") {
        Sx = Sy / ratio;
    }
    setInputs();

}


function draw() {

    if (r1_1Input.checked) {
        ratio = 1;
    } else if (r1_sqrt2Input.checked) {
        ratio = Math.SQRT1_2;
    } else if (rnoneInput.checked) {
        ratio = 'none';
    }




    canvas.width = w;
    canvas.height = h;
    ctx.lineWidth = 2;
    ctx.font = "12px Times New Roman";

    ctx.beginPath();
    ctx.moveTo(0, h / 2);
    ctx.lineTo(w, h / 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(w / 2, 0);
    ctx.lineTo(w / 2, h);
    ctx.stroke();

    for (let i = 0; i <= Sx; i++) {
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(i / Sx * w / 2 + w / 2, h / 2 - 4);
        ctx.lineTo(i / Sx * w / 2 + w / 2, h / 2 + 4);
        ctx.stroke();

        ctx.lineWidth = 0.5;

        ctx.beginPath();
        ctx.moveTo(i / Sx * w / 2 + w / 2, 0);
        ctx.lineTo(i / Sx * w / 2 + w / 2, h);
        ctx.stroke();

        if (labelInput.checked) ctx.fillText(i, i / Sx * w / 2 + w / 2 + 5, h / 2 + 15);
    }
    for (let i = Sx; i >= 0; i--) {
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(i / Sx * w / 2, h / 2 - 4);
        ctx.lineTo(i / Sx * w / 2, h / 2 + 4);
        ctx.stroke();

        ctx.lineWidth = 0.5;

        ctx.beginPath();
        ctx.moveTo(i / Sx * w / 2, 0);
        ctx.lineTo(i / Sx * w / 2, h);
        ctx.stroke();

        if (labelInput.checked && Sx - i != 0) ctx.fillText(-(Sx - i), i / Sx * w / 2 + 5, h / 2 + 15);

    }

    for (let i = 0; i <= Sy; i++) {
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(w / 2 - 4, i / (Sy) * h / 2 + h / 2);
        ctx.lineTo(w / 2 + 4, i / (Sy) * h / 2 + h / 2);
        ctx.stroke();
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(0, i / (Sy) * h / 2 + h / 2);
        ctx.lineTo(w, i / (Sy) * h / 2 + h / 2);
        ctx.stroke();

        if (labelInput.checked && i != 0) ctx.fillText(-i, w / 2 + 5, i / (Sy) * h / 2 + h / 2 + 15);
    }
    for (let i = Sy; i >= 0; i--) {
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(w / 2 - 4, i / (Sy) * h / 2);
        ctx.lineTo(w / 2 + 4, i / (Sy) * h / 2);
        ctx.stroke();
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(0, i / (Sy) * h / 2);
        ctx.lineTo(w, i / (Sy) * h / 2);
        ctx.stroke();

        if (labelInput.checked && Sy - i != 0) ctx.fillText(Sy - i, w / 2 + 5, i / (Sy) * h / 2 + 15)
    }


    window.requestAnimationFrame(draw);


}

draw(0)

function download() {
    var link = document.createElement('a');
    link.download = `Cartesian Plane (${parseInt(w)}x${parseInt(h)})`;
    link.href = canvas.toDataURL()
    link.click();
}

function setInputs() {
    widthInput.value = w;

    heightInput.value = h;
    SxInput.value = Sx;
    SyInput.value = Sy;

}