
let Current_Date = new Date();
const DD =  window.document.querySelector('span.DD');
const MM = window.document.querySelector('span.MM');
const YY = window.document.querySelector('span.YY');

function bntInput() {
    let Day = Number(window.document.querySelector('#Day').value);
    let Mouth = Number(window.document.querySelector('#MM').value);
    let Year = Number(window.document.querySelector('#YY').value);

    if (Day <= 31 && Day >= 1) {
        if(Mouth <= 12 && Mouth >= 1){
            if(Year <= Current_Date.getUTCFullYear() && Year >= (Current_Date.getUTCFullYear() - 110)) {
                CalculateDay()
            }
        }
    }else {
        
    }
    

    console.log(Day, Mouth, Year);
    console.log(Current_Date.getUTCDate());
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