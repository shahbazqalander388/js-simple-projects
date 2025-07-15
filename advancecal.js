const display=document.querySelector("#display");

function append(input){
    display.value+=input;
}
function cleardisplay(){
    display.value="";
}
function calculate(){
    try{
        display.value=eval(display.value)
    }
    catch(err){
    display.value="error"
    }
}