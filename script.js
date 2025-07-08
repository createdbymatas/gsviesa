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



function deny(){
    document.getElementById("1play").style.display = "flex";
    document.getElementById("1stop").style.display = "none";
    document.getElementById('audio1').currentTime = 0;
    document.getElementById("audio1").pause();
    document.getElementById("1aud").style.animation = "none";
    document.getElementById("2play").style.display = "flex";
    document.getElementById("2stop").style.display = "none";
    document.getElementById('audio2').currentTime = 0;
    document.getElementById("audio2").pause();
    document.getElementById("2aud").style.animation = "none";
    document.getElementById("3play").style.display = "flex";
    document.getElementById("3stop").style.display = "none";
    document.getElementById('audio3').currentTime = 0;
    document.getElementById("audio3").pause();
    document.getElementById("3aud").style.animation = "none";
    document.getElementById("4play").style.display = "flex";
    document.getElementById("4stop").style.display = "none";
    document.getElementById('audio4').currentTime = 0;
    document.getElementById("audio4").pause();
    document.getElementById("4aud").style.animation = "none";
    document.getElementById("5play").style.display = "flex";
    document.getElementById("5stop").style.display = "none";
    document.getElementById('audio5').currentTime = 0;
    document.getElementById("audio5").pause();
    document.getElementById("5aud").style.animation = "none";

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

// scroll'inimo animacijos, dark mode
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 22 || document.documentElement.scrollTop > 22) {
        document.getElementById("kelionesMarsrutasTekstas").style.opacity = "0";
        document.getElementById("kelionesMarsrutasTekstas2").style.opacity = "1";
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.getElementById("info").style.boxShadow = "0 0 10px #333333";
            document.getElementById("info").style.backgroundColor = "rgba(20, 20, 20, 0.75)";
            document.getElementById("info").style.width = "95%";
            document.getElementById("info").style.top = "15px";
            document.getElementById("info").style.left = "2.5%";
            document.getElementById("info").style.left = "2.5%";
            document.getElementById("info").style.borderRadius = "25px";

            document.getElementById("infoArune").style.boxShadow = "0 0 10px #333333";
            document.getElementById("infoArune").style.backgroundColor = "rgba(20, 20, 20, 0.75)";
            document.getElementById("infoSmilte").style.boxShadow = "0 0 10px #333333";
            document.getElementById("infoSmilte").style.backgroundColor = "rgba(20, 20, 20, 0.75)";
            document.getElementById("infoAdriana").style.boxShadow = "0 0 10px #333333";
            document.getElementById("infoAdriana").style.backgroundColor = "rgba(20, 20, 20, 0.75)";
            document.getElementById("infoNorbertas").style.boxShadow = "0 0 10px #333333";
            document.getElementById("infoNorbertas").style.backgroundColor = "rgba(20, 20, 20, 0.75)";
            document.getElementById("infoMeta").style.boxShadow = "0 0 10px #333333";
            document.getElementById("infoMeta").style.backgroundColor = "rgba(20, 20, 20, 0.75)";
            document.getElementById("infoJustina").style.boxShadow = "0 0 10px #333333";
            document.getElementById("infoJustina").style.backgroundColor = "rgba(20, 20, 20, 0.75)";
            document.getElementById("infoMindaugasd").style.boxShadow = "0 0 10px #333333";
            document.getElementById("infoMindaugasd").style.backgroundColor = "rgba(20, 20, 20, 0.75)";
            document.getElementById("infoDovydas").style.boxShadow = "0 0 10px #333333";
            document.getElementById("infoDovydas").style.backgroundColor = "rgba(20, 20, 20, 0.75)";
            document.getElementById("infoMatas").style.boxShadow = "0 0 10px #333333";
            document.getElementById("infoMatas").style.backgroundColor = "rgba(20, 20, 20, 0.75)";
            document.getElementById("infoAleksandra").style.boxShadow = "0 0 10px #333333";
            document.getElementById("infoAleksandra").style.backgroundColor = "rgba(20, 20, 20, 0.75)";
            document.getElementById("infoSamanta").style.boxShadow = "0 0 10px #333333";
            document.getElementById("infoSamanta").style.backgroundColor = "rgba(20, 20, 20, 0.75)";
            document.getElementById("infoArnas").style.boxShadow = "0 0 10px #333333";
            document.getElementById("infoArnas").style.backgroundColor = "rgba(20, 20, 20, 0.75)";
            document.getElementById("infoMilena").style.boxShadow = "0 0 10px #333333";
            document.getElementById("infoMilena").style.backgroundColor = "rgba(20, 20, 20, 0.75)";
            document.getElementById("infoEmilija").style.boxShadow = "0 0 10px #333333";
            document.getElementById("infoEmilija").style.backgroundColor = "rgba(20, 20, 20, 0.75)";
            document.getElementById("infoModestas").style.boxShadow = "0 0 10px #333333";
            document.getElementById("infoModestas").style.backgroundColor = "rgba(20, 20, 20, 0.75)";
            document.getElementById("infoGabriele").style.boxShadow = "0 0 10px #333333";
            document.getElementById("infoGabriele").style.backgroundColor = "rgba(20, 20, 20, 0.75)";
            document.getElementById("infoBerzuna").style.boxShadow = "0 0 10px #333333";
            document.getElementById("infoBerzuna").style.backgroundColor = "rgba(20, 20, 20, 0.75)";
            document.getElementById("infoNojus").style.boxShadow = "0 0 10px #333333";
            document.getElementById("infoNojus").style.backgroundColor = "rgba(20, 20, 20, 0.75)";
            document.getElementById("infoAgnieska").style.boxShadow = "0 0 10px #333333";
            document.getElementById("infoAgnieska").style.backgroundColor = "rgba(20, 20, 20, 0.75)";
        }
        else{
            document.getElementById("info").style.boxShadow = "0 0 10px lightgrey";
            document.getElementById("info").style.backgroundColor = "rgba(242, 242, 242, 0.75)";
            document.getElementById("info").style.width = "95%";
            document.getElementById("info").style.top = "15px";
            document.getElementById("info").style.left = "2.5%";
            document.getElementById("info").style.left = "2.5%";
            document.getElementById("info").style.borderRadius = "25px";

            document.getElementById("infoArune").style.boxShadow = "0 0 10px lightgrey";
            document.getElementById("infoArune").style.backgroundColor = "rgba(242, 242, 242, 0.75)";
            document.getElementById("infoSmilte").style.boxShadow = "0 0 10px lightgrey";
            document.getElementById("infoSmilte").style.backgroundColor = "rgba(242, 242, 242, 0.75)";
            document.getElementById("infoAdriana").style.boxShadow = "0 0 10px lightgrey";
            document.getElementById("infoAdriana").style.backgroundColor = "rgba(242, 242, 242, 0.75)";
            document.getElementById("infoNorbertas").style.boxShadow = "0 0 10px lightgrey";
            document.getElementById("infoNorbertas").style.backgroundColor = "rgba(242, 242, 242, 0.75)";
            document.getElementById("infoMeta").style.boxShadow = "0 0 10px lightgrey";
            document.getElementById("infoMeta").style.backgroundColor = "rgba(242, 242, 242, 0.75)";
            document.getElementById("infoJustina").style.boxShadow = "0 0 10px lightgrey";
            document.getElementById("infoJustina").style.backgroundColor = "rgba(242, 242, 242, 0.75)";
            document.getElementById("infoMindaugasd").style.boxShadow = "0 0 10px lightgrey";
            document.getElementById("infoMindaugasd").style.backgroundColor = "rgba(242, 242, 242, 0.75)";
            document.getElementById("infoDovydas").style.boxShadow = "0 0 10px lightgrey";
            document.getElementById("infoDovydas").style.backgroundColor = "rgba(242, 242, 242, 0.75)";
            document.getElementById("infoMatas").style.boxShadow = "0 0 10px lightgrey";
            document.getElementById("infoMatas").style.backgroundColor = "rgba(242, 242, 242, 0.75)";
            document.getElementById("infoAleksandra").style.boxShadow = "0 0 10px lightgrey";
            document.getElementById("infoAleksandra").style.backgroundColor = "rgba(242, 242, 242, 0.75)";
            document.getElementById("infoSamanta").style.boxShadow = "0 0 10px lightgrey";
            document.getElementById("infoSamanta").style.backgroundColor = "rgba(242, 242, 242, 0.75)";
            document.getElementById("infoArnas").style.boxShadow = "0 0 10px lightgrey";
            document.getElementById("infoArnas").style.backgroundColor = "rgba(242, 242, 242, 0.75)";
            document.getElementById("infoMilena").style.boxShadow = "0 0 10px lightgrey";
            document.getElementById("infoMilena").style.backgroundColor = "rgba(242, 242, 242, 0.75)";
            document.getElementById("infoEmilija").style.boxShadow = "0 0 10px lightgrey";
            document.getElementById("infoEmilija").style.backgroundColor = "rgba(242, 242, 242, 0.75)";
            document.getElementById("infoModestas").style.boxShadow = "0 0 10px lightgrey";
            document.getElementById("infoModestas").style.backgroundColor = "rgba(242, 242, 242, 0.75)";
            document.getElementById("infoGabriele").style.boxShadow = "0 0 10px lightgrey";
            document.getElementById("infoGabriele").style.backgroundColor = "rgba(242, 242, 242, 0.75)";
            document.getElementById("infoBerzuna").style.boxShadow = "0 0 10px lightgrey";
            document.getElementById("infoBerzuna").style.backgroundColor = "rgba(242, 242, 242, 0.75)";
            document.getElementById("infoNojus").style.boxShadow = "0 0 10px lightgrey";
            document.getElementById("infoNojus").style.backgroundColor = "rgba(242, 242, 242, 0.75)";
            document.getElementById("infoAgnieska").style.boxShadow = "0 0 10px lightgrey";
            document.getElementById("infoAgnieska").style.backgroundColor = "rgba(242, 242, 242, 0.75)";
        }

        document.getElementById("AruneTekstas").style.opacity = "0";
        document.getElementById("AruneTekstas2").style.opacity = "1";
        document.getElementById("SmilteTekstas").style.opacity = "0";
        document.getElementById("SmilteTekstas2").style.opacity = "1";
        document.getElementById("AdrianaTekstas").style.opacity = "0";
        document.getElementById("AdrianaTekstas2").style.opacity = "1";
        document.getElementById("NorbertasTekstas").style.opacity = "0";
        document.getElementById("NorbertasTekstas2").style.opacity = "1";
        document.getElementById("MetaTekstas").style.opacity = "0";
        document.getElementById("MetaTekstas2").style.opacity = "1";
        document.getElementById("JustinaTekstas").style.opacity = "0";
        document.getElementById("JustinaTekstas2").style.opacity = "1";
        document.getElementById("MindaugasdTekstas").style.opacity = "0";
        document.getElementById("MindaugasdTekstas2").style.opacity = "1";
        document.getElementById("DovydasTekstas").style.opacity = "0";
        document.getElementById("DovydasTekstas2").style.opacity = "1";
        document.getElementById("MatasTekstas").style.opacity = "0";
        document.getElementById("MatasTekstas2").style.opacity = "1";
        document.getElementById("AleksandraTekstas").style.opacity = "0";
        document.getElementById("AleksandraTekstas2").style.opacity = "1";
        document.getElementById("SamantaTekstas").style.opacity = "0";
        document.getElementById("SamantaTekstas2").style.opacity = "1";
        document.getElementById("ArnasTekstas").style.opacity = "0";
        document.getElementById("ArnasTekstas2").style.opacity = "1";
        document.getElementById("MilenaTekstas").style.opacity = "0";
        document.getElementById("MilenaTekstas2").style.opacity = "1";
        document.getElementById("EmilijaTekstas").style.opacity = "0";
        document.getElementById("EmilijaTekstas2").style.opacity = "1";
        document.getElementById("ModestasTekstas").style.opacity = "0";
        document.getElementById("ModestasTekstas2").style.opacity = "1";
        document.getElementById("GabrieleTekstas").style.opacity = "0";
        document.getElementById("GabrieleTekstas2").style.opacity = "1";
        document.getElementById("BerzunaTekstas").style.opacity = "0";
        document.getElementById("BerzunaTekstas2").style.opacity = "1";
        document.getElementById("NojusTekstas").style.opacity = "0";
        document.getElementById("NojusTekstas2").style.opacity = "1";
        document.getElementById("AgnieskaTekstas").style.opacity = "0";
        document.getElementById("AgnieskaTekstas2").style.opacity = "1";
    }
    else {
        document.getElementById("kelionesMarsrutasTekstas").style.opacity = "1";
        document.getElementById("kelionesMarsrutasTekstas2").style.opacity = "0";
        document.getElementById("info").style.boxShadow = "none";
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.getElementById("info").style.backgroundColor = "rgba(20, 20, 20, 1)";
            document.getElementById("info").style.width = "100%";
            document.getElementById("info").style.top = "0";
            document.getElementById("info").style.left = "0";
            document.getElementById("info").style.left = "0";
            document.getElementById("info").style.borderRadius = "0";

            document.getElementById("infoArune").style.backgroundColor = "rgba(20, 20, 20, 1)";
            document.getElementById("infoSmilte").style.backgroundColor = "rgba(20, 20, 20, 1)";
            document.getElementById("infoAdriana").style.backgroundColor = "rgba(20, 20, 20, 1)";
            document.getElementById("infoNorbertas").style.backgroundColor = "rgba(20, 20, 20, 1)";
            document.getElementById("infoMeta").style.backgroundColor = "rgba(20, 20, 20, 1)";
            document.getElementById("infoJustina").style.backgroundColor = "rgba(20, 20, 20, 1)";
            document.getElementById("infoMindaugasd").style.backgroundColor = "rgba(20, 20, 20, 1)";
            document.getElementById("infoDovydas").style.backgroundColor = "rgba(20, 20, 20, 1)";
            document.getElementById("infoMatas").style.backgroundColor = "rgba(20, 20, 20, 1)";
            document.getElementById("infoAleksandra").style.backgroundColor = "rgba(20, 20, 20, 1)";
            document.getElementById("infoSamanta").style.backgroundColor = "rgba(20, 20, 20, 1)";
            document.getElementById("infoArnas").style.backgroundColor = "rgba(20, 20, 20, 1)";
            document.getElementById("infoMilena").style.backgroundColor = "rgba(20, 20, 20, 1)";
            document.getElementById("infoEmilija").style.backgroundColor = "rgba(20, 20, 20, 1)";
            document.getElementById("infoModestas").style.backgroundColor = "rgba(20, 20, 20, 1)";
            document.getElementById("infoGabriele").style.backgroundColor = "rgba(20, 20, 20, 1)";
            document.getElementById("infoBerzuna").style.backgroundColor = "rgba(20, 20, 20, 1)";
            document.getElementById("infoNojus").style.backgroundColor = "rgba(20, 20, 20, 1)";
            document.getElementById("infoAgnieska").style.backgroundColor = "rgba(20, 20, 20, 1)";
        }
        else{
            document.getElementById("info").style.backgroundColor = "rgba(242, 242, 242, 1)";
            document.getElementById("info").style.width = "100%";
            document.getElementById("info").style.top = "0";
            document.getElementById("info").style.left = "0";
            document.getElementById("info").style.left = "0";
            document.getElementById("info").style.borderRadius = "0";

            document.getElementById("infoArune").style.backgroundColor = "rgba(242, 242, 242, 1)";
            document.getElementById("infoSmilte").style.backgroundColor = "rgba(242, 242, 242, 1)";
            document.getElementById("infoAdriana").style.backgroundColor = "rgba(242, 242, 242, 1)";
            document.getElementById("infoNorbertas").style.backgroundColor = "rgba(242, 242, 242, 1)";
            document.getElementById("infoMeta").style.backgroundColor = "rgba(242, 242, 242, 1)";
            document.getElementById("infoJustina").style.backgroundColor = "rgba(242, 242, 242, 1)";
            document.getElementById("infoMindaugasd").style.backgroundColor = "rgba(242, 242, 242, 1)";
            document.getElementById("infoDovydas").style.backgroundColor = "rgba(242, 242, 242, 1)";
            document.getElementById("infoMatas").style.backgroundColor = "rgba(242, 242, 242, 1)";
            document.getElementById("infoAleksandra").style.backgroundColor = "rgba(242, 242, 242, 1)";
            document.getElementById("infoSamanta").style.backgroundColor = "rgba(242, 242, 242, 1)";
            document.getElementById("infoArnas").style.backgroundColor = "rgba(242, 242, 242, 1)";
            document.getElementById("infoMilena").style.backgroundColor = "rgba(242, 242, 242, 1)";
            document.getElementById("infoEmilija").style.backgroundColor = "rgba(242, 242, 242, 1)";
            document.getElementById("infoModestas").style.backgroundColor = "rgba(242, 242, 242, 1)";
            document.getElementById("infoGabriele").style.backgroundColor = "rgba(242, 242, 242, 1)";
            document.getElementById("infoBerzuna").style.backgroundColor = "rgba(242, 242, 242, 1)";
            document.getElementById("infoNojus").style.backgroundColor = "rgba(242, 242, 242, 1)";
            document.getElementById("infoAgnieska").style.backgroundColor = "rgba(242, 242, 242, 1)";
        }

        document.getElementById("AruneTekstas").style.opacity = "1";
        document.getElementById("AruneTekstas2").style.opacity = "0";
        document.getElementById("infoArune").style.boxShadow = "none";
        document.getElementById("SmilteTekstas").style.opacity = "1";
        document.getElementById("SmilteTekstas2").style.opacity = "0";
        document.getElementById("infoSmilte").style.boxShadow = "none";
        document.getElementById("AdrianaTekstas").style.opacity = "1";
        document.getElementById("AdrianaTekstas2").style.opacity = "0";
        document.getElementById("infoAdriana").style.boxShadow = "none";
        document.getElementById("NorbertasTekstas").style.opacity = "1";
        document.getElementById("NorbertasTekstas2").style.opacity = "0";
        document.getElementById("infoNorbertas").style.boxShadow = "none";
        document.getElementById("MetaTekstas").style.opacity = "1";
        document.getElementById("MetaTekstas2").style.opacity = "0";
        document.getElementById("infoMeta").style.boxShadow = "none";
        document.getElementById("JustinaTekstas").style.opacity = "1";
        document.getElementById("JustinaTekstas2").style.opacity = "0";
        document.getElementById("infoJustina").style.boxShadow = "none";
        document.getElementById("MindaugasdTekstas").style.opacity = "1";
        document.getElementById("MindaugasdTekstas2").style.opacity = "0";
        document.getElementById("infoMindaugasd").style.boxShadow = "none";
        document.getElementById("DovydasTekstas").style.opacity = "1";
        document.getElementById("DovydasTekstas2").style.opacity = "0";
        document.getElementById("infoDovydas").style.boxShadow = "none";
        document.getElementById("MatasTekstas").style.opacity = "1";
        document.getElementById("MatasTekstas2").style.opacity = "0";
        document.getElementById("infoMatas").style.boxShadow = "none";
        document.getElementById("AleksandraTekstas").style.opacity = "1";
        document.getElementById("AleksandraTekstas2").style.opacity = "0";
        document.getElementById("infoAleksandra").style.boxShadow = "none";
        document.getElementById("SamantaTekstas").style.opacity = "1";
        document.getElementById("SamantaTekstas2").style.opacity = "0";
        document.getElementById("infoSamanta").style.boxShadow = "none";
        document.getElementById("ArnasTekstas").style.opacity = "1";
        document.getElementById("ArnasTekstas2").style.opacity = "0";
        document.getElementById("infoArnas").style.boxShadow = "none";
        document.getElementById("MilenaTekstas").style.opacity = "1";
        document.getElementById("MilenaTekstas2").style.opacity = "0";
        document.getElementById("infoMilena").style.boxShadow = "none";
        document.getElementById("EmilijaTekstas").style.opacity = "1";
        document.getElementById("EmilijaTekstas2").style.opacity = "0";
        document.getElementById("infoEmilija").style.boxShadow = "none";
        document.getElementById("ModestasTekstas").style.opacity = "1";
        document.getElementById("ModestasTekstas2").style.opacity = "0";
        document.getElementById("infoModestas").style.boxShadow = "none";
        document.getElementById("GabrieleTekstas").style.opacity = "1";
        document.getElementById("GabrieleTekstas2").style.opacity = "0";
        document.getElementById("infoGabriele").style.boxShadow = "none";
        document.getElementById("BerzunaTekstas").style.opacity = "1";
        document.getElementById("BerzunaTekstas2").style.opacity = "0";
        document.getElementById("infoBerzuna").style.boxShadow = "none";
        document.getElementById("NojusTekstas").style.opacity = "1";
        document.getElementById("NojusTekstas2").style.opacity = "0";
        document.getElementById("infoNojus").style.boxShadow = "none";
        document.getElementById("AgnieskaTekstas").style.opacity = "1";
        document.getElementById("AgnieskaTekstas2").style.opacity = "0";
        document.getElementById("infoAgnieska").style.boxShadow = "none";
    }
}



