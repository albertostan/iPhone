function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  };

function time() {
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();

    m = checkTime(m);

    
    document.querySelector('.time').innerHTML = h + ":" + m;
};

setInterval(time, 500);

// Clock app
document.getElementById("clockBtn").onclick = function() {
  let openClock = document.getElementById("openClock");
  let apps = document.querySelector(".apps");

  
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  };

  function time() {
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    m = checkTime(m);

    
    document.querySelector('#clock').innerHTML = h + ":" + m + ":" + s;
  };

  setInterval(time, 500);

  if (openClock.style.display === "none" && apps.style.display === "grid") {
    openClock.style.display = "block";
    apps.style.display = "none";
  } else {
    openClock.style.display = "none";
    apps.style.display = "grid";
  };
};

// iMessage app
document.getElementById("msgBtn").onclick = function() {
  let msg = document.getElementById("msg");
  let apps = document.querySelector(".apps");

  if (msg.style.display === "none" && apps.style.display === "grid") {
    msg.style.display = "block";
    apps.style.display = "none";
  } else {
    msg.style.display = "none";
    apps.style.display = "grid";
  };
};

// Camera app
document.getElementById("cameraBtn").onclick = function() {
  let webcam = document.getElementById('webcam');
  let apps = document.querySelector(".apps");

  if (webcam && apps) { // Check if elements exist
    if (webcam.style.display === "none" && apps.style.display === "grid") {
        webcam.style.display = "block";
        apps.style.display = "none";

        // Start the webcam stream
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then((stream) => {
                    webcam.srcObject = stream;
                })
                .catch((error) => {
                    console.error("Error accessing webcam: ", error);
                });
        }
    } 
} else {
    console.error("Element(s) not found: #webcam or .apps");
}
};

// Calculator app
let currentOperation = null;
let firstOperand = null;
let secondOperand = null;

function appendToDisplay(value) {
    let display = document.getElementById('inputCalc');
    display.value += value;
}

function clearDisplay() {
    let display = document.getElementById('inputCalc');
    display.value = '';
    currentOperation = null;
    firstOperand = null;
    secondOperand = null;
}

function operation(operator) {
    let display = document.getElementById('inputCalc');
    if (firstOperand === null) {
        firstOperand = parseFloat(display.value);
        currentOperation = operator;
        display.value = '';
    } else if (secondOperand === null) {
        secondOperand = parseFloat(display.value);
        let result = calculate();
        display.value = '';
        firstOperand = result;
        currentOperation = operator;
        secondOperand = null;
    }
}

function calculate() {
  let display = document.getElementById('inputCalc');
  if (currentOperation && firstOperand !== null && display.value !== '') {
      secondOperand = parseFloat(display.value);
      let result = null;
      switch (currentOperation) {
          case '+':
              result = add(firstOperand, secondOperand);
              break;
          case '-':
              result = subtract(firstOperand, secondOperand);
              break;
          case '*':
              result = multiply(firstOperand, secondOperand);
              break;
          case '/':
              result = divide(firstOperand, secondOperand);
              break;
          default:
              break;
      }
      if (result !== null) {
          display.value = result;
          firstOperand = result;
          secondOperand = null;
          currentOperation = null;
      }
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
      alert("Cannot divide by zero!");
      return null;
  }
  return a / b;
}

document.getElementById("calcBtn").onclick = function() {
  let calculator = document.getElementById("calculator");
  let apps = document.querySelector(".apps");

  if (calculator.style.display === "none" && apps.style.display === "grid") {
    calculator.style.display = "block";
    apps.style.display = "none";
  } else {
    calculator.style.display = "none";
    apps.style.display = "grid";
  };
};





/// Reset button
document.getElementById("reset").onclick = function() {
  let openClock = document.getElementById("openClock");
  let msg = document.getElementById("msg");
  let apps = document.querySelector(".apps");
  let webcam = document.getElementById('webcam');
  let calculator = document.getElementById("calculator");
  
  apps.style.display = "grid";
  openClock.style.display = "none";
  msg.style.display = "none";
  webcam.style.display = "none";
  calculator.style.display = "none";
};
