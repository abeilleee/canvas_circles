// const canvas = document.getElementById('my-canvas');
// const ctx = canvas.getContext('2d');

// ctx.arc(100, 100, 50, 0, Math.PI * 20);
// ctx.fillStyle = 'red';
// ctx.fill();

let canvas = {
    c: null,             //c = context
    width: 640,
    height: 320,
    circles: [],
    circlesNum: 10,
    init() {
        this.c = document.getElementById('my-canvas').getContext('2d');
        console.log('init');
    },
    createCircle() {
        for (let i = 0; i <= this.circlesNum; i++) {
            this.circles.push({
                x: this.width * Math.random(),
                y: this.height * Math.random(),
                radius: 50 * Math.random(),
                sx: 5 * Math.random(),          //speed x
                sy: 5 * Math.random(),          //speed y
            })
        }
    },
    update(){
        for (let circle of this.circles) {
            circle.x += circle.sx;
            circle.y += circle.sy;
        }
    },
    render() {
        for (let circle of this.circles) {
            this.c.beginPath();
            this.c.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
            this.c.fill();
        }
    },
    start() {
        this.init();
        this.createCircle();
        this.render();
    }
}

window.addEventListener('load', () => {
    canvas.start();
})