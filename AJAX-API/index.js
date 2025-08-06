//exercise 1:
function fetchBookByISBN(isbn) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => console.error("Error:", error));
}

fetchBookByISBN(9780575087057);

//exercise 2:
function fetchBook(queryType, queryValue) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => console.error("Error:", error));
}

fetchBook("isbn", 9789814561778);
fetchBook("title", "How to Win Friends and Influence People");

//exercise 3:
function fetchBook(queryType, queryValue) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (!data.items) {
        console.log("No books found.");
        return;
      }

      data.items.forEach(item => {
        const title = item.volumeInfo.title;
        const authors = item.volumeInfo.authors?.join(", ") || "Unknown author";
        const industryIds = item.volumeInfo.industryIdentifiers || [];
        const isbn = industryIds.find(id => id.type.includes("ISBN"))?.identifier || "No ISBN";

        console.log(`📖 Title: ${title}`);
        console.log(`👤 Author(s): ${authors}`);
        console.log(`🔢 ISBN: ${isbn}`);
        console.log('-------------------------');
      });
    })
    .catch(error => console.error("Error:", error));
}



