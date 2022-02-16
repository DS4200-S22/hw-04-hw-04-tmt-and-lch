function countNumber(){
    let circleSelector = document.getElementById("counter").textContent;
    let current_num = Number(circleSelector) + 1;
    document.getElementById("counter").textContent = String(current_num);
    // constant variable -> by id -> reference to the circle -> add lisenter and handler -> use for counter function

}
const circle = document.getElementById("my-circ1");
circle.addEventListener('click', countNumber);


// const circle2 = document.getElementById("my-circ2");
// circle2.addEventListener('mousemove', function(event){
//     event.target.style.borderTop ='3px solid'; 
//     event.target.style.borderColor = '#d22b2b';

// })

// document.getElementById("my-circ2").onmouseover = function(){
//     document.getElementById("my-circ2").style.borderStyle = "solid";
//     document.getElementById("my-circ2").style.borderColor = '#d22b2b';

// }

// document.getElementById("my-circ2").onmouseout = function(){
//     document.getElementById("my-circ2").style.borderStyle = "none"
// }
// function borderChange(element, style) {
//     element.style.borderStyle = style;
//   }

let circle = svg.append('my-circ2')
    .attr(cx,'200')
    .attr(cy,'200')
    .attr(r,'150')
    .attr('fill', '124, 193, 238')
    .on('mouseover',mouseOver)
    .on('mouseout',mouseOut)
    // .on('dblclick',dblClick)

function mouseOver() {
    d3.select(this).attr('stroke','black').attr('stroke-width',3);
}
function mouseOut(){
    d3.select(this).attr('stroke',null);
}




document.getElementById("my-circ3").onclick = function(){
    document.getElementById("my-circ3").style.display = "none";
}

// document.getElementById("my-circ3").onclick =function() {
//     document.getElementById("my-circ3").style.display = "run-in";
// }