function activateTicket() {
    document.getElementById("ticketActivationBg").style.display = "block";
    document.getElementById("body").style.overflow = "hidden";
    setTimeout(() => {
        document.getElementById("ticketActivationBg").style.opacity = "1";
        document.getElementById("ticketActivationBg").style.pointerEvents = "all";
        document.getElementById("ticketActivation").style.bottom = "0";
    }, 10);
}
function closeTicket() {
    document.getElementById("ticketActivation").style.bottom = "-100%";
    document.getElementById("trafiPhone").style.bottom = "-100%";
    document.getElementById("mticketPhone").style.bottom = "-100%";
    document.getElementById("ticketActivationBg").style.opacity = "0";
    document.getElementById("ticketActivationBg").style.pointerEvents = "none";
    setTimeout(() => {
        document.getElementById("ticketActivationBg").style.display = "none";
        document.getElementById("body").style.overflow = "scroll";
    }, 300);
}
function trafi() {
    setTimeout(() => {
        document.getElementById("ticketActivation").style.bottom = "-100%";
        document.getElementById("ticketActivationBg").style.pointerEvents = "none";
    }, 10);
    setTimeout(() => {
        document.getElementById("trafiPhone").style.bottom = "0";
        document.getElementById("ticketActivationBg").style.pointerEvents = "all";
    }, 310);
}
function mticket() {
    setTimeout(() => {
        document.getElementById("ticketActivation").style.bottom = "-100%";
        document.getElementById("ticketActivationBg").style.pointerEvents = "none";
    }, 10);
    setTimeout(() => {
        document.getElementById("mticketPhone").style.bottom = "0";
        document.getElementById("ticketActivationBg").style.pointerEvents = "all";
    }, 310);
}
function trafiGP() {
    setTimeout(() => {
        document.getElementById("trafiPhone").style.bottom = "-100%";
        document.getElementById("ticketActivationBg").style.pointerEvents = "none";
        document.getElementById("openingPlay").style.display = "flex";
    }, 10);
    setTimeout(() => {
        document.getElementById("openingPlay").style.bottom = "0";
    }, 310);
    setTimeout(() => {
        window.open("https://play.google.com/store/apps/details?id=com.trafi.android.tr&hl=lt");
    }, 1310);
    setTimeout(() => {
        document.getElementById("openingPlay").style.bottom = "-100%";
        document.getElementById("ticketActivationBg").style.opacity = "0";
    }, 6310);
    setTimeout(() => {
        document.getElementById("ticketActivationBg").style.display = "none";
        document.getElementById("body").style.overflow = "scroll";
    }, 6610);
}
function trafiAS() {
    setTimeout(() => {
        document.getElementById("trafiPhone").style.bottom = "-100%";
        document.getElementById("ticketActivationBg").style.pointerEvents = "none";
        document.getElementById("openingStore").style.display = "flex";
    }, 10);
    setTimeout(() => {
        document.getElementById("openingStore").style.bottom = "0";
    }, 310);
    setTimeout(() => {
        window.open("https://apps.apple.com/lt/app/trafi/id791973944");
    }, 1310);
    setTimeout(() => {
        document.getElementById("openingStore").style.bottom = "-100%";
        document.getElementById("ticketActivationBg").style.opacity = "0";
    }, 6310);
    setTimeout(() => {
        document.getElementById("ticketActivationBg").style.display = "none";
        document.getElementById("body").style.overflow = "scroll";
    }, 6610);
}
function mticketGP() {
    setTimeout(() => {
        document.getElementById("mticketPhone").style.bottom = "-100%";
        document.getElementById("ticketActivationBg").style.pointerEvents = "none";
        document.getElementById("openingPlay").style.display = "flex";
    }, 10);
    setTimeout(() => {
        document.getElementById("openingPlay").style.bottom = "0";
    }, 310);
    setTimeout(() => {
        window.open("https://play.google.com/store/apps/details?id=lt.sisp.itero.ticket.client&hl=lt");
    }, 1310);
    setTimeout(() => {
        document.getElementById("openingPlay").style.bottom = "-100%";
        document.getElementById("ticketActivationBg").style.opacity = "0";
    }, 6310);
    setTimeout(() => {
        document.getElementById("ticketActivationBg").style.display = "none";
        document.getElementById("body").style.overflow = "scroll";
    }, 6610);
}
function mticketAS() {
    setTimeout(() => {
        document.getElementById("mticketPhone").style.bottom = "-100%";
        document.getElementById("ticketActivationBg").style.pointerEvents = "none";
        document.getElementById("openingStore").style.display = "flex";
    }, 10);
    setTimeout(() => {
        document.getElementById("openingStore").style.bottom = "0";
    }, 310);
    setTimeout(() => {
        window.open("https://apps.apple.com/lt/app/m-ticket/id751301884");
    }, 1310);
    setTimeout(() => {
        document.getElementById("openingStore").style.bottom = "-100%";
        document.getElementById("ticketActivationBg").style.opacity = "0";
    }, 6310);
    setTimeout(() => {
        document.getElementById("ticketActivationBg").style.display = "none";
        document.getElementById("body").style.overflow = "scroll";
    }, 6610);
}

function openStops() {
    document.getElementById("visosStotelesBg").style.display = "block";
    document.getElementById("body").style.overflow = "hidden";
    setTimeout(() => {
        document.getElementById("visosStotelesBg").style.opacity = "1";
        document.getElementById("visosStotelesBg").style.pointerEvents = "all";
        document.getElementById("visosStoteles").style.bottom = "0";
    }, 10);
}
function openTracks() {
    document.getElementById("visosStotelesBg").style.display = "block";
    document.getElementById("body").style.overflow = "hidden";
    setTimeout(() => {
        document.getElementById("visosStotelesBg").style.opacity = "1";
        document.getElementById("visosStotelesBg").style.pointerEvents = "all";
        document.getElementById("visosStotys").style.bottom = "0";
    }, 10);
}
function closeStops() {
    document.getElementById("visosStoteles").style.bottom = "-100%";
    document.getElementById("visosStotys").style.bottom = "-100%";
    document.getElementById("visosStotelesBg").style.opacity = "0";
    document.getElementById("visosStotelesBg").style.pointerEvents = "none";
    setTimeout(() => {
        document.getElementById("visosStotelesBg").style.display = "none";
        document.getElementById("body").style.overflow = "scroll";
    }, 300);
}

