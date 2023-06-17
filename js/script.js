
let player = document.querySelector(".player")
let player1input = document.querySelector(".player1input")
let player1button = document.querySelector(".player1button")
let player1error = document.querySelector(".player1error")

let player2input = document.querySelector(".player2input")
let player2button = document.querySelector(".player2button")
let player2error = document.querySelector(".player2error")
let turnmsg = document.querySelector(".turnmsg")

let countp2attempt = 0;

player1button.addEventListener("click",function(){
    let player1number = player1input.value

    if (player1number == Number(player1number) && player1number != ""){
        if(player1number > 10){
            player1error.innerHTML = "give a number less than 10"
        }else{
            player1input.style.display = "none"
            player1button.style.display = "none"
            player1error.style.display = "none"
            player.innerHTML = "Player 2"
            turnmsg.innerHTML = "Now Your Turn best of luck!"
            player2input.style.display = "inline-block"
            player2button.style.display = "inline-block"
            player2error.style.display = "block"
        }
    }else{
        player1error.innerHTML = "please give a number!"
    }
})

player2button.addEventListener("click",function(){
    turnmsg.style.display = "none"
    let plyar1number = player1input.value
    let plyar2number = player2input.value



    countp2attempt++
    console.log(countp2attempt)

    if (plyar2number == Number(plyar2number) && plyar2number != ""){
        if(plyar2number > 10){
            player2error.innerHTML = "give a number less than 10"
        }
    }else{
        player2error.innerHTML = "please give a number!"
    }

    if(countp2attempt <= 5){
        if (plyar1number == plyar2number){
            player.innerHTML = "player 2 win"
            player.style.color = "green"
            player.style.textShadow = "3px 3px 3px black"
            player.style.fontSize = "30px"
            player2input.style.display = "none"
            player2button.style.display = "none"
            player2error.style.display = "none"
        }else if(countp2attempt == 5 && plyar1number != plyar2number){
            player.innerHTML = "player 1 win"
            player.style.color = "green"
            player.style.textShadow = "3px 3px 3px black"
            player.style.fontSize = "30px"
            player2input.style.display = "none"
            player2button.style.display = "none"
            player2error.style.display = "none"
        }
    }

    
})