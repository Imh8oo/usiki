const subscribeBtn = document.querySelector('.subscribe-btn'),
      plus = document.querySelector('.plus'),
      plusAfter = document.querySelector('.plus-after'),
      check = document.querySelector('.check'),
      checkAfter = document.querySelector('.check-after');
subscribeBtn.addEventListener('click', () => {
  setTimeout(() => {
    plus.style.display = 'none';
  }, 300);
  setTimeout(() => {
    plusAfter.style.display = 'none';
  }, 300);
  subscribeBtn.classList.add('subscribe-btn__clicked');
  plus.classList.add('plus__animated');
  plusAfter.classList.add('plus-after__animated');
  check.classList.add('check__animated');
  checkAfter.classList.add('check-after__animated');
  setTimeout(() => {
    subscribeBtn.style.display = 'none';
  }, 550);
});
