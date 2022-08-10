
function myFunction() {
  setTimeout(showPage, 7000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  faraztypewriter.typeString('سلام من فرازم  و').start();
  setTimeout(function () {
    window.scrollTo({
      top: 400,
      behavior: 'smooth'
    });
    amirtypewriter.typeString('با دوستم امیرحسین').start();
  }, 3500)

  setTimeout(function () {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }, 7000)
}

window.scrollTo({
  top: 0,
  behavior: 'smooth'
});

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