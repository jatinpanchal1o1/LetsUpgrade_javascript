////--------------Creating HTML Content-------------------

const div1 = document.createElement("div")
div1.style.textAlign = "center"

//-------------Creating "Shooting Game" Heading-----------
const h1 = document.createElement("h1")
h1.innerText = "Shooting Game"
div1.append(h1)
const div2 = document.createElement("div")
div1.append(div2)

document.body.append(div1)


//-----------Create "Score" Heading----------------------- 

const heading = document.createElement("h3")
heading.innerText = "Score Screen"
div1.append(heading)


//-------------Create Button For Start Game----------------

const button = document.createElement("button")
button.setAttribute("id", "btn")
button.innerText = "Start"
div1.append(button)


///-------------Create Function and variables For Game--------------------
const btn = document.getElementById("btn")
btn.addEventListener("click", Play)


var player1 = prompt("Type Player1 Name: ")||"player1"
var player2 = prompt("Type Player2 Name: ")||"player2"
var currentPlayer = player1 || "player";
var player1Score = 0;
var player2Score = 0;


//--------------Function which call in "addEventListener"---------------
function Play(){

////progress 1st player health
const div3 = document.createElement("div")
div3.style.display="flex"
div3.style.justifyContent="space-around"

const div4 = document.createElement("div")
div4.style.display="flex"
div4.style.justifyContent="space-around"

////player1 heading which user enter 
const heading1 = document.createElement("h3")
heading1.innerText = `${player1}`
div4.append(heading1)
////player2 heading which user enter  
const heading2 = document.createElement("h3")
heading2.innerText = `${player2}`
div4.append(heading2)

///progress of 2nd player health
const progress1 = document.createElement("progress")
progress1.setAttribute("id", "health1")
progress1.setAttribute("value", "100")
progress1.setAttribute("max", "100")
div3.append(progress1)

///progress of 2nd player health
const progress2 = document.createElement("progress")
progress2.setAttribute("id", "health2")
progress2.setAttribute("value", "100")
progress2.setAttribute("max", "100")
div3.append(progress2)
div2.append(div4)
div2.append(div3)

var player1Health = document.getElementById("health1")
var player2Health = document.getElementById("health2")
            
//----------Use "setInterval" For loop---------
          var x = 0
          var interval = setInterval(()=>{
            let randomNumber = Math.floor(Math.random() * 100)
            //use random value always to change player 
            //incressing there score and decrease other player health
            if(randomNumber <= 60){
              if(currentPlayer == player1){
                player1Score++
                player2Health.value -= 30
              }
              else{
                player2Score++
                player1Health.value -= 30
              }
             //print values on screen
              heading.innerText = currentPlayer + " shoot! \n" +
              player1 + ": " + player1Score + "\n" +
              player2 + ": " + player2Score + "\n" 
               
            }else{
                heading.innerText = currentPlayer + " misses! \n" +
                player1 + ": " + player1Score + "\n" +
                player2 + ": " + player2Score + "\n" 

               //swap players every time in else
                if (currentPlayer == player1) {
                    currentPlayer = player2;
                  } else {
                    currentPlayer = player1;
                  }

            }

 //---------Condition For Break interval loop------------------             
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
