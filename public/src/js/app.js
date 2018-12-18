
var pwaCard = document.querySelector('#pwa');
var pwaCardContent = pwaCard.querySelector('.card__content');
var pwaCardDetails = pwaCard.querySelector('.card__details');
var detailsShown = false;

pwaCard.addEventListener('click', function (event) {
  if (!detailsShown) {
    detailsShown = true;
    animateCard()
  } else {
    detailsShown = false;
    animateCard()
  }
});

function animateCard(){
  pwaCardContent.style.opacity = 0;
  pwaCardDetails.style.display = 'block';
  pwaCardContent.style.display = 'none';
  setTimeout(function () {
    pwaCardDetails.style.opacity = 1;
  }, 300);
}

if ("serviceWorker" in navigator){
  let serviceWorkerPath = "/sw.js"
  navigator.serviceWorker.register(serviceWorkerPath)
    .then(  () => console.log("SW Registered"))
}
