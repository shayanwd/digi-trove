const accSingleTriggers = document.querySelectorAll('.js-acc-single-trigger');

accSingleTriggers.forEach(trigger => {
  // Icon span create kar ke add karna
  const icon = document.createElement('span');
  icon.classList.add('acc-icon');
  icon.textContent = '+'; // default icon
  trigger.appendChild(icon);

  trigger.addEventListener('click', toggleAccordion);
});

function toggleAccordion() {
  const items = document.querySelectorAll('.js-acc-item');

  items.forEach(item => {
    const trigger = item.querySelector('.js-acc-single-trigger');
    const icon = trigger.querySelector('.acc-icon');

    if (this.parentNode === item) {
      item.classList.toggle('is-open');
      // icon toggle
      if (item.classList.contains('is-open')) {
        icon.textContent = '−';
      } else {
        icon.textContent = '+';
      }
    } else {
      item.classList.remove('is-open');
      if (icon) icon.textContent = '+';
    }
  });
}
