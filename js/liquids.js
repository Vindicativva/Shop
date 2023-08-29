async function loadVariables() {
    try {
      const response = await fetch('../items.txt'); // Укажите путь к вашему текстовому файлу
      if (response.ok) {
        const text = await response.text();
        const lines = text.split('\n');
        const variables = {};
  
        lines.forEach(line => {
          const [variable, value] = line.split('=').map(item => item.trim());
          if (variable && value) {
            variables[variable] = value;
            var myObject = document.getElementById(variable);
            if (value === 'true') {
                myObject.style.backgroundColor = '#68DC66';
            } else {
                myObject.style.backgroundColor = '#DC6666';
            }
          }
        });
  
        console.log(variables);
      } else {
        throw new Error('Ошибка при загрузке файла');
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  loadVariables();

  function newURL(url) {
    const lang = getQueryParam('lang');
    window.location.href = url + '?lang=' + lang;
}

  function changeLanguage() {
    const currentLanguage = getQueryParam('lang');
    const newLanguage = currentLanguage === 'en' ? 'ru' : 'en'; // Переключение между языками
  
    const url = new URL(window.location.href);
    url.searchParams.set('lang', newLanguage);
    window.location.href = url.href;
  }
  
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    console.log('ff');
    const lang = getQueryParam('lang');
    if (lang) {
      const lines = document.querySelectorAll('.lan');
      lines.forEach(line => {
        if (lang === 'en') {
          line.textContent = line.getAttribute('data-en');
        } else if (lang === 'ru') {
          line.textContent = line.getAttribute('data-ru');
        }
        // Добавьте аналогичную логику для других языков
      });
    } else {
        const defaultLanguage = 'en'; // Измените на значение языка по умолчанию
        const url = new URL(window.location.href);
        url.searchParams.set('lang', defaultLanguage);
        window.location.href = url.href;
      }
  });
  

  