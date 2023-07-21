document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");
    const contentSections = document.querySelectorAll(".content-section");
  
    links.forEach(function (link) {
      link.addEventListener("mouseenter", function () {
        const target = link.dataset.target;
  
        contentSections.forEach(function (section) {
          section.classList.remove("active");
        });
  
        document.getElementById(target).classList.add("active");
      });
    });
  });
  function redirectTotest() {
    window.location.href = "projects.html";
  }
  
  /* script that redirects the service button to services page */
  function redirectToServices(event) {
    event.preventDefault(); // Prevent the default link behavior
    window.location.href = "services.html";
  }

  const servicesButton = document.querySelector(".services-button");
  servicesButton.addEventListener("click", redirectToServices);