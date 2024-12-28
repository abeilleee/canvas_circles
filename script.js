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
    init() {
        this.c = document.getElementById('my-canvas').getContext('2d');
        console.log('init');
    },
    createCircle() {
        this.circles.push({
            x: this.width * Math.random(),
            y: this.height * Math.random(),
            radius: 50 * Math.random(),
        })
    },
    render(){
        for(let circle of this.circles) {
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