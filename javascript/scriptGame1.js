// Script for gimmic of Rocket Project Game Group. :3 Fighting !!!
let time = 0;

// First stage set
let timechk = 0; //Time Check
let limitTime = 20;
let stageTime = 0;
let statusPlay = false;
let stageShow = 1;
let nextStage = 2;
let countBird = 6; // n-1 FIX BUG T_T
let speedY = -3;
let speedX = 2;
let speedVX = -2;
let secSpawn = 0;
let actFly = 0;
let birdsStack = new Array;
let score = 0;


//Graphic
let imgBirdsR = ["BGR.gif", "BRR.gif", "BBR.gif"];
let imgBirdsL = ["BGL.gif", "BRL.gif", "BBL.gif"];
let imgBirdsShot = ["BGShot.png", "BRShot.png", "BBShot.png"];
let imgBirdsDie = ["BGDie.png", "BRDie.png", "BBDie.png"];


//Loop
let frameGame;
let timeCheck;

function playGame1() {
    //Begin Game Start !
    statusPlay = true;
    stageTime = limitTime;
    time = 0;
    //Create Birds
    for (let c = 0; c < countBird; c++) {
        let bird = {
            id: c,
            scaleX: 70,
            scaleY: 70,
            posX: randomInt(0, 800 - 70),
            posY: 480,
            swap: randomInt(0, 1),
            life: true,
            fly: false,
            color: randomInt(0, 2),
            checkSFXdp: false //Check sound T_T
        }
        birdsStack.push(bird);
        let birdSpawn = document.createElement("div");
        birdSpawn.className = "birdSpawn";
        birdSpawn.id = "bird" + c;
        birdSpawn.onclick = function () { hitBird(c); };
        document.getElementById("areaBird").appendChild(birdSpawn);
        document.getElementById("bird" + c).style.left = (birdsStack[c].posX) + "px"; // Size of bird 70 * 70 px in birdSpawn Class
        document.getElementById("bird" + c).style.top = (birdsStack[c].posY) + "px";
    }
    //Play Sound
    StageSFX(1);
    let dpBird;

    // Checking Time for begin bird fly
    secSpawn = (limitTime) / countBird;

    timeCheck = setInterval(function () {
        time++;
        timechk++;
        stageTime--;
    }, 1000);

    // FPS
    frameGame = setInterval(function () {
        if (statusPlay) {
            loopGame();
        }
    }, 10);
}

