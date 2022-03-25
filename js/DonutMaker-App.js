import DonutMaker from "./DonutMaker.js";
const donutButton = document.querySelector(".donut__button");
const resetBtn = document.querySelector(".reset__button")

const donutCountEl = document.querySelector(".donut__count");

const multiCostEl = document.querySelector(".multi__cost");

const clickWorthEl = document.querySelector(".click__worth");

const multiButton = document.querySelector(".multi__button");
const autoButton = document.querySelector(".auto__button");

const autoCountEl = document.querySelector(".auto__count");
const autoCostEl = document.querySelector(".auto__cost");

const multiCountEl = document.querySelector(".multi__count");


const donutMaker = new DonutMaker();
function updateView() {
    autoButton.disabled = !donutMaker.autoBuyEnabled;
    multiButton.disabled = !donutMaker.multiBuyEnabled;
    clickWorthEl.innerText = "x" + Math.pow(1.2, donutMaker.multis).toFixed(1) + " Donuts!";

    autoCostEl.innerText = "Auto-Clicker Cost: " + donutMaker.autoCost.toFixed(1);

    donutCountEl.innerText = donutMaker.count.toFixed(1);
    autoCountEl.innerText = "Auto-Clickers: " + donutMaker.autos;
    
    multiCountEl.innerText = "Multipliers: " + donutMaker.multis;
    multiCostEl.innerText = "Multiplier Cost: " + donutMaker.multiCost.toFixed(1);
}
updateView();
function makeNewDonut() {
    donutMaker.addDonut();

    spawnSpinningDonut();

}
donutButton.addEventListener("click", () => {
    makeNewDonut();
    updateView();
})
autoButton.addEventListener("click", () => {
    donutMaker.buyAutoClicker();

    
    setInterval(makeNewDonut, 1000);

    setInterval(updateView, 1000);
    updateView();
})
multiButton.addEventListener("click", () => {
   
    donutMaker.buyMultiplier();
    updateView();
})
resetBtn.addEventListener("click", () => {
    for (let i = 0; i <= donutMaker.autos * 2; i++) {
        window.clearInterval(i);
    }
    donutMaker.autoBuyEnabled = false;
    donutMaker.count = 0;

    donutMaker.autoCost = 100;

    donutMaker.multiBuyEnabled = false;
    donutMaker.autos = 0;
    donutMaker.multis = 0;
    donutMaker.multiCost = 10;
    updateView();
})
const dropdownBtnEl = document.querySelector(".dropbtn");

const dropdownButtonEl2 = document.querySelector(".dropbtn2")
dropdownBtnEl.addEventListener("click", () => {
    document.getElementById("myDropdown").classList.toggle("show");
})
dropdownButtonEl2.addEventListener("click", () => {
    document.getElementById("myDropdown2").classList.toggle("show");
})
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    if (!event.target.matches('.dropbtn2')) {
        var dropdowns2 = document.getElementsByClassName("dropdown-content2");
        var j;
        for (j = 0; j < dropdowns2.length; j++) {
            var openDropdown2 = dropdowns2[j];
            if (openDropdown2.classList.contains('show')) {
                openDropdown2.classList.remove('show');

            }
        }
    }
}