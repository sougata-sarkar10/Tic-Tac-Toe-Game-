// TIC TAC TOE GAME 

// Assign the the variables
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn =document.querySelector("#new-btn");
let msgContainer =document.querySelector(".msg-container");
let msg1 =document.querySelector("#msg1");
let msg2 =document.querySelector("#msg2");


// These are the patterns available in the winning
let turnO = true;
const winPatterens = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [0,4,8],
    [2,4,6],
];

// Checking the winner using the pattern

const showWinner =(winner)=>{
    msg1.innerText=`Congratulations, winner is ${winner}`;
    msg2.innerText = "";
    msgContainer.classList.remove("hide");
};
const showDrawMatch =()=>{
    msg2.innerText=`Match Draw`;
    msgContainer.classList.remove("hide");
    msg1.innerText = "";
};

// Disable boxes arguement
const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled =true;
    }
}
const checkWinner = ()=>{
    for(let pattern of winPatterens){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
                disableBoxes();
            }
        }
    } 
};

const checkDraw = () => {
    let isDraw = true;

    for (let box of boxes) {
        if (box.innerText === "") {
            isDraw = false;
            break;
        }
    }

    if (isDraw) {
        showDrawMatch();
        disableBoxes();
    }
};

// Main function to execute in the game to work 
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box clicked")
        if(turnO){
            // player O
            box.innerText="O";
            box.style.color="blue";
            turnO = false;
        }else{
            //player X
            box.innerText="X";
            turnO = true;
        }
        box.disabled=true;

        checkWinner();
        checkDraw();
    });
});

// Reseting the Game 

// Enable boxes arguement
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const resetGame =()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
