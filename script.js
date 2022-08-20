// Access HTML elements

let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let doorImage4 = document.getElementById('door4');

let startButton = document.getElementById('start');

let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';

let pocetZatvorenychDveri = 4;
let otvoreneDvere1;
let otvoreneDvere2;
let otvoreneDvere3;
let otvoreneDvere4;
let currentlyPlaying = true;

//definuj Game-logiku na kontrolu dveri, progresu hry, a vyber nahodne dvere robota
const jeToRobot = (door) => {
  if (door.src === botDoorPath) {
    return true;
  } else {
  return false;
}
} 
const jeClicknute = (door) => {
   if (door.src === closedDoorPath) {
     return true;
   } else {
   return false;
 }
 }



const playDoor = (door) => {
  pocetZatvorenychDveri--; 



if (pocetZatvorenychDveri===0) {
  gameOver('win'); 
} else if (jeToRobot(door)) {
   gameOver();
 } 
}

const generatorNahodnychDveriUpratovania = () => {
  const dvereUpratovania = Math.floor(Math.random() * pocetZatvorenychDveri);


if (dvereUpratovania === 0) {
  otvoreneDvere1 = botDoorPath;
  otvoreneDvere2 = spaceDoorPath;
  otvoreneDvere3 = beachDoorPath;
  otvoreneDvere4 = spaceDoorPath;
   } else if (dvereUpratovania === 1) {
    otvoreneDvere2 = botDoorPath;
    otvoreneDvere1 = beachDoorPath; 
    otvoreneDvere3 = spaceDoorPath;
    otvoreneDvere4 = spaceDoorPath;
  } else if  (dvereUpratovania === 2) {
    otvoreneDvere3 = botDoorPath;  
    otvoreneDvere1 = beachDoorPath;
    otvoreneDvere2 = spaceDoorPath;
    otvoreneDvere4 = spaceDoorPath;
  }
  else  { (dvereUpratovania === 3) 
    otvoreneDvere4 = botDoorPath;  
    otvoreneDvere1 = beachDoorPath;
    otvoreneDvere2 = spaceDoorPath;
    otvoreneDvere3 = spaceDoorPath;
  }

}


door1.onclick = () => {
  if (currentlyPlaying && jeClicknute(door1)) {
    doorImage1.src = otvoreneDvere1;
    playDoor(door1);
  }
}

door2.onclick = () => {
  if (currentlyPlaying && jeClicknute(door2)) {
    doorImage2.src = otvoreneDvere2;
    playDoor(door2);
  }
}

door3.onclick = () => {
  if (currentlyPlaying && jeClicknute(door3)) {
    doorImage3.src = otvoreneDvere3;
    playDoor(door3);
  }
}
door4.onclick = () => {
  if (currentlyPlaying && jeClicknute(door4)) {
    doorImage4.src = otvoreneDvere4;
    playDoor(door4);
  }
}

startButton.onclick = () => {
  if (!currentlyPlaying) {
    startRound();

  }
}


// Start a game round

const startRound = () => { 
door1.src=closedDoorPath;
door2.src=closedDoorPath;
door3.src=closedDoorPath;
door4.src=closedDoorPath;
pocetZatvorenychDveri = 4;
currentlyPlaying = true;
startButton.innerHTML ='Veľa šťastia!';
generatorNahodnychDveriUpratovania();

}

const gameOver = (status) => {
  if (status==='win') {
    startButton.innerHTML ="Vyhral si! Hrať znovu?";
  } else { 
    startButton.innerHTML ='Koniec Hry! Hrať znovu?';
  }
  currentlyPlaying = false;
}

startRound();

