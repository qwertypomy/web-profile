var modal = document.getElementById('modal');
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("modal-caption");
var span = document.getElementById("modal-close");

span.onclick = function() {
  modal.style.display = "none";
}
modalImg.onclick = function() {
  modal.style.display = "none";
}

var imgs = document.getElementsByTagName('img');

for (i = 0; i < imgs.length; i++) {
  if (imgs[i].id != "modal-img") {
    imgs[i].onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
  }
}
