function Home() {
    window.location.href = 'disaMain.html';
}

function Disabilties() {
    window.location.href = 'disaTypes.html';
}

function Support() {
    window.location.href = 'disaYouCan.html';
}

function OtherSupport() {
    window.location.href = 'disaSites.html';
}

function toggleMe(a) {
    var e = document.getElementById(a);
    if(!e) return true;
    if(e.style.display == "none") {
        e.style.display = "block";
    } else {
        e.style.display = "none";
    }
    return false;
}