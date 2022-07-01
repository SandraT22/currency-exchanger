export default class Exchange {
  static getExchange(usd) {
    fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${usd}`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
          return response.json();
      })
      .catch(function(error) {
        return Error(error);
      });
  }
}