const foAblak = document.getElementById('foAblak');
const correctAnswer = document.getElementById('correctAnswer');
const kovKerdesGomb = document.getElementById('kovKerdes');
const valaszA = document.getElementById('answerA');
const valaszB = document.getElementById('answerB');
const valaszC = document.getElementById('answerC');
const valaszD = document.getElementById('answerD');
const szoveg = document.getElementById('szoveg');
const kerdesMatrix = "!!!kerdeseket ide!!!";
const javitas = document.getElementById('javitas');
const magyarazatLink = document.getElementById('magyarazatLink');
const osszesGomb = document.querySelectorAll('.button');

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
    ['a8', 'b8', 'c8', 'd8'],
    ['a9', 'b9', 'c9', 'd9'],
];
//ide deklarald a valaszokat
const helyesValaszok = ['b', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'];
//ide a helyes valaszok szovegreszet
const helyesValaszokSzoveg = [
    ['valasz 0'],
    ['valasz 1'],
    ['valasz 2'],
    ['valasz 3'],
    ['valasz 4'],
    ['valasz 5'],
    ['valasz 6'],
    ['valasz 7'],
    ['valasz 8'],
    ['valasz 9'],
]
//ide a helyes valaszok/kerdes temajat
const helyesValaszTema = [
    ['tema 0'],
    ['tema 1'],
    ['tema 2'],
    ['tema 3'],
    ['tema 4'],
    ['tema 5'],
    ['tema 6'],
    ['tema 7'],
    ['tema 8'],
    ['tema 9'],
]
//ide a tema dokumentaciojanak linkjet
const helyesValaszLink = [
    ['link 0'],
    ['link 1'],
    ['link 2'],
    ['link 3'],
    ['link 4'],
    ['link 5'],
    ['link 6'],
    ['link 7'],
    ['link 8'],
    ['link 9'],
]
let answered = false;
let kerdesSzam;
let kerdesMertek =0;
let valasz;
let pontszam = 0;
let frekv = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function checkAnswer(answer) {
    if (!answered) {
        if (answer === helyesValaszok[kerdesSzam]) {
            foAblak.style.backgroundColor = '#1f9d89';
            kovKerdesGomb.style.visibility = 'visible';
            pontszam++;
            if (valasz === 'a'){
                valaszA.style.background = 'grey';
            } else if (valasz === 'b') {
                valaszB.style.background = 'grey';
            } else if (valasz === 'c') {
                valaszC.style.background = 'grey';
            } else if (valasz === 'd') {
                valaszD.style.background = 'grey';
            }
        } else {
            foAblak.style.backgroundColor = '#c6010f';
            correctAnswer.style.visibility = 'visible';
            kovKerdesGomb.style.visibility = 'visible';
            javitas.textContent = 'A helyes valasz: ' + helyesValaszokSzoveg[kerdesSzam];
            magyarazatLink.href = helyesValaszLink[kerdesSzam];
            if (valasz === 'a'){
                valaszA.style.background = 'grey';
            } else if (valasz === 'b') {
                valaszB.style.background = 'grey';
            } else if (valasz === 'c') {
                valaszC.style.background = 'grey';
            } else if (valasz === 'd') {
                valaszD.style.background = 'grey';
            }        
        }
        answered = true;
    }
    kovKerdesGomb.addEventListener('click', quizKezd);
}

function dontesA() {
    //console.log('a');
    valasz = 'a';
    checkAnswer(valasz);
}

function dontesB() {
    //console.log('b');
    valasz = 'b';
    checkAnswer(valasz);
}

function dontesC() {
    //console.log('c');
    valasz = 'c';
    checkAnswer(valasz);
}

function dontesD() {
    //console.log('d');
    valasz = 'd';
    checkAnswer(valasz);
}

function randomSzam() {
    kerdesSzam = Math.floor(Math.random() * 10);
}

function quizKezd() {
    valaszA.style.background = 'lightgray';
    valaszB.style.background = 'lightgray';
    valaszC.style.background = 'lightgray';
    valaszD.style.background = 'lightgray';

    while (frekv[kerdesSzam] != 0 && kerdesMertek != 10) {
        randomSzam();
    }
    console.log(kerdesSzam + ' ' + kerdesMertek);
    szoveg.style.fontSize = 'x-large';
    if (kerdesMertek<=9) {
        valaszA.removeEventListener('click', dontesA);
        valaszB.removeEventListener('click', dontesB);
        valaszC.removeEventListener('click', dontesC);
        valaszD.removeEventListener('click', dontesD);
        
        valaszA.addEventListener('click', dontesA);
        valaszB.addEventListener('click', dontesB);
        valaszC.addEventListener('click', dontesC);
        valaszD.addEventListener('click', dontesD);
    
        szoveg.style.visibility = 'visible';
        valaszA.style.visibility = 'visible';
        valaszB.style.visibility = 'visible';
        valaszC.style.visibility = 'visible';
        valaszD.style.visibility = 'visible';
        foAblak.style.backgroundColor = 'white';
        correctAnswer.style.visibility = 'visible';
        kovKerdesGomb.style.visibility = 'visible';

        szoveg.textContent = kerdesMatrix;
        valaszA.textContent = valaszMatrix[kerdesSzam][0];
        valaszB.textContent = valaszMatrix[kerdesSzam][1];
        valaszC.textContent = valaszMatrix[kerdesSzam][2];
        valaszD.textContent = valaszMatrix[kerdesSzam][3];
    
        answered = false;
        foAblak.style.backgroundColor = 'white';
        correctAnswer.style.visibility = 'hidden';
        kovKerdesGomb.style.visibility = 'hidden';
        
        frekv[kerdesSzam]++;
        kerdesMertek++;
    } else {
        quizVege();
    }
}

function kovKerdes(kerdesSzam) {
    correctAnswer.style.visibility = 'hidden';
    foAblak.style.backgroundColor = 'white';
}

function quizVege() {
    valaszA.style.visibility = 'hidden';
    valaszB.style.visibility = 'hidden';
    valaszC.style.visibility = 'hidden';
    valaszD.style.visibility = 'hidden';

    foAblak.style.backgroundColor = 'white';
    correctAnswer.style.visibility = 'hidden';
    kovKerdesGomb.style.visibility = 'hidden';

    szoveg.style.visibility = 'visible';
    szoveg.style.fontSize = 'xx-large';
    szoveg.textContent = "Elért pontszám: " + pontszam;

    kovKerdesGomb.textContent = 'Quiz ujrakezdese';
    kovKerdesGomb.style.visibility = 'visible';

    for (let i=0; i<=9; i++) {
        frekv[i]=0;
    }
    kerdesMertek = 0;
    pontszam = 0;

    kovKerdesGomb.addEventListener('click', quizKezd);
}

quizKezd();