var i = 0;
var image = document.getElementById("image");
var imgs = new Array('../my-photo/evening-rome.jpg', '../my-photo/france.jpg', '../my-photo/genova-water.jpg', '../my-photo/genova.jpg', '../my-photo/italy-sun.jpg', '../my-photo/louvre.jpg', '../my-photo/pragha.jpg', '../my-photo/rome.jpg', '../my-photo/venecia.jpg');

function imgsrc() {

    i++;
    image.src = imgs[i];

 
  function imgsrcback() {
 
      i--;
      image.src = imgs[i];

  
  }
}
