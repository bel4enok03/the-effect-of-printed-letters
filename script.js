let myName = "My name is Tatyana";
let i = 0;
let speed = 100;

function type(){
    if(i < myName.length){
        document.querySelector("#par").textContent += myName.charAt(i);
        i++;
        setTimeout(type,speed);
    }
    
    if(i === myName.length){
        typeTwo();
    }
}
type()

let text = "I am a web developer..."; //23
let a = 0;
function typeTwo(){
    if(a < text.length){
        document.querySelector("#parTwo").textContent += text.charAt(a);
        a++;
        setTimeout(typeTwo,speed);
    }
}
