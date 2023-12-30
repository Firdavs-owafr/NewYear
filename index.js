let currentYear = new Date().getFullYear()

let newYear = new Date(`1 Jan ${currentYear + 1} 00:00:00`)

let d = document.querySelector('.d')
let h = document.querySelector('.h')
let m = document.querySelector('.m')
let s = document.querySelector('.s')

function marryChristmas(){
    let todayDate = new Date()
    let gap = newYear - todayDate

    let days = Math.floor(gap / 1000 / 60 / 60 / 24)
    let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
    let minuts = Math.floor(gap / 1000 / 60 ) % 60;
    let seconds = Math.floor(gap / 1000) % 60;

    d.innerHTML =  days < 10 ? '0' + days : days
    h.innerHTML =  hours < 10 ? '0' + hours : hours
    m.innerHTML =  minuts < 10 ? '0' + minuts : minuts
    s.innerHTML =  seconds < 10 ? '0' + seconds : seconds

}

setInterval(marryChristmas, 1000)
