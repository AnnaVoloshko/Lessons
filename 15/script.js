var form = document.createElement("form");
var input = document.createElement("input");
var submit = input.cloneNode();
input.setAttribute("name", "myInput");
submit.setAttribute("type", "submit");
submit.value = "OK";

form.appendChild(input);
form.appendChild(submit);

form.onsubmit = function (e) {
   console.log("Submitted");
   e.preventDefault(); //не отправляет форму
};
form.elements.myInput.onfocus = function () {
   console.log("Focus", this);
};
form.elements.myInput.onblur = function () {
   console.log("Blur", this);
};

wrapper.appendChild(form);