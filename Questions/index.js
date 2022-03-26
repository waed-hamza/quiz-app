import getQuestions from "./data.js";

let questionsArr = getQuestions();
let question = document.getElementById("question");
let questionNumber = document.getElementById("question-number");
let options = document.getElementById("options");
let optionText = document.getElementsByClassName("option-text");
let codeText = document.getElementById("code-container");
let currQuestion = questionsArr.shift();
let score = parseInt(sessionStorage.getItem("score"));
let scoreSpan = document.getElementById("score-text");

const initiate = (currentQuestion) => {
  currQuestion = currentQuestion;
  questionNumber.innerText = currentQuestion.id;
  question.innerText = currentQuestion.q;

  currentQuestion.options.forEach((el, id) => {
    optionText[id].innerText = el;
    optionText[id].parentNode.setAttribute(
      "style",
      "background-color: #0000003d"
    );
  });

  if (currQuestion.code) {
    codeText.classList.remove("display");
    codeText.innerHTML = "";

    currQuestion.code.forEach((el) => {
      let pre = document.createElement("pre");
      pre.innerText = el;
      codeText.appendChild(pre);
    });
  } else {
    codeText.classList.add("display");
  }
};

initiate(currQuestion);

options.addEventListener("click", (e) => {
  let result = checkAnswer(e.target.innerText, currQuestion.answer);

  handleStyle(result, e.target.parentNode);
  handleScore(result);

  if (questionsArr.length > 0) {
    setTimeout(() => {
      initiate(questionsArr.shift());
    }, 1000);
  } else {
    handleLeaderBoard(score);

    setTimeout(() => {
      location.href = "../Score/index.html";
    }, 1000);
  }
});

const checkAnswer = (playerAnswer, correctAnswer) => {
  return playerAnswer == correctAnswer;
};

const handleStyle = (result, node) => {
  if (result) {
    node.setAttribute("style", "background-color: #008000cf !important");
  } else {
    node.setAttribute("style", "background-color: #ff0000b3 !important");
  }
};

const handleScore = (result) => {
  if (result) {
    score += 1;
    scoreSpan.innerText = `${score}/10`;
  }
};

const handleLeaderBoard = (score) => {
  sessionStorage.setItem("score", score);
  let playerName = sessionStorage.getItem("name");
  let playerScore = sessionStorage.getItem("score");
  let leaderBoardArr;

  if (!localStorage.getItem("leaderBoard")) {
    let leaderBoard = [];
    localStorage.setItem("leaderBoard", JSON.stringify(leaderBoard));
    leaderBoardArr = JSON.parse(localStorage.getItem("leaderBoard"));
  } else {
    leaderBoardArr = JSON.parse(localStorage.getItem("leaderBoard"));
  }

  if (leaderBoardArr.length >= 0 && leaderBoardArr.length < 5) {
    leaderBoardArr.push({
      name: playerName,
      score: playerScore,
    });

    leaderBoardArr.sort((a, b) => {
      return b.score - a.score;
    });

    localStorage.setItem("leaderBoard", JSON.stringify(leaderBoardArr));
  } else if (playerScore >= leaderBoardArr[4].score) {
    leaderBoardArr.pop();
    leaderBoardArr.push({
      name: playerName,
      score: playerScore,
    });

    leaderBoardArr.sort((a, b) => {
      return b.score - a.score;
    });

    localStorage.setItem("leaderBoard", JSON.stringify(leaderBoardArr));
  }
};
