const letterArray = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

const typeOne = document.querySelector("#orignial")

typeOne.addEventListener("mouseover",(event) => {
    let iterations = 0;
    const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
    .map((letter, index) => {
        if(index < iterations) return event.target.dataset.value[index];
        return letterArray[Math.floor(Math.random() * letterArray.length)]
    })
    .join("");
    iterations++;
    if (iterations > event.target.dataset.value.length) clearInterval(interval);
   }, 50);
});

const typeTwo = document.querySelector("#scramble-then-unscramble")

typeTwo.addEventListener("mouseover",(event) => {
    let iterations = 0;
    const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
    .map((letter, index) => {
        if(index < iterations) return event.target.dataset.value[index];
        return letterArray[Math.floor(Math.random() * letterArray.length)]
    })
    .join("");
    iterations++;
    if (iterations > event.target.dataset.value.length) clearInterval(interval);
   }, 50);
});

const typeThree = document.querySelector("#scrambles")

 

typeThree.addEventListener("mouseover",(event) => {
    let iterations = 0;
    const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
    .map((letter, index) => {
        if(index < iterations) return event.target.dataset.value[index];
        return letterArray[Math.floor(Math.random() * letterArray.length)]
    })
    .join("");
    iterations++;
    if (iterations > event.target.dataset.value.length) clearInterval(interval);
   }, 50);
});
