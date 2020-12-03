/* Basic Variables*/

let cplast = document.getElementById("cplast")

let counter = document.getElementById("counter")

let counter2 = document.getElementById("counter2")

let settings = document.getElementById ("settings")

let myAudio = document.getElementById("myAudio")



/* ADD (Not neccesary?) */

let addFriend = document.getElementById("addThylakoid1")

let addGrandma = document.getElementById("addStroma1")




/* COUNTERS */

let ThylakoidC = document.getElementById("ThylakoidCounter")

let StromaC = document.getElementById("StromaCounter")

let granumC = document.getElementById("granumCounter")

let LumenC = document.getElementById("LumenCounter")

let mitochondriaC = document.getElementById("mitochondriaCounter")

let flowerC = document.getElementById("flowerCounter")

let gardenC = document.getElementById("gardenCounter")

let greenhouseC = document.getElementById("greenhouseCounter")



let H2OC = document.getElementById("H2Ocounter")

let ElectronsC = document.getElementById("ElectronsCounter")

let ATPC = document.getElementById("ATPCounter")

let NADPHC = document.getElementById("NADPHCounter")

let RuBisCOC = document.getElementById("RuBisCOCounter")


let app = document.getElementById("forApp")

/* Number of */
let numThylakoids = 0

let numStromas = 0

let numgranums = 0

let numLumen = 0

let nummitochondria = 0

let numflowers = 0

let numgardens = 0

let numgreenhouse = 0



let numH2O = 0

let numElectrons = 0

let numATP = 0

let numNADPH = 0

let numRuBisCO = 0






/* Interval (Time for idles) */
let intervalID = window.setInterval(ThylakoidHelper, 4000) 

let intervalID2 = window.setInterval(StromaHelper, 8000) 

let intervalID3 = window.setInterval(granumHelper, 6000) 

let intervalID4 = window.setInterval(LumenHelper, 10000) 

let intervalID5 = window.setInterval(mitochondriaHelper, 10000) 

let intervalID6 = window.setInterval(flowerHelper, 8000) 

let intervalID7 = window.setInterval(gardenHelper, 1500) 

let intervalID8 = window.setInterval(greenhouseHelper, 5000) 

let quizbank = new Map();
quizbank.set("1","question");
//quizbank.get("1")//
   
quizbank.set("2","");
quizbank.set("3","");
quizbank.set("4","");
quizbank.set("5","");
quizbank.set("6","");
quizbank.set("7","");
quizbank.set("8","");
quizbank.set("9","");
quizbank.set("10","");
quizbank.set("11","");
quizbank.set("12","");
quizbank.set("13","");
quizbank.set("14","");
quizbank.set("15","");
quizbank.set("16","");
quizbank.set("17","");
quizbank.set("18","");
quizbank.set("19","");
quizbank.set("20","");
quizbank.set("21","");
quizbank.set("22","");
quizbank.set("23","");
quizbank.set("24","");
quizbank.set("25","");
quizbank.set("26","");
quizbank.set("27","");
quizbank.set("28","");
quizbank.set("29","");
quizbank.set("30","");

  /*Functions*/

cplast.addEventListener('click', add)


