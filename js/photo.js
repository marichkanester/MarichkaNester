var i = 0;
var image = document.getElementById("image");
var imgs = ["../../my-photo/evening-rome.jpg", "../../my-photo/france.jpg", "../my-photo/genova-water.jpg", "../my-photo/genova.jpg", "../my-photo/italy-sun.jpg", "../my-photo/louvre.jpg", "../my-photo/pragha.jpg", "../my-photo/rome.jpg", "../my-photo/venecia.jpg"];
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
