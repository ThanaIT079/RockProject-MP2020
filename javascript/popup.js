let pop;
let bgpop;
let mbtn;
let content = ['pop01', 'pop02', 'pop11', 'pop21', 'pop31', 'pop41', 'pop42', 'pop43', 'pop51', 'pop52', 'pop53',
    'pop61', 'pop62', 'pop63', 'pop64', 'pop71', 'pop72', 'pop73', 'pop81', 'pop82', 'pop83'];
let backpop = ['back0', 'back1', 'back2', 'back3', 'back4', 'back5', 'back6', 'back7', 'back8'];
let allmbtn = ['morebtn1', 'morebtn2', 'morebtn3', 'morebtn41', 'morebtn42', 'morebtn43', 'morebtn51', 'morebtn52', 'morebtn53',
    'morebtn61', 'morebtn62', 'morebtn63', 'morebtn64', 'morebtn71', 'morebtn72', 'morebtn73', 'morebtn81', 'morebtn82', 'morebtn83',]
function openPopUp(x, y, z) {
    pop = document.getElementById(content[x]);
    pop.style.visibility = "visible";
    bgpop = document.getElementById(backpop[y]);
    pop.style.animation = "opElAni .25s linear";
    bgpop.style.visibility = "visible";
    if (z != 0) {
        mbtn = document.getElementById(allmbtn[z - 1]);
        mbtn.style.animation = "opElAni .25s linear";
        mbtn.style.visibility = "visible";
    }
}

function closePopUp(x) {

    pop.style.animation = "clElAni .25s linear";
    if (x != 0) {
        mbtn.style.visibility = "hidden";
    }

    setTimeout(() => {

        pop.style.visibility = "hidden";
        bgpop.style.visibility = "hidden";

    }, 200);

}

let mPop;
let bgMPop;
let contentM = ['popM11', 'popM12', 'popM13', 'popM14', 'popM15', 'popM21', 'popM22', 'popM23', 'popM24', 'popM25',
    'popM41', 'popM42', 'popM43', 'popM44', 'popM45', 'popM51', 'popM52', 'popM53', 'popM54', 'popM61', 'popM62', 'popM63', 'popM64', 'popM65', 'popM66',
    'popM71', 'popM72', 'popM73', 'popM74', 'popM81', 'popM82', 'popM83', 'popM84', 'popM85', 'popM86'];

let backM = ['backM0', 'backM1', 'backM2', 'backM3', 'backM4', 'backM5', 'backM6', 'backM7', 'backM8'];
function openMPop(c, d) {
    mPop = document.getElementById(contentM[c]);
    mPop.style.visibility = "visible";
    mPop.style.zIndex = '2';
    bgMPop = document.getElementById(backM[d]);
    mPop.style.animation = "opElAni .25s linear";
    bgMPop.style.zIndex = '2';
    bgMPop.style.visibility = "visible";
}
function closeMPop() {
    mPop.style.animation = "clElAni .2s linear";
    setTimeout(() => {
        mPop.style.visibility = "hidden";
        bgMPop.style.visibility = "hidden";
    }, 200);
}

