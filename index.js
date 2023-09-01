


function toggleDarklight(){
var body = document.getElementById("body");
var currentClass = body.className;
body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}






const quotes = [

    {
        text: "All our dreams can come true, if we have the courage to pursue them.",
        author: "Walt Disney"
    },
    {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        text: "I\’ve missed more than 9,000 shots in my career. I\’ve lost almost 300 games. 26 times I\’ve been trusted to take the game winning shot and missed. I\’ve failed over and over and over again in my life, and that is why I succeed.",
        author: "Michael Jordan"
    },
    {
        text: "Don\’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",
        author: "Mary Kay Ash"
    },
    {
        text: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb "
    },
    {
        text: "Only the paranoid survive.",
        author: "Andy Grove "
    },
    {
        text: "It\’s hard to beat a person who never gives up.",
        author: "Babe Ruth"
    },
    {
        text: "I wake up every morning and think to myself, \‘How far can I push this company in the next 24 hours.",
        author: "Leah Busque"
    },
    {
        text: "We need to accept that we won\’t always make the right decisions, that we\’ll screw up royally sometimes―understanding that failure is not the opposite of success, it\’s part of success.",
        author: "Arianna Huffington"
    },
    {
        text: "Write it. Shoot it. Publish it. Crochet it. Sauté it. Whatever. MAKE.",
        author: "Joss Whedon"
    },
    {
        text: "If people are doubting how far you can go, go so far that you can\’t hear them anymore.",
        author: "Michele Ruiz"
    },


];

const displayRandomQuote = () => {
let RandomQuoteIndex = Math.floor(Math.random() * quotes.length);

let quoteElement = quotes[RandomQuoteIndex];

const quoteParagraph = document.getElementById("quote");

const quoteAuthor = document.getElementById("author");

quoteParagraph.innerHTML = quoteElement.text;
quoteAuthor.innerHTML = quoteElement.author;

}

let quoteButton = document.getElementById("getQuote");

quoteButton.onclick = displayRandomQuote;






// // trying arrayBuffer.map

// // const { arrayBuffer } = require("stream/consumers");
// const names = [ "drew", "ana", "bella", "john", "derek",];

// // const example = someArray.map()

// // want to function hwihc take each of these name ans rtuen for student 

// function createStudent(name){
//     return name + " is a student";
// }

// const studentNames = names.map(createStudent)
// console.log(studentNames);



// // other things
// const numbers = [3, 5, 2, 8, 6];
// function timesTwo(num){
//     return num * 2
// }
// const doubled = numbers.map(timesTwo);
// console.log(numbers);
// console.log(doubled);



// // socials direct link with anayomus 
// const socials = [ "lindkin", "github", "instagram", "facebook", "twitter"];
// // for each tim i want to add https to star and .com to end

// const socialURLS = socials.map(  (site)=> "https://" + site + ".com " );
// console.log(socialURLS);






// // use .map with ojects inside arrays 
// const websites =[
//         {name: "google",
//         url: "google.com",
//         username: "franny23"},

//         {name: "github",
//         url: "github.com",
//         username: "franny2333"},

//         {name: "twitter",
//         url: "twitter.com",
//         username: "franny2333333333"},

//         {name: "instagram",
//         url: "instagram.com",
//         username: "franny233333333333333333"},];
// // genreate list of links 
// // each link shoudl have url and url propery username and use name of it tect 
// //  end reseult <li><a href "google.com/franny23"> google </a></li> 


// const listItems = websites.map((item)=>{
//     return` <li> <a href="${item.url}/${item.username}">${item.name}</a> </li>`
// }) 


// for (item in listItems){
//     document.getElementById("socialLinks").innerHTML += listItems[item];

// }


