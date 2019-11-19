var canvas = document.getElementById("Game");
var ctx = canvas.getContext("2d");

var ballX = canvas.width/2;
var ballY = canvas.height/2;
var ballColor = 'rgb(0, 155, 155)';
var ballRadius = 50;

var speedX = 4;
var speedY = 3;

var directionDown = true;
var directionRight = true;

function animate(){
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.fillStyle = ballColor;
    ctx.strokeStyle = 'black';
    ctx.arc(ballX, ballY, ballRadius, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();


    if(ballX + ballRadius >= canvas.width || ballX - ballRadius <= 0 ) {
        directionRight = !directionRight;
    }

    if(directionRight){
        ballX = ballX + speedX;
    }
    else {
        ballX = ballX - speedX;
    }


    if(ballY + ballRadius >= canvas.height || ballY - ballRadius <= 0) {
        directionDown = !directionDown;
    }
    if(directionDown){
        ballY = ballY + speedY;
    }
    else {
        ballY = ballY - speedY;
    }

    window.requestAnimationFrame(animate);
}

animate();

var bgColor = '#FF0000';

canvas.addEventListener("click", function(event){

    var distX = Math.abs(ballX - event.clientX);
    var distY = Math.abs(ballY - event.clientY);

    if(distX < ballRadius && distY < ballRadius){
        console.log('FIRE!!!!!!');
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
});

var btn1 = document.getElementById("changeColor");
btn1.addEventListener("click", function(e){
    if (ballColor = 'rgb(0, 155, 155)'){
        ballColor = 'rgb(255, 76, 26)';
        ballRadius = 70;
        speedX = 6;
        speedY = 4;
    } else {
        ballColor = 'rgb(0, 155, 155)';
        ballRadius = 50;
        speedX = 5;
        speedY = 3;
    }
});

function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }


