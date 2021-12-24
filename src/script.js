const burger = document.querySelector("#burger");
const menue = document.querySelector("#menue")

burger.addEventListener('click',() =>{
  menue.classList.toggle("hidden");
})

