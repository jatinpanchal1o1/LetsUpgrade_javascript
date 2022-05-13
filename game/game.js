const div1 = document.createElement("div")
div1.style.textAlign = "center"
const h1 = document.createElement("h1")
h1.innerText = "Shooting Game"
div1.append(h1)
const div2 = document.createElement("div")
div1.append(div2)
document.body.append(div1)


var player1 = prompt("Type Player1 Name: ")||"player1"
var player2 = prompt("Type Player2 Name: ")||"player2"
var currentPlayer = player1 || "player";
var player1Score = 0;
var player1Health = 100
var player2Health = 100
var player2Score = 0;

const heading = document.createElement("h3")
heading.innerText = "Score Screen"
div1.append(heading)

///


const button = document.createElement("button")
button.setAttribute("id", "btn")
button.innerText = "Start"
div1.append(button)



const btn = document.getElementById("btn")


btn.addEventListener("click", Play)

function Play(){
               
          var x = 0
          var interval = setInterval(()=>{
            let randomNumber = Math.floor(Math.random() * 100)
            
            if(randomNumber <= 60){
              if(currentPlayer == player1){
                player1Score++
                player2Health--
              }
              else{
                player2Score++
                player1Health--
              }

              heading.innerText = currentPlayer + " shoot! \n" +
              player1 + ": " + player1Score + "\n" +
              player2 + ": " + player2Score + "\n" 
               
            }else{
                heading.innerText = currentPlayer + " misses! \n" +
                player1 + ": " + player1Score + "\n" +
                player2 + ": " + player2Score + "\n" 


                if (currentPlayer == player1) {
                    currentPlayer = player2;
                  } else {
                    currentPlayer = player1;
                  }

            }

              
            if(player1Score < 5 && player2Score < 5 && ++x===5){

              window.clearInterval(interval);

              heading.innerText = "Game over! \n" +
              player1 + ": " + player1Score + "\n" +
              player2 + ": " + player2Score
              
              if(player1Score>player2Score){
                alert(player1+ " Win")
                if(player1Score == player2Score){
                  alert("Match Draw")
                }
              }else{
                alert(player2+ " Win")
              }
               
              setTimeout(()=>(window.location.reload()), 2000)
             
            
            }
            
  
          }, 3000)
}



















