const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}
const navLink = document.querySelectorAll('.nav_link');
function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));
const skillsContent = document.getElementsByClassName('skills_content'),
  skillsHeader = document.querySelectorAll('.skills_header');
function toggleSkills() {
  let itemClass = this.parentNode.className;
  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills_content skills_close';
  }
  if (itemClass === 'skills_content skills_close') {
    this.parentNode.className = 'skills_content skills_open';
  }
}
skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills);
});
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('qualification_active');
    });
    target.classList.add('qualification_active');
    tabs.forEach((tab) => {
      tab.classList.remove('qualification_active');
    });
    tab.classList.add('qualification_active');
  });
});
const modelViews = document.querySelectorAll('.services_model'),
  modelBtns = document.querySelectorAll('.services_button'),
  modelCloses = document.querySelectorAll('.services_model-close');
let model = function (modelClick) {
  modelViews[modelClick].classList.add('active-model');
};
modelBtns.forEach((modelBtn, i) => {
  modelBtn.addEventListener('click', () => {
    model(i);
  });
});
modelCloses.forEach((modelClose) => {
  modelClose.addEventListener('click', () => {
    modelViews.forEach((modelView) => {
      modelView.classList.remove('active-model');
    });
  });
});
let swiperPortfolio = new Swiper('.portfolio_container', {
  cssMode: true,
  loop: true,
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  pagination: { el: '.swiper-pagination', clickable: true },
  mousewheel: true,
  keyboard: true,
});
let swiperTestimonial = new Swiper('.testimonial_container', {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: { 568: { slidesPerView: 2 } },
});
const sections = document.querySelectorAll('section[id]');
function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav_menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav_menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);
function scrollHeader() {
  const nav = document.getElementById('header');
  if (this.scrollY >= 80) nav.classList.add('scroll-header');
  else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](
    iconTheme
  );
}
themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
var isNS = navigator.appName == 'Netscape' ? 1 : 0;
if (navigator.appName == 'Netscape')
  document.captureEvents(Event.MOUSEDOWN || Event.MOUSEUP);
function mischandler() {
  return false;
}
function mousehandler(e) {
  var myevent = isNS ? e : event;
  var eventbutton = isNS ? myevent.which : myevent.button;
  if (eventbutton == 2 || eventbutton == 3) return false;
}
// document.oncontextmenu = mischandler;
// document.onmousedown = mousehandler;
// document.onmouseup = mousehandler;

//typing effect
const textDisplay = document.getElementById('text');
const phrases = ['I love to code.', 'I love to help.'];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
  isEnd = false;
  textDisplay.innerHTML = currentPhrase.join('');

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      textDisplay.innerHTML = currentPhrase.join('');
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
      textDisplay.innerHTML = currentPhrase.join('');
    }

    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }
  const spedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (300 - 200) + 200;
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
  setTimeout(loop, time);
}

loop();

//form handler
const nameInput = document.getElementById('name');
const subjectInput = document.getElementById('subject');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const contact_form = document.querySelector('.contact_form');

contact_form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameInputValue = nameInput.value.trim();
  const subjectInputValue = subjectInput.value.trim();
  const emailInputValue = emailInput.value.trim();
  const messageInputValue = messageInput.value.trim();

  let checkName;
  let checkSubject;
  let checkEmail;
  let checkMessage;

  if (nameInputValue == '') {
    setErrorFor(nameInput, 'Name cannot be blank', '.name_wrapper');
    checkName = true;
  } else {
    nameInput.parentNode.classList.remove('error');
    nameInput.parentNode.classList.add('success');
    checkName = false;
  }

  if (subjectInputValue == '') {
    setErrorFor(subjectInput, 'Subject cannot be blank', '.subject_wrapper');
    checkSubject = true;
  } else {
    subjectInput.parentNode.classList.remove('error');
    subjectInput.parentNode.classList.add('success');
    checkSubject = false;
  }

  if (emailInputValue == '') {
    setErrorFor(emailInput, 'Email cannot be blank', '.email_wrapper');
    checkEmail = true;
  } else if (!isEmail(emailInputValue)) {
    setErrorFor(emailInput, 'Not a valid email', '.email_wrapper');
    checkEmail = true;
  } else {
    emailInput.parentNode.classList.add('success');
    emailInput.parentNode.classList.remove('error');
    checkEmail = false;
  }

  if (messageInputValue == '') {
    setErrorFor(messageInput, 'Message cannot be blank', '.message_wrapper');
    checkMessage = true;
  } else {
    messageInput.parentNode.classList.remove('error');
    messageInput.parentNode.classList.add('success');
    checkEmail = false;
  }

  if (!checkMessage && !checkName && !checkSubject && !checkEmail) {
    let formdata = new FormData();
    formdata.append('subject', subjectInputValue);
    formdata.append('email', emailInputValue);
    formdata.append('content', messageInputValue);

    fetch('https://advicebox.herokuapp.com/api/receivemail', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        subject: subjectInputValue,
        email: emailInputValue,
        content: messageInputValue,
      }),
    })
      .then(function (data) {
        console.log('Request succeeded with JSON response', data);
        myFunction('message sent successfully', 'success');
        clearInputs();
      })
      .catch(function (error) {
        console.log('Request failed', error);
        myFunction('something went wrong', 'error');
      });
  }

  function clearInputs() {
    nameInput.value = '';
    subjectInput.value = '';
    emailInput.value = '';
    messageInput.value = '';

    nameInput.parentNode.classList.remove('success');
    emailInput.parentNode.classList.remove('success');
    subjectInput.parentNode.classList.remove('success');
    messageInput.parentNode.classList.remove('success');
  }
});

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function setErrorFor(input, message, wrapperClass) {
  const formControl = input.parentElement;
  formControl.classList.remove('success');
  formControl.classList.add('error');
  const wrapper = document.querySelector(wrapperClass);
  const small = wrapper.querySelector('small');
  small.innerText = message;
}

//snackbar
function myFunction(message, type) {
  var x = document.getElementById('snackbar');
  x.innerText = message;
  if (type === 'error') {
    x.className = 'show error';
  } else {
    x.className = 'show success';
  }
  setTimeout(function () {
    x.className = x.className.replace('show', '');
  }, 3000);
}
