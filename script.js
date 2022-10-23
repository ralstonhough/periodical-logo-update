function setup() {
    createCanvas(350, 820);
    background('white');
};

function draw() {
    background('white');
    fill('black');
    
    //All crossbars
    //Top
    rect(26, 8, 308, 20);
    //F
    rect(34, 32, 8, 20);
    rect(26, 56, 16, 20);
    //O
    rect(50, 80, 16, 20);
    //R
    rect(74, 56, 16, 20);
    //E
    rect(106, 32, 8, 20);
    rect(98, 56, 16, 20);
    rect(98, 80, 16, 20);
    //I
    //G
    rect(142, 32, 8, 20);
    rect(134, 80, 16, 20);
    //N
    //A
    rect(186, 56, 16, 20);
    //F
    rect(218, 32, 8, 20);
    rect(210, 56, 16, 20);
    //F
    rect(242, 32, 8, 20);
    rect(234, 56, 16, 20);
    //A
    rect(258, 56, 16, 20);
    //I
    //R
    rect(294, 56, 16, 20);
    //S
    rect(326, 32, 8, 20);
    rect(318, 56, 16, 20);
    rect(318, 80, 16, 20);
    
    //All stems
    //F
    rect(26, 8, 4, 92);
    rect(38, 8, 4, 42);
    //O
    rect(50, 8, 4, 92);
    rect(62, 8, 4, 92);
    //R
    rect(74, 8, 4, 92);
    quad(86, 8, 90, 8, 90, 52, 86, 55);
    rect(86, 58, 4, 42);
    //E
    rect(98, 8, 4, 92);
    rect(110, 8, 4, 42);
    //I
    rect(122, 8, 4, 92);
    //G
    rect(134, 8, 4, 92);
    rect(146, 38, 4, 62);
    //N
    rect(158, 8, 4, 92);
    rect(170, 8, 4, 92);
    //A
    rect(186, 8, 4, 92);
    rect(198, 8, 4, 92);
    //F
    rect(210, 8, 4, 92);
    rect(222, 8, 4, 42);
    //F
    rect(234, 8, 4, 92);
    rect(246,8, 4, 42);
    //A
    rect(258, 8, 4, 92);
    rect(270, 8, 4, 92);
    //I
    rect(282, 8, 4, 92);
    //R
    rect(294, 8, 4, 92);
    quad(306, 8, 310, 8, 310, 52, 306, 55);
    rect(306, 58, 4, 42);
    //S
    rect(318, 8, 4, 68);
    rect(330, 8, 4, 42);
    rect(330, 58, 4, 42);
};

// let faRSS = `https://www.foreignaffairs.com/rss.xml`;
// fetch(faRSS)
//     .then(response => response.text())
//     .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
//     .then(data => {
//         console.log(data);
//         let faText = "";
//         let titles = data.querySelectorAll("title");
//         let descriptions = data.querySelectorAll("description");
//         for (let i = 1; i < 11; i++) {
//             let desText = descriptions[i].innerHTML;
//             let titText = titles[i].innerHTML
//             console.log(desText);
//             console.log(titText);
//             faText += desText;
//             faText += titText;
//         };
//         //Thanks to Chris Coyier for how to parse RSS to string
//         let options = {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Key': 'b156c9de98msh2063c059199c53ep1b56a0jsnace2ff8f093f',
//                 'X-RapidAPI-Host': 'twinword-sentiment-analysis.p.rapidapi.com'
//             }
//         };
//         fetch(`https://twinword-sentiment-analysis.p.rapidapi.com/analyze/?text=${faText}`, options)
//             .catch(err => console.error(err))
//             .then(response => response.json())
//             .then(response => {
//                 let score = response.score;
//                 let ratio = response.ratio;
//                 let ratioScaler = map(ratio, 1, -1, 1, 10);
//                 console.log(ratioScaler);
//                 console.log(response);
//                 console.log(`Score: ${score}`);
//                 console.log(`Ratio: ${ratio}`);
//             });
//     });

// let sentiment = document.getElementById("sentiment");
// let sentimentScaler = map(sentiment.value,1,1000,1,8);

// sentiment.oninput = function() {
//   let sentimentScaler = map(sentiment.value,1,1000,1,8);
//   title.style.transform = `translate(-50%, 0%) scale(1,${sentimentScaler})`;
// };

// No Touch
function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}