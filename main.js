// function clickButton () {
//     let number = 0;
//     let number_click = parseInt(number.innerHTML);
//     number_click++;
//     document.getElementsByClassName("item").innerHTML = number_click;
//     console.log(number_click);
//  }

var circleSelector = document.getElementsByClassName("item");
var function_click = function() {
    var last_number = +this.innerHTML || 0; 
    this.innerHTML= last_number +1;
};
for (var i = 0 ; i < circleSelector.length; i++){
    circleSelector[i].addEventListener ('click',function_click,false);
}
