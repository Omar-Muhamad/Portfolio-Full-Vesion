// ######## project card pop-up data ########

const data = [
  {
    id: 1,
    projectPopName: 'Tonic',
    techPoptype: 'CANOPY',
    techPopDevType: 'Back End Dev',
    techPopDevYear: '2015',
    ProjectPopImageUrl: './images/Snapshoot-Portfolio.png',
    ProjectPopDesc:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    usedLang1: 'html',
    usedLang2: 'CSS',
    usedLang3: 'JavaScript',
  },
  {
    id: 2,
    projectPopName: 'Multi-Post Stories',
    techPoptype: 'FACEBOOK',
    techPopDevType: 'Full Stack Dev',
    techPopDevYear: '2015',
    ProjectPopImageUrl: './images/Snapshoot-Portfolio1.png',
    ProjectPopDesc:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    usedLang1: 'html',
    usedLang2: 'CSS',
    usedLang3: 'JavaScript',
  },
  {
    id: 3,
    projectPopName: 'Facebook 360',
    techPoptype: 'FACEBOOK',
    techPopDevType: 'Full Stack Dev',
    techPopDevYear: '2015',
    ProjectPopImageUrl: './images/Snapshoot-Portfolio2.png',
    ProjectPopDesc:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    usedLang1: 'html',
    usedLang2: 'CSS',
    usedLang3: 'JavaScript',
  },
  {
    id: 4,
    projectPopName: 'Uber Navigation',
    techPoptype: 'Uber',
    techPopDevType: 'Lead Developer',
    techPopDevYear: '2018',
    ProjectPopImageUrl: './images/Snapshoot-Portfolio3.png',
    ProjectPopDesc:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    usedLang1: 'html',
    usedLang2: 'CSS',
    usedLang3: 'JavaScript',
  },
];

// ######## Mobile menu ########

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

navLinks.addEventListener('click', (event) => {
  if (navLinks.classList.contains('show')) {
    if (event.target.tagName === 'A' || event.target.tagName === 'I') {
      navLinks.classList.remove('show');
    }
  }
});

// ######## project card pop-up ########

function CreatePopup(popupData) {
  const projectPop = document.createElement('div');
  projectPop.setAttribute('class', 'project-pop');
  projectPop.setAttribute('id', 'project-pop');
  const projectPopContainer = document.createElement('div');
  projectPopContainer.setAttribute('class', 'project-pop-container');
  const projectPopName = document.createElement('h2');
  projectPopName.setAttribute('class', 'project-pop-name');
  projectPopName.innerHTML = popupData.projectPopName;
  const techPop = document.createElement('div');
  techPop.setAttribute('class', 'tech-pop');
  const techPopType = document.createElement('p');
  techPopType.setAttribute('class', 'tech-pop-type');
  techPopType.innerHTML = popupData.techPoptype;
  const techPopSpan1 = document.createElement('span');
  techPopSpan1.innerHTML = '•';
  const techPopDevType = document.createElement('p');
  techPopDevType.innerHTML = popupData.techPopDevType;
  const techPopSpan2 = document.createElement('span');
  techPopSpan2.innerHTML = '•';
  const techPopDevYear = document.createElement('p');
  techPopDevYear.innerHTML = popupData.techPopDevYear;
  const ProjectPopImageDiv = document.createElement('div');
  ProjectPopImageDiv.setAttribute('class', 'project-pop-image-div');
  const ProjectPopImage = document.createElement('img');
  ProjectPopImage.setAttribute('src', popupData.ProjectPopImageUrl);
  ProjectPopImage.setAttribute('alt', 'project image');
  const ProjectPopDesc = document.createElement('p');
  ProjectPopDesc.setAttribute('class', 'project-pop-desc');
  ProjectPopDesc.innerHTML = popupData.ProjectPopDesc;
  const container10 = document.createElement('div');
  container10.setAttribute('class', 'container10');
  const usedLang = document.createElement('div');
  usedLang.setAttribute('class', 'used-lang');
  const usedLangP1 = document.createElement('p');
  usedLangP1.innerHTML = popupData.usedLang1;
  const usedLangP2 = document.createElement('p');
  usedLangP2.innerHTML = popupData.usedLang2;
  const usedLangP3 = document.createElement('p');
  usedLangP3.innerHTML = popupData.usedLang3;
  const popBtns = document.createElement('div');
  const span = document.createElement('hr');
  span.setAttribute('class', 'line-span');
  popBtns.setAttribute('class', 'pop-btn');
  const liveBtn = document.createElement('button');
  liveBtn.setAttribute('class', 'live-btn');
  liveBtn.setAttribute('type', 'button');
  liveBtn.innerHTML = 'See live <i class="fas fa-arrow-circle-right fa-lg"></i>';
  const sourceBtn = document.createElement('button');
  sourceBtn.setAttribute('class', 'source-btn');
  sourceBtn.setAttribute('type', 'button');
  sourceBtn.innerHTML = 'See Source <i class="fab fa-github fa-lg"></i>';

  const closeBtnPop = document.createElement('i');
  closeBtnPop.className = 'fas fa-times';
  closeBtnPop.addEventListener('click', () => {
    const popup = document.querySelector('.project-pop');
    if (popup) {
      popup.parentElement.removeChild(popup);
    }
  });

  techPop.append(techPopType);
  techPop.append(techPopSpan1);
  techPop.append(techPopDevType);
  techPop.append(techPopSpan2);
  techPop.append(techPopDevYear);
  ProjectPopImageDiv.append(ProjectPopImage);
  usedLang.append(usedLangP1);
  usedLang.append(usedLangP2);
  usedLang.append(usedLangP3);
  popBtns.append(liveBtn);
  popBtns.append(sourceBtn);
  container10.append(usedLang);
  container10.append(span);
  container10.append(popBtns);
  projectPopContainer.append(closeBtnPop);
  projectPopContainer.append(projectPopName);
  projectPopContainer.append(techPop);
  projectPopContainer.append(ProjectPopImageDiv);
  projectPopContainer.append(ProjectPopDesc);
  projectPopContainer.append(container10);
  projectPop.append(projectPopContainer);
  return projectPop;
}
const { body } = document;

document.querySelectorAll('.pop-btn').forEach((btn) => {
  btn.addEventListener('click', (event) => {
    if (!document.querySelector('.project-pop')) {
      const popupData = data[parseInt(event.target.id, 10)];
      const popup = CreatePopup(popupData);
      body.append(popup);
    }
  });
});

// ######## form client side validation ########

const form = document.getElementById('form');
const email = document.getElementById('email');
const formBtn = document.querySelector('.submit-btn');

function setErrorFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
  return /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(email);
}

function checkInputs() {
  let errorMsg;
  let valid = true;
  const emailValue = email.value.trim();

  if (emailValue === '') {
    valid = false;
    errorMsg = 'Email cannot be blank';
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    valid = false;
    errorMsg = 'Email is not valid';
    setErrorFor(email, 'Email is not valid');
  } else {
    setSuccessFor(email);
  }
  return { valid, errorMsg };
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const validation = checkInputs();
  if (validation.valid) {
    form.submit();
  } else {
    formBtn.classList.add('error');
    formBtn.querySelector('small').innerHTML = validation.errorMsg;
  }
});
