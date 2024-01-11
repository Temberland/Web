//Сменить цвет текста в шапке
function change_white(){
  document.querySelector('.cap_text_navigation').style.color = 'white'; 
  document.querySelector('.SM1').style.color = 'white'; 
  document.querySelector('.SM2').style.color = 'white'; 
  document.querySelector('.SM3').style.color = 'white'; 
}
function change_black(){
  document.querySelector('.cap_text_navigation').style.color = 'black'; 
  document.querySelector('.SM1').style.color = 'black'; 
  document.querySelector('.SM2').style.color = 'black'; 
  document.querySelector('.SM3').style.color = 'black'; 
}
//  (выдвинуть / вдвинуть)
function hide(){
  menu.style.transition = 'transform 0.3s ease-in-out';
  menu.style.transform = 'translateX(350px)';
  offOut.style.transform = 'translateX(-500px)'
  isMenuOpen = false;
}
function show(){
  menu.style.transition = 'transform 0.3s ease-in-out';
  menu.style.transform = 'translateX(0)';
  offOut.style.transform = 'translateX(0)';
}


document.addEventListener('DOMContentLoaded', function() {  
    window.addEventListener('scroll', function() {  
    //   document.getElementById('showScroll').innerHTML = pageYOffset + 'px';  
       
    if (pageYOffset !== 0) {   
        document.querySelector('.cap').style.transition = 'background-color 0.8s ease';   
        document.querySelector('.cap').style.backgroundColor = 'white';   
        document.querySelector('.cap').style.boxShadow = '0px 7px 7px 0px rgba(0, 0, 0, 0.1)';
        document.querySelector('.cap_text').style.color = 'black'; 
        change_black();
      } else {   
          document.querySelector('.cap').style.transition = 'background-color 0.7s ease';   
          document.querySelector('.cap').style.backgroundColor = '';   
          document.querySelector('.cap').style.boxShadow = 'none'; 
          document.querySelector('.cap_text').style.color = 'white';
        if (window.innerWidth > 800){
          change_white();
        }
      }
    });  
  });
  
  const burgerMenu = document.querySelector('.burger-menu');
  const menu = document.querySelector('.menu');
  
  let isMenuOpen = false;
    

  burgerMenu.addEventListener('click', () => {
    if (isMenuOpen) {
      hide();
    } else {
      show();
      change_black();
      isMenuOpen = true;
    }
  });

  const offOut = document.querySelector('.off_out');    
  offOut.addEventListener('click', () => {
    hide();
  });

  function performActionBasedOnScreenWidth() {  
    const screenWidth = window.innerWidth;  
    const pageYOffset = window.pageYOffset;
    if (screenWidth > 800){
      menu.style.transition = 'transform 0.0s ease-in-out';
      menu.style.transform = 'translateX(0px)';
      isMenuOpen = false
    }
    else{
      menu.style.transform = 'translateX(350px)';
      isMenuOpen = false
    }
    if ((screenWidth >= 802) && (pageYOffset === 0)) {  
      change_white();
    }
    else{
      change_black();
    }   
  }       
  // Вызов функции при изменении размера окна  
  window.addEventListener('resize', performActionBasedOnScreenWidth);