const burger = (burgerSelector, menuSelector) => {
  const burgerElem = document.querySelector(burgerSelector),
        menuElem = document.querySelector(menuSelector);
  
  menuElem.style.display = 'none';

  burgerElem.addEventListener('click', () => {
    if (menuElem.style.display === 'none') {
      menuElem.style.display = 'block';
    } else {
      menuElem.style.display = 'none';
    }
  });
};

export default burger;