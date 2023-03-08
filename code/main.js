const readyParent = document.querySelector('.readyParent');
const btn = document.querySelector('.readyBTN');
const chooseYourTool = document.createElement('span');

const ToolSection = document.createElement('section');
const rockIMG = document.createElement('img');
const paperIMG = document.createElement('img');
const scissorsIMG = document.createElement('img');

const opp = document.querySelector('.Opponents');


btn.addEventListener('click', () => {
    btn.classList.add('shrink');

    // Header
    opp.classList.add('ScaleUp');


    // - Tools -
    ToolSection.classList.add('toolsParent');
    document.querySelector('main').appendChild(ToolSection);
    ToolSection.appendChild(rockIMG);
    ToolSection.appendChild(paperIMG);
    ToolSection.appendChild(scissorsIMG);

    rockIMG.src = 'assets/icons/rock.png';
    paperIMG.src = 'assets/icons/paper.png';
    scissorsIMG.src = 'assets/icons/scissors.png';

    rockIMG.id = 'rock';
    paperIMG.id = 'paper';
    scissorsIMG.id = 'scissors';

    rockIMG.classList.add('tools');
    paperIMG.classList.add('tools');
    scissorsIMG.classList.add('tools');
    

    setTimeout(() => {
        ToolSection.classList.add('scaleSection');

        setTimeout(() => {
            rockIMG.classList.add('normalAxis');
        }, 500);

        setTimeout(() => {
            paperIMG.classList.add('normalAxis');
        }, 900);

        setTimeout(() => {
            scissorsIMG.classList.add('normalAxis');
        }, 1200);

        setTimeout(() => {
            ToolSection.classList.add('addOverflow');
        }, 2300);

    }, 800);
    

    


    // Needs to wait so it can show the animation
    setTimeout(() => {
        chooseYourTool.classList.add('mainText');
        chooseYourTool.textContent = "Choose Your Tool!";

        setTimeout(() => {
            chooseYourTool.classList.add('pop');
        }, 400);

        readyParent.removeChild(btn);
        readyParent.appendChild(chooseYourTool);
    }, 800);


});
