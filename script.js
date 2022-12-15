const seqArr = [];

const playerArr = [];

let startButton = document.querySelector('#startButton');
let greenB = document.querySelector('#pB1');
let redB = document.querySelector('#pB2');
let yellowB = document.querySelector('#pB3');
let blueB = document.querySelector('#pB4');
let counter = document.getElementById('cIndicator');
let highScore = document.getElementById('hIndicator');

counter.textContent = '0';
highScore.textContent = '0';

function pushG() {
    playerArr.push(0)
    greenB.classList.remove('pB1off')
    greenB.classList.add('pB1on')
    setTimeout(dimGreenB, 500)
    console.log(playerArr)
  
    gamePlay();
};

function pushR() {
    playerArr.push(1)
    redB.classList.remove('pB2off')
    redB.classList.add('pB2on')
    setTimeout(dimRedB, 500)
    console.log(playerArr)
  
   gamePlay();
};

function pushY() {
    playerArr.push(2)
    yellowB.classList.remove('pB3off')
    yellowB.classList.add('pB3on')
    setTimeout(dimYellowB, 500)
    console.log(playerArr)
 
  gamePlay();
};

function pushB() {
    playerArr.push(3)
    blueB.classList.remove('pB4off')
    blueB.classList.add('pB4on')
    setTimeout(dimBlueB, 500)
    console.log(playerArr)
 
  gamePlay();
};
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };

  function dimGreenB() {
    
        greenB.classList.remove('pB1on')
        greenB.classList.add('pB1off')
       
    };


function dimRedB() {
    
        redB.classList.remove('pB2on')
        redB.classList.add('pB2off')
    };      

function dimYellowB() {
    
        yellowB.classList.remove('pB3on')
        yellowB.classList.add('pB3off')
       
    };

function dimBlueB() {
   
        blueB.classList.remove('pB4on')
        blueB.classList.add('pB4off')
       
    };


function lightGreenB() {
   
        greenB.classList.remove('pB1off')
        greenB.classList.add('pB1on')
        setTimeout(dimGreenB, 500)
   
};

function lightRedB() {
  
        redB.classList.remove('pB2off')
        redB.classList.add('pB2on')
        setTimeout(dimRedB, 500)
   
};

function lightYellowB() {
  
        yellowB.classList.remove('pB3off')
        yellowB.classList.add('pB3on')
        setTimeout(dimYellowB, 500)
  
};

function lightBlueB() {
   
        blueB.classList.remove('pB4off')
        blueB.classList.add('pB4on')
        setTimeout(dimBlueB, 500)
    
};

function startGame() {
    while (playerArr.length > 0) {
        playerArr.pop()
    }
    if (seqArr.length === 0) {
    let color1 = getRandomInt(4);
    seqArr.push(color1)
    console.log(seqArr);
    lightColor(color1);
    startButton.textContent = 'Reset';
    }
    else if (seqArr.length > 0) {
    while (seqArr.length > 0) {
        seqArr.pop()
    }
    while (playerArr.length > 0) {
        playerArr.pop();
    }
    startButton.textContent = 'Play'
} counter.textContent = 0;
};



function continueGame() {
    let nextColor = getRandomInt(4);
    seqArr.push(nextColor)
    while (playerArr.length > 0) {
        playerArr.pop();
    }
    for (let i = 0; i < seqArr.length; i++) {
        setTimeout(()=>
            lightColor(seqArr[i]), i*800 + 500);
    }
    counter.textContent = seqArr.length - 1;
    console.log(playerArr, seqArr)
    return
    }
        
        
    


function lightColor(color) {
    if (color === 0) {
        lightGreenB()
    }
    else if (color === 1) {
        lightRedB()
    }
    else if (color === 2) {
        lightYellowB()
    }
    else if (color === 3) {
        lightBlueB()
    }
}

const arrLength = function (a, b) {
    if (a.length !== b.length) {
        return false;
    } return true;
}


const arrMatch = function(a, b) {
    //console.log(a, b)
    let c = b.toString().slice(0, a.toString().length);
    
    
   // console.log(a.toString(), c)
   return (a.toString() === c); 
}

const resultLoss = function(a, b) {
    
    if (a === true && b !== true || a !== true && b !== true) {
     //   console.log(a, b)
        return true;
    } else
   // console.log(a, b)
     return false;
}

const resultContRound = function(a, b) {
    if (a !== true && b === true) {
     //   console.log(a, b)
        return true;
    } else 
   // console.log(a, b)
    return false;
};

const resultNextRound = function(a, b) {
    if (a === true && b === true) {
       // console.log(a, b)
        return true;
        
    } else
  //  console.log(a, b)
     return false;
}

    function gamePlay() {
       
     if (resultContRound(arrLength(playerArr, seqArr), arrMatch(playerArr, seqArr)) === true) {
        console.log('match')
        return
    } else if (resultNextRound(arrLength(playerArr, seqArr), arrMatch(playerArr, seqArr)) === true) {
       // console.log(playerArr, seqArr)
        setTimeout(continueGame, 500);
        return
    } else if (resultLoss(arrLength(playerArr, seqArr), arrMatch(playerArr, seqArr)) === true) {
            console.log('no match!');
            while (seqArr.length > 0) {
                seqArr.pop();
                playerArr.pop();
                startButton.textContent = 'Lose, restart!';

                if (Number(counter.textContent) > Number(highScore.textContent)) {
                    highScore.textContent = counter.textContent;
                }
              //  console.log(seqArr, playerArr)
                return
        }
    }
}

