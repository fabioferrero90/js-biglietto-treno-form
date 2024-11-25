const elements = {
  // Campi di input
  fullName: document.getElementById('fullnameInput'),
  kmToTravel: document.getElementById('kmToTravel'),
  passengerAge: document.getElementById('passengerAge'),

  // Form per gestire il "Submit"
  form: document.querySelector('form'),

  // Elementi della pagina da gestire
  alert: document.querySelector('.alert'),
  ticket: document.querySelector('.ticket'),

  // Dati da popolare
  fullNameData: document.querySelector('.data.fullname-data'),
  coachData: document.querySelector('.data.coach-data'),
  offerData: document.querySelector('.data.offer-data'),
  cpCodeData: document.querySelector('.data.cp-code-data'),
  priceData: document.querySelector('.data.price-data'),
  delay: document.getElementById('delay'),

  // Addon
  buyButton: document.querySelector('.buy-button'),
}


elements.form.addEventListener('submit', (event) => {
  event.preventDefault();

  //Inserisco il nome dal form
  elements.fullNameData.innerText = elements.fullName.value.trim();

  //Calcolo il prezzo del biglietto e la sua fascia di sconto, stampandole in pagina
  let km = elements.kmToTravel.value.trim();
  let age = elements.passengerAge.value.trim();
  let [offer, price] = getTicketPrice(km, age);
  elements.offerData.innerText = offer;
  elements.priceData.innerText = price.toFixed(2);

  //Randomizzo il numero della carrozza con la funzione indicata
  elements.coachData.innerText = randomizeNumber(1, 15);

  //Randomizzo il numero del treno con la funzione indicata
  elements.cpCodeData.innerText = randomizeNumber(111111, 999999);

  //Randomizzo il ritardo del treno con la funzione indicata
  elements.delay.innerText = parseInt((km / 100) * randomizeNumber(5, 29));

  //Resetto il form e mostro il ticket a schermo
  resetForm();
  showTicket();
})

function resetForm() {
  elements.fullName.value = '';
  elements.kmToTravel.value = '';
  elements.passengerAge.value = '';
}

function showTicket() {
  elements.alert.classList.add('d-none');
  simulateLoading();
}

function randomizeNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getTicketPrice(km, age) {
  const pricePerKm = 0.21;
  const minorDiscount = 20;
  const over65Discount = 40;
  // Calcolo il prezzo del biglietto base
  let ticketPrice = km * pricePerKm;
  // Applico le scontistiche (se dovute)
  if (age > 65) {
    ticketPrice = (ticketPrice / 100) * (100 - over65Discount);
    return ['Sconto Over65', ticketPrice]
  } else if (age < 18) {
    ticketPrice = (ticketPrice / 100) * (100 - minorDiscount);
    return ['Sconto Young', ticketPrice]
  }
  return ['Tariffa Standard', ticketPrice]
}

elements.buyButton.addEventListener('click', (event) => {
  alert("Ti sei reso conto che questa è solo una pagina di esercizio?, se vuoi regalarmi dei soldi scrivimi in privato!")
})



function simulateLoading() {

  function showLoader() {
    document.getElementById('loader').classList.remove('d-none');
  }

  function hideLoader() {
    document.getElementById('loader').classList.add('d-none');
    elements.ticket.classList.remove('d-none')
  }

  // Simula un caricamento di 2 secondi
  showLoader();
  setTimeout(hideLoader, 2000);
}