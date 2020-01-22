export const fetchCountries = () =>
  fetch("https://restcountries.eu/rest/v2/all")
    .then(resp => {
      return resp.json();
    })
    .catch(error => {
      console.error(error);
    });
