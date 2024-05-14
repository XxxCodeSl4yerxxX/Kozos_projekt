const foAblak = document.getElementById('foAblak');
const correctAnswer = document.getElementById('correctAnswer');
const kovKerdesGomb = document.getElementById('kovKerdes');
const valaszA = document.getElementById('answerA');
const valaszB = document.getElementById('answerB');
const valaszC = document.getElementById('answerC');
const valaszD = document.getElementById('answerD');
const szoveg = document.getElementById('szoveg');
const kerdesMatrix = "!!!kerdeseket ide!!!";
//ide deklarald a kerdesek char matrixat, 'kerdesSzam' sor jeloli
//a kerdes sorszamat, az oszlopok pedig a karakterek
const valaszMatrix = [
    [150, 180, 200, 270],
    ['a1', 'b1', 'c1', 'd1'],
    ['a2', 'b2', 'c2', 'd2'],
    ['a3', 'b3', 'c3', 'd3'],
    ['a4', 'b4', 'c4', 'd4'],
    ['a5', 'b5', 'c5', 'd5'],
    ['a6', 'b6', 'c6', 'd6'],
    ['a7', 'b7', 'c7', 'd7'],
    ['a8', 'b8', 'c8', 'd1'],
    ['a9', 'b9', 'c9', 'd1'],
];
//ide deklarald a valaszokat
const helyesValaszok = ['b', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'];
let answered = false;
let kerdesSzam = 0;
let valasz;

function checkAnswer(answer) {
    if (!answered) {
        if (answer === helyesValaszok[kerdesSzam]) {
            foAblak.style.backgroundColor = 'green';
            kovKerdesGomb.style.visibility = 'visible';
        } else {
            foAblak.style.backgroundColor = 'red';
            correctAnswer.style.visibility = 'visible';
            kovKerdesGomb.style.visibility = 'visible';
        }
        answered = true;
    }
    kovKerdesGomb.addEventListener('click', quizKezd);
}

function dontesA() {
    console.log('a');
    valasz = 'a';
    checkAnswer(valasz);
}

function dontesB() {
    console.log('b');
    valasz = 'b';
    checkAnswer(valasz);
}

function dontesC() {
    console.log('c');
    valasz = 'c';
    checkAnswer(valasz);
}

function dontesD() {
    console.log('d');
    valasz = 'd';
    checkAnswer(valasz);
}

function quizKezd() {
    szoveg.textContent = kerdesMatrix;
    valaszA.textContent = valaszMatrix[kerdesSzam][0];
    valaszB.textContent = valaszMatrix[kerdesSzam][1];
    valaszC.textContent = valaszMatrix[kerdesSzam][2];
    valaszD.textContent = valaszMatrix[kerdesSzam][3];
    correctAnswer.style.visibility = 'hidden';
    foAblak.style.backgroundColor = 'white';
    kovKerdesGomb.style.visibility = 'hidden';
    valaszA.addEventListener('click', dontesA);
    valaszB.addEventListener('click', dontesB);
    valaszC.addEventListener('click', dontesC);
    valaszD.addEventListener('click', dontesD);
    kerdesSzam++;
}


function kovKerdes(kerdesSzam) {
    correctAnswer.style.visibility = 'hidden';
    foAblak.style.backgroundColor = 'white';
}

quizKezd();
