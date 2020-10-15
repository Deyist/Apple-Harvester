/* Basic Variables*/

let apple = document.getElementById("apple")

let counter = document.getElementById("counter")

let settings = document.getElementById ("settings")

let myAudio = document.getElementById("myAudio")



/* ADD (Not neccesary?) */

let addFriend = document.getElementById("addFriend1")

let addGrandma = document.getElementById("addGrandma1")




/* COUNTERS */

let friendC = document.getElementById("friendCounter")

let grandmaC = document.getElementById("grandmaCounter")

let farmC = document.getElementById("farmCounter")

let regionC = document.getElementById("regionCounter")

let countryC = document.getElementById("countryCounter")

let planetC = document.getElementById("planetCounter")

let galaxyC = document.getElementById("galaxyCounter")

let universeC = document.getElementById("universeCounter")



let handC = document.getElementById("helpinghandcounter")

let octopusC = document.getElementById("octopusCounter")

let metallicC = document.getElementById("metallicCounter")

let forestC = document.getElementById("forestCounter")

let techC = document.getElementById("techCounter")


let app = document.getElementById("forApp")

/* Number of */
let numFriends = 0

let numGrandmas = 0

let numFarms = 0

let numRegions = 0

let numCountries = 0

let numPlanets = 0

let numGalaxies = 0

let numUniverses = 0



let numhands = 0

let numOctopus = 0

let numMetallics = 0

let numForests = 0

let numTechs = 0






/* Interval (Time for idles) */
let intervalID = window.setInterval(friendHelper, 4000) 

let intervalID2 = window.setInterval(grandmaHelper, 8000) 

let intervalID3 = window.setInterval(farmHelper, 6000) 

let intervalID4 = window.setInterval(regionHelper, 10000) 

let intervalID5 = window.setInterval(countryHelper, 10000) 

let intervalID6 = window.setInterval(planetHelper, 8000) 

let intervalID7 = window.setInterval(galaxyHelper, 1500) 

let intervalID8 = window.setInterval(universeHelper, 5000) 


/*Functions*/

apple.addEventListener('click', add)


function add(){
   i = parseInt(counter.textContent)
   n = parseInt(handC.textContent) 
   o = parseInt(octopusC.textContent)
   m = parseInt(metallicC.textContent)
   f = parseInt(forestC.textContent)
   h = parseInt(techC.textContent)
   counter.textContent = i+ 1 + n + o * 8 + m * 32 + f * 150 + h * 1750
   
} 

function show_image(src, width, height, alt) {
   var img = document.createElement("img");
   img.src = src;
   img.width = width;
   img.height = height;
   img.alt = alt;
   
   // set the position
   img.style.position = 'absolute';
   
   
   img.style.top =  document.getElementById("forApp").clientHeight * Math.random() +"px";
   
   img.style.left = document.getElementById("forApp").clientWidth * Math.random() + 'px';
 
   document.body.appendChild(img);
   
   setTimeout(function(){ document.body.removeChild(img); }, 1000); 
 }
 document.getElementById('apple').addEventListener('click', () =>
   show_image("images/apple.png", 50, 50, 'apple')

   
 );












function friend() {
   price = numFriends * 20 + 10 
   if (counter.textContent >= price){
      numFriends++
      counter.textContent -= price
      friendC.textContent = numFriends 
      
   }
}



function friendHelper() {
   n = numFriends
   c = counter.textContent
   c = parseInt(c)
   c += n
   counter.textContent = c
   
}
function grandma() {
   price = numGrandmas * 50 + 400
   if (counter.textContent >= price){
      numGrandmas++
      counter.textContent -= price
      grandmaC.textContent = numGrandmas
   }
}



function grandmaHelper() {
   n = numGrandmas
   c = counter.textContent
   c = parseInt(c)
   c += n * 20
   counter.textContent = c
}



function farm() {
   price = numFarms * 200 + 2000
   if (counter.textContent >= price){
      numFarms++
      counter.textContent -= price
      farmC.textContent = numFarms
   }
}



function farmHelper() {
   n = numFarms
   c = counter.textContent
   c = parseInt(c)
   c += n * 100
   counter.textContent = c
}



function region() {
   price = numRegions * 2500 + 15000
   if (counter.textContent >= price){
      numRegions++
      counter.textContent -= price
      regionC.textContent = numRegions
   }
}



function regionHelper() {
   n = numRegions
   c = counter.textContent
   c = parseInt(c)
   c += n * 550
   counter.textContent = c
}




function country() {
   price = numCountries * 30000 + 120000
   if (counter.textContent >= price){
      numCountries++
      counter.textContent -= price
      countryC.textContent = numCountries
   }
}



function countryHelper() {
   n = numCountries
   c = counter.textContent
   c = parseInt(c)
   c += n * 3500
   counter.textContent = c
}



function planet() {
   price = numPlanets * 1200000 + 1200000
   if (counter.textContent >= price){
      numPlanets++
      counter.textContent -= price
      planetC.textContent = numPlanets
   }
}



function planetHelper() {
   n = numPlanets
   c = counter.textContent
   c = parseInt(c)
   c += n * 25000
   counter.textContent = c
}



function galaxy() {
   price = numGalaxies * 10000000 + 15000000
   if (counter.textContent >= price){
      numGalaxies++
      counter.textContent -= price
      galaxyC.textContent = numGalaxies
   }
}



function galaxyHelper() {
   n = numGalaxies
   c = counter.textContent
   c = parseInt(c)
   c += n * 120000
   counter.textContent = c
}



function universe() {
   price = numUniverses * 150000000 + 300000000
   if (counter.textContent >= price){
      numUniverses++
      counter.textContent -= price
      universeC.textContent = numUniverses
   }
}



function universeHelper() {
   n = numUniverses
   c = counter.textContent
   c = parseInt(c)
   c += n * 1000000
   counter.textContent = c
}






   






/* PER CLICK */

function helpingHandf() {
price = numhands * 200 + 200
   if (counter.textContent >= price){
      numhands++
      counter.textContent -= price
      handC.textContent = numhands 
     
     
   }
}



function octopus(){
   price = numOctopus * 400 + 800
   if (counter.textContent >= price){
      numOctopus++
      counter.textContent -= price
      octopusC.textContent = numOctopus
   }
     
}




function metallic(){
   price = numMetallics * 3500 + 8000
   if (counter.textContent >= price){
      numMetallics++
      counter.textContent -= price
      metallicC.textContent = numMetallics
   }
     
}




function forest(){
   price = numForests * 25000 + 50000
   if (counter.textContent >= price){
      numForests++
      counter.textContent -= price
      forestC.textContent = numForests
   }
     
}





function tech(){
   price = numTechs* 1000000 + 1000000
   if (counter.textContent >= price){
      numTechs++
      counter.textContent -= price
      techC.textContent = numTechs
   }
     
}


function SetOpacity( imageid, opacity ) {
   var s= document.getElementById(imageid).style;
   s.opacity = ( opacity / 100 );
   s.MozOpacity = ( opacity / 100 );
   s.KhtmlOpacity = ( opacity / 100 );
   s.filter = 'alpha(opacity=' + opacity + ')';
}
SetOpacity('tree', 95);











/* EXTRA NOTES
    while(true){
      setTimeout(function(){
         n = numberOfFriends 
         counter.textContent += n 
     ,100000 })
    }
     
 Adding number # = number added per click
 i = counter.textContent
 i = parseInt(i)
 counter.textContent = i + (#)
 */