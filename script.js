

function getComputerChoice(){  
    let arr = [ "rock", "scissor", "paper"];/* create an array with the output we want to have*/
    let pcOut = arr[Math.floor(Math.random() * arr.length)]; /*randomize the output*/
    return pcOut;
 }

function restart(){
    playerSelection(); /*replay the choice function*/
}


 function playerSelection(){                
    let playerSelection = prompt("Insert your selection");    /*ask the user to input his choice*/
    let player = playerSelection.toLowerCase();               /*transform the string all in lowercase */ 
    if((player === "rock") || (player === "paper") || (player === "scissor")){  /*check if the entered choice is good*/
    return player;
    }
    else{
        alert("enter a valid choice!"); /*if not let the user enter another choice*/
        restart(); 
    }
}
let result = "";
function playRound(){
    const pc = getComputerChoice();
    const player = playerSelection();
    
    console.log("pc:" + pc);
    
    if(pc===player){ /*if we give the same input as the pc it's a draw else it start the calculation */
        let result = "draw";
        return (result);
    }
    else{
        switch (player){ /*compare our input with the pc output and choose the winner*/
            case "rock": pc === "paper" ? result = "loss"  : result = "win"; 
            return (result);
            break;
        
            case "paper": pc === "scissor" ? result = "loss"  : result = "win"; 
            return (result);
            break;

            case "scissor": pc === "rock" ? result = "loss"  : result = "win"; 
            return (result);
            break;    
        }
    } 
}  
let playerScore = 0; /*setting the scoreboard*/
let pcScore = 0;

function game(){ /*the game function*/
    for(let i = 0; i<5;i++){ /*5 round game*/
        playRound();
        if (result === "win"){ /*if you win*/
            playerScore++; /*increase the player score*/
            console.log("You win!");            
        }
        else if (result === "loss"){
            pcScore++;
            console.log("you lose!");
        }
        else{
            console.log("it's a draw!");
        }
    }
    if (playerScore>pcScore){
        console.log("pc:"+pcScore, "player:"+playerScore);
        console.log("you won!");

    }
    else if (playerScore<pcScore){
        console.log("pc:"+pcScore, "player:"+playerScore);
        console.log("you loss!");
    }
    else{
        console.log("it's a draw!");
    }
    
}
game();