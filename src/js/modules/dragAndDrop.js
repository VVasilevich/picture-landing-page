const dragAndDrop = () => {
  const fileInputs = document.querySelectorAll('[name="upload"]');

  const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, preventDefaults, false);
    });
  });

  const highlight = (item) => {
    item.closest('.file_upload').style.border = '1px solid #c51abb';
    item.closest('.file_upload').style.borderRadius = '50px';
    item.closest('.file_upload').style.backgroundColor = 'rgba(0, 0, 0, .3)';
  }

  const unhighlight = (item) => {
    item.closest('.file_upload').style.border = 'none';
    if (item.closest('.calc_form')) {
      item.closest('.file_upload').style.backgroundColor = '#fff';
    } else {
      item.closest('.file_upload').style.backgroundColor = '#ededed';
    }
  }

  ['dragenter', 'dragover'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => highlight(input), false);
    });
  });

  ['dragleave', 'drop'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => unhighlight(input), false);
    });
  });

  fileInputs.forEach(input => {
    input.addEventListener('drop', (e) => {
      input.files = e.dataTransfer.files;
      let dots;
      const arr = input.files[0].name.split('.');
      arr[0].length > 6 ? dots = '...' : dots = '.';
      const name = arr[0].substring(0, 5) + dots + arr[1];
      input.previousElementSibling.textContent = name;
      console.log(input.files[0]);
    });
  });
};

export default dragAndDrop;