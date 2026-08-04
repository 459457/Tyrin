let startY = 0;


// 上滑解锁

document.addEventListener("touchstart", function(e){

    startY = e.touches[0].clientY;

});


document.addEventListener("touchend", function(e){

    let endY = e.changedTouches[0].clientY;


    if(startY - endY > 100){

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
/* 上滑解锁动画 */

#unlock{

    position:absolute;

    bottom:50px;

    left:50%;

    transform:translateX(-50%);

    color:white;

    font-size:18px;

    text-align:center;

    animation:moveUp 1.5s infinite;

}


#unlock::first-line{

    font-size:30px;

}


@keyframes moveUp{

    0%{

        transform:translate(-50%,0);

    }


    50%{

        transform:translate(-50%,-15px);

    }


    100%{

        transform:translate(-50%,0);

    }

}
