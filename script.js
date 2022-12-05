const seqArr = [];

const playerArr = [];

let startButton = document.querySelector('#startButton');
let greenB = document.querySelector('#pB1');
let redB = document.querySelector('#pB2');
let yellowB = document.querySelector('#pB3');
let blueB = document.querySelector('#pB4');

function pushG() {
    playerArr.push(0)
    greenB.classList.remove('pB1off')
    greenB.classList.add('pB1on')
    setTimeout(dimGreenB, 500)
    console.log(playerArr)
}

function pushR() {
    playerArr.push(1)
    redB.classList.remove('pB2off')
    redB.classList.add('pB2on')
    setTimeout(dimRedB, 500)
}

function pushY() {
    playerArr.push(2)
    yellowB.classList.remove('pB3off')
    yellowB.classList.add('pB3on')
    setTimeout(dimYellowB, 500)
}

function pushB() {
    playerArr.push(3)
    blueB.classList.remove('pB4off')
    blueB.classList.add('pB4on')
    setTimeout(dimBlueB, 500)
}
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
    if (seqArr.includes(0)) {
        greenB.classList.remove('pB1off')
        greenB.classList.add('pB1on')
        setTimeout(dimGreenB, 500)
    }
};

function lightRedB() {
    if (seqArr.includes(1)) {
        redB.classList.remove('pB2off')
        redB.classList.add('pB2on')
        setTimeout(dimRedB, 500)
    }
};

function lightYellowB() {
    if (seqArr.includes(2)) {
        yellowB.classList.remove('pB3off')
        yellowB.classList.add('pB3on')
        setTimeout(dimYellowB, 500)
    }
};

function lightBlueB() {
    if (seqArr.includes(3)) {
        blueB.classList.remove('pB4off')
        blueB.classList.add('pB4on')
        setTimeout(dimBlueB, 500)
    }
};

function startGame() {
    if (seqArr.length === 0) {
    let color1 = getRandomInt(4);
    seqArr.push(color1)
    console.log(seqArr);
    lightGreenB(seqArr);
    lightBlueB(seqArr);
    lightRedB(seqArr);
    lightYellowB(seqArr);
    }
    else return
};

