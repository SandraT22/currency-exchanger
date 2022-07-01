import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './exchange-service.js';

// function clearFields() {
//   $('#usdInput').val("");
//   $('.show-errors').text("");
// }

// function displayErrors(error) {
//   $('.show-errors').text(`${error}`);
// }

function getElements(response, usdInput, currency) {
  let exchange = 0;
  let rates = response.conversion_rates;
  if (currency === "EUR") {
    exchange = rates.EUR * usdInput;
    $('.exchange').text(`The amout in ${currency} is ${exchange}`);
  } else if (currency === "CAD") {
    exchange = rates.CAD * usdInput;
    $('.exchange').text(`The amout in ${currency} is ${exchange}`);
  } else if (currency === "GBP") {
    exchange = rates.GBP * usdInput;
    $('.exchange').text(`The amout in ${currency} is ${exchange}`);
  } else if (currency === "AUD") {
    exchange = rates.AUD * usdInput;
    $('.exchange').text(`The amout in ${currency} is ${exchange}`);
  } else if (currency === "JPY") {
    exchange = rates.JPY * usdInput;
    $('.exchange').text(`The amout in ${currency} is ${exchange}`);
  }
}

$(document).ready(function () {
  $('#selector').submit(function (event) {
    event.preventDefault(); 
    const usdInput = $('#usdInput').val();
    const currency = $('select#currency').val();
    const usd = "USD";
    Exchange.getExchange(usd)
      .then(function(response) {
        getElements(response, usdInput, currency);
      });
    // .then(function(response) {
    //   if (response instanceof Error) {
    //     throw Error(`Currency exchange error: ${response.message}`);
    //   }
    //   displayExchange(rates, usdInput, currency);
    // })
    // .catch(function(error) {
    //   displayErrors(error.message);
    // });
  });
});