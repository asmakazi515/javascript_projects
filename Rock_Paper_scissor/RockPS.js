let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game draw";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin, userchoice,compchoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win");
        msg.innerText=`You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you loose");
        msg.innerText=`You loose! Your ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame=(userchoice)=>{
    console.log("user choice=",userchoice);
    const compchoice = gencompchoice();
    console.log("computer choice=",compchoice);

    if(userchoice===compchoice){
        //Draw game
        drawGame();
    }
    else{
        let userWin=true;
        if(userchoice=="rock"){
            userWin=compchoice==="paper"?false: true;
        }
        else if(userchoice==="paper"){
           userWin=compchoice==="scissors"? false:true;
        }
        else{
            userWin=compchoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);
    });
});
