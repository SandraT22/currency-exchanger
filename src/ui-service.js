import $ from 'jquery';

export function clearFields() {
  $('#usdInput').val("");
  $('.show-errors').text("");
  $('.exchange').text("");
}

export function displayErrors(error) {
  $('.show-errors').text(`${error}`);
}

export function getElements(response, usdInput, currency) {
  let exchange = 0;
  let rates = response.conversion_rates;
  if (currency === "EUR") {
    exchange = rates.EUR * usdInput;
    $('.exchange').text(`The amout in ${currency} is $${exchange}`);
  } else if (currency === "CAD") {
    exchange = rates.CAD * usdInput;
    $('.exchange').text(`The amout in ${currency} is $${exchange}`);
  } else if (currency === "GBP") {
    exchange = rates.GBP * usdInput;
    $('.exchange').text(`The amout in ${currency} is $${exchange}`);
  } else if (currency === "AUD") {
    exchange = rates.AUD * usdInput;
    $('.exchange').text(`The amout in ${currency} is $${exchange}`);
  } else if (currency === "JPY") {
    exchange = rates.JPY * usdInput;
    $('.exchange').text(`The amout in ${currency} is $${exchange}`);
  } else {
    return $('.show-errors').text("Currency selected is not included");
  }
}