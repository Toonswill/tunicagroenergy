document.addEventListener('DOMContentLoaded', function() {
  const homeButton = document.querySelector('.home-button');
  const aboutButton = document.querySelector('.about-button');
  const servicesButton = document.querySelector('.services-button');
  const agrivoltaicButton = document.querySelector('.agrivoltaic-button');
  const contactButton = document.querySelector('.contact-button');

  homeButton.addEventListener('click', function(event) {
    event.preventDefault();
    // Handle the click event for the home button
    window.location.href = 'index.html'; // Replace with the appropriate URL
  });

  aboutButton.addEventListener('click', function(event) {
    event.preventDefault();
    // Handle the click event for the about button
    window.location.href = 'about.html'; // Replace with the appropriate URL
  });

  servicesButton.addEventListener('click', function(event) {
    event.preventDefault();
    // Handle the click event for the services button
    window.location.href = 'research.html'; // Replace with the appropriate URL
  });

  agrivoltaicButton.addEventListener('click', function(event) {
    event.preventDefault();
    // Handle the click event for the agrivoltaic button
    window.location.href = 'decarbonization.html'; // Replace with the appropriate URL
  });

  contactButton.addEventListener('click', function(event) {
    event.preventDefault();
    // Handle the click event for the contact button
    window.location.href = 'contact.html'; // Replace with the appropriate URL
  });
});

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
