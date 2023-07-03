let  counterValue=0;
const buttonPlus=document.querySelector('[data-action="increment"]');
const buttonMinus=document.querySelector('[data-action="decrement"]');
const valueCounter=document.querySelector("#value");
function update () {
valueCounter.textContent=counterValue;
}
function decrement (){
    counterValue-=1;
    update();
};
function increment(){
    counterValue+=1;
    update()
};
buttonMinus.addEventListener("click",decrement);
buttonPlus.addEventListener("click",increment);