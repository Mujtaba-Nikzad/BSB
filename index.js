let Hnum1 = document.getElementById("hnum-El")
let saveEl = document.getElementById("save-el")
let hnum = 0

function hNum1(){
    hnum += 1
    Hnum1.innerText = hnum
}

function save(){
    let countStr = hnum + ", "
    saveEl.textContent += countStr
    Hnum1.textContent = 0 
    hnum = 0
    
}


function hNum2(){
    hnum += 2
    Hnum1.innerText = hnum
    
}

function hNum3(){
    hnum += 3
    Hnum1.innerText = hnum
    
}

function reset(){
    coun = 0
    Hnum1.textContent = coun
    Gnum1.textContent = coun
    saveEl.textContent = "Home Score Numbers: "
    countstr.textContent = "Guest Score Numbers: "
    hnum = 0
    gnum = 0
    
}
let Gnum1 = document.getElementById("gnum-El1")
let countstr = document.getElementById("gsave-el")
let gnum = 0

function gsave(){
    let countStr1 = gnum + ", "
    countstr.textContent += countStr1 
    Gnum1.textContent = 0 
    gnum = 0
    
}
function gNum1(){
    gnum += 1
    Gnum1.innerText= gnum
}

function gNum2(){
    gnum += 2
    Gnum1.innerText= gnum
}

function gNum3(){
    gnum += 3
    Gnum1.innerText= gnum
}