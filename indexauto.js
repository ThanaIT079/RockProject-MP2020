let pop;
let bgpop;
let content = ['pop01', 'pop02', 'pop11', 'pop21', 'pop31', 'pop41', 'pop42', 'pop43', 'pop51', 'pop52', 'pop53', 
'pop61', 'pop62', 'pop63', 'pop64', 'pop71', 'pop72', 'pop73', 'pop81', 'pop82', 'pop83', 'pop9'];
let backpop = ['back0', 'back1', 'back2', 'back3', 'back4', 'back5', 'back6', 'back7', 'back8', 'back9']

function openPopUp(x, y){
    pop = document.getElementById(content[x]);
    pop.style.visibility = "visible";
    bgpop = document.getElementById(backpop[y]);
    // pop.style.animation = "opElAni .25s linear";
    bgpop.style.visibility = "visible";
}

function closePopUp(){
    setTimeout(() => {
        pop.style.visibility = "hidden";
        bgpop.style.visibility = "hidden";
    }, 200);
}


