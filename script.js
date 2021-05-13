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
        
    }
}