/*Variables*/
let apple = document.getElementById("apple")

let counter = document.getElementById("counter")

let settings = document.getElementById ("settings")

let myAudio = document.getElementById("myAudio")

let addFriend = document.getElementById("addFriend1")

let addGrandma = document.getElementById("addGrandma1")

let friendC = document.getElementById("friendCounter")

let grandmaC = document.getElementById("grandmaCounter")

let handC = document.getElementById("helpinghandcounter")


let numFriends = 0

let numGrandmas = 0

let numhands = 0

let intervalID = window.setInterval(friendHelper, 8000) 

let intervalID2 = window.setInterval(grandmaHelper, 12000) 


/*Functions*/

apple.addEventListener('click', add)


function add(){
   i = parseInt(counter.textContent)
   n = parseInt(handC.textContent) 
   counter.textContent = i+ 1 + n
   
} 

function friend() {
   price = numFriends * 20 + 10 + numhands * 10
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
   if (counter.textContent >= 500){
      numGrandmas++
      counter.textContent -= 500
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
   





function helpingHandf() {
price = numhands * 200 + 200
   if (counter.textContent >= price){
      numhands++
      counter.textContent -= price
      handC.textContent = numhands 
     
     
   }
}




   /* while(true){
      setTimeout(function(){
         n = numberOfFriends 
         counter.textContent += n 
     ,100000 })
    }*/
     
/* Adding number # = number added per click
 i = counter.textContent
 i = parseInt(i)
 counter.textContent = i + (#)
 */