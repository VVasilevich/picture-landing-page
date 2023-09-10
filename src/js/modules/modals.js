const modals = () => {
  const bindModal = (triggerSelector, modalSelector, closeSelector, triggerDelete = false) => {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector),
          windows = document.querySelectorAll('[data-modal]'),
          scrollWidth = calcScrollWidth();

    trigger.forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        if (triggerDelete) {
          item.remove();
        }

        windows.forEach(item => {
          item.style.display = 'none';
        });

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scrollWidth}px`;
      });
    });

    close.addEventListener('click', () => {
      windows.forEach(item => {
        item.style.display = 'none';
      });

      modal.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.marginRight = '0px';
    });
    
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        windows.forEach(item => {
          item.style.display = 'none';
        });

        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = '0px';
      }
    });
  }

  const showModalByTime = (modalSelector, modalTimerID) => {
    setTimeout(() => {
      let display;

      document.querySelectorAll('[data-modal]').forEach(item => {
        if (getComputedStyle(item).display !== 'none') {
          display = 'block';
        }
      });
  
      if (!display) {
        document.querySelector(modalSelector).style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${calcScrollWidth()}px`;
      }

      if (modalTimerID) {
        clearTimeout(modalTimerID);
      }
    }, modalTimerID);
  }

  const calcScrollWidth = () => {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';


    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }

  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
  // showModalByTime('.popup-consultation', 3000);
};

export default modals;