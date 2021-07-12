let cards=[
    {
        image:"https://img3.goodfon.com/original/360x480/f/67/naruto-shippuden-uzumaki-31.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://img3.goodfon.com/original/360x480/f/67/naruto-shippuden-uzumaki-31.jpg",
        value:1,
        status:"closed"
    },
    {    
        image:"https://wallpaperaccess.com/full/2355049.jpg",
        value:2,
        status:"closed"
    },
    {    
        image:"https://wallpaperaccess.com/full/2355049.jpg",
        value:2,
        status:"closed"
    },
    {   image:"https://i.pinimg.com/originals/97/86/3f/97863fa60e767e55d8d62e392a020d67.jpg",
        value:3,
        status:"closed"
    },
    {   image:"https://i.pinimg.com/originals/97/86/3f/97863fa60e767e55d8d62e392a020d67.jpg",
    value:3,
    status:"closed"
},
    {
        image:"https://i.pinimg.com/originals/16/51/3d/16513d348af61780466da2b14fefb0d7.png",
        value:4,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/16/51/3d/16513d348af61780466da2b14fefb0d7.png",
        value:4,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/67/ca/2e/67ca2e03583e4ba7e10a22801833098f.jpg",
        value:5,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/67/ca/2e/67ca2e03583e4ba7e10a22801833098f.jpg",
        value:5,
        status:"closed"
    },
]

for(let i=cards.length-1;i>=0;i--){

    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}


let cardsCopy=cards;




function displayCards(data){

    let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`
            <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCards(${index})">
                </div>
            </div>     
        `;
    });

    document.getElementById('cards').innerHTML=cardsString;

}



displayCards(cards);


let cardCount=1;
let val1=null,val2=null;
let score=0;

function openCards(index){

    console.log(cards);

    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount==2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;

            // reset after one guess
            val1=null;
            val2=null;
            cardCount=1;
        }
        else{
            alert("GAME OVER");
            location.reload();
        }

    }

    displayCards(cards);

}