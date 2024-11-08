const flagsMb = document.querySelectorAll(".flags_mb .flag");
const flagsPc = document.querySelectorAll(".flags_pc .flag");





function animatedFlags(flags){

    const colors = [
        "rgba(233, 246, 255, 1)",
        "rgba(193, 229, 255, 1)",
        "rgba(106, 176, 227, 1)",
      ];
      
      let activeIndices = Array.from({ length: 4 }, () =>
        Math.floor(Math.random() * flags.length)
      );
      
      function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
      }
      
      function updateNextFlagColor() {
        const currentIndex = activeIndices.shift();
        flags[currentIndex].style.backgroundColor = "rgba(255, 255, 255, 1)";
      
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * flags.length);
        } while (activeIndices.includes(newIndex));
      
        flags[newIndex].style.backgroundColor = getRandomColor();
        activeIndices.push(newIndex);
      }
      
      activeIndices.forEach((index) => {
        flags[index].style.backgroundColor = getRandomColor();
      });
      
      setInterval(updateNextFlagColor, Math.floor(Math.random() * 2000) + 1000);

}
animatedFlags(flagsMb)
animatedFlags(flagsPc)




const menuButton = document.querySelector('.nav__mob_wrapper');
const closeButton = document.querySelector('.close-button');
const mobileMenu = document.querySelector('.nav__mob_menu');
const body = document.querySelector('body')

menuButton.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  body.classList.add('active');
});

closeButton.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  body.classList.remove('active');
});


const reviews = document.querySelectorAll('.reviews__page_header span')
const wrapperCircle = document.querySelector('.circle__wrapper')
const personalSlide = document.querySelectorAll('.reviews__page_slider_personal')
const workerSlide = document.querySelectorAll('.reviews__page_slider_worker')
reviews.forEach((item,idx) => {
  
    item.addEventListener('click', ()=>{
        reviews.forEach((el) => {
            el.style.color = "rgba(177, 177, 177, 1)"
           
        })
        item.style.color = "rgba(17, 34, 78, 1)"
        if(idx === 0){
       
            personalSlide[0].style.display = 'block'
            wrapperCircle.classList.remove('active')
            personalSlide[1].style.display = 'block'
            workerSlide[0].style.display = 'none'
            workerSlide[1].style.display = 'none'
        } else {
            personalSlide[0].style.display = 'none'
            workerSlide[0].style.display = 'block'
            personalSlide[1].style.display = 'none'
            workerSlide[1].style.display = 'block'
            wrapperCircle.classList.add('active')
        }
       
    })
})






document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide', {
        type: 'slide',        // Тип слайдера, можно также использовать 'loop' для цикличного переключения
        perPage: 1,           // Количество слайдов на ПК
        perMove: 1,           // Сколько слайдов переключать за раз
        gap: '10px',          // Расстояние между слайдами
        autoHeight: true,
        // autoWidth: true,
       

        pagination: true,     // Включение пагинации
        arrows: true,         // Включение кнопок навигации
    }).mount();


    new Splide('#splide2', {
        type: 'slide',        // Тип слайдера, можно также использовать 'loop' для цикличного переключения
        perPage: 1,           // Количество слайдов на ПК
        perMove: 1,           // Сколько слайдов переключать за раз
        gap: '10px',          // Расстояние между слайдами
        autoHeight: true,
        // autoWidth: true,
       

        pagination: true,     // Включение пагинации
        arrows: true,         // Включение кнопок навигации
    }).mount();

    new Splide('#splide3', {
        type: 'slide',        // Тип слайдера, можно также использовать 'loop' для цикличного переключения
        perPage: 1,           // Количество слайдов на ПК
        perMove: 1,           // Сколько слайдов переключать за раз
        gap: '10px',          // Расстояние между слайдами
        autoHeight: true,
        // autoWidth: true,
       

        pagination: true,     // Включение пагинации
        arrows: true,         // Включение кнопок навигации
    }).mount();

    new Splide('#splide4', {
        type: 'slide',        // Тип слайдера, можно также использовать 'loop' для цикличного переключения
        perPage: 1,           // Количество слайдов на ПК
        perMove: 1,           // Сколько слайдов переключать за раз
        gap: '10px',          // Расстояние между слайдами
        autoHeight: true,
        // autoWidth: true,
       

        pagination: true,     // Включение пагинации
        arrows: true,         // Включение кнопок навигации
    }).mount();
});








