let startY = 0;
let unlock = document.getElementById("unlock");

if (unlock) {
    unlock.addEventListener("touchstart", function(e){
        startY = e.touches[0].clientY;
    });

    unlock.addEventListener("touchend", function(e){
        let endY = e.changedTouches[0].clientY;
        if(startY - endY > 80){
            document.getElementById("lockScreen").style.display = "none";
            document.getElementById("home").style.display = "block";
        }
    });
}

// 打开APP
function openApp(name){
    document.getElementById("home").style.display = "none";
    document.getElementById("appWindow").style.display = "block";
    document.getElementById("appTitle").innerHTML = name;
}

// 返回桌面
function closeApp(){
    document.getElementById("appWindow").style.display = "none";
    document.getElementById("home").style.display = "block";
}

// 更新时间
function updateTime(){
    let d = new Date();
    let t = d.getHours() + ":" + String(d.getMinutes()).padStart(2, "0");
    
    let timeEl = document.getElementById("time");
    let clockEl = document.getElementById("clock");
    if(timeEl) timeEl.innerHTML = t;
    if(clockEl) clockEl.innerHTML = t;
}

setInterval(updateTime, 1000);
updateTime();
