let button = document.getElementById("myButton");
let attrs = button.attributes;
console.log(attrs)
for (let i = 0; i < attrs.length; i++) {
    console.log(attrs[i].name + " = " + attrs[i].value);
}
