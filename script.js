function changeSlide(x) {
    slides = document.querySelectorAll(".slide");
    slider = document.getElementById("slider");
    slideWidth = slides[0].offsetWidth + 25;

    //slideWidth = document.getElementById("example-image").offsetWidth + 25;

    switch (x) {
        case 1:
            slider.style.marginLeft = "-" + slideWidth*2 + "px";

            setTimeout(function () {
                slider.append(slides[0]);
                changeDots();
                slider.style.transition = "none";
                slider.style.marginLeft = "-" + slideWidth + "px";
                
            }, 200);
            
            slider.style.transition = "margin-left 0.2s";
            break;

        case -1:
            //slider.style.marginLeft = "-" + slideWidth*2 + "px";
            slider.style.marginLeft = "0px";

            setTimeout(function () {
                slides[0].before(slides[slides.length - 1]);
                changeDots();
                slider.style.marginLeft = "-" + slideWidth + "px";
                slider.style.transition = "none";
                
            }, 200);

            slider.style.transition = "margin-left 0.2s";
            break;

        default:
            break;
    }
}

function autoSlides() {
    let q = 0;
    
    setInterval(function () {
        switch (q) {
            case 0:
                q = 1;
                break;

            case 1:
                q = 0;
                break;

            default:
                break;
        }
        changeSlide(q);
    }, 1500);

}

function xAnimation() {
    topBar = document.getElementById("bar1");
    bottomBar = document.getElementById("bar2");

    if (topBar.style.transform != "rotate(45deg)") {
        topBar.style.marginBottom = "-2px";
        topBar.style.marginTop = "6px";
        bottomBar.style.marginBottom = "3px";

        topBar.style.transform = "rotate(45deg)";
        bottomBar.style.transform = "rotate(-45deg)";
    }

    else {
        topBar.style.marginBottom = "9px";
        topBar.style.marginTop = "0px";
        bottomBar.style.marginBottom = "0px";

        topBar.style.transform = "rotate(0deg)";
        bottomBar.style.transform = "rotate(0deg)";
    }

    toggleMobile();
}

function toggleMobile() {
    //nav = document.getElementById("");
    mobileNav = document.getElementById('mobile');
    const links = mobileNav.querySelectorAll("h1");

    if (mobileNav.style.visibility != "visible") {

        mobileNav.style.visibility = "visible";
        mobileNav.style.opacity = '1';
        document.body.style.overflowY = "hidden";

        var x = 0;
        var intervalID = setInterval(function () {

            links[x].style.marginLeft = "0px";

            if (++x === links.length) {
                window.clearInterval(intervalID);
            }
        }, 35);
    }

    else {
        mobileNav.style.visibility = "hidden";
        mobileNav.style.opacity = '0';
        document.body.style.overflowY = "visible";

        for (let i = 0; i < links.length; i++) {
            links[i].style.marginLeft = "-15px";
        }

    }
}

function mobileDropdown() {
    mobileNav = document.getElementById("mobile");
    links = mobileNav.querySelectorAll("h2");
    const mobileDropdown = document.querySelector(".dropdown-links-mobile");

    if (mobileDropdown.style.marginTop != "0px") {

        mobileDropdown.style.visibility = "visible";
        mobileDropdown.style.marginTop = "0px";
        mobileDropdown.style.opacity = "1";
    }

    else {
        mobileDropdown.style.visibility = "hidden";
        mobileDropdown.style.marginTop = "-314px";
        mobileDropdown.style.opacity = "0";
    }

    if (links[0].style.marginLeft != "15px") {

        var x = 0;
        var intervalID = setInterval(function () {

            links[x].style.marginLeft = "15px";

            if (++x === links.length) {
                window.clearInterval(intervalID);
            }
        }, 35);

    }

    else {
        var x = 0;
        var intervalID = setInterval(function () {

            links[x].style.marginLeft = "0px";

            if (++x === links.length) {
                window.clearInterval(intervalID);
            }
        }, 35);

    }
}

function checkCurrentSlide() {
    slider = document.getElementById("slider");
    slides = slider.querySelectorAll(".slide");

    const currentSlide = slides[1].id;

    for(let i = 1; i <= slides.length; i++){
        if (currentSlide == "slide" + i){
            return i;
        }
    }
}

function changeDots() {
    dotsWrapper = document.querySelector(".slider-dots");
    dots = dotsWrapper.querySelectorAll("span");

    for(let i = 0; i <= dots.length-1; i++){
        dots[i].classList = '';
    }

    dots[checkCurrentSlide()-1].classList.add("active");

}

function moveSVG(svg, event) {
    svgItem = document.getElementById(svg);
    let mx = event.clientX;
    let my = event.clientY;

    svgItem.setAttribute("cx", mx);
    svgItem.setAttribute("cy", (my-0) + window.scrollY);
}