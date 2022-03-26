let playersList = document.getElementsByClassName("option-text");
let leaderBoardArr = JSON.parse(localStorage.getItem("leaderBoard"));

leaderBoardArr.forEach((el, id) => {
  playersList[id].innerText = `${el.name} | ${el.score}/10`;
});
