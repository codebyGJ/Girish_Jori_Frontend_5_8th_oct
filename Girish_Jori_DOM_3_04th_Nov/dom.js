const apiUrl =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

// Fetch data using .then method
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => displayCryptoData(data));

// Fetch data using async-await method
async function fetchCryptoData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    displayCryptoData(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchCryptoData();

function displayCryptoData(data) {
  const cryptoTable = document.getElementById("crypto-table");

  data.forEach((crypto) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td class="crypto-icon">
                <img src="${crypto.image}" alt="${crypto.name}" />
                ${crypto.name}
            </td>
            <td>${crypto.symbol}</td>
            <td>$${crypto.current_price}</td>
            <td>$${crypto.total_volume.toLocaleString()}</td>
            <td class="${
              crypto.price_change_percentage_24h > 0 ? "green" : "red"
            }">
                ${crypto.price_change_percentage_24h.toFixed(2)}%
            </td>
        `;
    cryptoTable.appendChild(row);
  });
}