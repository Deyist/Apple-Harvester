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

let handC = document.getElementById("helpinghandcounter")

let octopusC = document.getElementById("octopusCounter")

let metallicC = document.getElementById("metallicCounter")

let forestC = document.getElementById("forestCounter")

let techC = document.getElementById("techCounter")

/* Number of */
let numFriends = 0

let numGrandmas = 0

let numhands = 0

let numOctopus = 0

let numMetallics = 0

let numForests = 0

let numTechs = 0






/* Interval (Time for idles) */
let intervalID = window.setInterval(friendHelper, 4000) 

let intervalID2 = window.setInterval(grandmaHelper, 8000) 


/*Functions*/

apple.addEventListener('click', add)


function add(){
   i = parseInt(counter.textContent)
   n = parseInt(handC.textContent) 
   o = parseInt(octopusC.textContent)
   m = parseInt(metallicC.textContent)
   f = parseInt(forestC.textContent)
   h = parseInt(techC.textContent)
   counter.textContent = i+ 1 + n + o * 8 + m * 32 + f * 150 + h * 1250
   
} 

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