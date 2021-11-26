const squares = document.querySelectorAll('.square');
let score = document.querySelector("#Score");
const timeLeft = document.querySelector("#time-left");
const mole = document.querySelectorAll(".mole");

let result = 0;
let hitposition;
let timerId = null;
let currentTime = 60;

function randomSquare(){
	squares.forEach(square => {
		square.classList.remove('mole');
	})

	let randomSquare = squares[Math.floor(Math.random() * 9)];
	randomSquare.classList.add('mole');

	hitposition = randomSquare.id;
	console.log(hitposition);
}

squares.forEach(square => {
	square.addEventListener('mousedown', () => {
		if(square.id === hitposition){
			result ++;
			score.textContent = result;		
			hitposition = null;
		}
	})
})

function moveMole(){
	timerId = setInterval(randomSquare, 500);
}

moveMole();

function countDown(){
	currentTime--;
	timeLeft.textContent = currentTime;

	if(currentTime === 0){

		clearInterval(countDownTimerId);
		clearInterval(timerId);
		alert("Gameover! Your Final score is " + result);
	}
}


let countDownTimerId = setInterval(countDown, 1000);
