// header.js
/*Fetch the header content from header.html */
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    // Insert the header content into the <header> element
    document.querySelector('header').innerHTML = data;
  })
  .catch(error => {
    console.error('Error fetching header content:', error);
  });