function openMaps() {
    document.getElementById("openingMapsBg").style.display = "block";
    document.getElementById("body").style.overflow = "hidden";
    setTimeout(() => {
        document.getElementById("openingMaps").style.bottom = "0";
        document.getElementById("openingMapsBg").style.opacity = "1";
    }, 10);
    setTimeout(() => {
        window.open("https://www.google.com/maps");
    }, 1010);
    setTimeout(() => {
        document.getElementById("openingMaps").style.bottom = "-100%";
        document.getElementById("openingMapsBg").style.opacity = "0";
    }, 6010);
    setTimeout(() => {
        document.getElementById("openingMapsBg").style.display = "none";
        document.getElementById("body").style.overflow = "scroll";
    }, 6310);
}



function scenarijus() {
    document.getElementById("body").style.overflowY = "hidden";
    setTimeout(() => {
        document.getElementById("scenarijusDocs").style.bottom = "0";
    }, 10);
}
function closeScenarijus() {
    document.getElementById("body").style.overflowY = "scroll";
    setTimeout(() => {
        document.getElementById("scenarijusDocs").style.bottom = "-100%";
    }, 10);
}

function downloadScenarijus() {
    document.getElementById("pinnedBackground").style.display = "block";
    document.getElementById("body").style.overflowY = "hidden";
    setTimeout(() => {
        document.getElementById("atsisiunciamasScenarijus").style.bottom = "0";
        document.getElementById("pinnedBackground").style.opacity = "1";
    }, 10);
    setTimeout(() => {
        document.getElementById("download_script").click();
    }, 1010);
    setTimeout(() => {
        document.getElementById("atsisiunciamasScenarijus").style.bottom = "-100%";
        document.getElementById("pinnedBackground").style.opacity = "0";
    }, 6010);
    setTimeout(() => {
        document.getElementById("pinnedBackground").style.display = "none";
        document.getElementById("body").style.overflowY = "scroll";
    }, 6310);
}

function informacija() {
    document.getElementById("pinnedBackground").style.display = "block";
    document.getElementById("body").style.overflowY = "hidden";
    setTimeout(() => {
        document.getElementById("rodomaInformacija").style.bottom = "0";
        document.getElementById("pinnedBackground").style.opacity = "1";
        document.getElementById("pinnedBackground").style.pointerEvents = "all";
    }, 10);
}
function uzdarytiInfo() {
    document.getElementById("rodomaInformacija").style.bottom = "-300px";
    document.getElementById("pinnedBackground").style.opacity = "0";
    document.getElementById("pinnedBackground").style.pointerEvents = "none";
    setTimeout(() => {
        document.getElementById("pinnedBackground").style.display = "none";
        document.getElementById("body").style.overflowY = "scroll";
    }, 300);
}

function openSoundTracks() {
    document.getElementById("body").style.overflowY = "hidden";
    setTimeout(() => {
        document.getElementById("soundManager").style.bottom = "0";
    }, 10);
}
function closeSoundTracks() {
    document.getElementById("body").style.overflowY = "scroll";
    document.getElementById("1play").style.display = "flex";
    document.getElementById("1stop").style.display = "none";
    document.getElementById('audio1').currentTime = 0;
    document.getElementById("audio1").pause();
    document.getElementById("1aud").style.animation = "none";
    document.getElementById("2play").style.display = "flex";
    document.getElementById("2stop").style.display = "none";
    document.getElementById('audio2').currentTime = 0;
    document.getElementById("audio2").pause();
    document.getElementById("2aud").style.animation = "none";
    document.getElementById("3play").style.display = "flex";
    document.getElementById("3stop").style.display = "none";
    document.getElementById('audio3').currentTime = 0;
    document.getElementById("audio3").pause();
    document.getElementById("3aud").style.animation = "none";
    document.getElementById("4play").style.display = "flex";
    document.getElementById("4stop").style.display = "none";
    document.getElementById('audio4').currentTime = 0;
    document.getElementById("audio4").pause();
    document.getElementById("4aud").style.animation = "none";
    document.getElementById("5play").style.display = "flex";
    document.getElementById("5stop").style.display = "none";
    document.getElementById('audio5').currentTime = 0;
    document.getElementById("audio5").pause();
    document.getElementById("5aud").style.animation = "none";
    setTimeout(() => {
        document.getElementById("soundManager").style.bottom = "-100%";
    }, 10);
}
function playAudio1() {
    setTimeout(() => {
        document.getElementById("2play").style.display = "flex";
        document.getElementById("2stop").style.display = "none";
        document.getElementById('audio2').currentTime = 0;
        document.getElementById("audio2").pause();
        document.getElementById("2aud").style.animation = "none";
        document.getElementById("3play").style.display = "flex";
        document.getElementById("3stop").style.display = "none";
        document.getElementById('audio3').currentTime = 0;
        document.getElementById("audio3").pause();
        document.getElementById("3aud").style.animation = "none";
        document.getElementById("4play").style.display = "flex";
        document.getElementById("4stop").style.display = "none";
        document.getElementById('audio4').currentTime = 0;
        document.getElementById("audio4").pause();
        document.getElementById("4aud").style.animation = "none";
        document.getElementById("5play").style.display = "flex";
        document.getElementById("5stop").style.display = "none";
        document.getElementById('audio5').currentTime = 0;
        document.getElementById("audio5").pause();
        document.getElementById("5aud").style.animation = "none";

        document.getElementById("1play").style.display = "none";
        document.getElementById("1stop").style.display = "flex";
        document.getElementById('audio1').currentTime = 0;
        document.getElementById("audio1").play();
        document.getElementById("1aud").style.animation = "blink 2s linear infinite";
    }, 100);
}
document.getElementById("audio1").onended = function() {
    document.getElementById("1play").style.display = "flex";
    document.getElementById("1stop").style.display = "none";
    document.getElementById("1aud").style.animation = "none";
}
function stopAudio1() {
    document.getElementById("1stop").style.pointerEvents = "none";
    document.getElementById("audio1").volume = 0.9;
    setTimeout(() => {
        document.getElementById("audio1").volume = 0.8;
    }, 100);
    setTimeout(() => {
        document.getElementById("audio1").volume = 0.7;
    }, 200);
    setTimeout(() => {
        document.getElementById("audio1").volume = 0.6;
    }, 300);
    setTimeout(() => {
        document.getElementById("audio1").volume = 0.5;
    }, 400);
    setTimeout(() => {
        document.getElementById("audio1").volume = 0.4;
    }, 500);
    setTimeout(() => {
        document.getElementById("audio1").volume = 0.3;
    }, 600);
    setTimeout(() => {
        document.getElementById("audio1").volume = 0.2;
    }, 700);
    setTimeout(() => {
        document.getElementById("audio1").volume = 0.1;
    }, 800);
    setTimeout(() => {
        document.getElementById("audio1").volume = 0;
    }, 900);
    setTimeout(() => {
        document.getElementById("1play").style.display = "flex";
        document.getElementById("1stop").style.display = "none";
        document.getElementById("1stop").style.pointerEvents = "all";
        document.getElementById('audio1').currentTime = 0;
        document.getElementById("audio1").pause();
        document.getElementById("audio1").volume = 1;
        document.getElementById("1aud").style.animation = "none";
    }, 1000);
}
function playAudio2() {
    setTimeout(() => {
        document.getElementById("1play").style.display = "flex";
        document.getElementById("1stop").style.display = "none";
        document.getElementById('audio1').currentTime = 0;
        document.getElementById("audio1").pause();
        document.getElementById("1aud").style.animation = "none";
        document.getElementById("3play").style.display = "flex";
        document.getElementById("3stop").style.display = "none";
        document.getElementById('audio3').currentTime = 0;
        document.getElementById("audio3").pause();
        document.getElementById("3aud").style.animation = "none";
        document.getElementById("4play").style.display = "flex";
        document.getElementById("4stop").style.display = "none";
        document.getElementById('audio4').currentTime = 0;
        document.getElementById("audio4").pause();
        document.getElementById("4aud").style.animation = "none";
        document.getElementById("5play").style.display = "flex";
        document.getElementById("5stop").style.display = "none";
        document.getElementById('audio5').currentTime = 0;
        document.getElementById("audio5").pause();
        document.getElementById("5aud").style.animation = "none";

        document.getElementById("2play").style.display = "none";
        document.getElementById("2stop").style.display = "flex";
        document.getElementById('audio2').currentTime = 0;
        document.getElementById("audio2").play();
        document.getElementById("2aud").style.animation = "blink 2s linear infinite";
    }, 100);
}
document.getElementById("audio2").onended = function() {
    document.getElementById("2play").style.display = "flex";
    document.getElementById("2stop").style.display = "none";
    document.getElementById("2aud").style.animation = "none";
}
function stopAudio2() {
    document.getElementById("2stop").style.pointerEvents = "none";
    document.getElementById("audio2").volume = 0.9;
    setTimeout(() => {
        document.getElementById("audio2").volume = 0.8;
    }, 100);
    setTimeout(() => {
        document.getElementById("audio2").volume = 0.7;
    }, 200);
    setTimeout(() => {
        document.getElementById("audio2").volume = 0.6;
    }, 300);
    setTimeout(() => {
        document.getElementById("audio2").volume = 0.5;
    }, 400);
    setTimeout(() => {
        document.getElementById("audio2").volume = 0.4;
    }, 500);
    setTimeout(() => {
        document.getElementById("audio2").volume = 0.3;
    }, 600);
    setTimeout(() => {
        document.getElementById("audio2").volume = 0.2;
    }, 700);
    setTimeout(() => {
        document.getElementById("audio2").volume = 0.1;
    }, 800);
    setTimeout(() => {
        document.getElementById("audio2").volume = 0;
    }, 900);
    setTimeout(() => {
        document.getElementById("2play").style.display = "flex";
        document.getElementById("2stop").style.display = "none";
        document.getElementById("2stop").style.pointerEvents = "all";
        document.getElementById('audio2').currentTime = 0;
        document.getElementById("audio2").pause();
        document.getElementById("audio2").volume = 1;
        document.getElementById("2aud").style.animation = "none";
    }, 1000);
}
function playAudio3() {
    setTimeout(() => {
        document.getElementById("1play").style.display = "flex";
        document.getElementById("1stop").style.display = "none";
        document.getElementById('audio1').currentTime = 0;
        document.getElementById("audio1").pause();
        document.getElementById("1aud").style.animation = "none";
        document.getElementById("2play").style.display = "flex";
        document.getElementById("2stop").style.display = "none";
        document.getElementById('audio2').currentTime = 0;
        document.getElementById("audio2").pause();
        document.getElementById("2aud").style.animation = "none";
        document.getElementById("4play").style.display = "flex";
        document.getElementById("4stop").style.display = "none";
        document.getElementById('audio4').currentTime = 0;
        document.getElementById("audio4").pause();
        document.getElementById("4aud").style.animation = "none";
        document.getElementById("5play").style.display = "flex";
        document.getElementById("5stop").style.display = "none";
        document.getElementById('audio5').currentTime = 0;
        document.getElementById("audio5").pause();
        document.getElementById("5aud").style.animation = "none";

        document.getElementById("3play").style.display = "none";
        document.getElementById("3stop").style.display = "flex";
        document.getElementById('audio3').currentTime = 0;
        document.getElementById("audio3").play();
        document.getElementById("3aud").style.animation = "blink 2s linear infinite";
    }, 100);
}
document.getElementById("audio3").onended = function() {
    document.getElementById("3play").style.display = "flex";
    document.getElementById("3stop").style.display = "none";
    document.getElementById("3aud").style.animation = "none";
}
function stopAudio3() {
    document.getElementById("3stop").style.pointerEvents = "none";
    document.getElementById("audio3").volume = 0.9;
    setTimeout(() => {
        document.getElementById("audio3").volume = 0.8;
    }, 100);
    setTimeout(() => {
        document.getElementById("audio3").volume = 0.7;
    }, 200);
    setTimeout(() => {
        document.getElementById("audio3").volume = 0.6;
    }, 300);
    setTimeout(() => {
        document.getElementById("audio3").volume = 0.5;
    }, 400);
    setTimeout(() => {
        document.getElementById("audio3").volume = 0.4;
    }, 500);
    setTimeout(() => {
        document.getElementById("audio3").volume = 0.3;
    }, 600);
    setTimeout(() => {
        document.getElementById("audio3").volume = 0.2;
    }, 700);
    setTimeout(() => {
        document.getElementById("audio3").volume = 0.1;
    }, 800);
    setTimeout(() => {
        document.getElementById("audio3").volume = 0;
    }, 900);
    setTimeout(() => {
        document.getElementById("3play").style.display = "flex";
        document.getElementById("3stop").style.display = "none";
        document.getElementById("3stop").style.pointerEvents = "all";
        document.getElementById('audio3').currentTime = 0;
        document.getElementById("audio3").pause();
        document.getElementById("audio3").volume = 1;
        document.getElementById("3aud").style.animation = "none";
    }, 1000);
}
function playAudio4() {
    setTimeout(() => {
        document.getElementById("1play").style.display = "flex";
        document.getElementById("1stop").style.display = "none";
        document.getElementById('audio1').currentTime = 0;
        document.getElementById("audio1").pause();
        document.getElementById("1aud").style.animation = "none";
        document.getElementById("2play").style.display = "flex";
        document.getElementById("2stop").style.display = "none";
        document.getElementById('audio2').currentTime = 0;
        document.getElementById("audio2").pause();
        document.getElementById("2aud").style.animation = "none";
        document.getElementById("3play").style.display = "flex";
        document.getElementById("3stop").style.display = "none";
        document.getElementById('audio3').currentTime = 0;
        document.getElementById("audio3").pause();
        document.getElementById("3aud").style.animation = "none";
        document.getElementById("5play").style.display = "flex";
        document.getElementById("5stop").style.display = "none";
        document.getElementById('audio5').currentTime = 0;
        document.getElementById("audio5").pause();
        document.getElementById("5aud").style.animation = "none";

        document.getElementById("4play").style.display = "none";
        document.getElementById("4stop").style.display = "flex";
        document.getElementById('audio4').currentTime = 0;
        document.getElementById("audio4").play();
        document.getElementById("4aud").style.animation = "blink 2s linear infinite";
    }, 100);
}
document.getElementById("audio4").onended = function() {
    document.getElementById("4play").style.display = "flex";
    document.getElementById("4stop").style.display = "none";
    document.getElementById("4aud").style.animation = "none";
}
function stopAudio4() {
    document.getElementById("4stop").style.pointerEvents = "none";
    document.getElementById("audio4").volume = 0.9;
    setTimeout(() => {
        document.getElementById("audio4").volume = 0.8;
    }, 100);
    setTimeout(() => {
        document.getElementById("audio4").volume = 0.7;
    }, 200);
    setTimeout(() => {
        document.getElementById("audio4").volume = 0.6;
    }, 300);
    setTimeout(() => {
        document.getElementById("audio4").volume = 0.5;
    }, 400);
    setTimeout(() => {
        document.getElementById("audio4").volume = 0.4;
    }, 500);
    setTimeout(() => {
        document.getElementById("audio4").volume = 0.3;
    }, 600);
    setTimeout(() => {
        document.getElementById("audio4").volume = 0.2;
    }, 700);
    setTimeout(() => {
        document.getElementById("audio4").volume = 0.1;
    }, 800);
    setTimeout(() => {
        document.getElementById("audio4").volume = 0;
    }, 900);
    setTimeout(() => {
        document.getElementById("4play").style.display = "flex";
        document.getElementById("4stop").style.display = "none";
        document.getElementById("4stop").style.pointerEvents = "all";
        document.getElementById('audio4').currentTime = 0;
        document.getElementById("audio4").pause();
        document.getElementById("audio4").volume = 1;
        document.getElementById("4aud").style.animation = "none";
    }, 1000);
}
function playAudio5() {
    setTimeout(() => {
        document.getElementById("1play").style.display = "flex";
        document.getElementById("1stop").style.display = "none";
        document.getElementById('audio1').currentTime = 0;
        document.getElementById("audio1").pause();
        document.getElementById("1aud").style.animation = "none";
        document.getElementById("2play").style.display = "flex";
        document.getElementById("2stop").style.display = "none";
        document.getElementById('audio2').currentTime = 0;
        document.getElementById("audio2").pause();
        document.getElementById("2aud").style.animation = "none";
        document.getElementById("3play").style.display = "flex";
        document.getElementById("3stop").style.display = "none";
        document.getElementById('audio3').currentTime = 0;
        document.getElementById("audio3").pause();
        document.getElementById("3aud").style.animation = "none";
        document.getElementById("4play").style.display = "flex";
        document.getElementById("4stop").style.display = "none";
        document.getElementById('audio4').currentTime = 0;
        document.getElementById("audio4").pause();
        document.getElementById("4aud").style.animation = "none";

        document.getElementById("5play").style.display = "none";
        document.getElementById("5stop").style.display = "flex";
        document.getElementById('audio5').currentTime = 0;
        document.getElementById("audio5").play();
        document.getElementById("5aud").style.animation = "blink 2s linear infinite";
    }, 100);
}
document.getElementById("audio5").onended = function() {
    document.getElementById("5play").style.display = "flex";
    document.getElementById("5stop").style.display = "none";
    document.getElementById("5aud").style.animation = "none";
}
function stopAudio5() {
    document.getElementById("5stop").style.pointerEvents = "none";
    document.getElementById("audio5").volume = 0.9;
    setTimeout(() => {
        document.getElementById("audio5").volume = 0.8;
    }, 100);
    setTimeout(() => {
        document.getElementById("audio5").volume = 0.7;
    }, 200);
    setTimeout(() => {
        document.getElementById("audio5").volume = 0.6;
    }, 300);
    setTimeout(() => {
        document.getElementById("audio5").volume = 0.5;
    }, 400);
    setTimeout(() => {
        document.getElementById("audio5").volume = 0.4;
    }, 500);
    setTimeout(() => {
        document.getElementById("audio5").volume = 0.3;
    }, 600);
    setTimeout(() => {
        document.getElementById("audio5").volume = 0.2;
    }, 700);
    setTimeout(() => {
        document.getElementById("audio5").volume = 0.1;
    }, 800);
    setTimeout(() => {
        document.getElementById("audio5").volume = 0;
    }, 900);
    setTimeout(() => {
        document.getElementById("5play").style.display = "flex";
        document.getElementById("5stop").style.display = "none";
        document.getElementById("5stop").style.pointerEvents = "all";
        document.getElementById('audio5').currentTime = 0;
        document.getElementById("audio5").pause();
        document.getElementById("audio5").volume = 1;
        document.getElementById("5aud").style.animation = "none";
    }, 1000);
}
function atsisiustiAudio1() {
    document.getElementById("pinnedBackground").style.display = "block";
    document.getElementById("body").style.overflowY = "hidden";
    setTimeout(() => {
        document.getElementById("atsisiunciamasAudio1").style.bottom = "0";
        document.getElementById("pinnedBackground").style.opacity = "1";
    }, 10);
    setTimeout(() => {
        document.getElementById("download_audio1").click();
    }, 1010);
    setTimeout(() => {
        document.getElementById("atsisiunciamasAudio1").style.bottom = "-100%";
        document.getElementById("pinnedBackground").style.opacity = "0";
    }, 6010);
    setTimeout(() => {
        document.getElementById("pinnedBackground").style.display = "none";
        document.getElementById("body").style.overflowY = "scroll";
    }, 6310);
}
function atsisiustiAudio2() {
    document.getElementById("pinnedBackground").style.display = "block";
    document.getElementById("body").style.overflowY = "hidden";
    setTimeout(() => {
        document.getElementById("atsisiunciamasAudio2").style.bottom = "0";
        document.getElementById("pinnedBackground").style.opacity = "1";
    }, 10);
    setTimeout(() => {
        document.getElementById("download_audio2").click();
    }, 1010);
    setTimeout(() => {
        document.getElementById("atsisiunciamasAudio2").style.bottom = "-100%";
        document.getElementById("pinnedBackground").style.opacity = "0";
    }, 6010);
    setTimeout(() => {
        document.getElementById("pinnedBackground").style.display = "none";
        document.getElementById("body").style.overflowY = "scroll";
    }, 6310);
}
function atsisiustiAudio3() {
    document.getElementById("pinnedBackground").style.display = "block";
    document.getElementById("body").style.overflowY = "hidden";
    setTimeout(() => {
        document.getElementById("atsisiunciamasAudio3").style.bottom = "0";
        document.getElementById("pinnedBackground").style.opacity = "1";
    }, 10);
    setTimeout(() => {
        document.getElementById("download_audio3").click();
    }, 1010);
    setTimeout(() => {
        document.getElementById("atsisiunciamasAudio3").style.bottom = "-100%";
        document.getElementById("pinnedBackground").style.opacity = "0";
    }, 6010);
    setTimeout(() => {
        document.getElementById("pinnedBackground").style.display = "none";
        document.getElementById("body").style.overflowY = "scroll";
    }, 6310);
}
function atsisiustiAudio4() {
    document.getElementById("pinnedBackground").style.display = "block";
    document.getElementById("body").style.overflowY = "hidden";
    setTimeout(() => {
        document.getElementById("atsisiunciamasAudio4").style.bottom = "0";
        document.getElementById("pinnedBackground").style.opacity = "1";
    }, 10);
    setTimeout(() => {
        document.getElementById("download_audio4").click();
    }, 1010);
    setTimeout(() => {
        document.getElementById("atsisiunciamasAudio4").style.bottom = "-100%";
        document.getElementById("pinnedBackground").style.opacity = "0";
    }, 6010);
    setTimeout(() => {
        document.getElementById("pinnedBackground").style.display = "none";
        document.getElementById("body").style.overflowY = "scroll";
    }, 6310);
}
function atsisiustiAudio5() {
    document.getElementById("pinnedBackground").style.display = "block";
    document.getElementById("body").style.overflowY = "hidden";
    setTimeout(() => {
        document.getElementById("atsisiunciamasAudio5").style.bottom = "0";
        document.getElementById("pinnedBackground").style.opacity = "1";
    }, 10);
    setTimeout(() => {
        document.getElementById("download_audio5").click();
    }, 1010);
    setTimeout(() => {
        document.getElementById("atsisiunciamasAudio5").style.bottom = "-100%";
        document.getElementById("pinnedBackground").style.opacity = "0";
    }, 6010);
    setTimeout(() => {
        document.getElementById("pinnedBackground").style.display = "none";
        document.getElementById("body").style.overflowY = "scroll";
    }, 6310);
}



