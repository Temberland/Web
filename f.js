document.addEventListener('DOMContentLoaded', function() {  
    window.addEventListener('scroll', function() {  
    //   document.getElementById('showScroll').innerHTML = pageYOffset + 'px';  
       
    if (pageYOffset !== 0) {   
        document.querySelector('.cap').style.transition = 'background-color 0.8s ease';   
        document.querySelector('.cap').style.backgroundColor = 'white';   
        document.querySelector('.cap').style.boxShadow = '0px 7px 7px 0px rgba(0, 0, 0, 0.1)';
        document.querySelector('.cap_text').style.color = 'black'; 
        document.querySelector('.cap_text_navigation').style.color = 'black'; 
        document.querySelector('.SM1').style.color = 'black'; 
        document.querySelector('.SM2').style.color = 'black'; 
        document.querySelector('.SM3').style.color = 'black'; 
      } else {   
        document.querySelector('.cap').style.transition = 'background-color 0.7s ease';   
        document.querySelector('.cap').style.backgroundColor = '';   
        document.querySelector('.cap').style.boxShadow = 'none'; 
        document.querySelector('.cap_text').style.color = 'white'; 
        document.querySelector('.cap_text_navigation').style.color = 'white'; 
        document.querySelector('.SM1').style.color = 'white'; 
        document.querySelector('.SM2').style.color = 'white'; 
        document.querySelector('.SM3').style.color = 'white'; 
      }
    });  
  });