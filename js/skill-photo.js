var i = 0;
var image = document.getElementById("skill-first");
var image1 = document.getElementById("skill-second");
var imgs = ["img/html5_logo .png","img/css3 .png","img/js.png","img/Java.png","img/uk .png"];
document.getElementById('arrow-left-skill').onclick = function() {
  i--;
  image.src = imgs[i];
  image1.src = imgs[i+1];
  if (i <= 0) {
    image.src = imgs[4];
    image1.src = imgs[0];
    i = 0;
  }
}
document.getElementById('arrow-right-skill').onclick = function() {
  i++;
  image.src = imgs[i];
  image1.src = imgs[i-1];

  if (i >= imgs.length) {
    image.src = imgs[0];
    image1.src = imgs[4];
    i = 0;
  }
}