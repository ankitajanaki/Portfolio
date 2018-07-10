
if (confirm("Do you want to receive email updates?")) {
    txt = "You pressed YES! Check your email for confirmation.";
} else {
    txt = "You pressed NO!";
}


var arr=["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
var currentImage=0;
function goNext(){
  currentImage +=1;

  if(currentImage>=images.length){
    currentImage=0;
  }
document.getElementById("mainImage").src=images(currentImage);
}

}
