document.addEventListener('DOMContentLoaded', () => {
    const pics = [ // AI used to generate these images
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
    
    const firstRan = Math.floor(Math.random() * 12 + 1);
    console.log(firstRan);

    const secondRan = Math.floor(Math.random() * 12 + 1);
    console.log(secondRan);

    const thirdRan = Math.floor(Math.random() * 12 + 1);
    console.log(thirdRan);

    const selectNameOne = pics[firstRan].name;
    const selectLinkOne = pics[firstRan].link;

    const selectNameTwo = pics[secondRan].name;
    const selectLinkTwo = pics[secondRan].link;

    const selectNameThree = pics[thirdRan].name;
    const selectLinkThree = pics[thirdRan].link;

    console.log(selectNameOne, selectLinkOne);
    console.log(selectNameTwo, selectLinkTwo);
    console.log(selectNameThree, selectLinkThree);

    function displayImages() {
        const imageDisplay = document.getElementById('imageDisplay');

        setTimeout(() => {
            imageDisplay.src ="./images/black.png";
        }, 0);
        
        setTimeout(() => {
            imageDisplay.src = selectLinkOne;
        }, 1000);
        
        setTimeout(() => {
            imageDisplay.src ="./images/black.png";
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
            imageDisplay.src = "";
        }, 7500)
    }

    displayImages();
}); 
