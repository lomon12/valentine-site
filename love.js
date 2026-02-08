function createHeart(){
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*window.innerWidth + "px";
    heart.style.fontSize = (Math.random()*20+10)+"px";
    heart.style.animationDuration = (Math.random()*3+2)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },5000);
}

setInterval(createHeart,200);