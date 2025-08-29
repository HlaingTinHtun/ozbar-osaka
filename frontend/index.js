document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.getElementById('hamburger-menu');
  const mobileMenu = document.getElementById('mobile-menu');

  // Ensure navbar starts transparent
  navbar.classList.add('transparent');
  navbar.classList.remove('scrolled');

  // Scroll effect
  window.addEventListener('scroll', function () {
    if(window.scrollY > 50) {
      navbar.classList.add('scrolled');
      navbar.classList.remove('transparent');
      if (hamburger) hamburger.classList.add('scrolled');
    } else {
      navbar.classList.add('transparent');
      navbar.classList.remove('scrolled');
      if (hamburger) hamburger.classList.remove('scrolled');
    }
  });

  // Hamburger toggle
  if (hamburger && mobileMenu) {
    let menuOpen = false;
    hamburger.addEventListener('click', function (e) {
      e.stopPropagation();
      menuOpen = !menuOpen;
      if (menuOpen) {
        mobileMenu.classList.add('show');
        mobileMenu.style.display = 'flex';
        navbar.classList.add('menu-open');
      } else {
        mobileMenu.classList.remove('show');
        mobileMenu.style.display = 'none';
        navbar.classList.remove('menu-open');
      }
    });
    // Hide menu when clicking outside
    document.addEventListener('click', function (e) {
      if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
        menuOpen = false;
        mobileMenu.classList.remove('show');
        mobileMenu.style.display = 'none';
        navbar.classList.remove('menu-open');
      }
    });
    // Hide menu when clicking a menu item
    mobileMenu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function () {
        menuOpen = false;
        mobileMenu.classList.remove('show');
        mobileMenu.style.display = 'none';
        navbar.classList.remove('menu-open');
      });
    });
  }
});


// 1️⃣ Translation data
const translations = {
  en: {
    about: "ABOUT",
    menu: "MENU",
    gallery: "GALLERY",
    tagline: "#OZ'.Bar / Drink • Chill • Repeat",
    tagline2: "A modern and retro Japanese-style OZ'Bar",
    cozy:"We are a cozy bar serving quality drinks and creating unforgettable moments for our guests",
    contact:"Contact",
    address:"123 Shinjuku, Tokyo Japan",
    hours:"Hours",
    daily:"Daily 10:00 AM - 2:00 AM",
    closed:"Closed Every Monday",
    social_media:"SOCIAL MEDIA",
    party:"Join the party online — follow us for news, events, and special offers.",

  },
  jp: {
    about: "私たちについて",
    menu: "メニュー",
    gallery: "ギャラリー",
    tagline: "#OZ'.Bar / ドリンク • チル • リピート",
    tagline: "モダンとレトロで、日本式の“隠れ家”バー",
    cozy:"日本語: 私たちは、上質なドリンクを提供し、お客様に忘れられないひとときをお届けする居心地の良いバーです。",
    contact:" お問い合わせ",
    address:" 〒123 東京都新宿",
    hours:"営業時間",
    daily:"毎日 午前10:00 ～ 午前2:00",
    closed:"毎週月曜日 定休日",
    social_media:"ソーシャルメディア",
    party:"オンラインでもパーティーに参加しましょう ― ニュース、イベント、特別オファーをぜひフォローしてください。"
  }
};

// 2️⃣ Function to update page text
function setLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// 3️⃣ Dropdown handling
const dropdown = document.querySelector(".dropdown");
const dropbtn = document.querySelector(".dropbtn");

// Toggle dropdown on click
dropbtn.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdown.classList.toggle("show");
});

// Close dropdown when clicking outside
window.addEventListener("click", () => {
  dropdown.classList.remove("show");
});

// Language selection
document.querySelectorAll(".dropdown-content a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const selectedLang = link.dataset.lang;
    setLanguage(selectedLang);
    dropdown.classList.remove("show");
  });
});

// 4️⃣ Optional: set default language
setLanguage("en");

function moveLangSwitch() {
  const langSwitch = document.querySelector('.lang-switch');
  const footer = document.querySelector('.footer-lang-switch');
  const navbar = document.querySelector('.navbar');

  if (window.innerWidth <= 768) {
    // move to footer
    if (!footer.contains(langSwitch)) {
      footer.appendChild(langSwitch);
    }
  } else {
    // move back to navbar
    if (!navbar.contains(langSwitch)) {
      navbar.appendChild(langSwitch);
    }
  }
}

// Run on load and resize
window.addEventListener('load', moveLangSwitch);
window.addEventListener('resize', moveLangSwitch);
