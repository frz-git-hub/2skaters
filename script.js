
function myFunction() {

  document.body.style.overflowY = "hidden";
  var req = new XMLHttpRequest();
  req.open('GET', './asset/skate.mp4', true);

  req.onload = function () {
    // Onload is triggered even on 404
    // so we need to check the status code
    if (this.status === 200) {
      showPage()
      // var videoBlob = this.response;
      // var vid = URL.createObjectURL(videoBlob); // IE10+
      // Video is now downloaded
      // and we can set it as source on the video element
      // video.src = vid;
    }
  }
  req.onerror = function () {
    // Error
    console.log("ERRRRRRORORORORO")
  }

  req.send();
  
  // setTimeout(showPage, 5000);
}

function showPage() {
  document.body.style.overflowY = "initial";
  document.getElementById("loader").style.display = "none";
  faraztypewriter.typeString('سلام من فرازم  و').start();
  setTimeout(function () {
    document.querySelector("div#amir").scrollIntoView({ behavior: 'smooth' }, true)
    amirtypewriter.typeString('با دوستم امیرحسین').start();
  }, 3500)

  setTimeout(function () {
    document.querySelector("section").scrollIntoView({ behavior: 'smooth' }, true)
  }, 7000)
}

window.scrollTo(0,0);

// Faraz
var faraz = document.querySelector('div#faraz p');
var faraztypewriter = new Typewriter(faraz, {
    loop: false,
    cursor: '',
});

// Amir
var amir = document.querySelector('div#amir p');
var amirtypewriter = new Typewriter(amir, {
  loop: false,
  cursor: '',
});

const splide = new Splide('.splide', {
  type: 'loop',
  drag: 'free',
  focus: 'center',
  perPage: 3,
  autoScroll: {
    speed: 2,
  },
});
splide.mount( window.splide.Extensions );