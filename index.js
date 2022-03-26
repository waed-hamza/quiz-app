let startBtn = document.getElementById("start");
let nameInput = document.getElementById("name");
let requiredMsg = document.getElementById("required-msg");

startBtn.addEventListener("click", (e) => {
  if (nameInput.value.length === 0) {
    requiredMsg.innerText = "Please enter your name";
  } else {
    sessionStorage.setItem("name", nameInput.value);
    sessionStorage.setItem("score", "0");
    location.href = "./Questions/index.html";
  }
});
