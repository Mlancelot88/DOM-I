const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM <br> Is <br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


// Start JSON Coding below

// Navigation 
const nav1 = document.querySelectorAll("nav a");
nav1.forEach((value, index) => {
value.innerHTML  = siteContent.nav[`nav-item-${index + 1}`]
});

// IMG
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// CTA

const ctaText = document.querySelector("h1");
ctaText.innerHTML = siteContent["cta"]["h1"]

const ctaTextButton = document.querySelector("button");
ctaTextButton.innerHTML = siteContent["cta"]["button"]

// Main Content

const topicHeaders = document.querySelectorAll("h4");
topicHeaders[0].innerText = siteContent["main-content"]["features-h4"]
topicHeaders[1].innerText = siteContent["main-content"]["about-h4"]
topicHeaders[2].innerText = siteContent["main-content"]["services-h4"]
topicHeaders[3].innerText = siteContent["main-content"]["product-h4"]
topicHeaders[4].innerText = siteContent["main-content"]["vision-h4"]

let textContent = document.querySelectorAll("p");
textContent[0].innerText = siteContent["main-content"]["features-content"]
textContent[1].innerText = siteContent["main-content"]["about-content"]
textContent[2].innerText = siteContent["main-content"]["services-content"]
textContent[3].innerText = siteContent["main-content"]["product-content"]
textContent[4].innerText = siteContent["main-content"]["vision-content"]

// Contact Content
topicHeaders[5].innerText = siteContent["contact"]["contact-h4"]
textContent[5].innerText = siteContent["contact"]["address"]
textContent[6].innerText = siteContent["contact"]["phone"]
textContent[7].innerText = siteContent["contact"]["email"]

// Footer
textContent[8].innerText = siteContent["footer"]["copyright"]

