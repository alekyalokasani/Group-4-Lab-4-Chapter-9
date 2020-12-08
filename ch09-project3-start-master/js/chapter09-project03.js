/* add code here */
function loadFunction()

{


document.getElementById("highlight").style.display = "block";

document.getElementById("hide").style.display = "none";

document.getElementById("highlight").addEventListener("click", function(){



var elements = document.querySelectorAll("h1, main, div, p, tr, td, caption, th, a, legend, label, fieldset, button");


for (var i = 0; i < elements.length; i++) {

if(elements[i].nodeType == 1)

{


var spanEle = document.createElement('SPAN');

spanEle.className = "hoverNode";

spanEle.innerHTML = elements[i].tagName;

elements[i].appendChild(spanEle);



}

}


document.getElementById("highlight").style.display = "none";

document.getElementById("hide").style.display = "block";

});


}