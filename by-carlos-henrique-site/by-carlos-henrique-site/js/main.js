// Trabalhos: troque título/categoria aqui. Vídeos abrem com som.
var WORKS=[
 {t:"Guará Caixa",c:"Reels",src:"assets/video/reels-guara-caixa.mp4",p:"assets/img/capas/reels-guara-caixa.jpg"},
 {t:"Confraternização Time NOS",c:"Cobertura",src:"assets/video/confraternizacao-time-nos.mp4",p:"assets/img/capas/confraternizacao-time-nos.jpg"},
 {t:"Time NOS",c:"Cobertura · Stories",src:"assets/video/time-nos-stories.mp4",p:"assets/img/capas/time-nos-stories.jpg"},
 {t:"Smart Experience · Guará Caixa",c:"Cobertura",src:"assets/video/smart-experience-guara-caixa.mp4",p:"assets/img/capas/smart-experience-guara-caixa.jpg"},
 {t:"Casamento",c:"Cobertura",src:"assets/video/casamento.mp4",p:"assets/img/capas/casamento.jpg"},
 {t:"Imersão Marcela Carillo",c:"Cobertura",src:"assets/video/imersao-marcela.mp4",p:"assets/img/capas/imersao-marcela.jpg"},
 {t:"Imersão Marcela Carillo",c:"Cobertura · Stories",src:"assets/video/imersao-marcela-stories.mp4",p:"assets/img/capas/imersao-marcela-stories.jpg"}];
// Carrossel "Onde tudo começou": vídeos de infância sem som e prints com nomes borrados.
var RAIL=[["v","assets/video/infancia-1.mp4"],["i","assets/img/print-tiktok.jpg"],["v","assets/video/infancia-2.mp4"],["i","assets/img/print-instagram.jpg"],["i","assets/img/print-youtube.jpg"]];
var $=function(i){return document.getElementById(i)},z=function(n){return String(n).padStart(2,"0")};
var tz="America/Sao_Paulo",fd=new Intl.DateTimeFormat("pt-BR",{timeZone:tz,day:"numeric",month:"long",year:"numeric"}),ft=new Intl.DateTimeFormat("pt-BR",{timeZone:tz,hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:false});
function tick(){var n=new Date();$("tm").textContent=ft.format(n)}tick();setInterval(tick,1000);
$("track").innerHTML=WORKS.map(function(w,i){return '<button class="w" data-i="'+i+'" style="background-image:url('+w.p+')" aria-label="Abrir '+w.t+'"><video muted loop playsinline preload="none" data-src="'+w.src+'"></video><span class="pl">▶</span><span class="cap"><small class="lab">'+z(i+1)+' · '+w.c+'</small><strong>'+w.t+'</strong></span></button>'}).join("");
var pv=null,tk=$("track");
function pre(b,on){var v=b.querySelector("video");if(!v)return;if(on){if(pv&&pv!==v)pv.pause();if(!v.src)v.src=v.dataset.src;v.muted=true;var p=v.play();if(p&&p.catch)p.catch(function(){});pv=v}else{v.pause();if(pv===v)pv=null}}
tk.addEventListener("pointerover",function(e){if(e.pointerType!=="mouse")return;var b=e.target.closest(".w");if(b)pre(b,true)});
tk.addEventListener("pointerout",function(e){if(e.pointerType!=="mouse")return;var b=e.target.closest(".w");if(b&&!b.contains(e.relatedTarget))pre(b,false)});
tk.addEventListener("pointerdown",function(e){if(e.pointerType==="mouse")return;var b=e.target.closest(".w");if(b)pre(b,true)});
tk.addEventListener("focusin",function(e){var b=e.target.closest(".w");if(b)pre(b,true)});
tk.addEventListener("focusout",function(e){var b=e.target.closest(".w");if(b)pre(b,false)});
tk.addEventListener("playing",function(e){e.target.classList.add("on")},true);
tk.addEventListener("pause",function(e){e.target.classList.remove("on")},true);
var rt=$("rt");[0,1].forEach(function(k){RAIL.forEach(function(r){var e;if(r[0]==="v"){e=document.createElement("video");e.muted=true;e.loop=true;e.autoplay=true;e.playsInline=true;e.setAttribute("muted","");e.src=r[1];e.setAttribute("aria-hidden","true")}else{e=document.createElement("img");e.src=r[1];e.alt="";e.setAttribute("aria-hidden","true")}rt.appendChild(e)})});
var cur=0,last=null;
function show(i){cur=(i+WORKS.length)%WORKS.length;var w=WORKS[cur];$("box").innerHTML='<video controls autoplay playsinline src="'+w.src+'"></video>';$("mi").textContent=(cur+1)+" / "+WORKS.length}
function open(i,el){if(pv)pv.pause();last=el;show(i);$("md").classList.add("open");$("cl").focus()}
function close(){$("md").classList.remove("open");$("box").innerHTML="";if(last)last.focus()}
$("track").addEventListener("click",function(e){var b=e.target.closest(".w");if(b)open(+b.dataset.i,b)});
$("tl").onclick=function(){$("track").scrollBy({left:-300,behavior:"smooth"})};$("tr").onclick=function(){$("track").scrollBy({left:300,behavior:"smooth"})};
$("cl").onclick=close;$("pv").onclick=function(){show(cur-1)};$("nx").onclick=function(){show(cur+1)};
$("md").addEventListener("click",function(e){if(e.target===this)close()});
function menu(o){$("ov").classList.toggle("open",o);$("mo").setAttribute("aria-expanded",o)}
$("mo").onclick=function(){menu(true)};$("mc").onclick=function(){menu(false)};
document.querySelectorAll(".ov .l").forEach(function(a){a.onclick=function(){menu(false)}});
document.addEventListener("keydown",function(e){if(e.key==="Escape"){close();menu(false)}if($("md").classList.contains("open")){if(e.key==="ArrowLeft")show(cur-1);if(e.key==="ArrowRight")show(cur+1)}});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll(".rv").forEach(function(el){io.observe(el)});
