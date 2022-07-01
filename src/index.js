import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from '../exchange-service,js';

function clearFields() {
  $('#usdInput').val("");
  $('.show-errors').text("");
}

function displayErrors(error) {
  $('.show-errors').text(`${error}`);
}

function displayExchange(currency) {
  let Rates = response.conversion_rates;
  let exchange = 0;
  console.log(responseArray);
  if (currency === "Euro") {
    exchange = responseArray.EUR * usdInput
    $('.exchange').text(`The amout in ${currency} is ${exchange}`);
  }
}

$(document).ready(function () {
  $('selector').submit(function (event)) {
    event.preventDefault(); 
    const usdInput = $('#usdInput').val();
    const currency = $('select#currency').val();
    Exchange.getExchange(usdInput)
      .then(function(exchangeResponse) {
        if (exchangeResponse instanceof Error) {
          throw Error(`Currency exchange error: ${exchangeResponse.message}`);
        }
        displayExchange(currency);
      })
      .catch(function(error) {
        displayErrors(error.message);
      });
  }
});