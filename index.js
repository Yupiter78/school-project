const slides = document.querySelectorAll(".carousel-item");
const indicators = document.querySelectorAll(
    "div.carousel-indicators>[data-bs-target='#carouselExampleCaptions']"
);
const prev = document.querySelector(".carousel-control-prev");
const next = document.querySelector(".carousel-control-next");

let curIndex = 0;

const handleSlideChange = (index) => {
    indicators[curIndex].classList.remove("active");
    slides[curIndex].classList.remove("active");
    indicators[index].classList.add("active");
    slides[index].classList.add("active");
    curIndex = index;
};
const activeIndicator = (indicator, index) => {
    if (indicator.dataset.bsSlideTo === index.toString()) {
        handleSlideChange(index);
    }
};

prev.addEventListener("click", () => {
    handleSlideChange(curIndex === 0 ? slides.length - 1 : curIndex - 1);
});

next.addEventListener("click", () => {
    handleSlideChange(curIndex === slides.length - 1 ? 0 : curIndex + 1);
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
        activeIndicator(indicator, index);
    });
});