function add(){
   j = parseInt(counter2.textContent)
   i = parseInt(counter.textContent)
   n = parseInt(H2OC.textContent) 
   o = parseInt(ElectronsC.textContent)
   m = parseInt(ATPC.textContent)
   f = parseInt(NADPHC.textContent)
   h = parseInt(RuBisCOC.textContent)
   counter.textContent = i+ 1 + n + o * 8 + m * 32 + f * 150 + h * 1750;
   counter2.textContent = j+ 1 + n + o * 8 + m * 32 + f * 150 + h * 1750;
 
   
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
 document.getElementById('cplast').addEventListener('click', () =>
   show_image("images/sugar.png", 50, 50, 'cplast')

  
      
   

 );


 //QUESTIONS

 if(counter2 == 50){
    alert(quizbank.get(1))
 }









function Thylakoid() {
   price = numThylakoids * 20 + 10 
   if (counter.textContent >= price){
      numThylakoids++
      counter.textContent -= price
      ThylakoidC.textContent = numThylakoids 
      
   }
}



function ThylakoidHelper() {
   n = numThylakoids
   c = counter.textContent
   c = parseInt(c)
   c += n
   counter.textContent = c


   d = counter2.textContent
   d = parseInt(d)
   d += n
   counter2.textContent = d
   
}
function Stroma() {
   price = numStromas * 50 + 400
   if (counter.textContent >= price){
      numStromas++
      counter.textContent -= price
      StromaC.textContent = numStromas
   }
}



function StromaHelper() {
   n = numStromas
   c = counter.textContent
   c = parseInt(c)
   c += n * 20
   counter.textContent = c
   
   d = counter2.textContent
   d = parseInt(d)
   d += n
   counter2.textContent = d
}



function granum() {
   price = numgranums * 200 + 2000
   if (counter.textContent >= price){
      numgranums++
      counter.textContent -= price
      granumC.textContent = numgranums
   }
}



function granumHelper() {
   n = numgranums
   c = counter.textContent
   c = parseInt(c)
   c += n * 100
   counter.textContent = c

   d = counter2.textContent
   d = parseInt(d)
   d += n
   counter2.textContent = d
}



function Lumen() {
   price = numLumen * 2500 + 15000
   if (counter.textContent >= price){
      numLumen++
      counter.textContent -= price
      LumenC.textContent = numLumen
   }
}



function LumenHelper() {
   n = numLumen
   c = counter.textContent
   c = parseInt(c)
   c += n * 550
   counter.textContent = c

   d = counter2.textContent
   d = parseInt(d)
   d += n
   counter2.textContent = d
}




function mitochondria() {
   price = nummitochondria * 30000 + 120000
   if (counter.textContent >= price){
      nummitochondria++
      counter.textContent -= price
      mitochondriaC.textContent = nummitochondria
   }
}



function mitochondriaHelper() {
   n = nummitochondria
   c = counter.textContent
   c = parseInt(c)
   c += n * 3500
   counter.textContent = c

   d = counter2.textContent
   d = parseInt(d)
   d += n
   counter2.textContent = d
}



function flower() {
   price = numflowers * 1200000 + 1200000
   if (counter.textContent >= price){
      numflowers++
      counter.textContent -= price
      flowerC.textContent = numflowers
   }
}



function flowerHelper() {
   n = numflowers
   c = counter.textContent
   c = parseInt(c)
   c += n * 25000
   counter.textContent = c

   d = counter2.textContent
   d = parseInt(d)
   d += n
   counter2.textContent = d
}



function garden() {
   price = numgardens * 10000000 + 15000000
   if (counter.textContent >= price){
      numgardens++
      counter.textContent -= price
      gardenC.textContent = numgardens
   }
}



function gardenHelper() {
   n = numgardens
   c = counter.textContent
   c = parseInt(c)
   c += n * 120000
   counter.textContent = c

   d = counter2.textContent
   d = parseInt(d)
   d += n
   counter2.textContent = d
}



function greenhouse() {
   price = numgreenhouse * 150000000 + 300000000
   if (counter.textContent >= price){
      numgreenhouse++
      counter.textContent -= price
      greenhouseC.textContent = numgreenhouse
   }
}



function greenhouseHelper() {
   n = numgreenhouse
   c = counter.textContent
   c = parseInt(c)
   c += n * 10000000
   counter.textContent = c

   d = counter2.textContent
   d = parseInt(d)
   d += n
   counter2.textContent = d
   
}






   






/* PER CLICK */

function H2Of() {
price = numH2O * 200 + 200
   if (counter.textContent >= price){
      numH2O++
      counter.textContent -= price
      H2OC.textContent = numH2O 
     
     
   }
}



function Electrons(){
   price = numElectrons * 400 + 800
   if (counter.textContent >= price){
      numElectrons++
      counter.textContent -= price
      ElectronsC.textContent = numElectrons
   }
     
}




function ATPfunc(){
   price = numATP * 3500 + 8000
   if (counter.textContent >= price){
      numATP++
      counter.textContent -= price
      ATPC.textContent = numATP
   }
     
}




function NADPHfunc(){
   price = numNADPH * 25000 + 50000
   if (counter.textContent >= price){
      numNADPH++
      counter.textContent -= price
      NADPHC.textContent = numNADPH
   }
     
}





function RuBisCOfunc(){
   price = numRuBisCO* 1000000 + 1000000
   if (counter.textContent >= price){
      numRuBisCO++
      counter.textContent -= price
      RuBisCOC.textContent = numRuBisCO
   }
     
}


function SetOpacity( imageid, opacity ) {
   var s= document.getElementById(imageid).style;
   s.opacity = ( opacity / 100 );
   s.MozOpacity = ( opacity / 100 );
   s.KhtmlOpacity = ( opacity / 100 );
   s.filter = 'alpha(opacity=' + opacity + ')';
}
SetOpacity('mainplast', 95);











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



 //https://html-online.com/articles/simple-popup-box/