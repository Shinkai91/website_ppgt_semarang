var slideIndex = 0;
var currentSlideIndex = 0;
var slideArray = [];
var touchStartX = 0;
var touchEndX = 0;

function Slide(title, subtitle, background, link) {
    this.title = title;
    this.subtitle = subtitle;
    this.background = background;
    this.link = link;
    this.id = "slide" + slideIndex;
    slideIndex++;
    slideArray.push(this);
}

var image1 = new Slide(
    "Paskah PPGT Se-Surabaya Raya",
    "21 - 22 April 2023",
    "image-slider/slide-1.png",
    "https://drive.google.com/drive/folders/1WZXikybZMQkO_tNtG0sL6UJDSyg19LSZ?usp=share_link"
);

var image2 = new Slide(
    "Penyambutan Anggota Baru Tosiarrang",
    "27 - 29 Oktober 2023",
    "image-slider/slide-2.png",
    "https://drive.google.com/drive/folders/1Kl38Hg9BCCj_FolwjaUwDJnxMkaY6rBN?usp=sharing"
);

var image3 = new Slide(
    "Natal PPGT C.K. Semarang",
    "17 Desember 2023",
    "image-slider/slide-3.png",
    "https://drive.google.com/drive/folders/1c7glCmvyMvFsAhywQZM0mF4v8mgcwUrh?usp=drive_link"
);

function buildSlider() {
    var myHTML = "";

    for (var i = 0; i < slideArray.length; i++) {
        myHTML +=
            "<div id='" +
            slideArray[i].id +
            "' class='singleSlide' style='background-image:url(" +
            slideArray[i].background +
            ");'>" +
            "<div class='slideOverlay'>" +
            "<h1>" +
            slideArray[i].title +
            "</h1>" +
            "<h4>" +
            slideArray[i].subtitle +
            "</h4>" +
            "<a href='" +
            slideArray[i].link +
            "' target='_blank'>Open</a>" +
            "</div>" +
            "</div>";
    }
    document.getElementById("mySlider").innerHTML = myHTML;
    document.getElementById("slide" + currentSlideIndex).style.left = 0;
}

document.getElementById("mySlider").addEventListener("touchstart", handleTouchStart, false);
document.getElementById("mySlider").addEventListener("touchend", handleTouchEnd, false);

function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
    touchEndX = event.changedTouches[0].clientX;
    var deltaX = touchEndX - touchStartX;

    if (deltaX > 50) {
        prevSlide();
    } else if (deltaX < -50) {
        nextSlide();
    }
}

function prevSlide() {
    var nextSlideIndex;
    if (currentSlideIndex === 0) {
        nextSlideIndex = slideArray.length - 1;
    } else {
        nextSlideIndex = currentSlideIndex - 1;
    }
    document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
    document.getElementById("slide" + currentSlideIndex).style.left = 0;
    document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInLeft");
    document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutRight");
    currentSlideIndex = nextSlideIndex;
}

function nextSlide() {
    var nextSlideIndex;
    if (currentSlideIndex === slideArray.length - 1) {
        nextSlideIndex = 0;
    } else {
        nextSlideIndex = currentSlideIndex + 1;
    }
    document.getElementById("slide" + nextSlideIndex).style.left = "100%";
    document.getElementById("slide" + currentSlideIndex).style.left = 0;
    document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInRight");
    document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutLeft");
    currentSlideIndex = nextSlideIndex;
}

setInterval(function () {
    nextSlide();
}, 5000);

buildSlider();