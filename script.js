document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen');
    const gameScreen = document.getElementById('game-screen');
    const startButton = document.getElementById('start-button');
    const replayButton = document.getElementById('replay-button');
    const quizContainer = document.getElementById('quiz-container');
    const resultsDiv = document.getElementById('results');
    let selectedPictures = [];

    startButton.addEventListener('click', () => {
        startScreen.style.display = 'none';
        gameScreen.style.display = 'block';
        startGame();
    });

    function startGame() {
        const quizPics = [
            {ID: 1, name: 'bird', link: './images/bird.png'},
            {ID: 2, name: 'cat', link: './images/cat.png'},
            {ID: 3, name: 'mouse', link: './images/mouse.png'},
            {ID: 4, name: 'pig', link: './images/pig.png'},
            {ID: 5, name: 'snake', link: './images/snake.png'},
            {ID: 6, name: 'mongoose', link: './images/mongoose.png'},
            {ID: 7, name: 'monkey', link: './images/monkey.png'},
            {ID: 8, name: 'fish', link: './images/fish.png'},
            {ID: 9, name: 'shark', link: './images/shark.png'},
            {ID: 10, name: 'whale', link: './images/whale.png'},
            {ID: 11, name: 'dolphin', link: './images/dolphin.png'},
            {ID: 12, name: 'turtle', link: './images/turtle.png'},
        ];

        const firstRan = Math.floor(Math.random() * 12);
        const secondRan = Math.floor(Math.random() * 12);
        const thirdRan = Math.floor(Math.random() * 12);

        const selectNameOne = quizPics[firstRan].name;
        const selectLinkOne = quizPics[firstRan].link;

        const selectNameTwo = quizPics[secondRan].name;
        const selectLinkTwo = quizPics[secondRan].link;

        const selectNameThree = quizPics[thirdRan].name;
        const selectLinkThree = quizPics[thirdRan].link;

        const masterSet = [selectNameOne, selectNameTwo, selectNameThree];

        function displayImages() {
            const imageDisplay = document.getElementById('imageDisplay');

            imageDisplay.src = "./images/black.png";

            setTimeout(() => {
                imageDisplay.src = selectLinkOne;
            }, 1000);

            setTimeout(() => {
                imageDisplay.src = "./images/black.png";
            }, 1500);

            setTimeout(() => {
                imageDisplay.src = selectLinkTwo;
            }, 3500);

            setTimeout(() => {
                imageDisplay.src = "./images/black.png";
            }, 4000);

            setTimeout(() => {
                imageDisplay.src = selectLinkThree;
            }, 7000);

            setTimeout(() => {
                imageDisplay.src = "./images/black.png";
            }, 7500);

            setTimeout(populateQuiz, 8000);
        }

        displayImages();

        function createPictureElement(pic) {
            const img = document.createElement('img');
            img.src = pic.link;
            img.classList.add('picture');
            img.addEventListener('click', function () {
                if (selectedPictures.length < 3) {
                    selectedPictures.push(pic.name);
                    img.style.border = '2px solid blue';
                } else {
                    alert("You can only select three pictures.");
                }
            });
            return img;
        }

        function populateQuiz() {
            quizPics.forEach(pic => {
                quizContainer.appendChild(createPictureElement(pic));
            });
        }

        const checkButton = document.createElement('button');
        checkButton.textContent = "Check Results";
        checkButton.className = "game-button";

        const buttonContainer = document.createElement('div');
        buttonContainer.appendChild(checkButton);

        quizContainer.parentNode.insertBefore(buttonContainer, quizContainer.nextSibling);

        function checkResults() {
            let correctCount = 0;
            selectedPictures.forEach(selected => {
                if (masterSet.includes(selected)) {
                    correctCount++;
                }
            });

            const percentage = Math.round((correctCount / 3) * 100);

            let message = `You got <b>${correctCount}</b> out of **3** correct!, which is ${percentage}%`;

            if (percentage > 60) {
                message += " You Win!!!";
            } else {
                message += " Sorry, you lose. Do you suffer from CRS?";
            }

            resultsDiv.innerHTML = message;
            resultsDiv.style.display = "block";

        }

        checkButton.addEventListener('click', checkResults);
    }
    if (replayButton) {
        replayButton.style.display = 'block';
        replayButton.addEventListener('click', () => {
            location.reload();
        });
    }
});
