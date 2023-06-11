/**
* Template Name: Arsha
* Updated: Mar 10 2023 with Bootstrap v5.2.3
* Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/


// This is  tool section







function Remove_Plagiarism(){
  var button = document.getElementById("button_plagiarsm_remove");
  if (button.innerHTML === "Remove Plagiarism") {
    button.innerHTML = "Refresh";
  } else {
    button.innerHTML = "Remove Plagiarism";
  }
  var div = document.getElementById('main-box_hidd');
      if (div.style.display === 'block') {
        div.style.display = 'none';
      } else {
        div.style.display = 'block';
      }
}

// Toast premium
const menuItem = document.getElementById("menuItem");

menuItem.addEventListener("click", function () {
  const toastContainer = document.createElement("div");
  toastContainer.id = "toastContainer";

  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.textContent = "Premium version dosn't available in your country ! please contact with team PLAGREMOVERPRO";

  toastContainer.appendChild(toast);
  menuItem.appendChild(toastContainer);

  toast.classList.add("show");

  setTimeout(function () {
    toast.classList.remove("show");
    setTimeout(function () {
      toastContainer.remove();
    }, 500);
  }, 3000); // Adjust the duration (in milliseconds) as needed
});






  const textElement = document.getElementById('response-text');
const copyIcon = document.getElementById('copyIcon');
const toast = document.getElementById('toast');

copyIcon.addEventListener('click', function() {
  
  toast.classList.add('show');
 
  setTimeout(function() {
    toast.classList.remove('show');
  }, 3000); // Hide the toast after 3 seconds (adjust as needed)

  const text = textElement.textContent;

    // Create a temporary element and set its value to the text
    const tempElement = document.createElement('textarea');
    tempElement.value = text;

    // Append the temporary element to the document
    document.body.appendChild(tempElement);

    // Select the text inside the temporary element
    tempElement.select();

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the temporary element from the document
    document.body.removeChild(tempElement);

    console.log('Text copied to clipboard');
});





const button = document.querySelector('.bottom-button');
const content1 = document.querySelector('.content1');
const content2 = document.querySelector('.content2');
const content3 = document.querySelector('.content3');

let isFirstClick = true;

button.addEventListener('click', function() {
   var text = document.getElementById("textView111").value.trim();
  if(text===""){
    alert("Please enter some text before removing plagiarism.");
    return;
  }
  // if (isFirstClick) {
    button.textContent = 'Remove Plagiarism Again';
    content3.style.display = 'none';
    content1.style.display = 'block';
    content2.style.display = 'block';
    
  //   isFirstClick = false;
  // } else {
  //   button.textContent = 'Remove Plagiarism';
  //   content3.style.display = 'block';
  //   content1.style.display = 'none';
  //   content2.style.display = 'none';
  //   isFirstClick = true;
  // }
});


(function() {
  "use strict";


// Post card function 
const post_for_blog = document.getElementById("post_for_blog");

post_for_blog.addEventListener("click", function() {
  // Code to execute when the div is clicked
  console.log("Div clicked!");
});








  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
    
  }



  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Initiate  glightbox 
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  
  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

})()

