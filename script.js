
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

faraztypewriter.typeString('سلام من فرازم  و').start();

// new LeaderLine(
//   document.querySelector('div#faraz p'),
//   document.querySelector('div#faraz img'),
//   {
//     color: "#fff",
//     size: 5,
//     startSocket: 'bottom', 
//     endPlug: 'hand',
//     dash: { animation: true }
//   }
// );

// Amir
var amir = document.querySelector('div#amir p');
var amirtypewriter = new Typewriter(amir, {
  loop: false,
  cursor: '',
});

setTimeout(function(){
  window.scrollTo({
    top: 400,
    behavior: 'smooth'
  });
  amirtypewriter.typeString('با دوستم امیرحسین').start();
}, 3500)

setTimeout(function () {
  window.scrollTo({
    top: 1000,
    behavior: 'smooth'
  });
}, 7000)

// new LeaderLine(
//   document.querySelector('div#amir p'),
//   document.querySelector('div#amir img'),
//   { 
//     color: "#fff", 
//     size: 5, 
//     startSocket: 'top', 
//     endPlug: 'hand', 
//     dash: { animation: true } 
//   }
// );

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

