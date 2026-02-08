


const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let scale = 1;
let noCounter = 0;

// Список надписей на кнопке NO
const noMessages = [
   "Are you sure?",
    "Really?",
    "Don't lie!",
    "Come on...",
    "Impossible!",
    "No way!",
    "Think again!",
    "Seriously?",
    "Try harder!",
    "You can't!",
    "Hmm...",
    "Not today!",
    "Give up!",
    "Haha no!",
    "Keep trying!"
];

// Функция для кнопки NO
function handleNo() {
    // YES увеличивается
    scale += 0.3;
    yesBtn.style.transform = `scale(${scale})`;

    // Меняем текст на кнопке NO
    if (noCounter < noMessages.length) {
        noBtn.textContent = noMessages[noCounter];
        noCounter++;
    } else {
        // После всех попыток NO исчезает
        noBtn.style.opacity = "0";
        noBtn.style.pointerEvents = "none";
    }
    if(scale > 3){
        noBtn.style.opacity="0";
        noBtn.style.pointerEvents = "none";

    }

}

// События для NO
noBtn.addEventListener("click", handleNo);

// Событие для YES
yesBtn.addEventListener("click", () => {
    window.location.href = "love.html";

});
