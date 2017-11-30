var imgs = document.getElementsByClassName('gallery-content')[0].getElementsByTagName('img'),
  imgs_len = imgs.length;
var galleryIndex = 1;
showGallery(galleryIndex);

function validateIndex(n) {
  if (n >= 0) {
    return n % imgs_len;
  } else {
    return imgs_len + (n % imgs_len);
  }
}

function nextImg() {
  galleryIndex = validateIndex(++galleryIndex);
  showGallery(galleryIndex);
}

function prevImg() {
  galleryIndex = validateIndex(--galleryIndex);
  showGallery(galleryIndex);
}

function showGallery(n) {
  var imgs = document.getElementsByClassName('gallery-content')[0].getElementsByTagName('img');
  var gallery_slides = document.getElementsByClassName('gallery-slides')[0];
  var left = validateIndex(n - 1),
    right = validateIndex(n + 1);

  while (gallery_slides.firstChild) {
    gallery_slides.removeChild(gallery_slides.firstChild);
  }

  left_img = imgs[left].cloneNode(true);
  left_img.className = 'left';
  gallery_slides.appendChild(left_img);
  main_img = imgs[n].cloneNode(true);
  main_img.className = 'main';
  gallery_slides.appendChild(main_img);
  right_img = imgs[right].cloneNode(true);
  right_img.className = 'right';
  gallery_slides.appendChild(right_img);

  addModalOnClick();
}

function addModalOnClick() {
  var modal = document.getElementById('modal');
  var modalImg = document.getElementById('modal-img');
  var captionText = document.getElementById('modal-caption');
  var span = document.getElementById('modal-close');

  span.onclick = function() {
    modal.style.display = 'none';
  }
  modalImg.onclick = function() {
    modal.style.display = 'none';
  }

  var imgs = document.getElementsByClassName('gallery-slides')[0].getElementsByTagName('img');

  for (i = 0; i < imgs.length; i++) {
    imgs[i].onclick = function() {
      modal.style.display = 'block';
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
  }
}
