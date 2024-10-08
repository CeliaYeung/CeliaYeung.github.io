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

  /* Lazy load images */
  let lazyloadImages = document.querySelectorAll("img.lazy");
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

    lazyloadImages.forEach(function (lazyLoadImage) {
      lazyImageObserver.observe(lazyLoadImage);
    });
  }


  /* Zoom in on images */
  let modal = document.getElementById("imageDisplayModal");
  const gridImages = document.querySelectorAll('.grid-image');

  gridImages.forEach(gridImage => {
    gridImage.addEventListener('click', function () {
      // Your click event code here
      console.log('Grid image clicked:', this);
      loadImageModal(this.querySelector('img'))
    });
  });

  let closeBtn = document.getElementsByClassName("close-btn")[0];

  closeBtn.onclick = function () {
    modal.style.display = "none";

    /* Undide body scroll bar when modal is not showing */
    let bodyElement = document.body;
    bodyElement.style.overflowY = 'auto';
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

function generateImageID(fileName) {
  let imageID = "";
  for (i in fileName) {
    if (i == 0) {
      imageID = imageID + fileName[i];
    }

    else {
      imageID = imageID + (fileName[i].charAt(0).toUpperCase() + fileName[i].slice(1));
    }
    console.log(imageID);
  }

  return imageID;

}

function loadImageModal(imageElement) {
  let modal = document.getElementById("imageDisplayModal");
  let modalImage = document.getElementById("modalImage");
  let caption = document.getElementById("modalCaption");

  modal.style.display = "block";
  modalImage.src = imageElement.src;
  caption.innerHTML = imageElement.alt;

  /* Hide body scroll bar when modal is showing */
  let bodyElement = document.body;
  bodyElement.style.overflowY = 'hidden';
}


