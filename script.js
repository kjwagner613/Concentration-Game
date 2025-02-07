document.addEventListener("DOMContentLoaded", () => {
  const startScreen = document.getElementById("start-screen");
  const gameScreen = document.getElementById("game-screen");
  const startButton = document.getElementById("start-button");
  const replayButton = document.getElementById("replay-button");
  const quizContainer = document.getElementById("quiz-container");
  const resultsDiv = document.getElementById("results");
  const imageDisplay = document.getElementById("imageDisplay");

  let selectedPictures = [];
  let masterSet = [];

  startButton.addEventListener("click", startGame);

  const quizPics = [
    {
      ID: 1,
      name: "bird",
      link: "./images/bird.png",
      alt: "AI (Copilot) Generated image of a bird.",
    },
    {
      ID: 2,
      name: "cat",
      link: "./images/cat.png",
      alt: "AI (Copilot) Generated image of a cat.",
    },
    {
      ID: 3,
      name: "mouse",
      link: "./images/mouse.png",
      alt: "AI (Copilot) Generated image of a mouse.",
    },
    {
      ID: 4,
      name: "pig",
      link: "./images/pig.png",
      alt: "AI (Copilot) Generated image of a pig.",
    },
    {
      ID: 5,
      name: "snake",
      link: "./images/snake.png",
      alt: "AI (Copilot) Generated image of a snake.",
    },
    {
      ID: 6,
      name: "mongoose",
      link: "./images/mongoose.png",
      alt: "AI (Copilot) Generated image of a mongoose.",
    },
    {
      ID: 7,
      name: "monkey",
      link: "./images/monkey.png",
      alt: "AI (Copilot) Generated image of a monkey.",
    },
    {
      ID: 8,
      name: "fish",
      link: "./images/fish.png",
      alt: "AI (Copilot) Generated image of a fish.",
    },
    {
      ID: 9,
      name: "shark",
      link: "./images/shark.png",
      alt: "AI (Copilot) Generated image of a shark.",
    },
    {
      ID: 10,
      name: "whale",
      link: "./images/whale.png",
      alt: "AI (Copilot) Generated image of a whale.",
    },
    {
      ID: 11,
      name: "dolphin",
      link: "./images/dolphin.png",
      alt: "AI (Copilot) Generated image of a dolphin.",
    },
    {
      ID: 12,
      name: "turtle",
      link: "./images/turtle.png",
      alt: "AI (Copilot) Generated image of a turtle.",
    },
  ];

  function startGame() {
    startScreen.style.display = "none";
    document.getElementById("title").style.display = "none";
    document.querySelector(".instructions").style.display = "none";

    gameScreen.style.display = "block";

    imageDisplay.style.display = "none";
    imageDisplay.style.visibility = "hidden";
    imageDisplay.src = "";

    selectedPictures = [];
    masterSet = [];

    let indexes = [];
    while (indexes.length < 3) {
      let randomIndex = Math.floor(Math.random() * 12);
      if (!indexes.includes(randomIndex)) {
        indexes.push(randomIndex);
      }
    }

    masterSet = indexes.map((i) => quizPics[i].name);
    let imageLinks = indexes.map((i) => quizPics[i].link);

    displayImages(imageLinks);
  }

  function displayImages(imageLinks) {
    setTimeout(() => {
      imageDisplay.src = "./images/black.png";
      imageDisplay.style.display = "block";
      imageDisplay.style.visibility = "visible";
    }, 1500);

    setTimeout(() => {
      imageDisplay.src = imageLinks[0];
    }, 5000);

    setTimeout(() => {
      imageDisplay.src = "./images/black.png";
    }, 5500);

    setTimeout(() => {
      imageDisplay.src = imageLinks[1];
    }, 9000);

    setTimeout(() => {
      imageDisplay.src = "./images/black.png";
    }, 9300);

    setTimeout(() => {
      imageDisplay.src = imageLinks[2];
    }, 13500);

    setTimeout(() => {
      imageDisplay.src = "./images/black.png";
    }, 13800);

    setTimeout(() => {
      imageDisplay.style.display = "none";
      imageDisplay.src = "";
    }, 14500);

    setTimeout(populateQuiz, 15500);
  }

  function createPictureElement(pic) {
    const img = document.createElement("img");
    img.src = pic.link;
    img.classList.add("picture");
    img.addEventListener("click", function () {
      if (selectedPictures.length < 3) {
        selectedPictures.push(pic.name);
        img.style.border = "5px solid blue";
        if (selectedPictures.length === 3) {
          checkButton.style.display = "block";
          if (replayButton) {
            replayButton.style.display = "block";
          }
        }
      } else {
      }
    });
    return img;
  }
  const faultMessage = document.createElement("p");
  faultMessage.id = "times-up-message";
  faultMessage.style.display = "none";
  faultMessage.style.textAlign = "center";
  faultMessage.style.fontSize = "20px";
  quizContainer.parentNode.insertBefore(
    faultMessage,
    quizContainer.nextSibling
  );

  function timesUp() {
    faultMessage.textContent = "Time's up, sorry you lose.";
    faultMessage.style.display = "block";
    if (replayButton) {
      replayButton.style.display = "block";
    }
    checkResults();
  }
  let timer;
  let timeLeft = 0;

  function startTimer() {
    timeLeft = 10;
    timer = setInterval(() => {
      timeLeft--;
      console.log("Time left:", timeLeft);

      if (timeLeft < 0) {
        clearInterval(timer);
        timesUp();
      }
    }, 1000);
  }

  function populateQuiz() {
    quizContainer.innerHTML = "";
    quizPics.forEach((pic) => {
      quizContainer.appendChild(createPictureElement(pic));
    });

    startTimer();
  }

  const checkButton = document.createElement("button");
  checkButton.textContent = "Check Results";
  checkButton.className = "game-button";
  checkButton.style.display = "none";

  const buttonContainer = document.createElement("div");
  buttonContainer.appendChild(checkButton);
  quizContainer.parentNode.insertBefore(
    buttonContainer,
    quizContainer.nextSibling
  );

  if (replayButton) {
    replayButton.style.display = "none";
    replayButton.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  function checkResults() {
    clearInterval(timer);

    let correctCount = 0;
    for (let i = 0; i < 3; i++) {
      if (selectedPictures[i] === masterSet[i]) {
        correctCount++;
      }
    }

    const percentage = Math.round((correctCount / 3) * 100);

    let message = `You got <b>${correctCount}</b> out of <b>3</b> correct! (${percentage}%)`;

    if (percentage > 60) {
      message += " 🎉 You Win!";
    } else {
      message += " 😔 Sorry, you lose. Try again!";
    }

    resultsDiv.innerHTML = message;
    resultsDiv.style.display = "block";
  }

  checkButton.addEventListener("click", checkResults);
});
