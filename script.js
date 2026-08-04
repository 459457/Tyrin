let startY = 0;

let unlock = document.getElementById("unlock");


unlock.addEventListener("touchstart", function(e){

    startY = e.touches[0].clientY;

});


unlock.addEventListener("touchend", function(e){

    let endY = e.changedTouches[0].clientY;


    if(startY - endY > 80){

        document.getElementById("lockScreen").style.display="none";

        document.getElementById("home").style.display="block";

    }

});



// 打开APP

function openApp(name){

    document.getElementById("home").style.display="none";

    document.getElementById("appWindow").style.display="block";

    document.getElementById("appTitle").innerHTML=name;

}



// 返回桌面

function closeApp(){

    document.getElementById("appWindow").style.display="none";

    document.getElementById("home").style.display="block";

}



// 更新时间

function updateTime(){

    let d=new Date();

    let t=
    d.getHours()
    +":"
    +String(d.getMinutes()).padStart(2,"0");


    document.getElementById("time").innerHTML=t;

    document.getElementById("clock").innerHTML=t;

}



setInterval(updateTime,1000);

updateTime();
html,body{
    width:100%;
    height:100%;
    overflow:hidden;
}

body{
    margin:0;
    position:fixed;
    top:0;
    left:0;
}
html,body{
    width:100%;
    height:100%;
    overflow:hidden;
}

body{
    margin:0;
    position:fixed;
    top:0;
    left:0;
}
