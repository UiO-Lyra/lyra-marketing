let currentLang
let initialLang = getCookie("lang");
initialLang = initialLang != null ? initialLang : "no";
let textData;
fetch('./json/text.json')
  .then(response => response.json())
  .then(data => {
    textData = data;
    changeLanguage(initialLang);
  })
  .catch(error => console.error('Error fetching JSON:', error));

let noButton = document.getElementById("no");
let enButton = document.getElementById("en");

function changeLanguage(lang) {
  if (lang == currentLang) {
    return;
  }
  textTags = Object.keys(textData);
  textTags.forEach(key => {
    text = textData[key][lang];
    className = key + "Text";
    elements = document.querySelectorAll("."+className);
    console.log(className, elements.length);
    elements.forEach(element => {
      element.innerHTML = text;
    });
  });
  setCookie("lang", lang, 31);
  currentLang = lang;
}

// Cookie helper functions
function getCookie(name) {
  const nameEq = name + "=";
  const cookies = document.cookie.split(';');
  
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(nameEq) === 0) {
      return cookie.substring(nameEq.length, cookie.length);
    }
  }
  return null;
}

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}


noButton.addEventListener('click', function(event) {
  event.preventDefault();
  changeLanguage("no");
});

enButton.addEventListener('click', function(event) {
  event.preventDefault();
  changeLanguage("en");
});
