// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const error = document.getElementById('modal');
error.className = 'hidden';

const emptyHeart = document.getElementsByClassName('like-glyph');
for(let heart of emptyHeart) {
  heart.addEventListener('click', likeHeart);
}

function likeHeart(e) {
  mimicServerCall()
  .then(() => {
    if(e.target.innerText = EMPTY_HEART) {
      e.target.innerText = FULL_HEART;
      e.target.className = 'activated-heart';
    } else {
      e.target.innerText = EMPTY_HEART;
      e.target.className = '';
      console.log(e.target.innerText);
    }
  })
  .catch(() => {
    error.className = '';
    setTimeout(() => error.className = 'hidden', 3000);
  })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

//-----------------------------------------------------------------------------