function loopGame() {
    document.getElementById("timeHUD").innerHTML = "Time : " + stageTime;
    //Time out codition.
    if (stageTime == 0) {
        stageTime = limitTime;
        document.getElementsByClassName('game1HUD')[0].style.visibility = "hidden";
        document.getElementsByClassName('game1HUD')[1].style.visibility = "hidden";
        document.getElementsByClassName('game1HUD')[2].style.visibility = "hidden";
        document.getElementById('stG1').innerHTML = "Stage " + stageShow + " <br> Score : " + score;
        if (stageShow == 3) {
            document.getElementById('nextStG1').innerHTML = "Restart Game";
            //Play Sound
            StageSFX(3);
        }
        else {
            document.getElementById('nextStG1').innerHTML = "Next Stage ->";
            //Play Sound
            StageSFX(2);
        }
        document.getElementById("stageG1").style.visibility = "visible";
        document.getElementById("nextStG1").onclick = function () { stageGame(nextStage); };
        statusPlay = false;
    }
    // Wait to spawn bird
    if (timechk >= secSpawn) {
        birdsStack[actFly].fly = true;
        //Play Sound Spanw Bird
        if (actFly != birdsStack.length - 1) {
            let sfxBird = document.getElementById('bird' + actFly);
            SpawnBirdSFX(sfxBird);
        }

        if (actFly < birdsStack.length - 1) {
            actFly++;
        } else {
            actFly = birdsStack.length - 1;
        }
        timechk = 1;
    }
    // Loop for move birds
    for (let b = 0; b < birdsStack.length - 1; b++) {
        if (statusPlay) {
            if (birdsStack[b].fly == true && birdsStack[b].life == true) {
                let birdY = randomInt(-2, speedY);
                let birdX = 0;
                if (birdsStack[b].swap) {
                    birdX = randomInt(0, speedX);
                    document.getElementById("bird" + b).style.backgroundImage = "url(\'image/Game1/" + imgBirdsR[birdsStack[b].color] + "\')";
                }
                else {
                    birdX = randomInt(0, speedVX);
                    document.getElementById("bird" + b).style.backgroundImage = "url(\'image/Game1/" + imgBirdsL[birdsStack[b].color] + "\')";
                }
                birdsStack[b].posX = birdsStack[b].posX + birdX;
                birdsStack[b].posY = birdsStack[b].posY + birdY;

                //Block Border Game X
                if (birdsStack[b].posX < 0) {
                    birdsStack[b].posX = 0;
                    birdsStack[b].swap = true;
                }
                if ((birdsStack[b].posX + birdsStack[b].scaleX) > 800) {
                    birdsStack[b].posX = 800 - birdsStack[b].scaleX;
                    birdsStack[b].swap = false;
                }

                //Block Border Game Y
                if (birdsStack[b].posY < -5) {
                    birdsStack[b].posY = 480;
                    birdsStack[b].fly = false;
                }
                if ((birdsStack[b].posY - birdsStack[b].scaleY) > 480) {
                    birdsStack[b].posY = 480 - birdsStack[b].scaleY;
                }

                //Set Postion Bird
                document.getElementById("bird" + b).style.left = (birdsStack[b].posX) + "px"; // Size of bird 70 * 70 px in birdSpawn Class
                document.getElementById("bird" + b).style.top = (birdsStack[b].posY) + "px";

            }
            //If Bird die
            if (birdsStack[b].fly == false && birdsStack[b].life == false) {
                if ((birdsStack[b].posY) >= 480) {
                    // Play sound Bird Drop
                    birdsStack[b].posY = 480;
                    if (!birdsStack[b].checkSFXdp) {
                        dpBird = document.getElementById('bird' + b);
                        DropBirdSFX(dpBird);
                        birdsStack[b].checkSFXdp = true;
                    }
                }
                else {
                    document.getElementById("bird" + b).style.animation = "hitBird" + birdsStack[b].color + " 1s linear";
                    setTimeout(() => {
                        document.getElementById("bird" + b).style.backgroundImage = "url(\'image/Game1/" + imgBirdsDie[birdsStack[b].color] + "\')";
                        birdsStack[b].posX = birdsStack[b].posX + 0;
                        birdsStack[b].posY = birdsStack[b].posY + 8;
                    }, 1000);

                }
                document.getElementById("bird" + b).style.left = (birdsStack[b].posX) + "px";
                document.getElementById("bird" + b).style.top = (birdsStack[b].posY) + "px";

            }

        }
    }


}

function stageGame(stage) {
    //Set each stage
    document.getElementById("stageG1").style.visibility = "hidden";
    //Remove birds
    for (let rm = 0; rm < countBird; rm++) {
        document.getElementById("bird" + rm).remove;
        let temBird = document.getElementById("areaBird");
        temBird.removeChild(temBird.childNodes[0]);
    }
    birdsStack = new Array;
    actFly = 0;
    switch (stage) {
        case 1: // For reset Game to first stage.
            stageShow = 1;
            countBird = 6; // n-1
            limitTime = 20;
            nextStage = 2;
            score = 0;
            speedY = -3;
            speedX = 2;
            speedVX = -2;
            break;
        case 2:
            stageShow = 2;
            countBird = 21; // n-1
            limitTime = 25;
            nextStage = 3;
            speedY = -3;
            speedX = 3;
            speedVX = -3;
            break;
        case 3:
            stageShow = 3;
            countBird = 34; // n-1
            limitTime = 35;
            nextStage = 1;
            speedY = -4;
            speedX = 4;
            speedVX = -3.5;
            break;
    }
    //Show HUD each stage
    document.getElementById('stageHUD').innerHTML = "Stage " + stageShow;
    document.getElementsByClassName('game1HUD')[0].style.visibility = "visible";
    document.getElementsByClassName('game1HUD')[1].style.visibility = "visible";
    document.getElementsByClassName('game1HUD')[2].style.visibility = "visible";

    //Delay for begin XD
    setTimeout(() => {
        clearInterval(frameGame);
        clearInterval(timeCheck);
        playGame1();
    }, 1000);
}



