let h2 = document.querySelector("h2")
let gameSeq = [];
let userSeq = [];
let body = document.querySelectorAll("body")

let btns = ["yellow","pink","blue","red"]

let started = false;
let level = 0;

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started");
        started = true;
    }
    
    levelUp();
});


//to flash btn 
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250)
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250)
}

function levelUp(){
    userSeq = [];
    level++
    h2.innerText = `Level ${level}`

    //random btn choose
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq)
    gameFlash(randBtn)
}
let allBtns = document.querySelectorAll(".btn");


function checkBtn(idx){


    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp,1000)
        }
    }
    else{
        h2.innerHTML = `game over! your score was <b>${level} <b> <br> press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor= "white"
        },150)
        reset();
        
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkBtn(userSeq.length-1);
}

for( let btn of allBtns){
    btn.addEventListener("click",btnPress)
    }


function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}
