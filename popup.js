let pop;
let bgpop;
let content = ['pop01', 'pop02', 'pop11', 'pop21', 'pop31', 'pop41', 'pop42', 'pop43', 'pop51', 'pop52', 'pop53', 
'pop61', 'pop62', 'pop63', 'pop64', 'pop71', 'pop72', 'pop73', 'pop81', 'pop82', 'pop83', 'pop9'];
let backpop = ['back0', 'back1', 'back2', 'back3', 'back4', 'back5', 'back6', 'back7', 'back8', 'back9']

function openPopUp(x, y){
    pop = document.getElementById(content[x]);
    pop.style.visibility = "visible";
    bgpop = document.getElementById(backpop[y]);
    pop.style.animation = "opElAni .25s linear";
    bgpop.style.visibility = "visible";
}

function closePopUp(){
    pop.style.animation = "clElAni .2s linear";
    setTimeout(() => {
        pop.style.visibility = "hidden";
        bgpop.style.visibility = "hidden";
    }, 200);
}


var maxVar0 = 0;
let var01 = 220;
let var02 = 220;


function getprogress(a, b){
    switch(a){
        case 0:
            if(b == 1 & var01 == 220){
                document.getElementById('progress0').style.width = maxVar0 + var01 + 'px';
                maxVar0 += var01;
                var01 = 0;  
            }
            else if(b == 2 & var02 == 220){
                document.getElementById('progress0').style.width = maxVar0 + var02 + 'px';
                maxVar0 += var02;
                var02 = 0;
            }
            break;
    }
}


function getresult(){
    maxVar0 = maxVar0 / 2;
    document.getElementById('minipro0').style.height = maxVar0 + 'px'; 
}
