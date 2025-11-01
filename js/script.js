let startBtn = document.getElementById("startBtn");
let inputName = document.getElementById("inputName");
let errorMsg = document.getElementById("errorMsg");
let firstDiv = document.getElementById("firstDiv");
let playerOneDiv = document.getElementById("playerOneDiv");
let playerOneName = document.getElementById("playerOneName");
let playerOneBtn = document.getElementById("playerOneBtn");
let inputNum = document.getElementById("inputNum");
let errorMsgTwo = document.getElementById("errorMsgTwo");
let inputNameTwo = document.getElementById("inputNameTwo");
let playerTwoDiv = document.getElementById("playerTwoDiv");
let playerTwoBtn = document.getElementById("playerTwoBtn");
let errorMsgThree = document.getElementById("errorMsgThree");

let errorMsgFour = document.getElementById("errorMsgFour");
let playerTwo = document.getElementById("playerTwo");

// ===============>
startBtn.addEventListener("click", () => {
  let nameValue = inputName.value;
  if (nameValue == "") {
    let nameErrorMsg = "Name Is Missing";
    errorMsg.innerText = nameErrorMsg;
    errorMsg.style.color = "#ffffff";
    errorMsg.style.background = "#CC3030";
    errorMsg.style.fontSize = "42px";
    errorMsg.style.fontWeight = "600";
    errorMsg.style.marginTop = "15px";
    errorMsg.style.padding = "10px 80px";
    errorMsg.style.borderRadius = "10px";
    errorMsg.style.display = "inline-block";
    inputName.value = "";
  } else {
    errorMsg.style.display = "none";
    inputName.value = "";
    firstDiv.style.display = "none";
    playerOneDiv.style.display = "block";
    playerOneName.innerText = nameValue;
  }
});
// ================>
let playerOneNum;
playerOneBtn.addEventListener("click", () => {
   playerOneNum = Number(inputNum.value);


  if (inputNum.value == "") {
   let numErrorMsg = "Please give a number";
    errorMsgTwo.innerText = numErrorMsg;
    errorMsgTwo.style.color = "#ffffff";
    errorMsgTwo.style.background = "#CC3030";
    errorMsgTwo.style.fontSize = "42px";
    errorMsgTwo.style.fontWeight = "600";
    errorMsgTwo.style.marginTop = "15px";
    errorMsgTwo.style.padding = "10px 80px";
    errorMsgTwo.style.borderRadius = "10px";
    errorMsgTwo.style.display = "inline-block";
    inputNum.value = "";
  } else if (playerOneNum < 1 || playerOneNum > 10) {
    let numErrorMsg = "Please give a Value between 1 to 10";
    errorMsgTwo.innerText = numErrorMsg;
    errorMsgTwo.style.color = "#ffffff";
    errorMsgTwo.style.background = "#CC3030";
    errorMsgTwo.style.fontSize = "42px";
    errorMsgTwo.style.fontWeight = "600";
    errorMsgTwo.style.marginTop = "15px";
    errorMsgTwo.style.padding = "10px 80px";
    errorMsgTwo.style.borderRadius = "10px";
    errorMsgTwo.style.display = "inline-block";
    inputNum.value = "";
  } else {
    errorMsgTwo.style.display = "none";
    inputNum.value = "";
    playerOneDiv.style.display = "none";
    playerTwoDiv.style.display = "block";
  }
});
// ===============>
playerTwoBtn.addEventListener("click", () => {
  let playerTwoInput = inputNameTwo.value;
  if (playerTwoInput == "") {
    let nameErrorMsgTwo = "Name Is Missing";
    errorMsgThree.innerText = nameErrorMsgTwo;
    errorMsgThree.style.color = "#ffffff";
    errorMsgThree.style.background = "#CC3030";
    errorMsgThree.style.fontSize = "42px";
    errorMsgTwo.style.fontWeight = "600";
    errorMsgThree.style.marginTop = "15px";
    errorMsgThree.style.padding = "10px 80px";
    errorMsgTwo.style.borderRadius = "10px";
    errorMsgThree.style.display = "inline-block";
    inputNameTwo.value = "";
  } else {
    errorMsgThree.style.display = "none";
    inputNameTwo.value = "";
    playerTwoName.innerText = playerTwoInput;
    playerTwoDiv.style.display = "none";
    numGuessDiv.style.display = "block";
  }
});
// ===================>
let numGuessDiv = document.getElementById("numGuessDiv");
let playerTwoName = document.getElementById("playerTwoName");
let inputNumTwo = document.getElementById("inputNumTwo");
let guessBtn = document.getElementById("guessBtn");


