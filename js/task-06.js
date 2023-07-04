const inputName=document.querySelector("#validation-input");
inputName.addEventListener("blur",characterCheck);
const maxLength=Number(inputName.dataset.length);
console.log(inputName.value.length)
function characterCheck () {
if(inputName.value.trim().length===maxLength){
    
    inputName.classList.add("valid")
    inputName.classList.remove("invalid")
}else{
    inputName.classList.add("invalid")
    inputName.classList.remove("valid")
}

}