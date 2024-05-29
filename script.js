const squares = document.querySelectorAll(".game-square");
const heading = document.querySelector("#game-heading");
const restartButton = document.querySelector("#restart-button");
const scorecard = document.querySelector("#scorecard") 
const player1 = document.querySelector(".h2")
const player2 = document.querySelector(".players2")

const solutions = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
]

let turn = 1;
let gameCount = 0;

squares.forEach(square => {
    square.addEventListener('click', play);
})

restartButton.addEventListener('click', restart);

function play(event){

    if(turn % 2 == 1){
        event.target.innerText = "X";
        event.target.disabled = true;
    }
    else{
        event.target.innerText = "O";
        event.target.disabled = true;
    }

    turn++;

    let status = getGameStatus();

    console.log(status);

    if((status == 1 || status == 2 )&& gameCount < 5){
        gameCount++;
        heading.innerText = `Player ${status} wins!`
        restartButton.style.display = "block";
        squares.forEach(square => {
            square.disabled = true;
           })
           
          if(status ==1){
            //const li = document.createElement("li")
            const node1 = document.createElement("node")
	    
            node1.innerHTML = "&#9989";
            player1.append(node1)
		if(gameCount == 3 ){
		node1.innerText = "  player 1 won"
		square.disabled = true;
                restartButton.disabled = true;	
              }
             
            
            const node2 = document.createElement("node");
            node2.innerHTML = "&#x274c"
            player2.append(node2);
           
           
            
                
          } 
          else if(status ==2){
            //const li = document.createElement("li")
            const node1 = document.createElement("node")
            node1.innerHTML = "&#x274c"
            player1.append(node1)
            
            const node2 = document.createElement("node");
            node2.innerHTML = "&#9989";
            player2.append(node2);
            
          }
          
           
            
           
    }
    else if (status == 0){
        heading.innerText = "Game tied!"
        restartButton.style.display = "block";
        squares.forEach(square => {
            square.disabled = true;
        })
    }
        
}

function restart(){
    turn = 1;
    squares.forEach(square => {
        square.disabled = false;
        square.innerText = "";
    })
    heading.innerText = "Player 1\'s Turn"
    restartButton.style.display = "none";
}

function getGameStatus(){
    let winner = -1; // -1 represents game is not yet over, 0 is draw, 1 and 2 means that players 1 and 2 won respectively
    solutions.forEach(solution => {
        
        if(squares[solution[0]].innerText != "" && squares[solution[0]].innerText == squares[solution[1]].innerText && squares[solution[1]].innerText == squares[solution[2]].innerText){
            
            if(squares[solution[0]].innerText == "X"){
                winner = 1;
                
            }
            else if(squares[solution[0]].innerText == "O"){
                winner = 2;
            }
            
        }
    })

    if(turn == 10 && winner == -1){
        winner = 0;
    }

    return winner;

  

}
