const luckyMessages = [
  "You are enough!",
  "Do not doubt on your skills.",
  "You have great things to conquer yet.",
  "Look around.. Happiness is trying to catch you.",
  "You did not come this far to only come this far",
  "Vulnerability sounds like faith and looks like courage",
  "Do it even if you are scared!",
  "My courage always rises at every attempt to intimidate me.",
  "The most important thing you wear is your personality.",
  "Imagination creates reality."
]


const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnScreen1 = document.querySelector("#btnShowMessage")
const btnTryAgain = document.querySelector("#btnTryAgain")

btnScreen1.addEventListener("click", handleClick)
btnTryAgain.addEventListener("click", toggleScreen)

function handleClick() {
  toggleScreen()
  
  let messageContainer = document.querySelector(".messageContainer p")
  messageContainer.innerText = luckyMessages[Math.floor(Math.random() * 10)]

}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}