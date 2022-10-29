

function getComputerChoice(){  
    let arr = [ "rock", "scissor", "paper"];/* create an array with the output we want to have*/
    let pcOut = arr[Math.floor(Math.random() * arr.length)]; /*randomize the output*/
    console.log("Result:", pcOut); /*check the output*/
    return pcOut;
 }

function restart(){
    playerSelection(); /*replay the choice function*/
}


 function playerSelection(){                
    let playerSelection = prompt("Insert your selection");    /*ask the user to input his choice*/
    let player = playerSelection.toLowerCase();               /*transform the string all in lowercase */ 
    console.log(player);                                            
    if((player === "rock") || (player === "paper") || (player === "scissor")){  /*check if the entered choice is good*/
        console.log (player);
        return player;
    }
    else{
        alert("enter a valid choice!"); /*if not let the user enter another choice*/
        restart(); 
    }
}

playerSelection();