function changeBg(a, b) {
    switch (a) {
        case 0:
            if (b == 1) {
                document.getElementById('back0').style.backgroundImage = "url('../image/Forgame/001console.png')";
            }
            else if (b == 2) {
                document.getElementById('back0').style.backgroundImage = "url('../image/Forgame/002handheld.png')";
            }
            else if (b == 3) {
                document.getElementById('back0').style.backgroundImage = "";
            }
            break;
        case 1:
            if (b == 1) {
                document.getElementById('back1').style.backgroundImage = "url('../image/Forgame/imgp11.gif')";
            }
            else if (b == 2) {
                document.getElementById('back1').style.backgroundImage = "";
            }
            break;
        case 2:
            if (b == 1) {
                document.getElementById('back2').style.backgroundImage = "url('../image/Forgame/003gen2atari.png')";
            }
            else if (b == 2) {
                document.getElementById('back2').style.backgroundImage = "";
            }
            break;
        case 3:
            if (b == 1) {
                document.getElementById('back3').style.backgroundImage = "url('../image/Forgame/004gen3nes.png')";
            }
            else if (b == 2) {
                document.getElementById('back3').style.backgroundImage = "";
            }
            break;
        case 4:
            if (b == 1) {
                document.getElementById('back4').style.backgroundImage = "url('../image/Forgame/Rockman.jpg')";
            }
            else if (b == 2) {
                document.getElementById('back4').style.backgroundImage = "url('../image/Forgame/Sonic.jpg')";
            }
            else if (b == 3) {
                document.getElementById('back4').style.backgroundImage = "url('../image/Forgame/metal-slug.jpg')";
            }
            else if (b == 4) {
                document.getElementById('back4').style.backgroundImage = "";
            }
            break;
        case 5:
            if (b == 1) {
                document.getElementById('back5').style.backgroundImage = "url('../image/Forgame/006gen5re.png')";
            }
            else if (b == 2) {
                document.getElementById('back5').style.backgroundImage = "url('../image/Forgame/mario64.jpg')";
            }
            else if (b == 3) {
                document.getElementById('back5').style.backgroundImage = "url('../image/Forgame/005gen5doom.png')";
            }
            else if (b == 4) {
                document.getElementById('back5').style.backgroundImage = "";
            }
            break;
        case 6:
            if (b == 1) {
                document.getElementById('back6').style.backgroundImage = "url('../image/Forgame/007gen6ps2.png')";
            }
            else if (b == 2) {
                document.getElementById('back6').style.backgroundImage = "url('../image/Forgame/008gen6xbox.png')";
            }
            else if (b == 3) {
                document.getElementById('back6').style.backgroundImage = "url('../image/Forgame/009gen6dc.png')";
            }
            else if (b == 4) {
                document.getElementById('back6').style.backgroundImage = "url('../image/Forgame/010gen6msb.png')";
            }
            else if (b == 5) {
                document.getElementById('back6').style.backgroundImage = "";

            }
            break;
        case 7:
            if (b == 1) {
                document.getElementById('back7').style.backgroundImage = "url('../image/Forgame/011gen6wii.png')";
            }
            else if (b == 2) {
                document.getElementById('back7').style.backgroundImage = "url('../image/Forgame/012gen6ps3.png')";
            }
            else if (b == 3) {
                document.getElementById('back7').style.backgroundImage = "url('../image/Forgame/013gen6xbox360.png')";
            }
            else if (b == 4) {
                document.getElementById('back7').style.backgroundImage = "";

            }
            break;
        case 8:
            if (b == 1) {
                document.getElementById('back8').style.backgroundImage = "url('../image/Forgame/014gen8ps4.png')";
            }
            else if (b == 2) {
                document.getElementById('back8').style.backgroundImage = "url('../image/Forgame/015gen8xbox.png')";
            }
            else if (b == 3) {
                document.getElementById('back8').style.backgroundImage = "url('../image/Forgame/016gen8nds.png')";
            }
            else if (b == 4) {
                document.getElementById('back8').style.backgroundImage = "";

            }
            break;
    }
}

