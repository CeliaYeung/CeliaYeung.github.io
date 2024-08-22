// //https://codepen.io/rbressner/pen/yGmvrV
// https://www.tutorialspoint.com/how-to-modify-this-javascript-code-to-grab-an-image-url-from-a-json-file-and-display-it-in-html#:~:text=This%20can%20be%20done%20by,display%20it%20on%20your%20page.
// https://dev.to/arindam1997007/creating-an-infinite-looping-image-carousel-with-css-and-javascript-4pao

// var imageList = document.getElementById('image-list');
// var scrollRight = document.getElementById('scroll-right');
// var scrollLeft = document.getElementById('scroll-left');

// // When a user clicks on the right arrow, the ul will scroll 750px to the right
// scrollRight.addEventListener('click', (event) => {
//     imageList.scrollBy(430, 0);
// });

// // When a user clicks on the left arrow, the ul will scroll 750px to the left
// scrollLeft.addEventListener('click', (event) => {
//     imageList.scrollBy(-430, 0);
// });


// const imageList = document.querySelector(".image-list");
// fetch('./image-data.json')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         data.map((element) => {
//             console.log(element);

//             if (element.show_on_home == true) {
//                 let newImage = document.createElement("img");
//                 newImage.className = "image-in-carousel";
//                 newImage.src = element.file
//                 newImage.alt = element.name
//                 imageList.appendChild(newImage);
//             }
//         });
//     })
//     .catch(error => console.log(error));

const imageList = document.querySelector(".image-list");
async function populateImageData() {
    const response = await fetch('./image-data.json');

    const imagesData = await response.json();
    imagesData.map((image) => {
        console.log(image);

        if (image.show_on_home == true) {
            let newImage = document.createElement("img");
            newImage.className = "image-in-carousel";
            newImage.src = image.file
            newImage.alt = image.name
            imageList.appendChild(newImage);
        }
    });
}


populateImageData();
// Scrolling of the carousel
// async function imageSlider() {
//     const leftArrow = document.querySelector(".left-arrow");
//     const rightArrow = document.querySelector(".right-arrow");

//     let currentIndex = 0;
//     let prevIndex;
//     const images = document.querySelectorAll(".image-in-carousel");

//     const totalImages = Object.keys(images).length;
//     console.log("Images:" + images);
//     console.log("Total images:" + totalImages);

//     // const imageWidth = images[1].getBoundingClientRect().x;
//     const imageWidth = 520;

//     rightArrow.addEventListener("click", () => {
//         imageList.classList.add("sliding-transition");

//         prevIndex = currentIndex;
//         currentIndex = (currentIndex + 1) % totalImages;

//         imageList.style.transform = `translateX(-${imageWidth}px)`;

//         setTimeout(() => {
//             imageList.appendChild(images[prevIndex]);
//             imageList.classList.remove("sliding-transition");
//             imageList.style.transform = "";
//         }, 500);
//     });

//     leftArrow.addEventListener("click", () => {
//         prevIndex = currentIndex;
//         currentIndex = (currentIndex - 1 + totalImages) % totalImages;

//         // Move Carousel to the left by one image, and insert the image at currentIndex at the beginning of carousel's DOM
//         imageList.style.transform = `translateX(-${imageWidth}px)`;
//         imageList.insertBefore(images[currentIndex], imageList.firstChild);

//         // Now, let's start the transition effect, from -520 px to 0 px.
//         setTimeout(() => {
//             imageList.style.transform = "";
//             imageList.classList.add("sliding-transition");
//         }, 10);

//         setTimeout(() => {
//             // By removing the transition class, we ensure that the transition only occurs when we want it to and that we have full control over the carousel's movement.
//             imageList.classList.remove("sliding-transition");
//         }, 490);
//     });
// }
