const countryName = new URLSearchParams(window.location.search).get('name');
const flagImage = document.querySelector('.country-details img');
const countryNameh1 = document.querySelector('.country-details h1');

console.log(countryName);

fetch(`https://countries.dev/name/${encodeURIComponent(countryName)}`)
  .then((res) => res.json())
  .then(([country]) => {
    console.log(country);

    flagImage.src = country.flags.svg;
    countryNameh1.innerText = country.name;

    document.querySelector('.capital').innerText = country.capital;

document.querySelector('.border').innerText =
    country.borders
      ? country.borders.join(', ')
      : 'No land borders';

document.querySelector('.population').innerText =
    country.population.toLocaleString();

document.querySelector('.time-zone').innerText =
    country.timezones[0];

document.querySelector('.currency').innerText =
    Object.values(country.currencies)[0].name;

document.querySelector('.language').innerText =
    Object.values(country.languages).join(', '); })
  .catch((error) => {
    console.error(error);
  });

  document.querySelector('.back-button').addEventListener('click', () => {
    history.back();
});
