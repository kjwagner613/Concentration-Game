const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const startButton = document.getElementById("start-button");
const replayButton = document.getElementById("replay-button");
const quizContainer = document.getElementById("quiz-container");
const resultsDiv = document.getElementById("results");
const timerDisplay = document.getElementById("timer");
const displayedImage = document.getElementById("imageDisplay");

let selectedPictures = [];
let masterSet = [];
let timer;
timerDisplay.style.display = "none";

const quizPics = [
  {
    name: "bird",
    link: "./images/bird.png",
    alt: "AI generated cartoon drawing of a bird in a colorful tree.",
  },
  {
    name: "cat",
    link: "./images/cat.png",
    alt: "AI generated cartoon drawing of a happy cat in a livingroom.",
  },
  {
    name: "mouse",
    link: "./images/mouse.png",
    alt: "AI generated cartoon drawing of a mouse dancing at a party.",
  },
  {
    name: "pig",
    link: "./images/pig.png",
    alt: "AI generated cartoon drawing of a very happy pig on a farm with friends.",
  },
  {
    name: "snake",
    link: "./images/snake.png",
    alt: "AI generated cartoon drawing of a coiled snake in a flower garden.",
  },
  {
    name: "mongoose",
    link: "./images/mongoose.png",
    alt: "AI generated cartoon drawing of a mongoose, dancing in a forest.",
  },
  {
    name: "monkey",
    link: "./images/monkey.png",
    alt: "AI generated cartoon drawing of a smiling monkey playing in a tree.",
  },
  {
    name: "fish",
    link: "./images/fish.png",
    alt: "AI generated cartoon drawing of a very colorful fish in a coral reef.",
  },
  {
    name: "shark",
    link: "./images/shark.png",
    alt: "AI generated cartoon drawing of a jolly shark, pointing the way.",
  },
  {
    name: "whale",
    link: "./images/whale.png",
    alt: "AI generated cartoon drawing of a giggling whale spouting a geyser.",
  },
  {
    name: "dolphin",
    link: "./images/dolphin.png",
    alt: "AI generated cartoon drawing of a dolphin jumping out of the ocean.",
  },
  {
    name: "turtle",
    link: "./images/turtle.png",
    alt: "AI generated cartoon drawing of a turtle, vacationing at the beach",
  },
];

startButton.addEventListener("click", startGame);
replayButton.addEventListener("click", () => location.reload());

function startGame() {
  startScreen.style.display = "none";
  gameScreen.style.display = "flex";

  let randomNumbers = [];
  while (randomNumbers.length < 3) {
    let num = Math.floor(Math.random() * 12);
    if (!randomNumbers.includes(num)) randomNumbers.push(num);
  }

  masterSet = [
    quizPics[randomNumbers[0]].name,
    quizPics[randomNumbers[1]].name,
    quizPics[randomNumbers[2]].name,
  ];

  const imageLinks = [
    quizPics[randomNumbers[0]].link,
    quizPics[randomNumbers[1]].link,
    quizPics[randomNumbers[2]].link,
  ];

  displayImages(imageLinks);
}

function displayImages(imageLinks) {
  displayedImage.style.display = "none";
  displayedImage.src = "./images/black.png";

  setTimeout(() => {
    displayedImage.style.display = "block";
    displayedImage.src = "./images/black.png";
  }, 2500);

  setTimeout(() => {
    displayedImage.src = imageLinks[0];
  }, 5000);

  setTimeout(() => {
    displayedImage.src = "./images/black.png";
  }, 5500);

  setTimeout(() => {
    displayedImage.src = imageLinks[1];
  }, 9000);

  setTimeout(() => {
    displayedImage.src = "./images/black.png";
  }, 9300);

  setTimeout(() => {
    displayedImage.src = imageLinks[2];
  }, 13500);

  setTimeout(() => {
    displayedImage.src = "./images/black.png";
  }, 13800);

  setTimeout(() => {
    displayedImage.style.display = "none";
    displayedImage.src = "";
  }, 14500);

  setTimeout(populateQuiz, 15500);
}

function populateQuiz() {
  quizContainer.innerHTML = "";
  selectedPictures = [];

  quizPics.forEach((pic) => {
    const img = document.createElement("img");
    img.src = pic.link;
    img.classList.add("picture");

    img.addEventListener("click", () => {
      if (selectedPictures.length < 3) {
        selectedPictures.push(pic.name);
        img.classList.add("selected");

        if (selectedPictures.length === 3) {
          checkResults();
        }
      }
    });

    quizContainer.appendChild(img);
  });

  startTimer();
}

function startTimer() {
  timerDisplay.style.display = "block";
  let timeLeft = 10;
  timerDisplay.textContent = `Time Left: ${timeLeft}s`;

  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Time Left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      timerDisplay.style.display = "none";
      checkResults(true);
    }
  }, 1000);
}

function checkResults(timeIsUp = false) {
  clearInterval(timer);
  timerDisplay.style.display = "none";

  let correctCount = selectedPictures.filter(
    (pic, index) => pic === masterSet[index]
  ).length;

  resultsDiv.style.display = "block";

  if (timeIsUp) {
    if (correctCount < 2) {
      resultsDiv.innerHTML = `<b style="color: white; font-size: 20px;">Time's up, you have ${correctCount} correct, you need at least two, sorry you lose.</b>`;
    } else {
      resultsDiv.innerHTML = `<b style="color: white; font-size: 30px;">Time's up, Congratulations you have ${correctCount} correct! You Win!</b>`;
    }
  } else if (correctCount === 3) {
    resultsDiv.innerHTML = `<b style="color: white; font-size: 20px;">Terrific! Perfect, you got all three within your allotted time!!! Winner!!!!</b>`;
  } else if (selectedPictures.length === 3 && correctCount < 2) {
    resultsDiv.innerHTML = `<b style="color: white; font: 10px;">You got ${correctCount} out of 3 correct. Sorry, you lose.</b>`;
  }

  replayButton.style.display = "block";
}
