import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from '../exchange-service.js';

// function clearFields() {
//   $('#usdInput').val("");
//   $('.show-errors').text("");
// }

function displayErrors(error) {
  $('.show-errors').text(`${error}`);
}

function displayEuro(rates, usdInput, currency) {
  let exchange = 0;
  if (currency === "Euro") {
  exchange = rates.EUR * usdInput;
  $('.exchange').text(`The amout in ${currency} is ${exchange}`);
} else if (currency === "Canadian Dollar") {
  exchange = rates.CAD * usdInput;
  $('.exchange').text(`The amout in ${currency} is ${exchange}`);
} else if (currency === "Pound Sterling") {
  exchange = rates.GBP * usdInput;
  $('.exchange').text(`The amout in ${currency} is ${exchange}`);
} else if (currency === "Australian Dollar") {
  exchange = rates.AUD * usdInput;
  $('.exchange').text(`The amout in ${currency} is ${exchange}`);
} else if (currency === "Japanese Yen") {
  exchange = rates.JPY * usdInput;
  $('.exchange').text(`The amout in ${currency} is ${exchange}`);
}
}

$(document).ready(function () {
  $('#selector').submit(function (event) {
    event.preventDefault(); 
    const usdInput = $('#usdInput').val();
    const currency = $('select#currency').val();
    Exchange.getExchange(usdInput)
      .then(function(response) {
        if (response instanceof Error) {
          throw Error(`Currency exchange error: ${response.message}`);
        }
          let rates = response.conversion_rates;
          displayExchange(rates, usdInput, currency)
      })
      .catch(function(error) {
        displayErrors(error.message);
      });
  });
});