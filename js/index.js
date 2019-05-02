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
navItemsArr = Array.from(navItems)
htmlNavItems = Object.keys(siteContent.nav).map(function(value) {
  return siteContent.nav[value];
});

for (var i = 0; i < navItemsArr.length; i++) {
  navItemsArr[i].textContent = htmlNavItems[i]
};

const ctah1 = document.querySelector('.cta-text h1');
ctah1.textContent = siteContent.cta.h1;

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta.button;

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.cta["img-src"];

// const contentH4 = document.querySelectorAll('h4');
// contentH4Arr = Array.from(contentH4);
// htmlContent = siteContent['main-content'];
// htmlContentH4 = Object.keys(htmlContent.map(function(string) {
// if (string.includes('h4')) {
//   return string
// }}).filter(function (el) {
//   return el != null;
// });
//
// console.log(htmlContent);
// console.log(htmlContentH4);

const contentH4 = document.querySelectorAll('.text-content h4');
contentH4[0].textContent = siteContent["main-content"]["features-h4"];
contentH4[1].textContent = siteContent["main-content"]["about-h4"];
contentH4[2].textContent = siteContent["main-content"]["services-h4"];
contentH4[3].textContent = siteContent["main-content"]["product-h4"];
contentH4[4].textContent = siteContent["main-content"]["vision-h4"];

const midImg = document.querySelector('#middle-img');
midImg.src = siteContent['main-content']["middle-img-src"];

const contentP = document.querySelectorAll('.text-content P');
contentP[0].textContent = siteContent["main-content"]["features-content"];
contentP[1].textContent = siteContent["main-content"]["about-content"];
contentP[2].textContent = siteContent["main-content"]["services-content"];
contentP[3].textContent = siteContent["main-content"]["product-content"];
contentP[4].textContent = siteContent["main-content"]["vision-content"];

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
