
function myFunction() {

  document.body.style.overflowY = "hidden";
  var req = new XMLHttpRequest();
  req.open('GET', './assets/skate.mp4', true);

  req.onload = function () {
    if (this.status === 200) {
      showPage()
    }
  }
  req.onerror = function () {
    console.log("Response Error")
  }

  req.send();
  setTimeout(showPage, 1000)
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
    document.querySelector("section").scrollIntoView({ behavior: 'smooth', block: "nearest"}, true)
  }, 7000)

  setTimeout(function () {
    document.querySelector("div#links").scrollIntoView({ behavior: 'smooth' }, true)
  }, 11000)
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