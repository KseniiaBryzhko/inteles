(() => {
  const readMoreBtns = document.querySelectorAll('.read-more');
  const moreContents = document.querySelectorAll('.solutions__wrapper');
  const maxWidth = 768;

  function toggleMoreContent(index) {
    const currentButton = readMoreBtns[index];
    const currentContent = moreContents[index];

    if (currentContent.style.display === 'none' || currentContent.style.display === '') {
      currentContent.style.display = 'block';
      currentButton.textContent = 'Згорнути';
    } else {
      currentContent.style.display = 'none';
      currentButton.textContent = 'Читати більше';
    }
  }

  function handleWindowSize() {
    if (window.innerWidth < maxWidth) {
      readMoreBtns.forEach((button, index) => {
        button.style.display = 'block';
        button.addEventListener('click', () => toggleMoreContent(index));
      });
    } else {
      readMoreBtns.forEach((button, index) => {
        button.style.display = 'none';
        button.removeEventListener('click', () => toggleMoreContent(index));
      });
    }
  }

  window.addEventListener('resize', handleWindowSize);
  handleWindowSize();
})();
