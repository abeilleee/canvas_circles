// const canvas = document.getElementById('my-canvas');
// const ctx = canvas.getContext('2d');

// ctx.arc(100, 100, 50, 0, Math.PI * 20);
// ctx.fillStyle = 'red';
// ctx.fill();

let canvas = {
    c: null,             //c = context
    width: window.innerWidth,
    height: window.innerHeight,
    circles: [],
    circlesNum: 100,
    colorArr: [
        '#ec8de9',
        '#81b1ff',
        '#4925c1',
        '#8c5ad0',
        '#f4d2f8',
    ],

    init() {
        this.c = document.getElementById('my-canvas').getContext('2d');
        const can = document.getElementById('my-canvas');
        can.width = window.innerWidth;
        can.height = window.innerHeight;
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
                color: this.colorArr[Math.floor(Math.random() * this.colorArr.length + 1)]
            })
        }
    },
    update() {
        for (let circle of this.circles) {
            circle.x += circle.sx;
            circle.y += circle.sy;

            if (circle.x > this.width || circle.x < 0) { //логика "отскока" от краев по горизонтали
                circle.sx *= - 1;
            }
            else if (circle.y > this.height || circle.y < 0) { //логика "отскока" от краев по вертикали
                circle.sy *= - 1;
            }
        }
    },
    render() {
        this.c.clearRect(0, 0, this.width, this.height);
        for (let circle of this.circles) {
            this.c.beginPath();
            this.c.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
            this.c.fillStyle = circle.color;
            this.c.fill();
        }
    },
    run() {
        window.requestAnimationFrame(() => {
            this.update();
            this.render();
            this.run();
        })
    },
    start() {
        this.init();
        this.createCircle();
        // this.render();
        this.run();
    }
}

window.addEventListener('load', () => {
    canvas.start();
})