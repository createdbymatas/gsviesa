function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
setTimeout(() => {
    document.getElementById("createdByMatas").style.opacity = "1";
}, 100);
function loadFunction() {
    setTimeout(() => {
        document.getElementById("raide14").style.opacity = "0";
    }, 1600);
    setTimeout(() => {
        document.getElementById("raide13").style.opacity = "0";
    }, 1700);
    setTimeout(() => {
        document.getElementById("raide12").style.opacity = "0";
    }, 1800);
    setTimeout(() => {
        document.getElementById("raide11").style.opacity = "0";
    }, 1900);
    setTimeout(() => {
        document.getElementById("raide10").style.opacity = "0";
    }, 2000);
    setTimeout(() => {
        document.getElementById("raide9").style.opacity = "0";
    }, 2100);
    setTimeout(() => {
        document.getElementById("raide8").style.opacity = "0";
    }, 2200);
    setTimeout(() => {
        document.getElementById("raide7").style.opacity = "0";
    }, 2300);
    setTimeout(() => {
        document.getElementById("raide6").style.opacity = "0";
    }, 2400);
    setTimeout(() => {
        document.getElementById("raide5").style.opacity = "0";
    }, 2500);
    setTimeout(() => {
        document.getElementById("raide4").style.opacity = "0";
    }, 2600);
    setTimeout(() => {
        document.getElementById("raide3").style.opacity = "0";
    }, 2700);
    setTimeout(() => {
        document.getElementById("raide2").style.opacity = "0";
    }, 2800);
    setTimeout(() => {
        document.getElementById("raide1").style.opacity = "0";
    }, 2900);
    setTimeout(() => {
            document.getElementById("loading").style.opacity = "0";
            document.getElementById("createdByMatas").style.display = "none";
    }, 3000);
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
    }, 3300);
}

// išjungti right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());

// išjungti f12, ctrl+shift+i, ctrl+shift+j, ctrl+u (inspect tool)
function ctrlShiftKey(e, keyCode) {
    return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
){
    deny();
    return false; 
}
};



function deny(); {
    document.getElementById("accessDenied").style.display = "flex";
    document.getElementById("uzdraustaRestart").style.animation = "prixClipFix 10s linear";
    document.getElementById("body").style.overflowY = "hidden";
    setTimeout(() => {
        document.getElementById("ban").style.opacity = "0";
    }, 100);
    setTimeout(() => {
        document.getElementById("ban").style.opacity = "1";
    }, 200);
    setTimeout(() => {
        document.getElementById("ban").style.opacity = "0";
    }, 300);
    setTimeout(() => {
        document.getElementById("ban").style.opacity = "1";
    }, 400);
    setTimeout(() => {
        document.getElementById("ban").style.opacity = "0";
    }, 500);
    setTimeout(() => {
        document.getElementById("ban").style.opacity = "1";
    }, 600);
    setTimeout(() => {
        location.replace("index.html");
    }, 10000);
}

function matematika() {
    document.getElementById("positionLoader2").style.opacity = "1";
    document.getElementById("pasirinktiDalyka").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("pasirinktiDalyka").style.display = "none";
        document.getElementById("matematika").style.display = "flex";
    }, 300);
    setTimeout(() => {
        document.getElementById("matematika").style.opacity = "1";
    }, 310);
    setTimeout(() => {
        document.getElementById("positionLoader2").style.opacity = "1";
    }, 460);
}