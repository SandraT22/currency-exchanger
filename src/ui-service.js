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
  const rates = response.conversion_rates;
  if (currency === "EUR") {
    exchange = Math.floor(rates.EUR * usdInput);
    $('.exchange').text(`The amout in ${currency} is $${exchange}`);
  } else if (currency === "CAD") {
    exchange = Math.floor(rates.CAD * usdInput);
    $('.exchange').text(`The amout in ${currency} is $${exchange}`);
  } else if (currency === "GBP") {
    exchange = Math.floor(rates.GBP * usdInput);
    $('.exchange').text(`The amout in ${currency} is $${exchange}`);
  } else if (currency === "AUD") {
    exchange = Math.floor(rates.AUD * usdInput);
    $('.exchange').text(`The amout in ${currency} is $${exchange}`);
  } else if (currency === "JPY") {
    exchange = Math.floor(rates.JPY * usdInput);
    $('.exchange').text(`The amout in ${currency} is $${exchange}`);
  } else {
    return $('.show-errors').text("Currency selected is not included");
  }
}