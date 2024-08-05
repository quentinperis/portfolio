var screenWidth = window.innerWidth - 100; 
var face1 = document.getElementById("face1");
var face2 = document.getElementById("face2");
face1.style.width = (screenWidth / 4) + "px";
face2.style.width = (screenWidth / 4) + "px";
var bodyElement = document.querySelector("body");
bodyElement.addEventListener("mousemove", changeFace, false);
var prevX = 0;
var maxWidth = screenWidth / 2;
var minWidth = 0;
var increment = 10;
function changeFace(e) {
  var xDirection = getMouseDirection(e);
  var face1Width = face1.offsetWidth;
  var face2Width = face2.offsetWidth;
  if (xDirection === "left") {
    moveLeft(face1Width, face2Width);
  } else { 
    moveRight(face1Width, face2Width);
  }
}
function moveLeft(face1Width, face2Width) {
  if (face2Width < maxWidth) {
    face2.style.width = (face2Width + increment) + "px";
    face1.style.width = (face1Width - increment) + "px";
    var percentage1 = getPercentage(face1Width - increment, screenWidth / 2);
    document.getElementById("text1").style.opacity = percentage1;
    var percentage2 = getPercentage(face2Width + increment, screenWidth / 2);
    document.getElementById("text2").style.opacity = percentage2;
  }
}
function moveRight(face1Width, face2Width) {
  if (face1Width < maxWidth) {
    face1.style.width = (face1Width + increment) + "px";
    face2.style.width = (face2Width - increment) + "px";
    var percentage1 = getPercentage(face1Width + increment, screenWidth / 2);
    document.getElementById("text1").style.opacity = percentage1;
    var percentage2 = getPercentage(face2Width - increment, screenWidth / 2);
    document.getElementById("text2").style.opacity = percentage2;
  }
}
function getPercentage(width, total) {
  return 1 - (width / total); 
}
function getMouseDirection(e) {
  var dir;
  var currentX = e.pageX;
    if (prevX < currentX) {
    dir = "right"; 
  } else {
    dir = "left"; 
  }
  prevX = currentX;
  return dir;
}

// Mon Caroussel infini avec des petites images

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollFactor = scrollTop / 5; // Pour ajuster la vitesse du défilement horizontal

  var rowsLeft = document.querySelectorAll('.scroll-left .inner-row');
  var rowsRight = document.querySelectorAll('.scroll-right .inner-row');

  rowsLeft.forEach(function(row) {
    row.style.transform = 'translateX(' + (scrollFactor % (row.scrollWidth / 2)) + 'px)';
  });

  rowsRight.forEach(function(row) {
    row.style.transform = 'translateX(' + (-scrollFactor % (row.scrollWidth / 2)) + 'px)';
  });
});
