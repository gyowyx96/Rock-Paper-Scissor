let playerScore = 0; /*setting the scoreboard*/
let pcScore = 0;
const btn = document.querySelectorAll("button");

const scoreboard = document.createElement("div");
scoreboard.classList.add("score");
scoreboard.textContent= "SCOREBOARD:  ";
const br = document.createElement("h4");
br.textContent = "Pc: "+(pcScore);
scoreboard.appendChild(br);
const br1 = document.createElement("h4");
br1.textContent = "Player: "+(playerScore);
scoreboard.appendChild(br1);

const body = document.querySelector("body");
body.appendChild(scoreboard);

// ******GAME******//

btn.forEach((btn) => { //function that transform a button click 
    btn.addEventListener('click', () => {
        console.log(btn.id);
        const player = (btn.id); //into a player choice
        playRound(player);//and play a round

    });
});  

function getComputerChoice(){  
    let arr = [ "rock", "scissor", "paper"];/* create an array with the output we want to have*/
    let pcOut = arr[Math.floor(Math.random() * arr.length)]; /*randomize the output*/
    return pcOut;
 }

let result = "";
function playRound(player){
    const pc = getComputerChoice();
    
    if(pc===player){ /*if we give the same input as the pc it's a draw else it start the calculation */
        let result = "draw";
        console.log("it's a draw");
        return (result);
    }
    else{
        switch (player){ /*compare our input with the pc output and choose the winner*/
            case "rock": pc === "paper" ? (result = "loss", console.log("rock is beaten by paper you suck!"))  
                                        : (result = "win", console.log("you won against scissor! nice")); 
            return (result);
            break;
        
            case "paper": pc === "scissor" ? (result = "loss", console.log("paper loose against scissor! defeat"))  
                                           : (result = "win", console.log("paper beat rock nice,you won!")); 
            return (result);
            break;

            case "scissor": pc === "rock" ? (result = "loss", console.log("scissor loose against rock, you are retarded!"))  
                                          : (result = "win", console.log("scissor cut paper you won!")); 
            return (result);
            break;    
        }
    } 
}  

function game(){ /*the game function*/
    for(let i = 0; i<5;i++){ /*5 round game*/
        if (result === "win"){ /*if you win*/
            playerScore++; /*increase the player score*/           
        }
        else if (result === "loss"){
            pcScore++;
        }
        else  {
            pcScore++;
            playerScore++;
        }        
    }
    endGame();    
}



function endGame(){
    if (playerScore > pcScore){
        console.log(("pc:"+pcScore), ("player:"+playerScore));
        return console.log("you won!");

    }
    else if (playerScore < pcScore){
        console.log(("pc:" + pcScore), ("player:"+playerScore));
        console.log("you loss!");
    }
}









