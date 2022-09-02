let start = document.querySelector('.start');
let resume = document.querySelector('.resume');
let pause = document.querySelector('.pause');
let cardDays = document.querySelector('#days');
let cardHours = document.querySelector('#hours');
let time = document.querySelector('.time');

let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;
let cardhours = 0;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

let timerStatus = 'stopped';
let timerInterval = null;


function startTime(){
    seconds++

    if(seconds / 60 == 1){
        seconds = 0;
        minutes++;
        if(minutes / 60 == 1){
            minutes = 0;
            cardhours++
            hours++;

            if (hours == 24){
                hours = 0;
                days++;
            }
        }
    }

    if(seconds<10){
        leadingSeconds = '0' + seconds.toString();
    }else{
        leadingSeconds = seconds;
    }
    if(minutes < 10){
        leadingMinutes = '0' + minutes.toString();
    }else{
        leadingMinutes = minutes;
    }
    if (hours < 10){
        leadingHours = '0' + hours.toString();
    }else{
        leadingHours = hours;
    }
    let displaytime = time.innerText = leadingHours + ':' + leadingMinutes + ':' + leadingSeconds;
    let displayhours = cardHours.innerText = cardhours;
    let displayday = cardDays.innerText = days;


}

start.addEventListener('click', function(){
    start.disabled = true;

    if (timerStatus === 'stopped'){
        start.style.backgroundColor = '#19b01b';
        start.style.color = 'aliceblue';
        
        timerInterval = window.setInterval(startTime, 10);
        timerStatus = 'started';
        
    }
})

pause.addEventListener('click', function(){


    
    if (timerStatus != 'stopped'){
        pause.style.color = 'aliceblue';
        pause.style.backgroundColor = '#ed0920';

        resume.style.color = '#2d69f7';
        resume.style.backgroundColor = 'aliceblue';
        
        timerInterval = window.clearInterval(timerInterval);
        timerStatus = 'stopped';
    }
})

resume.addEventListener('click', function(){

    if (timerStatus === 'stopped'){
        timerInterval = window.setInterval(startTime, 10);
        timerStatus = 'started';
        
        resume.style.backgroundColor = '#2d69f7';
        resume.style.color = 'aliceblue';

        pause.style.color = '#ed0920';
        pause.style.backgroundColor = 'aliceblue';
    }
})
