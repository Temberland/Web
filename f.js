

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
        if (window.innerWidth > 800){
           
          document.querySelector('.cap_text_navigation').style.color = 'white'; 
          document.querySelector('.SM1').style.color = 'white'; 
          document.querySelector('.SM2').style.color = 'white'; 
          document.querySelector('.SM3').style.color = 'white'; 
        }
      }
    });  
  });
  
  const burgerMenu = document.querySelector('.burger-menu');
  const menu = document.querySelector('.menu');
  
  let isMenuOpen = false;
    

  burgerMenu.addEventListener('click', () => {
    if (isMenuOpen) {
      menu.style.transition = 'transform 0.3s ease-in-out';
      menu.style.transform = 'translateX(300px)';
      offOut.style.transform = 'translateX(-500px)'
      isMenuOpen = false;
    } else {
      menu.style.transition = 'transform 0.3s ease-in-out';
      menu.style.transform = 'translateX(0)';
      offOut.style.transform = 'translateX(0)'
      document.querySelector('.cap_text_navigation').style.color = 'black'; 
      document.querySelector('.SM1').style.color = 'black'; 
      document.querySelector('.SM2').style.color = 'black'; 
      document.querySelector('.SM3').style.color = 'black'; 
      isMenuOpen = true;
    }
  });

  const offOut = document.querySelector('.off_out');    
  offOut.addEventListener('click', () => {
      menu.style.transition = 'transform 0.3s ease-in-out';
      menu.style.transform = 'translateX(300px)';
      offOut.style.transform = 'translateX(-500px)'
      isMenuOpen = false;
  });

  function performActionBasedOnScreenWidth() {  
    const screenWidth = window.innerWidth;  
    const pageYOffset = window.pageYOffset;
      
    if ((screenWidth >= 800) && (pageYOffset === 0)) {  
      document.querySelector('.cap_text_navigation').style.color = 'white';   
      document.querySelector('.SM1').style.color = 'white';   
      document.querySelector('.SM2').style.color = 'white';   
      document.querySelector('.SM3').style.color = 'white';   
    }
    else{
      document.querySelector('.cap_text_navigation').style.color = 'black'; 
      document.querySelector('.SM1').style.color = 'black'; 
      document.querySelector('.SM2').style.color = 'black'; 
      document.querySelector('.SM3').style.color = 'black'; 
    }   
  }  
      
  // Вызов функции при изменении размера окна  
  window.addEventListener('resize', performActionBasedOnScreenWidth);