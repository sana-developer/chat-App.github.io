
window.addEventListener("DOMContentLoaded", (event) => {
    let buttonClicked = true;
    var outer = document.getElementsByClassName('outer');

    var el = document.getElementById('study');
    
    if (el) {
      el.addEventListener('click', ()=>{
       
        if(buttonClicked) {
          for (var i = 0; i < outer.length; i++) {
            outer[i].style.backgroundColor="white";
        }
           el.style.backgroundColor='#f0f2f5';
            document.getElementById('head-righ').innerHTML=null;
             var cln = el.cloneNode(true);
            document.getElementById('head-righ').appendChild(cln);
            
           }
           //buttonClicked = true;
      }); 
    }
    var el1 = document.getElementById('evils');
    if (el1) {
        el1.addEventListener('click', ()=>{
          
          //el1.style.backgroundColor='#f0f2f5';
            console.log(buttonClicked);
          
          if (buttonClicked) {
            for (var i = 0; i < outer.length; i++) {
              outer[i].style.backgroundColor="white";
          }
             el1.style.backgroundColor='#f0f2f5';
            document.getElementById('head-righ').innerHTML=null;
             var cln = el1.cloneNode(true); 
            document.getElementById('head-righ').appendChild(cln);
             }
            // buttonClicked = true;
        }); 
        //buttonClicked = false;
        
      }
    var el2 = document.getElementById('friends');
    if (el2) {
        el2.addEventListener('click', ()=>{
          
          
          if (buttonClicked) {
            for (var i = 0; i < outer.length; i++) {
              outer[i].style.backgroundColor="white";
          }
             el2.style.backgroundColor='#f0f2f5';
            document.getElementById('head-righ').innerHTML=null; 
             var cln = el2.cloneNode(true);
            document.getElementById('head-righ').appendChild(cln);
             }
            // buttonClicked = true;
        }); 
        //buttonClicked = false;
        
      }
    var el3 = document.getElementById('coffee');
    if (el3) {
        el3.addEventListener('click', ()=>{
          
          
          if (buttonClicked) {
            for (var i = 0; i < outer.length; i++) {
              outer[i].style.backgroundColor="white";
          }
             el3.style.backgroundColor='#f0f2f5';
            document.getElementById('head-righ').innerHTML=null;  
            var cln = el3.cloneNode(true);
            document.getElementById('head-righ').appendChild(cln);
             }
        }); 
        
      }
    var el4 = document.getElementById('helpers');
    if (el4) {
        el4.addEventListener('click', ()=>{
          
          if (buttonClicked) {
            for (var i = 0; i < outer.length; i++) {
              outer[i].style.backgroundColor="white";
          }
             el4.style.backgroundColor='#f0f2f5';
            document.getElementById('head-righ').innerHTML=null; 
             var cln = el4.cloneNode(true);
            document.getElementById('head-righ').appendChild(cln);
             }
        }); 
        
      }
});
//random color change
/*const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}*/