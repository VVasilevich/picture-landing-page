const checkTextInputs = (selector) => {
  const txtInputs = document.querySelectorAll(selector);

  txtInputs.forEach(item => {
    item.addEventListener('keypress', (e) => {
      if (e.key.match(/[^а-яё 0-9]/ig)) {
        e.preventDefault();
      }
    });
    item.addEventListener('input', () => {
      if (item.value.match(/[a-z]/ig)) {
        item.value = '';
      }
    });
  });
};

export default checkTextInputs;