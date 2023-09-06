
const Current_Date = new Date()
const DD =  window.document.querySelector('span.DD')
const MM = window.document.querySelector('span.MM')
const YY = window.document.querySelector('span.YY')

function bntInput() {
    const Day = Number(window.document.querySelector('#Day').value)
    const Mouth = Number(window.document.querySelector('#MM').value)
    const Year = Number(window.document.querySelector('#YY').value)

    DD = Current_Date.getFullYear()

    console.log(Day, Mouth, Year);
    console.log(new Date().getHours());
}