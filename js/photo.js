var i = 0;
var image = document.getElementById("image");
var imgs = new Array('../my-photo/evening-rome.jpg', '../my-photo/france.jpg', '../my-photo/genova-water.jpg', '../my-photo/genova.jpg', '../my-photo/italy-sun.jpg', '../my-photo/louvre.jpg', '../my-photo/pragha.jpg', '../my-photo/rome.jpg', '../my-photo/venecia.jpg');

function imgsrc() {
  // for(i=0;i<imgs.length; i++){
  // if (imgs.length < imgs[9]) {
    i++;
    image.src = imgs[i];

  // }
  // else {
  //   imgs[0];
  // }}

  function imgsrcback() {
    // if (imgs.length < imgs[9]) {
      i--;
      image.src = imgs[i];

    // }
    // else {
    //   imgs[0];
    // }
  }
}
