const homeScore = document.getElementById('home-point');
const guestScore = document.getElementById('guest-point');

const homeTitle = document.querySelector('.home-title');
const guestTitle = document.querySelector('.guest-title');

let homeScorePoints = 0;
let guestScorePoints = 0;

function addPointHome(point) {
    homeScorePoints += point;
    homeScore.textContent = homeScorePoints;
    getGameLider();
}

function addPointGuest(point) {
    guestScorePoints += point;
    guestScore.textContent = guestScorePoints;
    getGameLider();
}

function getGameLider() {
   const homeLeader = homeScorePoints > guestScorePoints;
   if (homeLeader) {
    homeTitle.style.color = '#9aabd8';
    guestTitle.style.color = ''
   } else {
    guestTitle.style.color = '#9aabd8';
    homeTitle.style.color = '';
   }
}

function setNewGame() {
  homeScorePoints = 0;
  homeScore.textContent = homeScorePoints;
  homeTitle.style.color = '';
    
  guestScorePoints = 0;
  guestScore.textContent = guestScorePoints;
  guestTitle.style.color = ''
}