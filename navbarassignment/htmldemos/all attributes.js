  // Append
let container = document.getElementById("container");
let newElement = document.createElement("p");
newElement.textContent = "Appended content";
container.append(newElement);

  // Prepend
let newElement2 = document.createElement("p");
newElement2.textContent = "Prepended content";
container1.prepend(newElement2);

  // Before
let referenceElement = document.getElementById("container2");
let newElement3 = document.createElement("p");
newElement3.textContent = "Before content";
referenceElement.before(newElement3);

  // After
let newElement4 = document.createElement("p");
newElement4.textContent = "After content";
referenceElement.after(newElement4);

 // Insert HTML at the beginning of an element
container3.insertAdjacentHTML("afterbegin", "<p>Inserted HTML at the beginning</p>");

  // Insert an element before another element
container3.insertAdjacentElement("beforebegin", document.createElement("p"));

  // Insert HTML after the end of an element
container3.insertAdjacentHTML("afterend", "<p>Inserted HTML after the end</p>");

  // Insert HTML before the end of an element
container3.insertAdjacentHTML("beforeend", "<p>Inserted HTML before the end</p>");

  // Replace with
let container4 = document.getElementById("container4");
let replacementElement = document.createElement("p");
replacementElement.textContent = "Replacement content";
container4.replaceWith(replacementElement);