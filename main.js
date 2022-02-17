function countNumber(){
    let circleSelector = document.getElementById("counter").textContent;
    let current_num = Number(circleSelector) + 1;
    document.getElementById("counter").textContent = String(current_num);
}

const circle = document.getElementById("my-circ1");
circle.addEventListener('click', countNumber);

function addBorder(){
    document.getElementById("my-circ2").style.stroke = "black";
    document.getElementById("my-circ2").style.strokeWidth = 13;
}
const circle1 = document.getElementById("my-circ2");
circle1.addEventListener("mouseover", addBorder);

function moveBorder(){
    document.getElementById("my-circ2").style.stroke = "none";
}
const circle2 = document.getElementById("my-circ2");
circle2.addEventListener("mouseout",moveBorder);


function circle3Click(){
    let curOpacity = document.getElementById("my-circ3").getAttribute("class");
    if (curOpacity == "opacity"){
        document.getElementById("my-circ3").setAttribute("class", "opacity_1");
    }
    else{
        document.getElementById("my-circ3").setAttribute("class","opacity");
    }
}
const circle4 = document.getElementById("my-circ3");
circle4.addEventListener("click",circle3Click);