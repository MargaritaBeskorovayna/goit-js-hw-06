const controlScroll = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
controlScroll.addEventListener("input",update)
function update(){
    const value=controlScroll.value;
    text.style.fontSize=`${value}` + "px";
}
update()