let h1color = document.getElementById("hcolor")
let btnSet = document.querySelector('#btnSet');
function myFunction() {
    btnSet.setAttribute("style", "background-color:red;"); 
    h1color.setAttribute("style", "color:red;");
}