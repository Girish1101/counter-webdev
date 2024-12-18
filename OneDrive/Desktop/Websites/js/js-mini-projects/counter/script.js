let count=0;
let element=document.createElement("div");
let body=document.getElementsByTagName("body");
element.textContent=count;

let div=document.getElementsByTagName("div");
div[0].insertAdjacentElement('beforebegin',element);
let button=document.getElementsByTagName("button");
element.setAttribute("style","font-size:100px;");

button[0].addEventListener('click',()=> {
    count=count-1;
    element.textContent=count;
    if(count<0){
        // element.style.cssText='color: red; font-size: 100px';
        body[0].style.cssText='background: linear-gradient(to right,yellow,red); font-size: 100px';
    }
    else{
        // element.style.cssText='color: red; font-size: 100px';
        body[0].style.cssText='background: linear-gradient(to right,red,yellow); font-size: 100px';
    }
});

button[2].addEventListener('click',()=> {
    count=count+1;
    element.textContent=count;
    if(count<0){
        body[0].style.cssText='background: linear-gradient(to right,yellow,red); font-size: 100px';
        // element.style.cssText='color: red; font-size: 100px';
    }
    else{
        // element.style.cssText='color: red; font-size: 100px';
        body[0].style.cssText='background: linear-gradient(to right,red,yellow); font-size: 100px';
    }
});

function reset(){
    count=0;
    element.textContent=count;
    // element.style.cssText='color: red; font-size: 100px';
    body[0].style.cssText='background: linear-gradient(to right,red,yellow); font-size: 100px';
}
