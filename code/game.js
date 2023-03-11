// This file contains the main game functionality


const loseTXT = ["Ouch!", "Yikes.", "Oops..."];
const winTXT = ["Nice!", "Wowww!!", "Good one!"]; 
const rndIndex = Math.floor(Math.random() * 3);
const animatedWords = document.createElement('div');

function textAnimation(state) {
    readyParent.removeChild(chooseYourTool);
    readyParent.appendChild(animatedWords);

    animatedWords.style.display = "flex";
    animatedWords.style.margin = "0 auto";

    if(state) {

        for(let i = 0; i < winTXT[rndIndex].length; i++) { 
            const iLetters = document.createElement('span');

            iLetters.innerText = winTXT[rndIndex][i];

            iLetters.classList.add('mainText');

            setTimeout(() => {
                iLetters.classList.add('pop');
            }, 500);

            setTimeout(() => {
                iLetters.classList.add('right-answerTXT');
            }, 550);

            animatedWords.appendChild(iLetters);

        }
    }
    else {
        for(let i = 0; i < loseTXT[rndIndex].length; i++) { 
            const iLetters = document.createElement('span');

            iLetters.innerText = loseTXT[rndIndex][i];

            iLetters.classList.add('mainText');

            setTimeout(() => {
                iLetters.classList.add('pop');
            }, 500);

            setTimeout(() => {
                iLetters.classList.add('wrong-answerTXT');
            }, 550);

            animatedWords.appendChild(iLetters);

        }
    }
}


function Rounds(result) {
    if(result){
        textAnimation(result);
    }
    else if(result == false){
        textAnimation(result);
    }

    setTimeout(() => {
        document.querySelector('.clickedTool').classList.remove('clickedTool');
        ToolSection.classList.add('addOverflow');
    }, 3000);
    

}







const bubbleOpp = document.getElementById('bot');
const toolBubbleOpp = document.createElement('div');
const toolBubbleTXTOpp = document.createElement('span');
const botToolChoices = ["ROCK", "PAPER", "SCISSORS"];

function botTurn(){
    const botChoice = botToolChoices[rndIndex];

    toolBubbleOpp.style.marginLeft = "-15px"
    toolBubbleOpp.classList.add('tool-bubble');
    toolBubbleOpp.classList.add('opp');
    toolBubbleTXTOpp.classList.add('tool-bubbleTXT');
    setTimeout(() => {
        toolBubbleOpp.classList.add('ScaleUp');
    }, 200);

    toolBubbleTXTOpp.innerText = botChoice;

    bubbleOpp.appendChild(toolBubbleOpp);
    bubbleOpp.appendChild(toolBubbleTXTOpp);
    toolBubbleOpp.appendChild(toolBubbleTXTOpp);

    return botChoice;
}





const tools = document.querySelectorAll('.tools');
const bubble = document.querySelector('.profile-bg');
const toolBubble = document.createElement('div');
const toolBubbleTXT = document.createElement('span');



// User clicks on a tool
for(let i = 0; i < tools.length; i++) {

    tools[i].addEventListener('click', () =>{
        tools[i].classList.add('clickedTool');
        toolBubble.classList.add('tool-bubble');
        toolBubbleTXT.classList.add('tool-bubbleTXT');
        setTimeout(() => {
            toolBubble.classList.add('ScaleUp');
        }, 200);

        // No more clickies on tools
        ToolSection.classList.remove('addOverflow');

        const userChoice = tools[i].id.toUpperCase();
        toolBubbleTXT.innerText = userChoice;



        bubble.appendChild(toolBubble);
        bubble.appendChild(toolBubbleTXT);
        toolBubble.appendChild(toolBubbleTXT);

        chooseYourTool.innerText = "Waiting for your opponent...";


        setTimeout(() => {
            // Add Dictionary If statement later (if possible/necessary)
            if(userChoice == "ROCK" && botTurn() == "SCISSORS") {
                Rounds(true);
            }
            else if(userChoice == "ROCK" && botTurn() == "PAPER") {
                Rounds(false);
            }
            else if(userChoice == "PAPER" && botTurn() == "ROCK") {
                Rounds(true);
            }
            else if(userChoice == "PAPER" && botTurn() == "SCISSORS") {
                Rounds(false);
            }
            else if(userChoice == "SCISSORS" && botTurn() == "PAPER") {
                Rounds(true);
            }
            else if(userChoice == "SCISSORS" && botTurn() == "ROCK") {
                Rounds(false);
            }
            else {
                chooseYourTool.innerText = "Tie 😶";
            }
        }, 3000);
    });

}