function clickToP() {
    //Show HUD first stage
    document.getElementById('menu1').style.visibility = "hidden";
    document.getElementsByClassName('game1HUD')[0].style.visibility = "visible";
    document.getElementsByClassName('game1HUD')[1].style.visibility = "visible";
    document.getElementsByClassName('game1HUD')[2].style.visibility = "visible";
    pauseAudio(sfxFirst);
    playGame1();
}

function hitBird(number) {
    //Check hit a bird :D
    if (birdsStack[number].life == true) {
        score++;
    }
    //Play Sound Hit !
    let hitBirdSFX = document.getElementById('bird' + number);
    HitBirdSFX(hitBirdSFX);

    document.getElementById("scoreHUD").innerHTML = "Score : " + score;
    birdsStack[number].fly = false;
    birdsStack[number].life = false;
}

function randomInt(min, max) {
    //Random ref W3School :D
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Play sound
function playAudio(sfx) {
    sfx.play();
}

function pauseAudio(sfx) {
    sfx.load();
    sfx.pause();
}

let gameSound;
let sfxFirst;
let onStageSFX;

function firstViewSFX() {
    gameSound = document.getElementById("viewgame1");
    sfxFirst = document.createElement('AUDIO');
    sfxFirst.setAttribute("src", "sfx/game1/start.mp3");
    sfxFirst.volume = 0.5;
    sfxFirst.setAttribute("loop", "loop");
    gameSound.appendChild(sfxFirst);
    playAudio(sfxFirst);
}

function StageSFX(sfxOn) {
    switch (sfxOn) {
        case 1:
            gameSound = document.getElementById("viewgame1");
            onStageSFX = document.createElement('AUDIO');
            onStageSFX.setAttribute("src", "sfx/game1/openStage.mp3");
            onStageSFX.volume = 0.4;
            gameSound.appendChild(onStageSFX);
            pauseAudio(onStageSFX);
            playAudio(onStageSFX);
            break;
        case 2:
            gameSound = document.getElementById("viewgame1");
            onStageSFX = document.createElement('AUDIO');
            onStageSFX.setAttribute("src", "sfx/game1/End1-2.mp3");
            onStageSFX.volume = 0.4;
            gameSound.appendChild(onStageSFX);
            pauseAudio(onStageSFX);
            playAudio(onStageSFX);
            break;
        case 3:
            gameSound = document.getElementById("viewgame1");
            onStageSFX = document.createElement('AUDIO');
            onStageSFX.setAttribute("src", "sfx/game1/End3.mp3");
            onStageSFX.volume = 0.4;
            gameSound.appendChild(onStageSFX);
            pauseAudio(onStageSFX);
            playAudio(onStageSFX);
            break;
    }
}

function SpawnBirdSFX(bird) {
    spBirdSFX = document.createElement('AUDIO');
    spBirdSFX.setAttribute("src", "sfx/game1/BirdBeginFly.mp3");
    bird.appendChild(spBirdSFX);
    pauseAudio(spBirdSFX);
    playAudio(spBirdSFX);
}

function HitBirdSFX(bird) {
    hitBirdSFX = document.createElement('AUDIO');
    hitBirdSFX.setAttribute("src", "sfx/game1/hitShot.mp3");
    hitBirdSFX.volume = 0.7;
    bird.appendChild(hitBirdSFX);
    pauseAudio(hitBirdSFX);
    playAudio(hitBirdSFX);
}

function DropBirdSFX(bird) {
    dpBirdSFX = document.createElement('AUDIO');
    dpBirdSFX.setAttribute("src", "sfx/game1/BirdDrop.mp3");
    dpBirdSFX.volume = 0.7;
    bird.appendChild(dpBirdSFX);
    pauseAudio(dpBirdSFX);
    playAudio(dpBirdSFX);
}
