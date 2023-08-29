const lines_1 = document.querySelectorAll('.text-styled-1');
lines_1.forEach((line_1, index_1) => {
    const opacity_1 = 1 - (1 / (lines_1.length+1) * index_1);
    line_1.style.opacity = opacity_1;
});

const lines_2 = document.querySelectorAll('.text-styled-2');
lines_2.forEach((line_2, index_2) => {
    const opacity_2 = 1 - (1 / lines_2.length * index_2);
    line_2.style.opacity = opacity_2;
});

const lines_3 = document.querySelectorAll('.text-styled-3');
lines_3.forEach((line_3, index_3) => {
    const opacity_3 = 1 - (1 / lines_3.length * index_3);
    line_3.style.opacity = opacity_3;
});

function newURL(url) {
    const lang = getQueryParam('lang');
    window.location.href = url + '?lang=' + lang;
}

function changeLanguage() {
    const currentLanguage = getQueryParam('lang');
    const newLanguage = currentLanguage === 'en' ? 'ru' : 'en'; 
  
    const url = new URL(window.location.href);
    url.searchParams.set('lang', newLanguage);
    window.location.href = url.href;
  }
  
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const lang = getQueryParam('lang');
    if (lang) {
      const lines = document.querySelectorAll('.lan');
      lines.forEach(line => {
        if (lang === 'en') {
          line.textContent = line.getAttribute('data-en');
        } else if (lang === 'ru') {
          line.textContent = line.getAttribute('data-ru');
        }
      });
    } else {
        const defaultLanguage = 'en'; 
        const url = new URL(window.location.href);
        url.searchParams.set('lang', defaultLanguage);
        window.location.href = url.href;
      }
  });
  

  const currentLanguage = getQueryParam('lang');
  console.log(currentLanguage);

  function removeElementsByClass(className) {
    var elements = document.querySelectorAll('.' + className);
    elements.forEach(function(element) {
      element.parentNode.removeChild(element);
    });
  }
  
  function checkScreenWidthAndRemoveElements() {
    var screenWidth = window.innerWidth;
    
    if (screenWidth <= 1060) {
        removeElementsByClass('text-styled-1');
        removeElementsByClass('text-styled-2');
        removeElementsByClass('text-styled-3');
    }
  }

  window.addEventListener('load', checkScreenWidthAndRemoveElements);
  window.addEventListener('resize', checkScreenWidthAndRemoveElements);