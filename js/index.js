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
    "h1": "DOM Is Awesome",
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

const navItems = document.querySelectorAll('nav a');
navItemsArr = Array.from(navItems);
htmlNavItems = Object.keys(siteContent.nav).map(function(value) {
  return siteContent.nav[value];
});

for (var i = 0; i < navItemsArr.length; i++) {
  navItemsArr[i].textContent = htmlNavItems[i];
  navItemsArr[i].style.color = "dodgerblue"
};

const newButton = document.createElement('a')
newButton.textContent = "Stuff";
const lastButton = document.createElement('a')
lastButton.textContent = "BUTTON"
const navi = document.querySelector("nav")
navi.appendChild(lastButton)
navi.prepend(newButton);

const ctah1 = document.querySelector('.cta-text h1');
ctah1.textContent = siteContent.cta.h1;

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta.button;

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.cta["img-src"];

const htmlContent = siteContent['main-content'];

const contentH4 = document.querySelectorAll('h4');
const htmlContentH4 = Object.keys(htmlContent).map(function(string) {
if (string.includes('h4')) {
  return htmlContent[string];
}}).filter(function (el) {
  return el != null;
});

const contentP = document.querySelectorAll('.text-content P');
const htmlContentP = Object.keys(htmlContent).map(function(string) {
if (string.includes('content')) {
  return htmlContent[string];
}}).filter(function (el) {
  return el != null;
});

for (var i = 0; i < contentH4.length; i++) {
  contentH4[i].textContent = htmlContentH4[i];
};

for (var i = 0; i < contentP.length; i++) {
  contentP[i].textContent = htmlContentP[i];
};

const midImg = document.querySelector('#middle-img');
midImg.src = siteContent['main-content']["middle-img-src"];

// const contentH4 = document.querySelectorAll('.text-content h4');
// contentH4[0].textContent = siteContent["main-content"]["features-h4"];
// contentH4[1].textContent = siteContent["main-content"]["about-h4"];
// contentH4[2].textContent = siteContent["main-content"]["services-h4"];
// contentH4[3].textContent = siteContent["main-content"]["product-h4"];
// contentH4[4].textContent = siteContent["main-content"]["vision-h4"];

// const contentP = document.querySelectorAll('.text-content P');
// contentP[0].textContent = siteContent["main-content"]["features-content"];
// contentP[1].textContent = siteContent["main-content"]["about-content"];
// contentP[2].textContent = siteContent["main-content"]["services-content"];
// contentP[3].textContent = siteContent["main-content"]["product-content"];
// contentP[4].textContent = siteContent["main-content"]["vision-content"];

// function getValuesFromhtmlContent(str) {
// Object.keys(htmlContent).map(function(string) {
// if (string.includes(str)) {
//   return htmlContent[string];
// }}).filter(function (el) {
//   return el != null;
// })};

const contactInfo = document.querySelectorAll('.contact p');
const contacth4 = document.querySelectorAll('.contact h4');
// const htmlContactInfo = Object.keys(contactInfoObj).filter(function(el) {
//   if (el != "contact-h4") {
//     return contactInfo[el]
// }});
contacth4[0].textContent = siteContent['contact']['contact-h4'];
contactInfo[0].textContent = siteContent['contact']['address'];
contactInfo[1].textContent = siteContent['contact']['phone'];
contactInfo[2].textContent = siteContent['contact']['email'];

const copy = document.querySelectorAll('footer p');
copy[0].textContent = siteContent['footer']['copyright'];

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
