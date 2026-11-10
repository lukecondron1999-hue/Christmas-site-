const $=s=>document.querySelector(s);
function christmas(){const n=new Date();let y=n.getFullYear(),t=new Date(y,11,25);if(n>=t)t=new Date(y+1,11,25);return t}
function tick(){let d=Math.max(0,christmas()-new Date());let days=Math.floor(d/864e5);d%=864e5;let h=Math.floor(d/36e5);d%=36e5;let m=Math.floor(d/6e4);d%=6e4;let s=Math.floor(d/1e3);$("#days").textContent=String(days).padStart(2,"0");$("#hours").textContent=String(h).padStart(2,"0");$("#minutes").textContent=String(m).padStart(2,"0");$("#seconds").textContent=String(s).padStart(2,"0")}tick();setInterval(tick,1000);

const slides=[...document.querySelectorAll(".hamper")];let n=0;function slide(i){n=(i+slides.length)%slides.length;slides.forEach((x,j)=>x.classList.toggle("active",j===n));$("#slideNo").textContent=`${String(n+1).padStart(2,"0")} / 04`}$("#next").onclick=()=>slide(n+1);$("#prev").onclick=()=>slide(n-1);let timer=setInterval(()=>slide(n+1),6500);$(".hamper-slider").onmouseenter=()=>clearInterval(timer);$(".hamper-slider").onmouseleave=()=>timer=setInterval(()=>slide(n+1),6500);

const toast=$("#toast");let voiceReady=false;
function speakSanta(){if(!("speechSynthesis"in window))return;window.speechSynthesis.cancel();const u=new SpeechSynthesisUtterance("Ho ho ho! Happy Christmas, Harper and Ellie Mae! Be very nice, because you don't want to end up on my naughty list!");u.rate=.88;u.pitch=.85;u.volume=1;const voices=window.speechSynthesis.getVoices();const santa=voices.find(v=>/en-GB|en-IE|en-US/i.test(v.lang));if(santa)u.voice=santa;window.speechSynthesis.speak(u)}
function enableSound(){voiceReady=true;speakSanta();toast.classList.remove("show")}
$("#soundBtn").onclick=enableSound;$("#santaAgain").onclick=()=>{document.querySelector(".santa-fly").style.animation="none";void document.querySelector(".santa-fly").offsetWidth;document.querySelector(".santa-fly").style.animation="";speakSanta()};
window.addEventListener("load",()=>setTimeout(()=>toast.classList.add("show"),2200));
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{let t=document.querySelector(a.getAttribute("href"));if(t){e.preventDefault();t.scrollIntoView({behavior:"smooth"})}}));