let inputas = "";
function pirmas() {
    inputas = inputas + 1;
    document.getElementById("kodas").value = inputas;
    document.getElementById("istrynimas").style.color = "white";
    document.getElementById("istrynimas").style.pointerEvents = "all";
    if(inputas.length === 1)
        {
            document.getElementById("taskelis1").style.backgroundColor = "white";
    }
    else if(inputas.length === 2)
        {
            document.getElementById("taskelis2").style.backgroundColor = "white";
    }
    else if(inputas.length === 3)
        {
            document.getElementById("taskelis3").style.backgroundColor = "white";
    }
    else if(inputas.length === 4)
        {
            document.getElementById("taskelis4").style.backgroundColor = "white";
    }
    else if(inputas.length === 5)
        {
            document.getElementById("taskelis5").style.backgroundColor = "white";
    }
    else if(inputas.length === 6)
        {
            document.getElementById("taskelis6").style.backgroundColor = "white";
            document.getElementById("gerai").click();
    }
}
function antras() {
    inputas = inputas + 2;
    document.getElementById("kodas").value = inputas;
    document.getElementById("istrynimas").style.color = "white";
    document.getElementById("istrynimas").style.pointerEvents = "all";
    if(inputas.length === 1)
        {
            document.getElementById("taskelis1").style.backgroundColor = "white";
    }
    else if(inputas.length === 2)
        {
            document.getElementById("taskelis2").style.backgroundColor = "white";
    }
    else if(inputas.length === 3)
        {
            document.getElementById("taskelis3").style.backgroundColor = "white";
    }
    else if(inputas.length === 4)
        {
            document.getElementById("taskelis4").style.backgroundColor = "white";
    }
    else if(inputas.length === 5)
        {
            document.getElementById("taskelis5").style.backgroundColor = "white";
    }
    else if(inputas.length === 6)
        {
            document.getElementById("taskelis6").style.backgroundColor = "white";
            document.getElementById("gerai").click();
    }
}
function trecias() {
    inputas = inputas + 3;
    document.getElementById("kodas").value = inputas;
    document.getElementById("istrynimas").style.color = "white";
    document.getElementById("istrynimas").style.pointerEvents = "all";
    if(inputas.length === 1)
        {
            document.getElementById("taskelis1").style.backgroundColor = "white";
    }
    else if(inputas.length === 2)
        {
            document.getElementById("taskelis2").style.backgroundColor = "white";
    }
    else if(inputas.length === 3)
        {
            document.getElementById("taskelis3").style.backgroundColor = "white";
    }
    else if(inputas.length === 4)
        {
            document.getElementById("taskelis4").style.backgroundColor = "white";
    }
    else if(inputas.length === 5)
        {
            document.getElementById("taskelis5").style.backgroundColor = "white";
    }
    else if(inputas.length === 6)
        {
            document.getElementById("taskelis6").style.backgroundColor = "white";
            document.getElementById("gerai").click();
    }
}
function ketvirtas() {
    inputas = inputas + 4;
    document.getElementById("kodas").value = inputas;
    document.getElementById("istrynimas").style.color = "white";
    document.getElementById("istrynimas").style.pointerEvents = "all";
    if(inputas.length === 1)
        {
            document.getElementById("taskelis1").style.backgroundColor = "white";
    }
    else if(inputas.length === 2)
        {
            document.getElementById("taskelis2").style.backgroundColor = "white";
    }
    else if(inputas.length === 3)
        {
            document.getElementById("taskelis3").style.backgroundColor = "white";
    }
    else if(inputas.length === 4)
        {
            document.getElementById("taskelis4").style.backgroundColor = "white";
    }
    else if(inputas.length === 5)
        {
            document.getElementById("taskelis5").style.backgroundColor = "white";
    }
    else if(inputas.length === 6)
        {
            document.getElementById("taskelis6").style.backgroundColor = "white";
            document.getElementById("gerai").click();
    }
}
function penktas() {
    inputas = inputas + 5;
    document.getElementById("kodas").value = inputas;
    document.getElementById("istrynimas").style.color = "white";
    document.getElementById("istrynimas").style.pointerEvents = "all";
    if(inputas.length === 1)
        {
            document.getElementById("taskelis1").style.backgroundColor = "white";
    }
    else if(inputas.length === 2)
        {
            document.getElementById("taskelis2").style.backgroundColor = "white";
    }
    else if(inputas.length === 3)
        {
            document.getElementById("taskelis3").style.backgroundColor = "white";
    }
    else if(inputas.length === 4)
        {
            document.getElementById("taskelis4").style.backgroundColor = "white";
    }
    else if(inputas.length === 5)
        {
            document.getElementById("taskelis5").style.backgroundColor = "white";
    }
    else if(inputas.length === 6)
        {
            document.getElementById("taskelis6").style.backgroundColor = "white";
            document.getElementById("gerai").click();
    }
}
function sestas() {
    inputas = inputas + 6;
    document.getElementById("kodas").value = inputas;
    document.getElementById("istrynimas").style.color = "white";
    document.getElementById("istrynimas").style.pointerEvents = "all";
    if(inputas.length === 1)
        {
            document.getElementById("taskelis1").style.backgroundColor = "white";
    }
    else if(inputas.length === 2)
        {
            document.getElementById("taskelis2").style.backgroundColor = "white";
    }
    else if(inputas.length === 3)
        {
            document.getElementById("taskelis3").style.backgroundColor = "white";
    }
    else if(inputas.length === 4)
        {
            document.getElementById("taskelis4").style.backgroundColor = "white";
    }
    else if(inputas.length === 5)
        {
            document.getElementById("taskelis5").style.backgroundColor = "white";
    }
    else if(inputas.length === 6)
        {
            document.getElementById("taskelis6").style.backgroundColor = "white";
            document.getElementById("gerai").click();
    }
}
function septintas() {
    inputas = inputas + 7;
    document.getElementById("kodas").value = inputas;
    document.getElementById("istrynimas").style.color = "white";
    document.getElementById("istrynimas").style.pointerEvents = "all";
    if(inputas.length === 1)
        {
            document.getElementById("taskelis1").style.backgroundColor = "white";
    }
    else if(inputas.length === 2)
        {
            document.getElementById("taskelis2").style.backgroundColor = "white";
    }
    else if(inputas.length === 3)
        {
            document.getElementById("taskelis3").style.backgroundColor = "white";
    }
    else if(inputas.length === 4)
        {
            document.getElementById("taskelis4").style.backgroundColor = "white";
    }
    else if(inputas.length === 5)
        {
            document.getElementById("taskelis5").style.backgroundColor = "white";
    }
    else if(inputas.length === 6)
        {
            document.getElementById("taskelis6").style.backgroundColor = "white";
            document.getElementById("gerai").click();
    }
}
function astuntas() {
    inputas = inputas + 8;
    document.getElementById("kodas").value = inputas;
    document.getElementById("istrynimas").style.color = "white";
    document.getElementById("istrynimas").style.pointerEvents = "all";
    if(inputas.length === 1)
        {
            document.getElementById("taskelis1").style.backgroundColor = "white";
    }
    else if(inputas.length === 2)
        {
            document.getElementById("taskelis2").style.backgroundColor = "white";
    }
    else if(inputas.length === 3)
        {
            document.getElementById("taskelis3").style.backgroundColor = "white";
    }
    else if(inputas.length === 4)
        {
            document.getElementById("taskelis4").style.backgroundColor = "white";
    }
    else if(inputas.length === 5)
        {
            document.getElementById("taskelis5").style.backgroundColor = "white";
    }
    else if(inputas.length === 6)
        {
            document.getElementById("taskelis6").style.backgroundColor = "white";
            document.getElementById("gerai").click();
    }
}
function devintas() {
    inputas = inputas + 9;
    document.getElementById("kodas").value = inputas;
    document.getElementById("istrynimas").style.color = "white";
    document.getElementById("istrynimas").style.pointerEvents = "all";
    if(inputas.length === 1)
        {
            document.getElementById("taskelis1").style.backgroundColor = "white";
    }
    else if(inputas.length === 2)
        {
            document.getElementById("taskelis2").style.backgroundColor = "white";
    }
    else if(inputas.length === 3)
        {
            document.getElementById("taskelis3").style.backgroundColor = "white";
    }
    else if(inputas.length === 4)
        {
            document.getElementById("taskelis4").style.backgroundColor = "white";
    }
    else if(inputas.length === 5)
        {
            document.getElementById("taskelis5").style.backgroundColor = "white";
    }
    else if(inputas.length === 6)
        {
            document.getElementById("taskelis6").style.backgroundColor = "white";
            document.getElementById("gerai").click();
    }
}
function nulinis() {
    inputas = inputas + 0;
    document.getElementById("kodas").value = inputas;
    document.getElementById("istrynimas").style.color = "white";
    document.getElementById("istrynimas").style.pointerEvents = "all";
    if(inputas.length === 1)
        {
            document.getElementById("taskelis1").style.backgroundColor = "white";
    }
    else if(inputas.length === 2)
        {
            document.getElementById("taskelis2").style.backgroundColor = "white";
    }
    else if(inputas.length === 3)
        {
            document.getElementById("taskelis3").style.backgroundColor = "white";
    }
    else if(inputas.length === 4)
        {
            document.getElementById("taskelis4").style.backgroundColor = "white";
    }
    else if(inputas.length === 5)
        {
            document.getElementById("taskelis5").style.backgroundColor = "white";
    }
    else if(inputas.length === 6)
        {
            document.getElementById("taskelis6").style.backgroundColor = "white";
            document.getElementById("gerai").click();
    }
}
function istrinti() {
    inputas = "";
    document.getElementById("kodas").value = '';
    document.getElementById("istrynimas").style.color = "transparent";
    document.getElementById("istrynimas").style.pointerEvents = "none";
    document.getElementById("taskelis1").style.backgroundColor = "transparent";
    document.getElementById("taskelis2").style.backgroundColor = "transparent";
    document.getElementById("taskelis3").style.backgroundColor = "transparent";
    document.getElementById("taskelis4").style.backgroundColor = "transparent";
    document.getElementById("taskelis5").style.backgroundColor = "transparent";
    document.getElementById("taskelis6").style.backgroundColor = "transparent";
}
function check(form)
{
    if(form.pin.value === "897867")
        {
            document.cookie = "kelioneI=adminas";
        document.getElementById("loading").style.display = "flex";
        document.getElementById("ivestiKoda").style.opacity = "0.3";
        document.querySelector('#topInfo').scrollIntoView({
            behavior: 'smooth'
        });
        document.getElementById("istrynimas").style.color = "transparent";
        document.getElementById("istrynimas").style.pointerEvents = "none";
        document.getElementById("keypad").style.opacity = "0.3";
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("kelioneI---").style.display = "block";
        }, 3600);
        setTimeout(() => {
            document.getElementById("kelioneI---").style.paddingTop = "0";
        }, 3620);
        setTimeout(() => {
            inputas = ""
            document.getElementById("kodas").value = '';
            document.getElementById("taskelis1").style.backgroundColor = "transparent";
            document.getElementById("taskelis2").style.backgroundColor = "transparent";
            document.getElementById("taskelis3").style.backgroundColor = "transparent";
            document.getElementById("taskelis4").style.backgroundColor = "transparent";
            document.getElementById("taskelis5").style.backgroundColor = "transparent";
            document.getElementById("taskelis6").style.backgroundColor = "transparent";
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
  }
  else if(form.pin.value === "827482") //Arune
        {
            document.cookie = "Arune=jonvabalis";
        document.getElementById("loading").style.display = "flex";
        document.getElementById("ivestiKoda").style.opacity = "0.3";
        document.querySelector('#topInfoArune').scrollIntoView({
            behavior: 'smooth'
        });
        document.getElementById("keypad").style.opacity = "0.3";
        document.getElementById("istrynimas").style.color = "transparent";
        document.getElementById("istrynimas").style.pointerEvents = "none";
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("Arune").style.display = "block";
        }, 3600);
        setTimeout(() => {
            document.getElementById("Arune").style.paddingTop = "0";
        }, 3620);
        setTimeout(() => {
            inputas = ""
            document.getElementById("kodas").value = '';
            document.getElementById("taskelis1").style.backgroundColor = "transparent";
            document.getElementById("taskelis2").style.backgroundColor = "transparent";
            document.getElementById("taskelis3").style.backgroundColor = "transparent";
            document.getElementById("taskelis4").style.backgroundColor = "transparent";
            document.getElementById("taskelis5").style.backgroundColor = "transparent";
            document.getElementById("taskelis6").style.backgroundColor = "transparent";
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
  }
  else if(form.pin.value === "010473") //Smilte
        {
            document.cookie = "Smilte=burtininke_mama_ode";
        document.getElementById("loading").style.display = "flex";
        document.getElementById("ivestiKoda").style.opacity = "0.3";
        document.querySelector('#topInfoSmilte').scrollIntoView({
            behavior: 'smooth'
        });
        document.getElementById("keypad").style.opacity = "0.3";
        document.getElementById("istrynimas").style.color = "transparent";
        document.getElementById("istrynimas").style.pointerEvents = "none";
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("Smilte").style.display = "block";
        }, 3600);
        setTimeout(() => {
            document.getElementById("Smilte").style.paddingTop = "0";
        }, 3620);
        setTimeout(() => {
            inputas = ""
            document.getElementById("kodas").value = '';
            document.getElementById("taskelis1").style.backgroundColor = "transparent";
            document.getElementById("taskelis2").style.backgroundColor = "transparent";
            document.getElementById("taskelis3").style.backgroundColor = "transparent";
            document.getElementById("taskelis4").style.backgroundColor = "transparent";
            document.getElementById("taskelis5").style.backgroundColor = "transparent";
            document.getElementById("taskelis6").style.backgroundColor = "transparent";
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
  }
  else if(form.pin.value === "654029") //Adriana
        {
            document.cookie = "Adriana=seselis";
        document.getElementById("loading").style.display = "flex";
        document.getElementById("ivestiKoda").style.opacity = "0.3";
        document.querySelector('#topInfoAdriana').scrollIntoView({
            behavior: 'smooth'
        });
        document.getElementById("keypad").style.opacity = "0.3";
        document.getElementById("istrynimas").style.color = "transparent";
        document.getElementById("istrynimas").style.pointerEvents = "none";
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("Adriana").style.display = "block";
        }, 3600);
        setTimeout(() => {
            document.getElementById("Adriana").style.paddingTop = "0";
        }, 3620);
        setTimeout(() => {
            inputas = ""
            document.getElementById("kodas").value = '';
            document.getElementById("taskelis1").style.backgroundColor = "transparent";
            document.getElementById("taskelis2").style.backgroundColor = "transparent";
            document.getElementById("taskelis3").style.backgroundColor = "transparent";
            document.getElementById("taskelis4").style.backgroundColor = "transparent";
            document.getElementById("taskelis5").style.backgroundColor = "transparent";
            document.getElementById("taskelis6").style.backgroundColor = "transparent";
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
  }
  else if(form.pin.value === "183748") //Norbertas
        {
            document.cookie = "Norbertas=princas_navynas";
        document.getElementById("loading").style.display = "flex";
        document.getElementById("ivestiKoda").style.opacity = "0.3";
        document.querySelector('#topInfoNorbertas').scrollIntoView({
            behavior: 'smooth'
        });
        document.getElementById("keypad").style.opacity = "0.3";
        document.getElementById("istrynimas").style.color = "transparent";
        document.getElementById("istrynimas").style.pointerEvents = "none";
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("Norbertas").style.display = "block";
        }, 3600);
        setTimeout(() => {
            document.getElementById("Norbertas").style.paddingTop = "0";
        }, 3620);
        setTimeout(() => {
            inputas = ""
            document.getElementById("kodas").value = '';
            document.getElementById("taskelis1").style.backgroundColor = "transparent";
            document.getElementById("taskelis2").style.backgroundColor = "transparent";
            document.getElementById("taskelis3").style.backgroundColor = "transparent";
            document.getElementById("taskelis4").style.backgroundColor = "transparent";
            document.getElementById("taskelis5").style.backgroundColor = "transparent";
            document.getElementById("taskelis6").style.backgroundColor = "transparent";
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
  }
  else if(form.pin.value === "028482") //Meta
        {
            document.cookie = "Meta=varle";
        document.getElementById("loading").style.display = "flex";
        document.getElementById("ivestiKoda").style.opacity = "0.3";
        document.querySelector('#topInfoMeta').scrollIntoView({
            behavior: 'smooth'
        });
        document.getElementById("keypad").style.opacity = "0.3";
        document.getElementById("istrynimas").style.color = "transparent";
        document.getElementById("istrynimas").style.pointerEvents = "none";
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("Meta").style.display = "block";
        }, 3600);
        setTimeout(() => {
            document.getElementById("Meta").style.paddingTop = "0";
        }, 3620);
        setTimeout(() => {
            inputas = ""
            document.getElementById("kodas").value = '';
            document.getElementById("taskelis1").style.backgroundColor = "transparent";
            document.getElementById("taskelis2").style.backgroundColor = "transparent";
            document.getElementById("taskelis3").style.backgroundColor = "transparent";
            document.getElementById("taskelis4").style.backgroundColor = "transparent";
            document.getElementById("taskelis5").style.backgroundColor = "transparent";
            document.getElementById("taskelis6").style.backgroundColor = "transparent";
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
  }
  else if(form.pin.value === "538204") //Justina
        {
            document.cookie = "Justina=krokodilas";
        document.getElementById("loading").style.display = "flex";
        document.getElementById("ivestiKoda").style.opacity = "0.3";
        document.querySelector('#topInfoJustina').scrollIntoView({
            behavior: 'smooth'
        });
        document.getElementById("keypad").style.opacity = "0.3";
        document.getElementById("istrynimas").style.color = "transparent";
        document.getElementById("istrynimas").style.pointerEvents = "none";
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("Justina").style.display = "block";
        }, 3600);
        setTimeout(() => {
            document.getElementById("Justina").style.paddingTop = "0";
        }, 3620);
        setTimeout(() => {
            inputas = ""
            document.getElementById("kodas").value = '';
            document.getElementById("taskelis1").style.backgroundColor = "transparent";
            document.getElementById("taskelis2").style.backgroundColor = "transparent";
            document.getElementById("taskelis3").style.backgroundColor = "transparent";
            document.getElementById("taskelis4").style.backgroundColor = "transparent";
            document.getElementById("taskelis5").style.backgroundColor = "transparent";
            document.getElementById("taskelis6").style.backgroundColor = "transparent";
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
  }
  else if(form.pin.value === "854935") //Mindaugasd
        {
            document.cookie = "Mindaugasd=dj";
        document.getElementById("loading").style.display = "flex";
        document.getElementById("ivestiKoda").style.opacity = "0.3";
        document.querySelector('#topInfoMindaugasd').scrollIntoView({
            behavior: 'smooth'
        });
        document.getElementById("keypad").style.opacity = "0.3";
        document.getElementById("istrynimas").style.color = "transparent";
        document.getElementById("istrynimas").style.pointerEvents = "none";
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("Mindaugasd").style.display = "block";
        }, 3600);
        setTimeout(() => {
            document.getElementById("Mindaugasd").style.paddingTop = "0";
        }, 3620);
        setTimeout(() => {
            inputas = ""
            document.getElementById("kodas").value = '';
            document.getElementById("taskelis1").style.backgroundColor = "transparent";
            document.getElementById("taskelis2").style.backgroundColor = "transparent";
            document.getElementById("taskelis3").style.backgroundColor = "transparent";
            document.getElementById("taskelis4").style.backgroundColor = "transparent";
            document.getElementById("taskelis5").style.backgroundColor = "transparent";
            document.getElementById("taskelis6").style.backgroundColor = "transparent";
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
  }
  else if(form.pin.value === "996043") //Dovydas
        {
            document.cookie = "Dovydas=princo_buhalteris_lorensas";
        document.getElementById("loading").style.display = "flex";
        document.getElementById("ivestiKoda").style.opacity = "0.3";
        document.querySelector('#topInfoDovydas').scrollIntoView({
            behavior: 'smooth'
        });
        document.getElementById("keypad").style.opacity = "0.3";
        document.getElementById("istrynimas").style.color = "transparent";
        document.getElementById("istrynimas").style.pointerEvents = "none";
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("Dovydas").style.display = "block";
        }, 3600);
        setTimeout(() => {
            document.getElementById("Dovydas").style.paddingTop = "0";
        }, 3620);
        setTimeout(() => {
            inputas = ""
            document.getElementById("kodas").value = '';
            document.getElementById("taskelis1").style.backgroundColor = "transparent";
            document.getElementById("taskelis2").style.backgroundColor = "transparent";
            document.getElementById("taskelis3").style.backgroundColor = "transparent";
            document.getElementById("taskelis4").style.backgroundColor = "transparent";
            document.getElementById("taskelis5").style.backgroundColor = "transparent";
            document.getElementById("taskelis6").style.backgroundColor = "transparent";
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
  }
  else if(form.pin.value === "742094") //Matas
        {
            document.cookie = "Matas=blogasis_burtininkas";
        document.getElementById("loading").style.display = "flex";
        document.getElementById("ivestiKoda").style.opacity = "0.3";
        document.querySelector('#topInfoMatas').scrollIntoView({
            behavior: 'smooth'
        });
        document.getElementById("keypad").style.opacity = "0.3";
        document.getElementById("istrynimas").style.color = "transparent";
        document.getElementById("istrynimas").style.pointerEvents = "none";
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("Matas").style.display = "block";
        }, 3600);
        setTimeout(() => {
            document.getElementById("Matas").style.paddingTop = "0";
        }, 3620);
        setTimeout(() => {
            inputas = ""
            document.getElementById("kodas").value = '';
            document.getElementById("taskelis1").style.backgroundColor = "transparent";
            document.getElementById("taskelis2").style.backgroundColor = "transparent";
            document.getElementById("taskelis3").style.backgroundColor = "transparent";
            document.getElementById("taskelis4").style.backgroundColor = "transparent";
            document.getElementById("taskelis5").style.backgroundColor = "transparent";
            document.getElementById("taskelis6").style.backgroundColor = "transparent";
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
  }
  else if(form.pin.value === "493793") //Aleksandra
        {
            document.cookie = "Aleksandra=princese_tiana";
        document.getElementById("loading").style.display = "flex";
        document.getElementById("ivestiKoda").style.opacity = "0.3";
        document.querySelector('#topInfoAleksandra').scrollIntoView({
            behavior: 'smooth'
        });
        document.getElementById("keypad").style.opacity = "0.3";
        document.getElementById("istrynimas").style.color = "transparent";
        document.getElementById("istrynimas").style.pointerEvents = "none";
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("Aleksandra").style.display = "block";
        }, 3600);
        setTimeout(() => {
            document.getElementById("Aleksandra").style.paddingTop = "0";
        }, 3620);
        setTimeout(() => {
            inputas = ""
            document.getElementById("kodas").value = '';
            document.getElementById("taskelis1").style.backgroundColor = "transparent";
            document.getElementById("taskelis2").style.backgroundColor = "transparent";
            document.getElementById("taskelis3").style.backgroundColor = "transparent";
            document.getElementById("taskelis4").style.backgroundColor = "transparent";
            document.getElementById("taskelis5").style.backgroundColor = "transparent";
            document.getElementById("taskelis6").style.backgroundColor = "transparent";
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
  }
  else if(form.pin.value === "282739") //Samanta
        {
            document.cookie = "Samanta=princeses_drauge_sarlote";
        document.getElementById("loading").style.display = "flex";
        document.getElementById("ivestiKoda").style.opacity = "0.3";
        document.querySelector('#topInfoSamanta').scrollIntoView({
            behavior: 'smooth'
        });
        document.getElementById("keypad").style.opacity = "0.3";
        document.getElementById("istrynimas").style.color = "transparent";
        document.getElementById("istrynimas").style.pointerEvents = "none";
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("Samanta").style.display = "block";
        }, 3600);
        setTimeout(() => {
            document.getElementById("Samanta").style.paddingTop = "0";
        }, 3620);
        setTimeout(() => {
            inputas = ""
            document.getElementById("kodas").value = '';
            document.getElementById("taskelis1").style.backgroundColor = "transparent";
            document.getElementById("taskelis2").style.backgroundColor = "transparent";
            document.getElementById("taskelis3").style.backgroundColor = "transparent";
            document.getElementById("taskelis4").style.backgroundColor = "transparent";
            document.getElementById("taskelis5").style.backgroundColor = "transparent";
            document.getElementById("taskelis6").style.backgroundColor = "transparent";
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
  }
  else if(form.pin.value === "102023") //Arnas
        {
            document.cookie = "Arnas=varlius";
        document.getElementById("loading").style.display = "flex";
        document.getElementById("ivestiKoda").style.opacity = "0.3";
        document.querySelector('#topInfoArnas').scrollIntoView({
            behavior: 'smooth'
        });
        document.getElementById("keypad").style.opacity = "0.3";
        document.getElementById("istrynimas").style.color = "transparent";
        document.getElementById("istrynimas").style.pointerEvents = "none";
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("Arnas").style.display = "block";
        }, 3600);
        setTimeout(() => {
            document.getElementById("Arnas").style.paddingTop = "0";
        }, 3620);
        setTimeout(() => {
            inputas = ""
            document.getElementById("kodas").value = '';
            document.getElementById("taskelis1").style.backgroundColor = "transparent";
            document.getElementById("taskelis2").style.backgroundColor = "transparent";
            document.getElementById("taskelis3").style.backgroundColor = "transparent";
            document.getElementById("taskelis4").style.backgroundColor = "transparent";
            document.getElementById("taskelis5").style.backgroundColor = "transparent";
            document.getElementById("taskelis6").style.backgroundColor = "transparent";
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
  }
  else if(form.pin.value === "814858") //Milena
        {
            document.cookie = "Milena=seselis";
        document.getElementById("loading").style.display = "flex";
        document.getElementById("ivestiKoda").style.opacity = "0.3";
        document.querySelector('#topInfoMilena').scrollIntoView({
            behavior: 'smooth'
        });
        document.getElementById("keypad").style.opacity = "0.3";
        document.getElementById("istrynimas").style.color = "transparent";
        document.getElementById("istrynimas").style.pointerEvents = "none";
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("Milena").style.display = "block";
        }, 3600);
        setTimeout(() => {
            document.getElementById("Milena").style.paddingTop = "0";
        }, 3620);
        setTimeout(() => {
            inputas = ""
            document.getElementById("kodas").value = '';
            document.getElementById("taskelis1").style.backgroundColor = "transparent";
            document.getElementById("taskelis2").style.backgroundColor = "transparent";
            document.getElementById("taskelis3").style.backgroundColor = "transparent";
            document.getElementById("taskelis4").style.backgroundColor = "transparent";
            document.getElementById("taskelis5").style.backgroundColor = "transparent";
            document.getElementById("taskelis6").style.backgroundColor = "transparent";
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
  }
  else if(form.pin.value === "384739") //Emilija
        {
            document.cookie = "Emilija=seselis";
        document.getElementById("loading").style.display = "flex";
        document.getElementById("ivestiKoda").style.opacity = "0.3";
        document.querySelector('#topInfoEmilija').scrollIntoView({
            behavior: 'smooth'
        });
        document.getElementById("keypad").style.opacity = "0.3";
        document.getElementById("istrynimas").style.color = "transparent";
        document.getElementById("istrynimas").style.pointerEvents = "none";
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("Emilija").style.display = "block";
        }, 3600);
        setTimeout(() => {
            document.getElementById("Emilija").style.paddingTop = "0";
        }, 3620);
        setTimeout(() => {
            inputas = ""
            document.getElementById("kodas").value = '';
            document.getElementById("taskelis1").style.backgroundColor = "transparent";
            document.getElementById("taskelis2").style.backgroundColor = "transparent";
            document.getElementById("taskelis3").style.backgroundColor = "transparent";
            document.getElementById("taskelis4").style.backgroundColor = "transparent";
            document.getElementById("taskelis5").style.backgroundColor = "transparent";
            document.getElementById("taskelis6").style.backgroundColor = "transparent";
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
  }
  else if(form.pin.value === "773752") //Modestas
        {
            document.cookie = "Modestas=seselis";
        document.getElementById("loading").style.display = "flex";
        document.getElementById("ivestiKoda").style.opacity = "0.3";
        document.querySelector('#topInfoModestas').scrollIntoView({
            behavior: 'smooth'
        });
        document.getElementById("keypad").style.opacity = "0.3";
        document.getElementById("istrynimas").style.color = "transparent";
        document.getElementById("istrynimas").style.pointerEvents = "none";
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("Modestas").style.display = "block";
        }, 3600);
        setTimeout(() => {
            document.getElementById("Modestas").style.paddingTop = "0";
        }, 3620);
        setTimeout(() => {
            inputas = ""
            document.getElementById("kodas").value = '';
            document.getElementById("taskelis1").style.backgroundColor = "transparent";
            document.getElementById("taskelis2").style.backgroundColor = "transparent";
            document.getElementById("taskelis3").style.backgroundColor = "transparent";
            document.getElementById("taskelis4").style.backgroundColor = "transparent";
            document.getElementById("taskelis5").style.backgroundColor = "transparent";
            document.getElementById("taskelis6").style.backgroundColor = "transparent";
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
  }
  else if(form.pin.value === "039586") //Gabriele
        {
            document.cookie = "Gabriele=mama_eudora";
        document.getElementById("loading").style.display = "flex";
        document.getElementById("ivestiKoda").style.opacity = "0.3";
        document.querySelector('#topInfoGabriele').scrollIntoView({
            behavior: 'smooth'
        });
        document.getElementById("keypad").style.opacity = "0.3";
        document.getElementById("istrynimas").style.color = "transparent";
        document.getElementById("istrynimas").style.pointerEvents = "none";
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("Gabriele").style.display = "block";
        }, 3600);
        setTimeout(() => {
            document.getElementById("Gabriele").style.paddingTop = "0";
        }, 3620);
        setTimeout(() => {
            inputas = ""
            document.getElementById("kodas").value = '';
            document.getElementById("taskelis1").style.backgroundColor = "transparent";
            document.getElementById("taskelis2").style.backgroundColor = "transparent";
            document.getElementById("taskelis3").style.backgroundColor = "transparent";
            document.getElementById("taskelis4").style.backgroundColor = "transparent";
            document.getElementById("taskelis5").style.backgroundColor = "transparent";
            document.getElementById("taskelis6").style.backgroundColor = "transparent";
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
  }
  else if(form.pin.value === "645751") //Berzuna
        {
            document.cookie = "Berzuna=seselis";
        document.getElementById("loading").style.display = "flex";
        document.getElementById("ivestiKoda").style.opacity = "0.3";
        document.querySelector('#topInfoBerzuna').scrollIntoView({
            behavior: 'smooth'
        });
        document.getElementById("keypad").style.opacity = "0.3";
        document.getElementById("istrynimas").style.color = "transparent";
        document.getElementById("istrynimas").style.pointerEvents = "none";
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("Berzuna").style.display = "block";
        }, 3600);
        setTimeout(() => {
            document.getElementById("Berzuna").style.paddingTop = "0";
        }, 3620);
        setTimeout(() => {
            inputas = ""
            document.getElementById("kodas").value = '';
            document.getElementById("taskelis1").style.backgroundColor = "transparent";
            document.getElementById("taskelis2").style.backgroundColor = "transparent";
            document.getElementById("taskelis3").style.backgroundColor = "transparent";
            document.getElementById("taskelis4").style.backgroundColor = "transparent";
            document.getElementById("taskelis5").style.backgroundColor = "transparent";
            document.getElementById("taskelis6").style.backgroundColor = "transparent";
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
  }
  else if(form.pin.value === "192938") //Nojus
        {
            document.cookie = "Nojus=seselis";
        document.getElementById("loading").style.display = "flex";
        document.getElementById("ivestiKoda").style.opacity = "0.3";
        document.querySelector('#topInfoNojus').scrollIntoView({
            behavior: 'smooth'
        });
        document.getElementById("keypad").style.opacity = "0.3";
        document.getElementById("istrynimas").style.color = "transparent";
        document.getElementById("istrynimas").style.pointerEvents = "none";
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("Nojus").style.display = "block";
        }, 3600);
        setTimeout(() => {
            document.getElementById("Nojus").style.paddingTop = "0";
        }, 3620);
        setTimeout(() => {
            inputas = ""
            document.getElementById("kodas").value = '';
            document.getElementById("taskelis1").style.backgroundColor = "transparent";
            document.getElementById("taskelis2").style.backgroundColor = "transparent";
            document.getElementById("taskelis3").style.backgroundColor = "transparent";
            document.getElementById("taskelis4").style.backgroundColor = "transparent";
            document.getElementById("taskelis5").style.backgroundColor = "transparent";
            document.getElementById("taskelis6").style.backgroundColor = "transparent";
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
  }
  else if(form.pin.value === "850048") //Agnieska
        {
            document.cookie = "Agnieska=seselis";
        document.getElementById("loading").style.display = "flex";
        document.getElementById("ivestiKoda").style.opacity = "0.3";
        document.querySelector('#topInfoAgnieska').scrollIntoView({
            behavior: 'smooth'
        });
        document.getElementById("keypad").style.opacity = "0.3";
        document.getElementById("istrynimas").style.color = "transparent";
        document.getElementById("istrynimas").style.pointerEvents = "none";
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("Agnieska").style.display = "block";
        }, 3600);
        setTimeout(() => {
            document.getElementById("Agnieska").style.paddingTop = "0";
        }, 3620);
        setTimeout(() => {
            inputas = ""
            document.getElementById("kodas").value = '';
            document.getElementById("taskelis1").style.backgroundColor = "transparent";
            document.getElementById("taskelis2").style.backgroundColor = "transparent";
            document.getElementById("taskelis3").style.backgroundColor = "transparent";
            document.getElementById("taskelis4").style.backgroundColor = "transparent";
            document.getElementById("taskelis5").style.backgroundColor = "transparent";
            document.getElementById("taskelis6").style.backgroundColor = "transparent";
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
  }
    else{
        document.getElementById("loading").style.display = "flex";
        document.getElementById("ivestiKoda").style.opacity = "0.3";
        document.getElementById("keypad").style.opacity = "0.3";
        document.getElementById("istrynimas").style.color = "transparent";
        document.getElementById("istrynimas").style.pointerEvents = "none";
        setTimeout(() => {
            document.getElementById("taskeliai").style.marginLeft = "-100px";
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            inputas = ""
            document.getElementById("kodas").value = '';
            document.getElementById("taskelis1").style.backgroundColor = "transparent";
            document.getElementById("taskelis2").style.backgroundColor = "transparent";
            document.getElementById("taskelis3").style.backgroundColor = "transparent";
            document.getElementById("taskelis4").style.backgroundColor = "transparent";
            document.getElementById("taskelis5").style.backgroundColor = "transparent";
            document.getElementById("taskelis6").style.backgroundColor = "transparent";
        }, 3600);
        setTimeout(() => {
            document.getElementById("taskeliai").style.marginLeft = "100px";
        }, 3700);
        setTimeout(() => {
            document.getElementById("taskeliai").style.marginLeft = "-100px";
        }, 3800);
        setTimeout(() => {
            document.getElementById("taskeliai").style.marginLeft = "100px";
        }, 3900);
        setTimeout(() => {
            document.getElementById("taskeliai").style.marginLeft = "0";
            document.getElementById("loading").style.display = "none";
        }, 4000);
    }
}
let kelioneI = getCookie("kelioneI");
if (kelioneI != "") {
    document.getElementById("kelioneI---").style.display = "block";
    document.getElementById("kelioneI---").style.paddingTop = "0";
    setTimeout(() => {
        document.querySelector('#topInfo').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("kelioneI---").style.display = "none";
    document.getElementById("kelioneI---").style.paddingTop = "100vh";
    if (kelioneI != "" && kelioneI != null) {
        document.getElementById("kelioneI---").style.display = "none";
        document.getElementById("kelioneI---").style.paddingTop = "100vh";
    }
}
let Arune = getCookie("Arune");
if (Arune != "") {
    document.getElementById("Arune").style.display = "block";
    document.getElementById("Arune").style.paddingTop = "0";
    setTimeout(() => {
        document.querySelector('#topInfoArune').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("Arune").style.display = "none";
    document.getElementById("Arune").style.paddingTop = "100vh";
    if (Arune != "" && Arune != null) {
        document.getElementById("Arune").style.display = "none";
        document.getElementById("Arune").style.paddingTop = "100vh";
    }
}
let Smilte = getCookie("Smilte");
if (Smilte != "") {
    document.getElementById("Smilte").style.display = "block";
    document.getElementById("Smilte").style.paddingTop = "0";
    setTimeout(() => {
        document.querySelector('#topInfoSmilte').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("Smilte").style.display = "none";
    document.getElementById("Smilte").style.paddingTop = "100vh";
    if (Smilte != "" && Smilte != null) {
        document.getElementById("Smilte").style.display = "none";
        document.getElementById("Smilte").style.paddingTop = "100vh";
    }
}
let Adriana = getCookie("Adriana");
if (Adriana != "") {
    document.getElementById("Adriana").style.display = "block";
    document.getElementById("Adriana").style.paddingTop = "0";
    setTimeout(() => {
        document.querySelector('#topInfoAdriana').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("Adriana").style.display = "none";
    document.getElementById("Adriana").style.paddingTop = "100vh";
    if (Adriana != "" && Adriana != null) {
        document.getElementById("Adriana").style.display = "none";
        document.getElementById("Adriana").style.paddingTop = "100vh";
    }
}
let Norbertas = getCookie("Norbertas");
if (Norbertas != "") {
    document.getElementById("Norbertas").style.display = "block";
    document.getElementById("Norbertas").style.paddingTop = "0";
    setTimeout(() => {
        document.querySelector('#topInfoNorbertas').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("Norbertas").style.display = "none";
    document.getElementById("Norbertas").style.paddingTop = "100vh";
    if (Norbertas != "" && Norbertas != null) {
        document.getElementById("Norbertas").style.display = "none";
        document.getElementById("Norbertas").style.paddingTop = "100vh";
    }
}
let Meta = getCookie("Meta");
if (Meta != "") {
    document.getElementById("Meta").style.display = "block";
    document.getElementById("Meta").style.paddingTop = "0";
    setTimeout(() => {
        document.querySelector('#topInfoMeta').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("Meta").style.display = "none";
    document.getElementById("Meta").style.paddingTop = "100vh";
    if (Meta != "" && Meta != null) {
        document.getElementById("Meta").style.display = "none";
        document.getElementById("Meta").style.paddingTop = "100vh";
    }
}
let Justina = getCookie("Justina");
if (Justina != "") {
    document.getElementById("Justina").style.display = "block";
    document.getElementById("Justina").style.paddingTop = "0";
    setTimeout(() => {
        document.querySelector('#topInfoJustina').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("Justina").style.display = "none";
    document.getElementById("Justina").style.paddingTop = "100vh";
    if (Justina != "" && Justina != null) {
        document.getElementById("Justina").style.display = "none";
        document.getElementById("Justina").style.paddingTop = "100vh";
    }
}
let Mindaugasd = getCookie("Mindaugasd");
if (Mindaugasd != "") {
    document.getElementById("Mindaugasd").style.display = "block";
    document.getElementById("Mindaugasd").style.paddingTop = "0";
    setTimeout(() => {
        document.querySelector('#topInfoMindaugasd').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("Mindaugasd").style.display = "none";
    document.getElementById("Mindaugasd").style.paddingTop = "100vh";
    if (Mindaugasd != "" && Mindaugasd != null) {
        document.getElementById("Mindaugasd").style.display = "none";
        document.getElementById("Mindaugasd").style.paddingTop = "100vh";
    }
}
let Dovydas = getCookie("Dovydas");
if (Dovydas != "") {
    document.getElementById("Dovydas").style.display = "block";
    document.getElementById("Dovydas").style.paddingTop = "0";
    setTimeout(() => {
        document.querySelector('#topInfoDovydas').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("Dovydas").style.display = "none";
    document.getElementById("Dovydas").style.paddingTop = "100vh";
    if (Dovydas != "" && Dovydas != null) {
        document.getElementById("Dovydas").style.display = "none";
        document.getElementById("Dovydas").style.paddingTop = "100vh";
    }
}
let Matas = getCookie("Matas");
if (Matas != "") {
    document.getElementById("Matas").style.display = "block";
    document.getElementById("Matas").style.paddingTop = "0";
    setTimeout(() => {
        document.querySelector('#topInfoMatas').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("Matas").style.display = "none";
    document.getElementById("Matas").style.paddingTop = "100vh";
    if (Matas != "" && Matas != null) {
        document.getElementById("Matas").style.display = "none";
        document.getElementById("Matas").style.paddingTop = "100vh";
    }
}
let Aleksandra = getCookie("Aleksandra");
if (Aleksandra != "") {
    document.getElementById("Aleksandra").style.display = "block";
    document.getElementById("Aleksandra").style.paddingTop = "0";
    setTimeout(() => {
        document.querySelector('#topInfoAleksandra').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("Aleksandra").style.display = "none";
    document.getElementById("Aleksandra").style.paddingTop = "100vh";
    if (Aleksandra != "" && Aleksandra != null) {
        document.getElementById("Aleksandra").style.display = "none";
        document.getElementById("Aleksandra").style.paddingTop = "100vh";
    }
}
let Samanta = getCookie("Samanta");
if (Samanta != "") {
    document.getElementById("Samanta").style.display = "block";
    document.getElementById("Samanta").style.paddingTop = "0";
    setTimeout(() => {
        document.querySelector('#topInfoSamanta').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("Samanta").style.display = "none";
    document.getElementById("Samanta").style.paddingTop = "100vh";
    if (Samanta != "" && Samanta != null) {
        document.getElementById("Samanta").style.display = "none";
        document.getElementById("Samanta").style.paddingTop = "100vh";
    }
}
let Arnas = getCookie("Arnas");
if (Arnas != "") {
    document.getElementById("Arnas").style.display = "block";
    document.getElementById("Arnas").style.paddingTop = "0";
    setTimeout(() => {
        document.querySelector('#topInfoArnas').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("Arnas").style.display = "none";
    document.getElementById("Arnas").style.paddingTop = "100vh";
    if (Arnas != "" && Arnas != null) {
        document.getElementById("Arnas").style.display = "none";
        document.getElementById("Arnas").style.paddingTop = "100vh";
    }
}
let Milena = getCookie("Milena");
if (Milena != "") {
    document.getElementById("Milena").style.display = "block";
    document.getElementById("Milena").style.paddingTop = "0";
    setTimeout(() => {
        document.querySelector('#topInfoMilena').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("Milena").style.display = "none";
    document.getElementById("Milena").style.paddingTop = "100vh";
    if (Milena != "" && Milena != null) {
        document.getElementById("Milena").style.display = "none";
        document.getElementById("Milena").style.paddingTop = "100vh";
    }
}
let Emilija = getCookie("Emilija");
if (Emilija != "") {
    document.getElementById("Emilija").style.display = "block";
    document.getElementById("Emilija").style.paddingTop = "0";
    setTimeout(() => {
        document.querySelector('#topInfoEmilija').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("Emilija").style.display = "none";
    document.getElementById("Emilija").style.paddingTop = "100vh";
    if (Emilija != "" && Emilija != null) {
        document.getElementById("Emilija").style.display = "none";
        document.getElementById("Emilija").style.paddingTop = "100vh";
    }
}
let Modestas = getCookie("Modestas");
if (Modestas != "") {
    document.getElementById("Modestas").style.display = "block";
    document.getElementById("Modestas").style.paddingTop = "0";
    setTimeout(() => {
        document.querySelector('#topInfoModestas').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("Modestas").style.display = "none";
    document.getElementById("Modestas").style.paddingTop = "100vh";
    if (Modestas != "" && Modestas != null) {
        document.getElementById("Modestas").style.display = "none";
        document.getElementById("Modestas").style.paddingTop = "100vh";
    }
}
let Gabriele = getCookie("Gabriele");
if (Gabriele != "") {
    document.getElementById("Gabriele").style.display = "block";
    document.getElementById("Gabriele").style.paddingTop = "0";
    setTimeout(() => {
        document.querySelector('#topInfoGabriele').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("Gabriele").style.display = "none";
    document.getElementById("Gabriele").style.paddingTop = "100vh";
    if (Gabriele != "" && Gabriele != null) {
        document.getElementById("Gabriele").style.display = "none";
        document.getElementById("Gabriele").style.paddingTop = "100vh";
    }
}
let Berzuna = getCookie("Berzuna");
if (Berzuna != "") {
    document.getElementById("Berzuna").style.display = "block";
    document.getElementById("Berzuna").style.paddingTop = "0";
    setTimeout(() => {
        document.querySelector('#topInfoBerzuna').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("Berzuna").style.display = "none";
    document.getElementById("Berzuna").style.paddingTop = "100vh";
    if (Berzuna != "" && Berzuna != null) {
        document.getElementById("Berzuna").style.display = "none";
        document.getElementById("Berzuna").style.paddingTop = "100vh";
    }
}
let Nojus = getCookie("Nojus");
if (Nojus != "") {
    document.getElementById("Nojus").style.display = "block";
    document.getElementById("Nojus").style.paddingTop = "0";
    setTimeout(() => {
        document.querySelector('#topInfoNojus').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("Nojus").style.display = "none";
    document.getElementById("Nojus").style.paddingTop = "100vh";
    if (Nojus != "" && Nojus != null) {
        document.getElementById("Nojus").style.display = "none";
        document.getElementById("Nojus").style.paddingTop = "100vh";
    }
}
let Agnieska = getCookie("Agnieska");
if (Agnieska != "") {
    document.getElementById("Agnieska").style.display = "block";
    document.getElementById("Agnieska").style.paddingTop = "0";
    setTimeout(() => {
        document.querySelector('#topInfoAgnieska').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("Agnieska").style.display = "none";
    document.getElementById("Agnieska").style.paddingTop = "100vh";
    if (Agnieska != "" && Agnieska != null) {
        document.getElementById("Agnieska").style.display = "none";
        document.getElementById("Agnieska").style.paddingTop = "100vh";
    }
}

if (kelioneI != "" || Arune != "" || Smilte != "" || Adriana != "" || Norbertas != "" || Meta != "" || Justina != "" || Mindaugasd != "" || Dovydas != "" || Matas != "" || Aleksandra != "" || Samanta != "" || Arnas != "" || Milena != "" || Emilija != "" || Modestas != "" || Gabriele != "" || Berzuna != "" || Nojus != "" || Agnieska != "") {
    document.getElementById("screen").style.top = "-100%";
    document.getElementById("screen").style.backgroundColor = "transparent";
    document.getElementById("display").style.top = "-100%";
    setTimeout(() => {
        document.getElementById("body").style.overflowX = "hidden";
        document.getElementById("body").style.overflowY = "scroll";
    }, 3000);
}
else {
    document.getElementById("screen").style.top = "0";
    document.getElementById("screen").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    document.getElementById("display").style.top = "0";
    document.getElementById("body").style.overflowX = "hidden";
    document.getElementById("body").style.overflowY = "hidden";
    if (kelioneI != "" && kelioneI != null || Arune != "" && Arune != null || Smilte != "" && Smilte != null || Adriana != "" && Adriana != null || Norbertas != "" && Norbertas != null || Meta != "" && Meta != null || Justina != "" && Justina != null || Mindaugasd != "" && Mindaugasd != null || Dovydas != "" && Dovydas != null || Matas != "" && Matas != null || Aleksandra != "" && Aleksandra != null || Samanta != "" && Samanta != null || Arnas != "" && Arnas != null || Milena != "" && Milena != null || Emilija != "" && Emilija != null || Modestas != "" && Modestas != null || Gabriele != "" && Gabriele != null || Berzuna != "" && Berzuna || Nojus != "" && Nojus != null || Agnieska != "" && Agnieska != null) {
        document.getElementById("screen").style.top = "0";
        document.getElementById("screen").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
        document.getElementById("display").style.top = "0";
        document.getElementById("body").style.overflowX = "hidden";
        document.getElementById("body").style.overflowY = "hidden";
    }
}

function closeKelione() {
    document.cookie = "kelioneI=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.getElementById("kelioneUzdarymas").style.pointerEvents = "none";
    setTimeout(() => {
        document.getElementById("screen").style.top = "0";
        document.getElementById("screen").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
        document.getElementById("display").style.top = "0";
        document.getElementById("kelioneI---").style.paddingTop = "100vh";
    }, 10);
    setTimeout(() => {
        document.getElementById("kelioneUzdarymas").style.pointerEvents = "all";
        document.getElementById("body").style.overflow = "hidden";
        document.getElementById("kelioneI---").style.display = "none";
    }, 310);
}
function closeArune() {
    document.cookie = "Arune=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.getElementById("AruneUzdarymas").style.pointerEvents = "none";
    setTimeout(() => {
        document.getElementById("screen").style.top = "0";
        document.getElementById("screen").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
        document.getElementById("display").style.top = "0";
        document.getElementById("Arune").style.paddingTop = "100vh";
    }, 10);
    setTimeout(() => {
        document.getElementById("AruneUzdarymas").style.pointerEvents = "all";
        document.getElementById("body").style.overflow = "hidden";
        document.getElementById("Arune").style.display = "none";
    }, 310);
}
function closeSmilte() {
    document.cookie = "Smilte=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.getElementById("SmilteUzdarymas").style.pointerEvents = "none";
    setTimeout(() => {
        document.getElementById("screen").style.top = "0";
        document.getElementById("screen").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
        document.getElementById("display").style.top = "0";
        document.getElementById("Smilte").style.paddingTop = "100vh";
    }, 10);
    setTimeout(() => {
        document.getElementById("SmilteUzdarymas").style.pointerEvents = "all";
        document.getElementById("body").style.overflow = "hidden";
        document.getElementById("Smilte").style.display = "none";
    }, 310);
}
function closeAdriana() {
    document.cookie = "Adriana=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.getElementById("AdrianaUzdarymas").style.pointerEvents = "none";
    setTimeout(() => {
        document.getElementById("screen").style.top = "0";
        document.getElementById("screen").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
        document.getElementById("display").style.top = "0";
        document.getElementById("Adriana").style.paddingTop = "100vh";
    }, 10);
    setTimeout(() => {
        document.getElementById("AdrianaUzdarymas").style.pointerEvents = "all";
        document.getElementById("body").style.overflow = "hidden";
        document.getElementById("Adriana").style.display = "none";
    }, 310);
}
function closeNorbertas() {
    document.cookie = "Norbertas=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.getElementById("NorbertasUzdarymas").style.pointerEvents = "none";
    setTimeout(() => {
        document.getElementById("screen").style.top = "0";
        document.getElementById("screen").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
        document.getElementById("display").style.top = "0";
        document.getElementById("Norbertas").style.paddingTop = "100vh";
    }, 10);
    setTimeout(() => {
        document.getElementById("NorbertasUzdarymas").style.pointerEvents = "all";
        document.getElementById("body").style.overflow = "hidden";
        document.getElementById("Norbertas").style.display = "none";
    }, 310);
}
function closeMeta() {
    document.cookie = "Meta=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.getElementById("MetaUzdarymas").style.pointerEvents = "none";
    setTimeout(() => {
        document.getElementById("screen").style.top = "0";
        document.getElementById("screen").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
        document.getElementById("display").style.top = "0";
        document.getElementById("Meta").style.paddingTop = "100vh";
    }, 10);
    setTimeout(() => {
        document.getElementById("MetaUzdarymas").style.pointerEvents = "all";
        document.getElementById("body").style.overflow = "hidden";
        document.getElementById("Meta").style.display = "none";
    }, 310);
}
function closeJustina() {
    document.cookie = "Justina=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.getElementById("JustinaUzdarymas").style.pointerEvents = "none";
    setTimeout(() => {
        document.getElementById("screen").style.top = "0";
        document.getElementById("screen").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
        document.getElementById("display").style.top = "0";
        document.getElementById("Justina").style.paddingTop = "100vh";
    }, 10);
    setTimeout(() => {
        document.getElementById("JustinaUzdarymas").style.pointerEvents = "all";
        document.getElementById("body").style.overflow = "hidden";
        document.getElementById("Justina").style.display = "none";
    }, 310);
}
function closeMindaugasd() {
    document.cookie = "Mindaugasd=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.getElementById("MindaugasdUzdarymas").style.pointerEvents = "none";
    setTimeout(() => {
        document.getElementById("screen").style.top = "0";
        document.getElementById("screen").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
        document.getElementById("display").style.top = "0";
        document.getElementById("Mindaugasd").style.paddingTop = "100vh";
    }, 10);
    setTimeout(() => {
        document.getElementById("MindaugasdUzdarymas").style.pointerEvents = "all";
        document.getElementById("body").style.overflow = "hidden";
        document.getElementById("Mindaugasd").style.display = "none";
    }, 310);
}
function closeDovydas() {
    document.cookie = "Dovydas=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.getElementById("DovydasUzdarymas").style.pointerEvents = "none";
    setTimeout(() => {
        document.getElementById("screen").style.top = "0";
        document.getElementById("screen").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
        document.getElementById("display").style.top = "0";
        document.getElementById("Dovydas").style.paddingTop = "100vh";
    }, 10);
    setTimeout(() => {
        document.getElementById("DovydasUzdarymas").style.pointerEvents = "all";
        document.getElementById("body").style.overflow = "hidden";
        document.getElementById("Dovydas").style.display = "none";
    }, 310);
}
function closeMatas() {
    document.cookie = "Matas=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.getElementById("MatasUzdarymas").style.pointerEvents = "none";
    setTimeout(() => {
        document.getElementById("screen").style.top = "0";
        document.getElementById("screen").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
        document.getElementById("display").style.top = "0";
        document.getElementById("Matas").style.paddingTop = "100vh";
    }, 10);
    setTimeout(() => {
        document.getElementById("MatasUzdarymas").style.pointerEvents = "all";
        document.getElementById("body").style.overflow = "hidden";
        document.getElementById("Matas").style.display = "none";
    }, 310);
}
function closeAleksandra() {
    document.cookie = "Aleksandra=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.getElementById("AleksandraUzdarymas").style.pointerEvents = "none";
    setTimeout(() => {
        document.getElementById("screen").style.top = "0";
        document.getElementById("screen").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
        document.getElementById("display").style.top = "0";
        document.getElementById("Aleksandra").style.paddingTop = "100vh";
    }, 10);
    setTimeout(() => {
        document.getElementById("AleksandraUzdarymas").style.pointerEvents = "all";
        document.getElementById("body").style.overflow = "hidden";
        document.getElementById("Aleksandra").style.display = "none";
    }, 310);
}
function closeSamanta() {
    document.cookie = "Samanta=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.getElementById("SamantaUzdarymas").style.pointerEvents = "none";
    setTimeout(() => {
        document.getElementById("screen").style.top = "0";
        document.getElementById("screen").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
        document.getElementById("display").style.top = "0";
        document.getElementById("Samanta").style.paddingTop = "100vh";
    }, 10);
    setTimeout(() => {
        document.getElementById("SamantaUzdarymas").style.pointerEvents = "all";
        document.getElementById("body").style.overflow = "hidden";
        document.getElementById("Samanta").style.display = "none";
    }, 310);
}
function closeArnas() {
    document.cookie = "Arnas=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.getElementById("ArnasUzdarymas").style.pointerEvents = "none";
    setTimeout(() => {
        document.getElementById("screen").style.top = "0";
        document.getElementById("screen").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
        document.getElementById("display").style.top = "0";
        document.getElementById("Arnas").style.paddingTop = "100vh";
    }, 10);
    setTimeout(() => {
        document.getElementById("ArnasUzdarymas").style.pointerEvents = "all";
        document.getElementById("body").style.overflow = "hidden";
        document.getElementById("Arnas").style.display = "none";
    }, 310);
}
function closeMilena() {
    document.cookie = "Milena=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.getElementById("MilenaUzdarymas").style.pointerEvents = "none";
    setTimeout(() => {
        document.getElementById("screen").style.top = "0";
        document.getElementById("screen").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
        document.getElementById("display").style.top = "0";
        document.getElementById("Milena").style.paddingTop = "100vh";
    }, 10);
    setTimeout(() => {
        document.getElementById("MilenaUzdarymas").style.pointerEvents = "all";
        document.getElementById("body").style.overflow = "hidden";
        document.getElementById("Milena").style.display = "none";
    }, 310);
}
function closeEmilija() {
    document.cookie = "Emilija=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.getElementById("EmilijaUzdarymas").style.pointerEvents = "none";
    setTimeout(() => {
        document.getElementById("screen").style.top = "0";
        document.getElementById("screen").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
        document.getElementById("display").style.top = "0";
        document.getElementById("Emilija").style.paddingTop = "100vh";
    }, 10);
    setTimeout(() => {
        document.getElementById("EmilijaUzdarymas").style.pointerEvents = "all";
        document.getElementById("body").style.overflow = "hidden";
        document.getElementById("Emilija").style.display = "none";
    }, 310);
}
function closeModestas() {
    document.cookie = "Modestas=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.getElementById("ModestasUzdarymas").style.pointerEvents = "none";
    setTimeout(() => {
        document.getElementById("screen").style.top = "0";
        document.getElementById("screen").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
        document.getElementById("display").style.top = "0";
        document.getElementById("Modestas").style.paddingTop = "100vh";
    }, 10);
    setTimeout(() => {
        document.getElementById("ModestasUzdarymas").style.pointerEvents = "all";
        document.getElementById("body").style.overflow = "hidden";
        document.getElementById("Modestas").style.display = "none";
    }, 310);
}
function closeGabriele() {
    document.cookie = "Gabriele=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.getElementById("GabrieleUzdarymas").style.pointerEvents = "none";
    setTimeout(() => {
        document.getElementById("screen").style.top = "0";
        document.getElementById("screen").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
        document.getElementById("display").style.top = "0";
        document.getElementById("Gabriele").style.paddingTop = "100vh";
    }, 10);
    setTimeout(() => {
        document.getElementById("GabrieleUzdarymas").style.pointerEvents = "all";
        document.getElementById("body").style.overflow = "hidden";
        document.getElementById("Gabriele").style.display = "none";
    }, 310);
}
function closeBerzuna() {
    document.cookie = "Berzuna=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.getElementById("BerzunaUzdarymas").style.pointerEvents = "none";
    setTimeout(() => {
        document.getElementById("screen").style.top = "0";
        document.getElementById("screen").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
        document.getElementById("display").style.top = "0";
        document.getElementById("Berzuna").style.paddingTop = "100vh";
    }, 10);
    setTimeout(() => {
        document.getElementById("BerzunaUzdarymas").style.pointerEvents = "all";
        document.getElementById("body").style.overflow = "hidden";
        document.getElementById("Berzuna").style.display = "none";
    }, 310);
}
function closeNojus() {
    document.cookie = "Nojus=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.getElementById("NojusUzdarymas").style.pointerEvents = "none";
    setTimeout(() => {
        document.getElementById("screen").style.top = "0";
        document.getElementById("screen").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
        document.getElementById("display").style.top = "0";
        document.getElementById("Nojus").style.paddingTop = "100vh";
    }, 10);
    setTimeout(() => {
        document.getElementById("NojusUzdarymas").style.pointerEvents = "all";
        document.getElementById("body").style.overflow = "hidden";
        document.getElementById("Nojus").style.display = "none";
    }, 310);
}
function closeAgnieska() {
    document.cookie = "Agnieska=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.getElementById("AgnieskaUzdarymas").style.pointerEvents = "none";
    setTimeout(() => {
        document.getElementById("screen").style.top = "0";
        document.getElementById("screen").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
        document.getElementById("display").style.top = "0";
        document.getElementById("Agnieska").style.paddingTop = "100vh";
    }, 10);
    setTimeout(() => {
        document.getElementById("AgnieskaUzdarymas").style.pointerEvents = "all";
        document.getElementById("body").style.overflow = "hidden";
        document.getElementById("Agnieska").style.display = "none";
    }, 310);
}