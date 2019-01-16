const popupImage = document.getElementById('popup-image'),
  closeBtn = document.getElementById('close');

Array.from(document.getElementsByClassName('img')).forEach(image => {
  image.addEventListener('click', event => {
    popupImage.classList.add(event.target.classList[1]);
    document.body.classList.add('popup');
  });
});

closeBtn.addEventListener('click', event => {
  popupImage.classList.remove(event.target.parentElement.classList[0]);
  document.body.classList.remove('popup');
});
