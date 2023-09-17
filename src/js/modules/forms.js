import { postData } from "../services/requests";

const forms = () => {
  const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        textareas = document.querySelectorAll('textarea'),
        upload = document.querySelectorAll('[name="upload"]'),
        selects = document.querySelectorAll('select'),
        totalPrice = document.querySelector('.calc-price');

  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся.',
    failure: 'Что-то пошло не так...',
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png'
  };

  const path = {
    designer: 'https://jsonplaceholder.typicode.com/posts',
    consultation: 'https://jsonplaceholder.typicode.com/posts'
  };

  const clearForms = () => {
    inputs.forEach(item => {
      item.value = '';
    });
    textareas.forEach(item => {
      item.value = '';
    });
    upload.forEach(item => {
      item.previousElementSibling.textContent = 'Файл не выбран';
    });
    selects.forEach(select => {
      select.selectedIndex = 0;
    });
    totalPrice.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
  };

  upload.forEach(item => {
    item.addEventListener('input', () => {
      let dots;
      const arr = item.files[0].name.split('.');
      arr[0].length > 6 ? dots = '...' : dots = '.';
      const name = arr[0].substring(0, 5) + dots + arr[1];
      item.previousElementSibling.textContent = name;
      console.log(item.files[0]);
    });
  });

  form.forEach(item => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();

      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.parentNode.appendChild(statusMessage);

      item.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        item.style.display = 'none';
      }, 400);

      let statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      statusMessage.appendChild(statusImg);

      let textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);

      const formData = new FormData(item);
      

      if (item.classList.contains('calc_form')) {
        const totalPrice = document.querySelector('.calc-price').textContent;
        formData.append('price', totalPrice);
      }
    
      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      let api;
      item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.consultation;
      console.log(api);

      postData(api, json)
        .then(res => {
          console.log(res);
          statusImg.setAttribute('src', message.ok);
          textMessage.textContent = message.success;
        })
        .catch(() => {
          statusImg.setAttribute('src', message.fail);
          textMessage.textContent = message.failure;
        })
        .finally(() => {
          clearForms();
          setTimeout(() => {
            statusMessage.remove();
            item.style.display = 'block';
            item.classList.remove('fadeOutUp');
            item.classList.add('fadeInUp');
          }, 4000);
        });
    });
  });
};

export default forms;