   'use strict';
   
   
 
   
   function Click(cellId) {
     if(time===0){
        alert("TimeOut!")
        location.reload();
     }
    let cell = document.getElementById(cellId);
    let clickedValue = parseInt(cell.innerHTML);
    
   
    if (clickedValue === expectedValue) {
      cell.classList.add("green");
      expectedValue++;

      if (expectedValue === 17) {
        alert("Congratulations! You won!");
        location.reload();
        
      }
    } else {
      
      alert("Sorry, you didn't click correctly.");
      location.reload();
      
    } 
  }
     let time = 30;
     let set = setInterval(timeF,1000);

     function timeF(){
        time--;
        document.getElementById("timer").innerHTML = time;
                if (time === 0) {
                  clearInterval(set);
                }
       }
      
    
    let First = [];
    let Last = [];
    let expectedValue = 1;

    for (let i = 1; i <= 16; i++) {
      First.push(i);
    }

    while (First.length > 0) {
      let randomIndex = Math.floor(Math.random() * First.length);
      Last.push(First[randomIndex]);
      First.splice(randomIndex, 1);
    }

    
for (let i = 1; i <= 16; i++) {
    let cell = document.getElementById("cell" + i);
    cell.innerHTML = Last[i - 1]; 
    cell.onclick = function() {
      Click(this.id);
    };
  }
  