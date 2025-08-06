
fetch(`https://financialmodelingprep.com/api/v3/search?query=APPLE&limit=10&exchange=NASDAQ&apikey=${API_KEY}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error fetching API:", error));
