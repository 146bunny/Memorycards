
let items = document.querySelectorAll(".items");
let disableCards=false;
let matchedCards=0;
let flips=0;
let timer = 0;
let cardOne, cardTwo;
function flipCard(e) {

  let clickedCard = e.target;

  if (clickedCard !== cardOne && !disableCards) {
    clickedCard.classList.add("flip");
    if (!cardOne) {
      return cardOne = clickedCard;
    }
    cardTwo = clickedCard;
    disableCards=true;
    let img1 = cardOne.querySelector("img").src;
    let img2 = cardTwo.querySelector("img").src;
    matchCards(img1, img2);
flips+=2;
console.log(flips);
let f=document.querySelector(".flipsCount");
f.textContent="Flips:"+flips;
console.log(f.innerHTML);

  }
}

function matchCards(i1, i2) {
  if(i1===i2){
    matchedCards++;
    if(matchedCards==10){
      disableCards = true;
      // setTimeout(()=>{return shuffleImages();},1000);
            // Shuffle images when the "Reset" button is clicked
  document.querySelectorAll(".items").forEach(item => item.classList.remove("flip"));
  shuffleImages();
matchedCards = 0;
flips = 0;
document.querySelector(".flipsCount").textContent = "Flips:0";
resetTimer();
startTimer();
      
    }
    // cardOne.removeEventListener("click", flipCard);
    // cardTwo.removeEventListener("click", flipCard);
    cardOne=cardTwo="";
    return disableCards=false;
  }
  
  setTimeout(()=>{
    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");
  },200);
  setTimeout(()=>{
    cardOne.classList.remove("shake","flip");
    cardTwo.classList.remove("shake","flip");
    cardOne=cardTwo="";
    disableCards=false;
  },1000);

  
  
}

// Shuffle images
function shuffleImages() {
  disableCards=false;
  var rows = document.getElementsByClassName('game'); // Get all rows of images
  for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      var images = row.getElementsByClassName('items'); // Get all image items in the row
      for (var j = images.length - 1; j > 0; j--) {
          var k = Math.floor(Math.random() * (j+1)); // Generate a random index
          row.insertBefore(images[j], images[k]); // Swap the images using insertBefore
      }
  }
}


function startTimer() {
  intervalId = setInterval(function () {
    timer++;
    let t = document.querySelector(".timer");
    t.textContent = "Timer: " + timer + "s";
  }, 1000);
}

function resetTimer() {
  clearInterval(intervalId);
  timer = 0;
  let t = document.querySelector(".timer");
  t.textContent = "Timer: " + timer + "s";
}
window.onload = function() {
  shuffleImages(); // Shuffle images when the page loads
  startTimer();
};

document.getElementById('reset').addEventListener('click', ()=> {
  shuffleImages(); 
  document.querySelectorAll(".items").forEach(item => item.classList.remove("flip"));

flips = 0;
document.querySelector(".flipsCount").textContent = "Flips:0";
resetTimer();
startTimer();

});

//this function can only be used if all the images are in png format with names img-1,img-2.png etc
// function shuffleCards(){
// matchedCards=0;
// cardOne=cardTwo="";
// let arr=[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];
// arr.sort(()=>Math.random()>0.5?1:-1);

// items.forEach(item => {
//   item.classList.remove("flip");
//   // let imgTag=item.querySelector("img");
//   // imgTag.src=`images/img-${arr[i]}.png`;
//   item.addEventListener("click", flipCard)
// });

// }
items.forEach(item => {
  item.addEventListener("click", flipCard)
  
});





