const tabs = document.querySelectorAll('.service-item');
const contents = document.querySelectorAll('.services-image-wrapper');
const languageSelector = document.querySelector('.language-selector');
const languageText = languageSelector.querySelector('.language-text');
const languageIcon = languageSelector.querySelector('.language-icon');
const languageOptions = languageSelector.querySelector('.language-options');
const serviceexpands = document.querySelectorAll('.service-expand')

// Функция для сохранения выбранного языка в localStorage
function saveSelectedLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
}

// Функция для загрузки выбранного языка из localStorage
function loadSelectedLanguage() {
    return localStorage.getItem('selectedLanguage') || 'EN';
}

// Функция для отображения контента на основе выбранного языка
function displayContentForLanguage(lang) {
    // Перебираем все элементы с классом content
    document.querySelectorAll('.content').forEach(element => {
        const elementLang = element.getAttribute('data-lang');
        // Если язык элемента совпадает с выбранным языком, показываем элемент, иначе скрываем
        if (elementLang === lang) {
            element.classList.remove('hidden');
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
            element.classList.add('hidden');
        }
    });
}

// Инициализация выбранного языка при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = loadSelectedLanguage();
    languageText.textContent = savedLang; // Устанавливаем язык
    displayContentForLanguage(savedLang);
});

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(i => i.classList.remove('active'));
        tab.classList.add('active');

        contents.forEach((content) => {
            content.classList.add('disable');
        });
        serviceexpands.forEach((item)=> {
            item.classList.remove('hidden_button')
        })
        serviceexpands[index].classList.add('hidden_button')
        contents[index].classList.remove('disable');
    });
});

// Обработчик клика для languageText
languageText.addEventListener('click', function() {
    languageOptions.classList.toggle('visible');
});

// Обработчик клика для languageIcon
languageIcon.addEventListener('click', function() {
    languageOptions.classList.toggle('visible');
});

// Обработка выбора опции
languageOptions.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        const selectedLang = event.target.getAttribute('data-lang');
        languageText.textContent = selectedLang; // Устанавливаем язык
        saveSelectedLanguage(selectedLang);
        displayContentForLanguage(selectedLang);
        languageOptions.classList.remove('visible');
        console.log('Выбран язык:', selectedLang);
    }
});

// Закрытие списка опций при клике вне него
document.addEventListener('click', function(event) {
    if (!languageSelector.contains(event.target)) {
        languageOptions.classList.remove('visible');
    }
});



document.addEventListener("DOMContentLoaded", function() {
    const textContainer = document.querySelectorAll('.hero-title');
    const imageContainer = document.querySelector('.hero-person');
    imageContainer.classList.add('appear');
    textContainer.forEach((item)=>{
        item.classList.add('appear')
    })

});


document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.services-title');

    function checkVisibility() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

            if (isVisible) {
                element.classList.add('appear');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Проверка на начальное положение
});



document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.services-column');

    function checkVisibility() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

            if (isVisible) {
                element.classList.add('appear');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Проверка на начальное положение
});

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.services-image-column');

    function checkVisibility() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

            if (isVisible) {
                element.classList.add('appear');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Проверка на начальное положение
});

