var chico = ["Bear", "Horse", "Riley's", "Frankies", "TacoBell"];
var current;

function shuffleGallery(){

  var i = Math.floor(Math.random() * 5);

  if(current == i){
    while (current == i){
      var i = Math.floor(Math.random() * 5);
    }
  }
  document.getElementById("demo").innerHTML = chico[i];
  current = i;
}
