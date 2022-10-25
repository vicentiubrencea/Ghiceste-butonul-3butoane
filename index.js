let magicNumber = Math.floor(Math.random() * 3);

function checkGreen() {
  if (magicNumber == 0) {
   document.getElementById("message").innerHTML = "You Won!";
  } else {
    document.getElementById("message").innerHTML = "Green is not the lucky colour!";
  }
}

function checkBlue() {
  if (magicNumber == 1) {
    document.getElementById("message").innerHTML = "You Won!";   
  } else {
    document.getElementById("message").innerHTML = "Blue is not the lucky colour!";    
  }
}

function checkRed() {
  if (magicNumber == 2) {
    document.getElementById("message").innerHTML = "You Won!";
  } else {
    document.getElementById("message").innerHTML = "Red is not the lucky colour!";
  }
}

function playGame() {
  magicNumber = Math.floor(Math.random() * 3);
  document.getElementById("message").innerHTML = "Good Luck!";
}