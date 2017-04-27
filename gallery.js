var chico = [

  {description: "Crepuscular rays over the Saronic Gulf, Greece",

   picture: "http://bing.yinsuso.com/cache/20170426.png" ,

   from: "http://bing.yinsuso.com/"

  },

  {description: "Five Friends" ,

   picture: "http://bing.yinsuso.com/cache/20170428.png" ,

   from: "http://bing.yinsuso.com/?id=-1"

  },

  {description: "Morning Dew" ,

   picture: "http://bing.yinsuso.com/cache/20170427.png" ,

   from: "http://bing.yinsuso.com/"

  },

  {description: "Morning Clouds" ,

   picture: "http://cdn.nanxiongnandi.com/bing/MiamiLights_EN-AU1356107223.jpg" ,

   from: "http://bingwallpaper.anerg.com/au/201002"

  }

];

var current;

function shuffleGallery(){

  var i = Math.floor(Math.random() * chico.length);

  if(current == i){
    while (current == i){
      i = Math.floor(Math.random() * chico.length);
    }
  }
  document.getElementById("caption").innerHTML = chico[i].description;
  document.getElementById("picture").src = chico[i].picture;
  document.getElementById("source").innerHTML = "Image courtesy of: " + chico[i].from;
  current = i;
}
