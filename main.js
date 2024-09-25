/* MENU SHOW */ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/*----- ANIMATE -----*/
// OVERLAY
gsap.to(".first", 1.5, {delay: .5, top: "-100%", ease: Expo.easeInOut});
gsap.to(".second", 1.5, {delay: .7, top: "-100%", ease: Expo.easeInOut});
gsap.to(".third", 1.5, {delay: .9, top: "-100%", ease: Expo.easeInOut});

// IMG
gsap.from('.home__img', {opacity: 0, duration: 2, delay: 2, x: 60})

// INFORMATION
gsap.from('.home__information', {opacity: 0, duration: 3, delay: 2.3, y: 25})
gsap.from('.anime-text', {opacity: 0, duration: 3, delay: 2.3, y: 25, ease:'expo.out', stagger: .3})

// NAV ITEM
gsap.from('.nav__logo', {opacity:0, duration: 3, delay: 3.2, y: 25, ease:'expo.out'});
gsap.from('.nav__item', {opacity: 0, duration: 3, delay: 3.2, y: 25, ease:'expo.out', stagger: .2})

// SOCIAL
gsap.from('.home__social-icon', {opacity: 0, duration: 3, delay: 4, y: 25, ease:'expo.out', stagger: .2})

//about me
function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-button');

    tabs.forEach((tab) => {
        tab.classList.remove('active');
    });

    buttons.forEach((button) => {
        button.classList.remove('active');
    });

    document.getElementById(tabName).classList.add('active');
    document.querySelector(`button[onclick="showTab('${tabName}')"]`).classList.add('active');
}

// JavaScript to handle button click and display a message
// JavaScript to handle button click and display the message temporarily
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the default form submission behavior
    
    // Display the message below the button
    const messageDisplay = document.getElementById('messageDisplay');
    messageDisplay.textContent = 'Thank you for your message! We will get back to you soon.';
    
    // Set a timeout to clear the message after 3 seconds (3000 milliseconds)
    setTimeout(() => {
      messageDisplay.textContent = ''; // Clears the message
    }, 8000); // Change the time in milliseconds if you want the message to disappear faster or slower
  });
  
  
