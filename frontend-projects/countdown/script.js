const letterArray = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

const typeOne = document.querySelector("#scramble")


const text = "an actual game";

const startingMinutes = 0.1;
let time = 10;

finish = false;


function scrambleText() {
    typeOne.innerText = typeOne.innerText.split("")
    .map((letter, index) => {
        return letterArray[Math.floor(Math.random() * letterArray.length)];;
    })
    .join("");
}

let interval = null;
function runScramble() {
    if (interval != null) return;
    interval = setInterval(scrambleText, 10);
}

const timerInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("countdown").innerText = `${minutes}:${seconds}`;
    time--;
    runScramble();

    if (time == 1 && !finish) {
        time += Math.floor(Math.random() * 100);
    }
    
    if (time < 0) {
        clearInterval(timerInterval);
        clearInterval(interval);
        document.getElementById("countdown").innerText = "Time's up!";
        solve();
    }
}

function solve() {
    let currentText = typeOne.innerText.split("");
    for (let i = 0; i < text.length; i++) {
        let iterations = Math.floor(Math.random() * 25) + 25; // 5-10 seconds with 200ms interval
        const cramble = setInterval(() => {
            currentText[i] = scrambleLetter();
            typeOne.innerText = currentText.join("");
            iterations--;
            if (iterations == 0) {
            clearInterval(cramble);
            currentText[i] = text[i];
            typeOne.innerText = currentText.join("");
            }
        }, 50);     
    }
}

function scrambleLetter() {
    return letterArray[Math.floor(Math.random() * letterArray.length)];
}

const button = document.querySelector("button");

button.addEventListener("click", () => {
    if (!finish) {
        finish = true;
        time = 3;
    }
});