function changeMBg(e, f) {
    switch (e) {
        case 1:
            if (f == 1) {
                document.getElementById('backM1').style.backgroundImage = "url('../image/Forgame/gen1/')";
            }
            else if (f == 2) {
                document.getElementById('backM1').style.backgroundImage = "url('../image/Forgame/gen1/gen1_002catandmouse.png')";
            }
            else if (f == 3) {
                document.getElementById('backM1').style.backgroundImage = "url('../image/Forgame/gen1/gen1_003roulette.png')";
            }
            else if (f == 4) {
                document.getElementById('backM1').style.backgroundImage = "url('../image/Forgame/gen1/gen1_004tennis.png')";
            }
            else if (f == 5) {
                document.getElementById('backM1').style.backgroundImage = "url('../image/Forgame/gen1/gen1_005wipeout.png')";
            }
            else if (f == 6) {
                document.getElementById('backM1').style.backgroundImage = "";
            }
            break;
        case 2:
            if (f == 1) {
                document.getElementById('backM2').style.backgroundImage = "url('../image/Forgame/gen2/gen2_Pacman2600.png')";
            }
            else if (f == 2) {
                document.getElementById('backM2').style.backgroundColor = "black";
            }
            else if (f == 3) {
                document.getElementById('backM2').style.backgroundImage = "url('../image/Forgame/gen2/gen2_Mspacman2600.png')";
            }
            else if (f == 4) {
                let q = Math.floor(Math.random() * 3) + 1;
                switch (q) {
                    case 1:
                        document.getElementById('backM2').style.backgroundImage = "url('../image/Forgame/gen2/pop1.png')";
                        break;
                    case 2:
                        document.getElementById('backM2').style.backgroundImage = "url('../image/Forgame/gen2/pop2.png')";
                        break;
                    case 3:
                        document.getElementById('backM2').style.backgroundImage = "url('../image/Forgame/gen2/pop3.png')";
                        break;
                }
            }
            else if (f == 5) {
                document.getElementById('backM2').style.backgroundImage = "url('../image/Forgame/gen2/gen2_Spaceinvader.png')";
            }
            else if (f == 6) {
                document.getElementById('backM2').style.backgroundImage = "";
            }
            break;
        case 4:
            if (f == 1) {
                document.getElementById('backM4').style.backgroundImage = "url('../image/Forgame/gen4/gen4_linkBG.png')";
            }
            else if (f == 2) {
                document.getElementById('backM4').style.backgroundImage = "url('../image/Forgame/gen4/gen4_magamanbg.png')";
            }
            else if (f == 3) {
                document.getElementById('backM4').style.backgroundImage = "url('../image/Forgame/gen4/gen4_sonicbg.png')";
            }
            else if (f == 4) {
                document.getElementById('backM4').style.backgroundImage = "url('../image/Forgame/gen4/gen4_marioBG.png')";
            }
            else if (f == 5) {
                document.getElementById('backM4').style.backgroundImage = "url('../image/Forgame/gen4/gen4_metalslugbg.png')";

            }
            else if (f == 6) {
                document.getElementById('backM4').style.backgroundImage = "";
            }
            break;
        case 5:
            if (f == 1) {
                document.getElementById('backM5').style.backgroundImage = "url('../image/Forgame/gen5/gen5_doombg.png')";
            }
            else if (f == 2) {
                document.getElementById('backM5').style.backgroundImage = "url('../image/Forgame/gen5/gen5_cvnbg.png')";
            }
            else if (f == 3) {
                document.getElementById('backM5').style.backgroundImage = "url('../image/Forgame/gen5/gen5_hvmbg.jpg')";
            }
            else if (f == 4) {
                document.getElementById('backM5').style.backgroundImage = "url('../image/Forgame/gen5/gen5_rebg.png')";
            }
            else if (f == 5) {
                document.getElementById('backM5').style.backgroundImage = "";
            }
            break;
        case 6:
            if (f == 1) {
                document.getElementById('backM6').style.backgroundImage = "url('../image/Forgame/gen6/gen6_dmcbg.png')";
            }
            else if (f == 2) {
                document.getElementById('backM6').style.backgroundImage = "url('../image/Forgame/gen6/gen6_gowbg.png')";
            }
            else if (f == 3) {
                document.getElementById('backM6').style.backgroundImage = "url('../image/Forgame/gen6/gen6_halobg.png')";
            }
            else if (f == 4) {
                document.getElementById('backM6').style.backgroundImage = "url('../image/Forgame/gen6/gen6_okamibg.png')";
            }
            else if (f == 5) {
                document.getElementById('backM6').style.backgroundImage = "url('../image/Forgame/gen6/gen6_re4bg.png')";
            }
            else if (f == 6) {
                document.getElementById('backM6').style.backgroundImage = "url('../image/Forgame/gen6/gen6_shenbg.png')";
            }
            else if (f == 7) {
                document.getElementById('backM6').style.backgroundImage = "";
            }
            break;
        case 7:
            if (f == 1) {
                let q = Math.floor(Math.random() * 3) + 1;
                switch (q) {
                    case 1:
                        document.getElementById('backM7').style.backgroundImage = "url('../image/Forgame/gen7/gen7_wiibg1.png')";
                        break;
                    case 2:
                        document.getElementById('backM7').style.backgroundImage = "url('../image/Forgame/gen7/gen7_wiibg2.png')";
                        break;
                    case 3:
                        document.getElementById('backM7').style.backgroundImage = "url('../image/Forgame/gen7/gen7_wiibg5.png')";
                        break;
                }

            }
            else if (f == 2) {
                document.getElementById('backM7').style.backgroundImage = "url('../image/Forgame/gen7/gen7_rdbg.png')";
            }
            else if (f == 3) {
                document.getElementById('backM7').style.backgroundImage = "url('../image/Forgame/gen7/gen7_unchartedbg.png')";
            }
            else if (f == 4) {
                document.getElementById('backM7').style.backgroundImage = "url('../image/Forgame/gen7/gen7_tlofbg.png')";
            }
            else if (f == 5) {
                document.getElementById('backM7').style.backgroundImage = "";
            }
            break;
        case 8:
            if (f == 1) {
                document.getElementById('backM8').style.backgroundImage = "url('../image/Forgame/gen8/gen8_lozbg.png')";
            }
            else if (f == 2) {
                document.getElementById('backM8').style.backgroundImage = "url('../image/Forgame/gen8/gen8_anicbg.png')";
            }
            else if (f == 3) {
                document.getElementById('backM8').style.backgroundImage = "url('../image/Forgame/gen8/gen8_spidermanbg.png')";
            }
            else if (f == 4) {
                document.getElementById('backM8').style.backgroundImage = "url('../image/Forgame/gen8/gen8_gowbg.png')";
            }
            else if (f == 5) {
                document.getElementById('backM8').style.backgroundImage = "url('../image/Forgame/gen8/gen8_gosmbg.png')";
            }
            else if (f == 6) {
                document.getElementById('backM8').style.backgroundImage = "url('../image/Forgame/gen8/gen8_pkbg.png')";
            }
            else if (f == 7) {
                document.getElementById('backM8').style.backgroundImage = "";
            }
            break;
    }
}
