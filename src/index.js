import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Exchange from './exchange-service.js';
import { clearFields, displayErrors, getElements } from './ui-service.js';


$(document).ready(function () {
  $('#selector').submit(function (event) {
    event.preventDefault(); 
    const usdInput = $('#usdInput').val();
    const currency = $('select#currency').val();
    const usd = "USD";
    clearFields();
    Exchange.getExchange(usd)
      .then(function(response) {
        if (response instanceof Error) {
          throw Error(`Currency exchange error: ${response.message}`);
        }
        getElements(response, usdInput, currency);
      })
      .catch(function(error) {
        displayErrors(error.message);
      });
  });
});