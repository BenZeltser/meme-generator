const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

//define variables for work.

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML=title;
    memeAuthor.innerHTML=`Meme by: ${author}`;

}

// create a function to parse the infromation according to the Json API.

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data)=>{
        updateDetails(data.url,data.title, data.author)
    });
};

// fetch data from the API and update it to re-generate.

generateMemeBtn.addEventListener("click", generateMeme);

// define response for the "generate" button.

generateMeme();

//activate by loading the website; avoid blank page.