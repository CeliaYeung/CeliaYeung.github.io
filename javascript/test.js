window.onload = function () {
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    let currentIndex = 0;
    let prevIndex;
    const images = document.querySelectorAll(".image-in-carousel");

    const totalImages = Object.keys(images).length;
    console.log("Images:" + images);
    console.log("Total images:" + totalImages);

    // const imageWidth = images[1].getBoundingClientRect().x;
    const imageWidth = 545;

    rightArrow.addEventListener("click", () => {
        imageList.classList.add("sliding-transition");

        prevIndex = currentIndex;
        currentIndex = (currentIndex + 1) % totalImages;

        imageList.style.transform = `translateX(-${imageWidth}px)`;

        setTimeout(() => {
            imageList.appendChild(images[prevIndex]);
            imageList.classList.remove("sliding-transition");
            imageList.style.transform = "";
        }, 500);
    });

    leftArrow.addEventListener("click", () => {
        prevIndex = currentIndex;
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;

        // Move Carousel to the left by one image, and insert the image at currentIndex at the beginning of carousel's DOM
        imageList.style.transform = `translateX(-${imageWidth}px)`;
        imageList.insertBefore(images[currentIndex], imageList.firstChild);

        // Now, let's start the transition effect, from -520 px to 0 px.
        setTimeout(() => {
            imageList.style.transform = "";
            imageList.classList.add("sliding-transition");
        }, 10);

        setTimeout(() => {
            // By removing the transition class, we ensure that the transition only occurs when we want it to and that we have full control over the carousel's movement.
            imageList.classList.remove("sliding-transition");
        }, 490);
    });
}