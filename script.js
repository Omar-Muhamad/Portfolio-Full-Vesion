const data = [
  {
    id: 1,
    projectPopName: 'Tonic',
    techPoptype: 'CANOPY',
    techPopDevType: 'Back End Dev',
    techPopDevYear: '2015',
    ProjectPopImageUrl: './images/Snapshoot-Portfolio.png',
    ProjectPopDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
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
    ProjectPopDesc: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
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
    ProjectPopDesc: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
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
    ProjectPopDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    usedLang1: 'html',
    usedLang2: 'CSS',
    usedLang3: 'JavaScript',
  },
];

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
  const ProjectPopImage = document.createElement('img');
  ProjectPopImage.setAttribute('src', popupData.ProjectPopImageUrl);
  ProjectPopImage.setAttribute('alt', 'project image');
  const ProjectPopDesc = document.createElement('p');
  ProjectPopDesc.setAttribute('class', 'project-pop-desc');
  ProjectPopDesc.innerHTML = popupData.ProjectPopDesc;
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
  usedLang.append(usedLangP1);
  usedLang.append(usedLangP2);
  usedLang.append(usedLangP3);
  popBtns.append(liveBtn);
  popBtns.append(sourceBtn);
  projectPopContainer.append(closeBtnPop);
  projectPopContainer.append(projectPopName);
  projectPopContainer.append(techPop);
  projectPopContainer.append(ProjectPopImage);
  projectPopContainer.append(ProjectPopDesc);
  projectPopContainer.append(usedLang);
  projectPopContainer.append(span);
  projectPopContainer.append(popBtns);
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
