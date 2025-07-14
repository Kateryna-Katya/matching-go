document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-button');
  const iconContainer = menuBtn.querySelector('.icon');
  const modalMenu = document.querySelector('.modal');
  const menuItem = document.querySelectorAll('.menu-list-item');
  const header = document.querySelector('.header');
  const headerWrapper = document.querySelector('.header-wrapper'); // ⬅️ Додано

  let isMenuOpen = false;

  const burgerIcon = `
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.75 7.25H23M5 14H23H8.375M5 20.75H16.25" stroke="white" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round" />
    </svg>
  `;

  const crossIcon = `
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.5 20.5L14.5 14.5L20.5 8.5M20.5 20.5L8.5 8.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `;

  menuBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    iconContainer.innerHTML = isMenuOpen ? crossIcon : burgerIcon;
    isMenuOpen ? openModal() : closeModal();
  });

  menuItem.forEach(item =>
    item.addEventListener('click', () => {
      closeModal();
      iconContainer.innerHTML = burgerIcon;
      isMenuOpen = false;
    })
  );

  window.addEventListener('scroll', blurHeader);

  function openModal() {
    modalMenu.style.display = 'block';
    if (headerWrapper) headerWrapper.style.display = 'none'; // ⬅️ Ховаємо
  }

  function closeModal() {
    modalMenu.style.display = 'none';
    if (headerWrapper) headerWrapper.style.display = ''; // ⬅️ Показуємо знову
  }

  function blurHeader() {
    if (!header) return;
    if (window.scrollY > 60) {
      header.classList.add('header-scroll');
    } else {
      header.classList.remove('header-scroll');
    }
  }
});