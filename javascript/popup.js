let pop;
let bgpop;
let content = ['pop01', 'pop02', 'pop11', 'pop21', 'pop31', 'pop41', 'pop42', 'pop43', 'pop51', 'pop52', 'pop53',
    'pop61', 'pop62', 'pop63', 'pop64', 'pop71', 'pop72', 'pop73', 'pop81', 'pop82', 'pop83', 'pop9'];
let backpop = ['back0', 'back1', 'back2', 'back3', 'back4', 'back5', 'back6', 'back7', 'back8', 'back9']

function openPopUp(x, y) {
    pop = document.getElementById(content[x]);
    pop.style.visibility = "visible";
    bgpop = document.getElementById(backpop[y]);
    pop.style.animation = "opElAni .25s linear";
    bgpop.style.visibility = "visible";
}

function closePopUp() {
    pop.style.animation = "clElAni .2s linear";
    setTimeout(() => {
        pop.style.visibility = "hidden";
        bgpop.style.visibility = "hidden";
    }, 200);
}

var maxVar0 = 0;
let var01 = 220;
let var02 = 220;

var maxVar1 = 0;
let var11 = 440;

var maxVar2 = 0;
let var21 = 440;

var maxVar3 = 0;
let var31 = 440;

var maxVar4 = 0;
let var41 = 220;
let var42 = 110;
let var43 = 110;

var maxVar5 = 0;
let var51 = 220;
let var52 = 110;
let var53 = 110;

var maxVar6 = 0;
let var61 = 110;
let var62 = 110;
let var63 = 110;
let var64 = 110;

var maxVar7 = 0;
let var71 = 220;
let var72 = 110;
let var73 = 110;

var maxVar8 = 0;
let var81 = 220;
let var82 = 110;
let var83 = 110;

function getprogress(a, b) {
    switch (a) {
        case 0:
            if (b == 1 & var01 == 220) {
                maxVar0 += var01;
                var01 = 0;
            }
            else if (b == 2 & var02 == 220) {
                maxVar0 += var02;
                var02 = 0;
            }
            document.getElementById('progress0').style.width = maxVar0 + 'px';
            break;
        case 1:
            if (b == 1 & var11 == 440) {
                maxVar1 += var11;
                var11 = 0;
            }
            document.getElementById('progress1').style.width = maxVar1 + 'px';
            break;
        case 2:
            if (b == 1 & var21 == 440) {
                maxVar2 += var21;
                var21 = 0;
            }
            document.getElementById('progress2').style.width = maxVar2 + 'px';
            break;
        case 3:
            if (b == 1 & var31 == 440) {
                maxVar3 += var31;
                var31 = 0;
            }
            document.getElementById('progress3').style.width = maxVar3 + 'px';
            break;
        case 4:
            if (b == 1 & var41 == 220) {
                maxVar4 += var41;
                var41 = 0;
            }
            else if (b == 2 & var42 == 110) {
                maxVar4 += var42;
                var42 = 0;
            }
            else if (b == 3 & var43 == 110) {
                maxVar4 += var43;
                var43 = 0;
            }
            document.getElementById('progress4').style.width = maxVar4 + 'px';
            break;
        case 5:
            if (b == 1 & var51 == 220) {
                maxVar5 += var51;
                var51 = 0;
            }
            else if (b == 2 & var52 == 110) {
                maxVar5 += var52;
                var52 = 0;
            }
            else if (b == 3 & var53 == 110) {
                maxVar5 += var53;
                var53 = 0;
            }
            document.getElementById('progress5').style.width = maxVar5 + 'px';
            break;
        case 6:
            if (b == 1 & var61 == 110) {
                maxVar6 += var61;
                var61 = 0;
            }
            else if (b == 2 & var62 == 110) {
                maxVar6 += var62;
                var62 = 0;
            }
            else if (b == 3 & var63 == 110) {
                maxVar6 += var63;
                var63 = 0;
            }
            else if (b == 4 & var64 == 110) {
                maxVar6 += var64;
                var64 = 0;
            }
            document.getElementById('progress6').style.width = maxVar6 + 'px';
            break;
        case 7:
            if (b == 1 & var71 == 220) {
                maxVar7 += var71;
                var71 = 0;
            }
            else if (b == 2 & var72 == 110) {
                maxVar7 += var72;
                var72 = 0;
            }
            else if (b == 3 & var73 == 110) {
                maxVar7 += var73;
                var73 = 0;
            }
            document.getElementById('progress7').style.width = maxVar7 + 'px';
            break;
        case 8:
            if (b == 1 & var81 == 220) {
                maxVar8 += var81;
                var81 = 0;
            }
            else if (b == 2 & var82 == 110) {
                maxVar8 += var82;
                var82 = 0;
            }
            else if (b == 3 & var83 == 110) {
                maxVar8 += var83;
                var83 = 0;
            }
            document.getElementById('progress8').style.width = maxVar8 + 'px';
            break;
    }
}

function getresult() {
    let total = maxVar0 + maxVar1 + maxVar2 + maxVar3 + maxVar4 + maxVar5 + maxVar6 + maxVar7 + maxVar8;
    getper(total);
    document.getElementById('progress9').style.width = (total/ 9) + 'px';
    document.getElementById('minipro0').style.height = (maxVar0 / 2) + 'px';
    document.getElementById('minipro1').style.height = (maxVar1 / 2) + 'px';
    document.getElementById('minipro2').style.height = (maxVar2 / 2) + 'px';
    document.getElementById('minipro3').style.height = (maxVar3 / 2) + 'px';
    document.getElementById('minipro4').style.height = (maxVar4 / 2) + 'px';
    document.getElementById('minipro5').style.height = (maxVar5 / 2) + 'px';
    document.getElementById('minipro6').style.height = (maxVar6 / 2) + 'px';
    document.getElementById('minipro7').style.height = (maxVar7 / 2) + 'px';
    document.getElementById('minipro8').style.height = (maxVar8 / 2) + 'px';
}

function getper(num){
    let getpoint = parseInt((num / 3960) * 100);
    document.getElementById("totaltxt").innerHTML = getpoint + ' %';
    if(getpoint == 100){
        document.getElementById("resultxt").innerHTML = 'You are the best!';
        document.getElementById('result').style.left = '300px';
    }
    else if(getpoint <= 99 & getpoint >= 61){
        document.getElementById("resultxt").innerHTML = 'Awesome!';
        document.getElementById('result').style.left = '400px';
    }
    else if(getpoint <= 60 & getpoint >= 41){
        document.getElementById("resultxt").innerHTML = 'Nice!';
        document.getElementById('result').style.left = '480px';
    }
    else if(getpoint <= 40 & getpoint >= 21){
        document.getElementById("resultxt").innerHTML = 'Not bad!';
        document.getElementById('result').style.left = '420px';
    }
    else if(getpoint <= 20){
        document.getElementById("resultxt").innerHTML = 'Can you try. Would you kindly?';
        document.getElementById('result').style.left = '150px';
    }
}
