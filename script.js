let target = document.querySelector("#iam");

function blink(){
    target.classList.toggle("active");
}
setInterval(blink,500);

function randomString(){
    let stringArr = ["I'm python developer","I'm front-end developer","I can do JAVASCRIPT","I'm web developer","I can do C-language"]
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");
    console.log(selectString);
    return selectStringArr;
}


function resetTyping(){
    target.textContent = "";
    dynamic(randomString());
}

function dynamic(randomArr){
    if(randomArr.length>0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        },80);
    }else{
        setTimeout(resetTyping, 2000);
    }
}
dynamic(randomString());


function instagram() {
    document.querySelector("#insta").style.display = "block";
    document.querySelector("#auto").style.display = "none";
}

function golink_auto(){
    window.open("https://sharp-lumiere-cd8f57.netlify.app/"); // 새탭
}

function autoschedule(){
    document.querySelector("#auto").style.display = "block";
    document.querySelector("#insta").style.display = "none";
}