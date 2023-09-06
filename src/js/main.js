
let Current_Date = new Date();
const DD =  window.document.querySelector('span.DD');
const MM = window.document.querySelector('span.MM');
const YY = window.document.querySelector('span.YY');
const span = window.document.querySelectorAll('.Alert')

function bntInput() {
    let Day = Number(window.document.querySelector('#Day').value);
    let Mouth = Number(window.document.querySelector('#MM').value);
    let Year = Number(window.document.querySelector('#YY').value);

    if (Day <= 31 && Day >= 1) {
        span[0].classList.add("Hiden")
        if(Mouth <= 12 && Mouth >= 1){
            span[1].classList.add("Hiden")
            if(Year <= Current_Date.getUTCFullYear() && Year >= (Current_Date.getUTCFullYear() - 110)) {
                span[2].classList.add("Hiden")
                CalculateDay()
            } else {
                span[2].classList.remove("Hiden")
            }
        } else {
            for (num = 1; num < 3; num++) {
                span[num].classList.remove("Hiden")
                console.log(num);
            }
        }
    } else {
        for (let num = 0; num < 3; num++) {
            span[num].classList.remove("Hiden")
            console.log(num);
        }
    }
    

    console.log(Day, Mouth, Year);
}

function CalculateDay() {
    let Day = Number(window.document.querySelector('#Day').value);
    let Mouth = Number(window.document.querySelector('#MM').value);
    let Year = Number(window.document.querySelector('#YY').value);

    YY.innerHTML = Current_Date.getUTCFullYear() - Year
    MM.innerHTML = (Current_Date.getMonth() + 1) - Mouth
    if (Current_Date.getUTCDate() >= Day){
        DD.innerHTML = Current_Date.getUTCDate() - Day
    }else {
        DD.innerHTML = Day - Current_Date.getUTCDate() 
    }
     
}