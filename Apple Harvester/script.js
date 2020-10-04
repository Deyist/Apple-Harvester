
let apple = document.getElementById("apple")
let counter = document.getElementById("counter")
let settings = document.getElementById ("settings")
let myAudio = document.getElementById("myAudio")
let addFriend = document.getElementById("addFriend")
apple.addEventListener('click', add)



   function add(){
      counter.textContent++
      
      if(counter.textContent <= 49){  
    
      } else if (counter.textContent >= 50){
         addFriend.addEventListener('click', function(){
          counter.textContent++
         })
       
       

         }else if(counter.textContent >= 500){

         }
      }
   
    
  
 