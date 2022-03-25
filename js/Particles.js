const canvas = document.getElementById("canvas");

const context = canvas.getContext("2d"); 
canvas.width = window.innerWidth;

canvas.height = window.innerHeight;
let particleArray = []; 
const maxSize = 200;

const donutImage = new Image();
class SpinningDonut {
    constructor() {
        this.x = Math.random() * canvas.width;

        this.y = Math.random() * canvas.height;

        this.xMomentum = Math.random() * 15 - 7.5;

        this.yMomentum = Math.random() * 15 - 
        7.5;
        this.rotation = 0; 
        this.opacity = 1; 

        this.size = Math.random() * 3;
        this.image = "/donut.png";
    }
    update() {
        this.rotation += 1;
        this.size -= 0.05;
        this.opacity -= 0.01;
        this.x += this.xMomentum;
        this.y += this.yMomentum;
    }
    draw() {
        context.save();
        context.globalAlpha = this.opacity;
        context.translate(this.x, this.y);

        context.rotate(Math.PI / 180 * this.rotation);
        donutImage.src = this.image;

        context.drawImage(donutImage, (-donutImage.width / 4) 
        * this.size, (-donutImage.height / 4) * this.size, 
        (donutImage.width / 2) * this.size, (donutImage.height / 2)
         * this.size);
        context.restore();

    }
}
function spawnSpinningDonut() {
    if (particleArray.length <= maxSize) {
        particleArray.push(new SpinningDonut());
    }
}
function init() {
    particleArray = [];
}
function animate() {
    requestAnimationFrame(animate);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    particleArray.forEach(function (particle) {
        particle.update();
        
        particle.draw();
    });
    particleArray = particleArray.filter(function (particle) { 
        return particle.opacity >= 0.08 && particle.size >= .1;
    });
}
init();
animate();