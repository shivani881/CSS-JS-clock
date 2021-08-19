console.log("current time is");
const secondhand = document.querySelector('.sec');
const minuteshand = document.querySelector('.minus');
const Hourhand = document.querySelector('.hour');

function newdate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegress = ((seconds/60)*360+90);
secondhand.style.transform  = `rotate(${secondsDegress}deg)`;

const minutes = now.getMinutes();
const minuteDegrees = ((minutes/60)*360)+ ((seconds/60)*6) + 90;
minuteshand.style.transform = `rotate(${minuteDegrees}deg)`;
 const hours = now.getHours();
 const hoursDegrees = ((hours/12)*360)+ ((minutes/60)*30) + 90;
Hourhand.style.transform = `rotate(${hoursDegrees}deg)`;
    console.log(seconds);
  

}
setInterval(newdate, 1000);
newdate();