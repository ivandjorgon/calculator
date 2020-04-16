let x = "";
let y = "";
let operator = "";
let results = "";
let gotResults = false;

const p = document.querySelector("#results-display");
p.textContent = "0.00";
const h1 = document.querySelector("h1");
h1.textContent = "";

function evaluate(x,operator,y) {
  switch(operator) {
    case "+":
    return x + y;

    case "-":
    return x - y;

    case "x":
    return x * y;

    case "÷":
    return x / y;

  }
}

function clear() {
  h1.textContent = "";
  x = "";
  y = "";
  operator = "";
  results = "";
  p.textContent = "0.00";
}

const numbers = document.querySelectorAll(".number");
numbers.forEach((numberButton) => {
  numberButton.addEventListener("click", (e) => {
    if (gotResults == false) {h1.textContent += e.target.textContent;
    } else {
      gotResults = false;
      clear();
      h1.textContent = e.target.textContent;
    }
  });
})

const operators = document.querySelectorAll(".operator");
operators.forEach((operatorButton) => {
  operatorButton.addEventListener("click", (e) => {
    gotResults = false;
    switch(true){

      case (p.textContent == "0.00" && h1.textContent != "" && h1.textContent !== "-"):
      x = h1.textContent;
      operator = e.target.textContent;
      p.textContent = h1.textContent += e.target.textContent;;
      h1.textContent = "";
      break;

      case (p.textContent == "0.00" && e.target.textContent == "-" && h1.textContent == ""):
      h1.textContent = "-";
      break;

      case ( x != "" && operator != "-" && e.target.textContent == "-" && h1.textContent == ""):
      h1.textContent = "-";
      break;

      case (h1.textContent != "" && p.textContent != "" && h1.textContent != "-" && gotResults):
      x = h1.textContent;
      operator = e.target.textContent;
      p.textContent = h1.textContent += e.target.textContent;;
      h1.textContent = "";
      break;

      case (operator != e.target.textContent && h1.textContent != "-" && p.textContent != "0.00" && h1.textContent == ""):
      operator = e.target.textContent;
      p.textContent = p.textContent.slice(0,-1) + operator;
      break;

      case (x != "" && operator != "" && h1.textContent != "" && !p.textContent.includes("=") && h1.textContent != "-"):
      y = h1.textContent;
      h1.textContent = "";
      p.textContent = results;
      p.textContent = evaluate(Number(x),operator,Number(y)) + e.target.textContent;
      x = evaluate(Number(x),operator,Number(y));
      operator = e.target.textContent;
      break;

      case p.textContent.includes("="):
      x = h1.textContent;
      operator = e.target.textContent;
      p.textContent = x + operator;
      h1.textContent = "";
      break;

      }
    });
  });


const equal = document.querySelector("#button-equal");
equal.addEventListener("click", (e) => {
  if (p.textContent != "0.00" && h1.textContent != "" && !p.textContent.includes("=")){
    gotResults = true;
    y = h1.textContent;
    results = h1.textContent += e.target.textContent;;
    p.textContent += results;
    h1.textContent = evaluate(Number(x),operator,Number(y));
    results  = evaluate(Number(x),operator,Number(y));
  } else if (p.textContent.includes("=")){

  }
});


const backspace = document.querySelector("#button-backspace");
backspace.addEventListener("click", (e) => {
  if (gotResults == false) {h1.textContent = h1.textContent.slice(0,-1)
  } else {
    gotResults = false;
    clear();
    h1.textContent = ""
  };
});



const clearButton = document.querySelector("#button-clear");
clearButton.addEventListener("click", (e) => {
  clear()
});

const decimal = document.querySelector("#button-decimal");
decimal.addEventListener("click", (e) => {
  if (gotResults == false) {
    if(!h1.textContent.includes(".")){
      h1.textContent += e.target.textContent;
      }
    } else {
        gotResults = false;
        clear();
        h1.textContent = e.target.textContent;
  }
});