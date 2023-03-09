const bubbleOpp = document.getElementById('bot');
const toolBubbleOpp = document.createElement('div');
const toolBubbleTXTOpp = document.createElement('span');
const botToolChoices = ["ROCK", "PAPER", "SCISSORS"];

function botTurn(){
    setTimeout(() => {
        const rndIndex = Math.floor(Math.random() * botToolChoices.length);
        toolBubbleOpp.classList.add('tool-bubble');
        toolBubbleOpp.classList.add('opp');
        toolBubbleTXTOpp.classList.add('tool-bubbleTXT');
        setTimeout(() => {
            toolBubbleOpp.classList.add('ScaleUp');
        }, 200);

        toolBubbleTXTOpp.innerText = botToolChoices[rndIndex];

        bubbleOpp.appendChild(toolBubbleOpp);
        bubbleOpp.appendChild(toolBubbleTXTOpp);
        toolBubbleOpp.appendChild(toolBubbleTXTOpp);

        chooseYourTool.innerText = "Boop";

    }, 3000);


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

        toolBubbleTXT.innerText = `${tools[i].id.toUpperCase()}`;



        bubble.appendChild(toolBubble);
        bubble.appendChild(toolBubbleTXT);
        toolBubble.appendChild(toolBubbleTXT);

        botTurn();
        chooseYourTool.innerText = "Waiting for your opponent...";

    });

}