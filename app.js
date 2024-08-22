/* Navbar response burger menu toggle */
function myFunction() {
  var x = document.getElementById('navbar')
  if (x.className === 'navbar') {
    x.className += ' responsive'
  } else {
    x.className = 'navbar'
  }
}

// window.onload = function () {
//   createImageGrid()
// }

// function createImageGrid() {
//   var folder = 'images/gallery'
//   $.ajax({
//     url: folder,
//     dataType: "jsonp",
//     success: function (data) {
//       $(data)
//         .find('a')
//         .attr('href', function (i, val) {
//           if (val.match(/\.(jpe?g|png|gif)$/)) {
//             $('.wrapper').append("<img src='" + folder + val + "'>")
//           }
//         })
//     },
//   })
// }

window.onload = function () {
  var lazyloadImages = document.querySelectorAll("img.lazy");
  console.log("Lazy load images " + lazyloadImages.length);

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyloadImage = entry.target;
          lazyloadImage.src = lazyloadImage.dataset.src;
          lazyloadImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyloadImage);
        }
      });
    });

    lazyloadImages.forEach(function(lazyLoadImage) {
      lazyImageObserver.observe(lazyLoadImage);
    });
  }
}

