var DIRECTION = {
    IDLE: 0,
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT: 4
};

var rounds = [3,3,2,2,1];
var colors = ['#1abc9c' , '#2ecc71', '#3498db', '#e74c3c', '#9b59b6'];

//Defining the ball object
var Ball = {
    new: function (incrementedSpeed) {
        return {
            width: 18,
            height: 18,
            x: (this.canvas.width / 2) -9,
            y: (this.canvas.height / 2) -9,
            moveX: DIRECTION.IDLE,
            moveY: DIRECTION.IDLE,
            speed: incrementedSpeed || 9
        };
    }
};

//The paddle object
var Paddle ={
    new: function (side){
        return {
            width: 18,
            height: 70,
            x: side === 'left' ? 150 : this.canvas.width -150,
            y: (this.canvas.height / 2) -35,
            score: 0,
            move: DIRECTION.IDLE,
            speed: 10
                };

    }
};
var Game = {
    initialize: function () {
        this.canvas = document.querySelector('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = 1400;
        this.canvas.height = 1000;
        this.canvas.style.width = (this.canvas.width / 2) +'px';
        this.canvas.style.height = (this.canvas.height / 2) + 'px';
        this.player = Paddle.new.call(this, 'left');
        this.paddle = Paddle.new.call(this,'right');
        this.ball = Ball.new.call(this);
        this.paddle.speed = 8;
        this.running = this.over = false;
        this.turn = this.paddle;
        this.timer = this.round = 0;
        this.color = '#2c3e50';

        Pong.menu();
        Pong.listen();
    },

    endGameMenu: function (text) {
        //Change the canvas font size and color
        Pong.context.font = '50px Courier New';
        Pong.context.fillStyle = this.color;

        //Draw the rectangle behind the 'Press any key to begin' text.
        Pong.context.fillRect(
            Pong.canvas.width /2 -350,
            Pong.canvas.height /2 -48,
            700,
            100
        );

        //Change the canvas color
        Pong.context.fillStyle = '#ffffff';

        // Draw the end game menu
        Pong.context.filler(text,
            Pong.canvas.width / 2,
            Pong.canvas.height / 2 + 15);

            setTimeout( function () {
                Pong = Object.assign({},Game);
                Pong.initialize();
            }, 3000);
    },

    menu: function () {
        //Draw all the Pong objects in their current state
        Pong.draw();

        //change the canvas font size and color
        this.context.font = '50px Courier New' ;
        this.context.fillStyle = this.color;

        //Draw the rectangle behind the 'Press any key to begin' text.
        this.context.fillRect(
            this.context.width / 2 -350,
            this.context.height / 2 -48,
            700,
            100
        );

        //change the canvas color
        this.context.fillStyle = '#ffffff';

        
    }
}