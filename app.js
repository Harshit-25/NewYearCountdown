days=document.getElementById('days');
hours=document.getElementById('hours');
minutes=document.getElementById('minutes');
seconds=document.getElementById('seconds');
year=document.getElementById('year');

let currentYear=new Date().getFullYear();

let newYearTime=new Date(`january 01 ${currentYear+1} 00:00:00`)

year.innerText=currentYear+1

function updateCountdown(){
const currenTime=new Date();
const diff=newYearTime-currenTime

const d=Math.floor(diff/1000/60/60/24);
const h=Math.floor(diff/1000/60/60)%24;
const m=Math.floor(diff/1000/60)%60;
const s=Math.floor(diff/1000)%60;

days.innerHTML=d;
hours.innerHTML=h<10?'0'+h:h;
seconds.innerHTML=s<10?'0'+s:s;
minutes.innerHTML=m<10?'0'+m:m;

}

setInterval(updateCountdown,1000)

