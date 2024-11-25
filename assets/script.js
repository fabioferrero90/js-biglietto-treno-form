const elements = {
  // Campi di input
  fullName: document.getElementById('fullnameInput'),
  kmToTravel: document.getElementById('kmToTravel'),
  isMinor: document.getElementById('isMinor'),

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
}

elements.form.addEventListener('submit', (event) => {
  event.preventDefault();

  elements.fullNameData.innerText = "Giorgio Vanni";
  elements.coachData.innerText = "9";
  elements.offerData.innerText = "Promo Giovani";
  elements.cpCodeData.innerText = "000999";
  elements.priceData.innerText = "9999"

  resetForm()

  showTicket()
})

function resetForm() {
  elements.fullName.value = '';
  elements.kmToTravel.value = '';
  elements.isMinor.selectedIndex = 0;
}

function showTicket() {
  elements.alert.classList.add('d-none');
  elements.ticket.classList.remove('d-none');
}