document.addEventListener("DOMContentLoaded", function () {
    // Меню
    const qrBtn = document.querySelectorAll(".qrBtn");
    const mainMenu = document.querySelector(".mainQr");
    const mainWrapperMenu = document.querySelector(".mainMenuWrapper");
    const body = document.querySelector("body");
    const closebtn = document.querySelector(".mainQr_close");
  
    qrBtn.forEach((item) => {
      item.addEventListener("click", function () {
        mainMenu.classList.add("act");
        body.style.overflow = "hidden";
        mainWrapperMenu.classList.add("active");
        closebtn.classList.add("active");
      });
    });
  
    closebtn.addEventListener("click", () => {
      mainMenu.classList.remove("act");
      mainWrapperMenu.classList.remove("active");
      body.style.overflow = "visible";
      closebtn.classList.remove("active");
    });
  
    // Опередяем платформу
    const iosBtn = document.querySelectorAll(".ios");
    const androidBtn = document.querySelectorAll(".android");
  
    function getMobileOperatingSystem() {
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        androidBtn.forEach((item) => {
          item.style.display = "none";
        });
      }
      if (/android/i.test(userAgent)) {
        iosBtn.forEach((item) => {
          item.style.display = "none";
        });
      }
      return "unknown";
    }
  
    function checkScreenWidthAndExecute() {
      if (window.innerWidth < 576) {
        getMobileOperatingSystem();
      }
    }
    checkScreenWidthAndExecute();
  
    if (document.querySelector(".form_btn")) {
      const formBtn = document.querySelector(".form_btn");
      const wrapperFirstPage = document.querySelector(".main__wrapper_pc");
      const wrappeSecondPage = document.querySelector(".step2");
      const wrapperQr = document.querySelectorAll(".wrapper__qr");
      const lastText = document.querySelector(".mob__text");
  
      formBtn.addEventListener("click", (e) => {
        e.preventDefault();
        wrapperFirstPage.style.display = "none";
        wrappeSecondPage.style.display = "block";
        lastText.style.display = "none";
      });
  
      wrapperQr.forEach((item) => {
        item.addEventListener("click", () => {
          if (item.classList.contains("active")) {
            return;
          } else {
            wrapperQr.forEach((el) => {
              el.classList.remove("active");
            });
            item.classList.add("active");
          }
        });
      });
    }
  });



  document.addEventListener('DOMContentLoaded', function() {
    const customSelect = document.querySelector('.custom-select');
    const selectedOption = customSelect.querySelector('.selected-option');
    const optionsList = customSelect.querySelector('.options');
    const selectArrow = customSelect.querySelector('.select__arrow');
  
    // Открыть/закрыть выпадающий список при клике на выбранный элемент
    selectedOption.addEventListener('click', function() {
      selectArrow.classList.toggle('active');
      optionsList.style.display = optionsList.style.display === 'block' ? 'none' : 'block';
    });
  
    // Закрыть список при клике вне его
    document.addEventListener('click', function(event) {
      if (!customSelect.contains(event.target)) {
        optionsList.style.display = 'none';
        selectArrow.classList.remove('active');
      }
    });
  
    // Установить выбранное значение и закрыть список при клике на опцию
    optionsList.querySelectorAll('li').forEach(function(option) {
      option.addEventListener('click', function() {
        selectedOption.textContent = this.textContent;
        selectedOption.setAttribute('data-value', this.getAttribute('data-value'));
        optionsList.style.display = 'none';
        selectArrow.classList.remove('active');
        
        // Меняем цвет текста на черный при выборе
        selectedOption.style.color = 'rgba(17, 34, 78, 1)';
        
        console.log(getSelectedValue());
      });
    });
    
    // Устанавливаем цвет по умолчанию для пустого значения
    selectedOption.style.color = 'gray';
  });
  
  // Функция для получения выбранного значения
  function getSelectedValue() {
    const selectedOption = document.querySelector('.selected-option');
    return selectedOption.getAttribute('data-value');
  }
  

// Пример использования

  
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}