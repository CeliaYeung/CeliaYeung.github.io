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


function openIllustrationCategory(event, category) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(category).style.display = "block";
  event.currentTarget.className += " active";
}

document.getElementById("illustrationDefaultTab").click();


