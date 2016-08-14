var board = document.getElementById('game-board');
var cardsInPlay = [];
var cards = ["king", "queen", "king", "queen"];
function createBoard() {
     for(var i = 0; i < cards.length; i++) {
       var cardCreate = document.createElement('div');
       cardCreate.className += ' card';
         cardCreate.setAttribute('data-card', cards[i]);
         cardCreate.addEventListener('click', isTwoCards);
         board.appendChild(cardCreate);
         board.appendChild(cardCreate);
     }
 };
function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
  console.log(this.getAttribute('data-card'));
    if (this.getAttribute('data-card') === 'king') {
        this.innerHTML = "<img class='card' src='http://i.imgur.com/bnuv5Im.png'>";
    }
    else {
        this.innerHTML = "<img class='card' src='http://i.imgur.com/v6buNt2.png'>";
    }
   if (cardsInPlay.length === 2) {
     isMatch(cardsInPlay);
     cardsInPlay = [];
   }
};
function isMatch(cards) {
  if (cards[0] === cards[1]) {
     alert("You found a match!");
   }
     else {
     alert("Sorry, try again.");
   }
};
createBoard();
