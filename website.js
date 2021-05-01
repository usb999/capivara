let scrollingY = window.scrollY;
const btn = document.getElementById("topButton");
window.onscroll = function () {
    scrollFunction();
    scrollingY = window.scrollY;
};

window.onload = function () {
    btn.style.transitionDuration = "0.6s"
}

function scrollFunction() {
    if (window.scrollY > 0) {
        btn.style.display = "block";
        btn.style.backgroundColor = "#000";
        btn.style.color = "#fff";
        btn.style.opacity = "0.5";
    } else {
        btn.style.backgroundColor = "transparent";
        btn.style.color = "transparent";
        btn.style.opacity = "0";
    }
}

function scrollToInformation() {
    const element = document.getElementById("informationSection");
    console.log(window)
    element.scrollIntoView({behavior: "smooth"})
    stop()
}

function topFunction() {
    const scrollStatus = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollStatus > 0) {
        window.requestAnimationFrame(topFunction);
        window.scrollTo(0, scrollStatus - scrollStatus / 15);
    }
}