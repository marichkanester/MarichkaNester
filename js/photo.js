var i = 0;
var image = document.getElementById("image");
var imgs = ['../img/evening-rome.jpg', '../img/france.jpg', '../img/genova-water.jpg', '../img/genova.jpg', '../img/italy-sun.jpg', '../img/louvre.jpg', '../img/pragha.jpg', '../img/rome.jpg', '../img/venecia.jpg'];
document.getElementById('arrow-left').onclick = function() {
  i--;
  image.src = imgs[i];
  if (i <= 0) {
    image.src = imgs[0];
    i = 0;
  }
}
document.getElementById('arrow-right').onclick = function() {
  i++;
  image.src = imgs[i];

  if (i >= imgs.length) {
    image.src = imgs[0];
    i = 0;
  }
}
