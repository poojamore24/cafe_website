


document.addEventListener('DOMContentLoaded', function() {
    
    let menu = document.querySelector('#menu-bar');
    let navbar = document.querySelector('.navbar');
  
    menu.onclick = () => {
      menu.classList.toggle('fa-times');
      navbar.classList.toggle('active');
    }
  
    window.onscroll = () => {
      menu.classList.remove('fa-times');
      navbar.classList.remove('active');
    }
  });
  
  // function openSignUpForm() {
  //   var signUpForm = document.querySelector('.signup-form');
  //   signUpForm.style.display = 'block';
  // }

  // function closeSignUpForm() {
  //   var signUpForm = document.querySelector('.signup-form');
  //   signUpForm.style.display = 'none';
  // }
  document.addEventListener("DOMContentLoaded", function() {
    const signupLink = document.getElementById("signup-link");
    const signupForm = document.getElementById("signup-form");
  
    signupLink.addEventListener("click", function(event) {
        event.preventDefault();
        signupForm.style.display = "block";
    });
  });
  