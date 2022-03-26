let score = sessionStorage.getItem("score");
let scoreP = document.getElementById("score");

scoreP.innerText = `${score}/10`;
