var clickHandler = function (e) {
    console.log("Bubbling", this, e.target, e.currentTarget);
};
​
var outer = document.createElement("div");
outer.addEventListener("click", clickHandler);
var middle = document.createElement("p");
middle.addEventListener("click", clickHandler);
var inner = document.createElement("span");
inner.addEventListener("click", clickHandler);
inner.innerHTML = "Click here";
​
middle.appendChild(inner);
outer.appendChild(middle);
​
wrapper.appendChild(outer);
