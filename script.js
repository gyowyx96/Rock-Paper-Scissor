let playerScore = 0; /*setting the scoreboard*/
let pcScore = 0;
let result = "";
let round =0 ;

const btn = document.querySelectorAll("button");

const scoreboard = document.createElement("div");
scoreboard.classList.add("score");
scoreboard.textContent= "SCOREBOARD";
const h2 = document.createElement("h2");
h2.textContent= "Round number: "+ round;
scoreboard.appendChild(h2);
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
        round++;
        h2.textContent= "Round number: "+ round;
        if (round>=5){
            alert("game over play another game!");
            return btn.removeEventListener("click",);            
        }

        const player = (btn.id); //into a player choice
        playRound(player);//and play a round
        
    });
}); 


function getComputerChoice(){  
    let arr = [ "rock", "scissor", "paper"];/* create an array with the output we want to have*/
    let pcOut = arr[Math.floor(Math.random() * arr.length)]; /*randomize the output*/
    return pcOut;
 }


function playRound(player){
    const pc = getComputerChoice();
    
    if(pc===player){ /*if we give the same input as the pc it's a draw else it start the calculation */
        let result = "draw";
        console.log("it's a draw");
        return (result);
    }
    else{
        switch (player){ /*compare our input with the pc output and choose the winner*/
            case "rock": pc === "paper" ? (pcScore++, br.textContent = "Pc: "+(pcScore), console.log("rock is beaten by paper you suck!")) //give results and update scoreboard 
                                        : (playerScore++, br1.textContent = "Player: "+(playerScore) , console.log("you won against scissor! nice")); 
            
            break;
        
            case "paper": pc === "scissor" ? (pcScore++, br.textContent = "Pc: "+(pcScore), console.log("paper loose against scissor! defeat"))  
                                           : (playerScore++,br1.textContent = "Player: "+(playerScore), console.log("paper beat rock nice,you won!")); 
            
            break;

            case "scissor": pc === "rock" ? (pcScore++, br.textContent = "Pc: "+(pcScore), console.log("scissor loose against rock, you are retarded!"))  
                                          : (playerScore++, br1.textContent = "Player: "+(playerScore), console.log("scissor cut paper you won!")); 
            
            break;    
        }
    } 
}  











