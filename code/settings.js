const settings = document.querySelector('.settings');
const settingsDivPopup = document.createElement('div');
let settingsDivPopup_Bool = false;


settings.addEventListener('click', () => {

    /*If the popup is open, if it's clicked again, then close it &
     Remove it from the DOM */
    if(settingsDivPopup_Bool != false){
        document.body.removeChild(settingsDivPopup)
        settingsDivPopup_Bool = false;
        return
    }

    settingsDivPopup_Bool = true;



    settingsDivPopup.classList.add('settingPopupDiv');
    
    settingsDivPopup.innerHTML =
    `
    <div class="settingItem">
        <span>Music</span>
        <input id='musicSlider' type="range" min="0" max="100"/>
        <span id='musicVolText'></span>
    </div>
    <div class="settingItem">
        <span>SFX</span>
        <input id='sfxSlider' type="range" min="0" max="100"/>
        <span id='sfxVolText'></span>
    </div>
    `;
    document.body.appendChild(settingsDivPopup);
    //document.querySelector('.overlay').classList.add('active')

    const slider = document.querySelector('#musicSlider');
    const musicVolText = document.querySelector('#musicVolText');

    musicVolText.innerHTML = slider.value;
    slider.addEventListener('input', (event) =>{
        musicVolText.innerHTML = event.target.value;
    });

    const sfxSlider = document.querySelector('#sfxSlider');
    const sfxVolText = document.querySelector('#sfxVolText');

    sfxVolText.innerHTML = slider.value;
    sfxSlider.addEventListener('input', (event) =>{
        sfxVolText.innerHTML = event.target.value;
    });

});