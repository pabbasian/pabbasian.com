function Bit(size, color){
        this.size = size;
        if (size < 20)
        {
            this.speed = 1.2;
        }
        else if(size < 30)
        {
            this.speed = .8;
        }
        else
        {
            this.speed = 0.5;
        }
        this.color = color;
        this.xpos = Math.random() * screen.availWidth - this.size;
        this.ypos = 100 + 500 * (canvas.width-this.xpos)/canvas.width + 100 * Math.sin(this.offset + this.xpos / 500);
        this.offset = new Number(100 * Math.random());

        this.tick = function()
        {
            if(this.xpos > maxX)
            {
                this.xpos = -this.size;
                this.offset = new Number(100 * Math.random());
            }
            else
            {
                this.xpos += this.speed;
            }
            this.ypos = 100 + 500 * (canvas.width-this.xpos)/canvas.width + 100 * Math.sin(this.offset + this.xpos / 500);
        }

        this.draw = function()
        {
            context.fillStyle = this.color;
              // context.fillRect(this.xpos, this.ypos, this.size*3, this.size);
              context.arc(this.xpos, this.ypos, this.size*3, 0, Math.PI*2);
            context.fill();



  context.beginPath();
        }
} // end of bit object

    function reDraw(){
        context.clearRect(0,0,canvas.width, canvas.height);
        for(var bit in bits){
            bits[bit].draw();
            bits[bit].tick();
        }
    }
    var colours = ['#ff6978', '#b1ede8', '#ffcdb2 ', '#ffcdb2'],
    maxX = screen.availWidth + 40;
    var canvas = document.getElementById('bg-canvas');
    canvas.width = screen.availWidth;
    canvas.height = screen.availHeight;
    var context = canvas.getContext('2d');
    context.globalAlpha = 0.5;

    var bits = new Array(10);
    var bit;
    for(var i = 0; i < 10; ++i){
        bit = new Bit(10 + 40 * Math.random(), colours[Math.floor(4 * Math.random())]);
        bits[i] = bit;
    }

    setInterval(reDraw, 50);
