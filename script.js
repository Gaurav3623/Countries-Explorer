const countriesContainer = document.querySelector('.countries-container');

fetch('https://countries.dev/countries')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    data.forEach((country) => {
      console.log(country.flags.svg);

      const countryCard = document.createElement('a');
      countryCard.classList.add('country-card');
      countryCard.href = `details.html?name=${country.name}`;

      countryCard.innerHTML = `
        <img src="${country.flags.svg}" alt="${country.name} flag">
        <div class="card-text">
          <h3>${country.name}</h3>
        </div>
      `;

      countriesContainer.append(countryCard);
    });
  })
  .catch((error) => {
    console.error('Error fetching countries:', error);
  });

