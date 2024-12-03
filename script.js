// creating and appending the tags with the help of dom

function createDiv(
  tagName,
  attributeName,
  attributeValue,
  attribute2Name,
  attribute2Value
) {
  const div = document.createElement(tagName);
  div.setAttribute(attributeName, attributeValue);
  div.setAttribute(attribute2Name, attribute2Value);
  return div;
}

function createHtag(
  tagName,
  content,
  attributeName,
  attributeValue,
  attribute2Name,
  attribute2Value
) {
  const htag = document.createElement(tagName);
  htag.innerText = content;
  htag.setAttribute(attributeName, attributeValue);
  htag.setAttribute(attribute2Name, attribute2Value);
  return htag;
}

function createbuttontag(
  tagname,
  content,
  attributeName,
  attributeValue,
  attribute2Name,
  attribute2Value,
  eventName,
  eventFunction
) {
  const btntag = document.createElement(tagname);
  btntag.innerText = content;
  btntag.setAttribute(attributeName, attributeValue);
  btntag.setAttribute(attribute2Name, attribute2Value);
  btntag.addEventListener(eventName, eventFunction)
  return btntag;
}

const div = createDiv("div", "class", "div-style", "id", "div-style");
const h3tag = createHtag(
  "h3",
  "Lets Play with Colors",
  "class",
  "text-div",
  "id",
  "text-div"
);
div.appendChild(h3tag);
document.body.append(div);

const contentdiv = createDiv(
  "div",
  "class",
  "content-div",
  "id",
  "content-div"
);
const shapediv = document.createElement("div")
shapediv.setAttribute("class","shape-div");
shapediv.setAttribute("id","shape-div");
shapediv.setAttribute("style","background-color : white")

contentdiv.appendChild(shapediv);
document.body.append(contentdiv);

const buttondiv = createDiv("div", "class", "button-div", "id", "button-div");
const redbtn = createbuttontag("button", "Red", "class", "button-red", "id", "button-red", "click", ()=>handleColorChange("red"));
const greenbtn = createbuttontag("button", "Green", "class", "button-green", "id", "button-green", "click", ()=>handleColorChange("green"));
const bluebtn = createbuttontag("button", "Blue", "class", "button-blue", "id", "button-blue", "click", ()=>handleColorChange("blue"));
const resetbtn = createbuttontag("button", "Reset", "class", "button-reset", "id", "button-reset", "click", ()=>handleColorChange("white"));
buttondiv.append(redbtn, greenbtn, bluebtn, resetbtn);
document.body.append(buttondiv);

const inputboxdiv = createDiv(
  "div",
  "class",
  "inputbox-div",
  "id",
  "inputbox-div"
);
const inputbox = document.createElement("input");
inputbox.setAttribute("type", "text");
inputbox.setAttribute("placeholder", "type color here");
inputbox.setAttribute("class", "inputbox");
inputbox.setAttribute("id", "inputbox");
inputbox.addEventListener("input", () => handleInput(inputbox.value));

inputboxdiv.append(inputbox);
document.body.append(inputboxdiv)

// function Parts starts

const handleColorChange = (color) =>{
    const shapeDiv = document.getElementById("shape-div");
    shapeDiv.style.backgroundColor = color;
}

const handleInput = (color) => {
    const shapeDiv = document.getElementById("shape-div");
    shapeDiv.style.backgroundColor = color;
  };