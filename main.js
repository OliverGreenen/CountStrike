const numberDisplay = document.querySelector("#number-display");
const whenToClickDisplay = document.querySelector("#when-to-click-display");
const afterHide = 4;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function countUp(intervalTime, whenToClick) {
    let startTime = Date.now();
    let counterInterval;
    whenToClickDisplay.textContent = "Click at " + whenToClick;
    const clickListener = () => {
        removeEventListener("click", clickListener);
        numberDisplay.hidden = false;
        clearInterval(counterInterval);
        whenToClickDisplay.textContent = "You were " + Math.abs((startTime + whenToClick * 1000) - Date.now()) + "ms from the your number";
        whenToClickDisplay.animate({
            "transform": ["translateY(-100px)", "translateY(0)"]
        }, 300);
        setTimeout(() => {
            countUp(1000, getRandomInt(10, 25));
        }, 2000);
    };
    addEventListener("click", clickListener);
    counterInterval = setInterval(() => {
        numberDisplay.textContent = Math.round((Date.now() - startTime) / 1000);
        if(Date.now() > startTime + afterHide * 1000) {
            numberDisplay.hidden = true;
        }
    }, intervalTime);
}

countUp(1000, getRandomInt(10, 25));



