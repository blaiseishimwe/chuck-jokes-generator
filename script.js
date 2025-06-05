const jokeBtn = document.getElementById('joke-btn');
const jokeAutoBtn = document.getElementById('multiplejoke-btn');
const cancelAutoJokeBtn = document.getElementById('stopMultiplejoke-btn');
let intervalID;

function getAjoke() {
  const xhr = new XMLHttpRequest();
  const method = 'GET';
  const url = 'https://api.chucknorris.io/jokes/random/';
  xhr.open(method, url);

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        document.getElementById('joke').innerText = JSON.parse(
          xhr.responseText
        ).value;
      } else {
        document.getElementById('joke').innerText =
          'Something fishy...Not funny!';
      }
    }
    const i = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.background = `#${i}`;
    changeColor();
  };

  xhr.send();
}

function changeColor() {
  {
    const colors = ['red', 'yellow', 'blue', 'green', 'white', 'grey'];
    const i = Math.floor(Math.random() * colors.length);
    document.querySelector('.container').style.background = colors[i];
  }
}

function getAutoJokes() {
  if (!intervalID) {
    const speed = prompt(
      'How fast do you want to read a new joke? Please enter a numerical value for time in seconds. Cancel Auto Jokes and reset the frequence any time!'
    );
    console.log(speed);
    intervalID = setInterval(getAjoke, speed * 1000);
  }
}

function stopAutoJokes() {
  if (intervalID) {
    clearInterval(intervalID);
    intervalID = undefined;
    document.body.style.background = '#686de0';
    document.querySelector('.container').style.background = 'white';
  }
}

jokeBtn.addEventListener('click', getAjoke);
jokeAutoBtn.addEventListener('click', getAutoJokes);
cancelAutoJokeBtn.addEventListener('click', stopAutoJokes);
document.addEventListener('DOMContentLoaded', getAjoke);
