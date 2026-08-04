document.getElementById("unlock").onclick = function(){

    document.getElementById("lockScreen").style.display="none";

    document.getElementById("home").style.display="block";

};



function openApp(name){

    document.getElementById("home").style.display="none";

    document.getElementById("appWindow").style.display="block";

    document.getElementById("appTitle").innerHTML=name;

}



function closeApp(){

    document.getElementById("appWindow").style.display="none";

    document.getElementById("home").style.display="block";

}



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
