var numsquares = 6;
var colors =[];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("resetButton");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    
    setUpMode();
    setUpSquares();
    reset();
}

function setUpMode(){
    for ( var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected")
            this.classList.add("selected");
            // this.textContent === "Easy" ?  = 3:  = 6;
            this.textContent === "Easy" ?	numsquares = 3 : numsquares = 6;
            reset();
        });
    }
}

function setUpSquares(){
    for( var i = 0; i < squares.length; i++)
    {
     
    
        //add click listeners to squares
        squares[i].addEventListener("click",function(){
        
        var clickedcolor = this.style.backgroundColor;
    
            if (clickedcolor === pickedColor)
                {
                    // alert("correct");
                   messageDisplay.textContent = "Correct!!";
                   changeColors(pickedColor);
                   h1.style.backgroundColor = pickedColor;
                   resetButton.textContent = "play again!"
                }
            else
            {
                  this.style.backgroundColor = "#232323";
                  messageDisplay.textContent = "Try Again"
            }
        })
    }
}

function reset(){
    colors = generateRandomColors(numsquares);

    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "new colors";
    messageDisplay.textContent = "";
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block"; 
            squares[i].style.backgroundColor = colors[i];     
        }
        else{
            squares[i].style.display = "none"; 
        }
        
    }
     
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click",function() {
	reset();
});

colorDisplay.textContent = pickedColor;



function changeColors(color)
{
    for( var i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num){
    //generate an array
    var arr = []
    //repeat num times
    for(var i = 0; i < num; i++){
        //get random color and push into array
        arr.push(randomColor()); 
       
    }
    //return an array
    return arr;

}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b +")";

}