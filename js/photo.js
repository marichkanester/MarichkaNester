var i = 0;
var imageM = document.getElementById("image");
var imgsM = ["my-photo/evening-rome.jpg", "my-photo/france.jpg", "my-photo/genova-water.jpg", "my-photo/genova.jpg", "my-photo/italy-sun.jpg", "my-photo/louvre.jpg", "my-photo/pragha.jpg", "my-photo/rome.jpg", "my-photo/venecia.jpg"];
document.getElementById('arrow-left').onclick = function() {
  i--;
  imageM.src = imgsM[i];
  if (i <= 0) {
    imageM.src = imgsM[0];
    i = 0;
  }
}
document.getElementById('arrow-right').onclick = function() {
  i++;
  imageM.src = imgsM[i];

  if (i >= imgsM.length) {
    imageM.src = imgsM[0];
    i = 0;
  }
}
