const shareImgContainer = document.querySelector('.share-img-container');
const shareContainer = document.querySelector('.share-container');

shareImgContainer.addEventListener('click', () => {
  shareContainer.classList.toggle('show');
});
