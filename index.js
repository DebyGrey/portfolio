// javascript object for the entire work section content
const workSection = [
  {
    id: 1,
    img: './images/snapshot.png',
    projectTitle: 'Tonic',
    projectStack: {
      subTitle: 'CANOPY',
      img: '',
      stack: 'Back End Dev',
      img2: '',
      year: '2015',
    },
    projectDesc:
      ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['HTML', 'CSS', 'Javascript'],
    buttonAttr: {
      id: 1,
      type: 'button',
      role: 'button',
      title: 'See project',
    },
  },
  {
    id: 2,
    img: './images/snapshot-2.png',
    projectTitle: 'Multi-Post Stories',
    projectStack: {
      subTitle: 'CANOPY',
      img: '',
      stack: 'Back End Dev',
      img2: '',
      year: '2015',
    },
    projectDesc:
      ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['HTML', 'CSS', 'Javascript'],
    buttonAttr: {
      id: 2,
      type: 'button',
      role: 'button',
      title: 'See project',
    },
  },
  {
    id: 3,
    img: './images/snapshot-3.png',
    projectTitle: 'Tonic',
    projectStack: {
      subTitle: 'CANOPY',
      img: '',
      stack: 'Back End Dev',
      img2: '',
      year: '2015',
    },
    projectDesc:
      ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['HTML', 'CSS', 'Javascript'],
    buttonAttr: {
      id: 3,
      type: 'button',
      role: 'button',
      title: 'See project',
    },
  },
  {
    id: 4,
    img: './images/snapshot-4.png',
    projectTitle: 'Multi-Post Stories',
    projectStack: {
      subTitle: 'CANOPY',
      img: '',
      stack: 'Back End Dev',
      img2: '',
      year: '2015',
    },
    projectDesc:
      ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['HTML', 'CSS', 'Javascript'],
    buttonAttr: {
      id: 4,
      type: 'button',
      role: 'button',
      title: 'See project',
    },
  },
];
const modal = document.querySelector('.preview');
const modalOverlay = document.querySelector('.overlay-preview');

/// close modal function
function closeModal() {
  if (modal.classList.contains('active') && modalOverlay.classList.contains('active')) {
    modal.classList.remove('active');
    modalOverlay.classList.remove('active');
  }
}
// Get the button outside of the modal
// Add a click event listener to the button
modalOverlay.addEventListener('click', closeModal);

// get the hamburger element
const hamburger = document.querySelector('#hamburger');
// get the close-btn element
const closeBtn = document.querySelector('#close-hamburger');
// get the menu-item elements
const links = document.querySelectorAll('.menu-item a');
// get the mobile menu container element
const mobileMenu = document.querySelector('.mobile-menu');

// toggle visibility function for nav menu
function toggleNavMenu() {
  mobileMenu.classList.toggle('show-menu');
}

// open mobile nav container
if (hamburger) {
  hamburger.addEventListener('click', toggleNavMenu);
}
// close mobile nav container
if (closeBtn) {
  closeBtn.addEventListener('click', toggleNavMenu);
}
// navigate to the actual links on the menu item(s) - li a
if (links) {
  links.forEach((link) => {
    // add event listener to every link  - li a
    link.addEventListener('click', (event) => {
      // prevent the default link behavior
      event.preventDefault();
      // get the href attribute of each link - li a
      const href = link.getAttribute('href');
      // use the href attribute to find the target element on the page
      const target = document.querySelector(href);
      // toggle nav menu to close
      toggleNavMenu();
      // smoothly scroll to the target location
      target.scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
}
// }

// register the work container section element to be appended to
const workContainer = document.querySelector('.work-container');
// display all work cards in work section
const workKeys = Object.keys(workSection);
const workValues = Object.values(workSection);
for (let i = 0; i < workKeys.length; i += 1) {
  // create the list element
  const workCard = document.createElement('div');
  workContainer.appendChild(workCard);
  workCard.classList.add('work-card', 'flex-column');
  // create portfolio snapshot element
  const portfolioSnapshot = document.createElement('img');
  portfolioSnapshot.src = workValues[i].img;
  portfolioSnapshot.classList.add('portfolio-snapshot');
  // create right-block element
  const rightBlock = document.createElement('div');
  rightBlock.classList.add('right-block', 'flex-column');
  workCard.append(portfolioSnapshot, rightBlock);
  // create project detail container
  const titleDiv = document.createElement('div');
  titleDiv.classList.add('project-detail-container', 'flex-column');
  // create h2 element in project detail container
  const titleDivH2 = document.createElement('h2');
  titleDivH2.classList.add('text-32', 'color-N800', 'big-screen-text-40');
  titleDivH2.innerHTML = workValues[i].projectTitle;
  // create ul element in project detail container
  const stackUl = document.createElement('ul');
  stackUl.classList.add(
    'project-detail-container',
    'flex-row',
    'project-stack',
  );

  // display stack list
  const stackUlLiKeys = Object.keys(workValues[i].projectStack);
  const stackUlLivalues = Object.values(workValues[i].projectStack);
  for (let i = 0; i < stackUlLiKeys.length; i += 1) {
    // create li element in project detail container
    const stackUlList = document.createElement('li');
    stackUlList.textContent = stackUlLivalues[i];
    stackUl.appendChild(stackUlList);

    // add css to the selcted items that pass the conditions
    if (stackUlLiKeys[i] === 'subTitle') {
      stackUlList.classList.add(
        'color-N600',
        'text-13-bold',
        'big-screen-18-bold',
      );
    }
    if (stackUlLiKeys[i] === 'stack' || stackUlLiKeys[i] === 'year') {
      stackUlList.classList.add(
        'color-N100',
        'text-13-bold',
        'big-screen-18-bold',
      );
    }
    if (stackUlLiKeys[i] === 'img' || stackUlLiKeys[i] === 'img2') {
      stackUlList.classList.add('counter-img');
    }
  }
  // p element in right block
  const descP = document.createElement('p');
  descP.classList.add(
    'primary-text',
    'text-15',
    'color-N600',
    'big-screen-text-16',
  );
  descP.innerHTML = workValues[i].projectDesc;
  // create and register tag ul list
  const projectTags = document.createElement('ul');
  projectTags.classList.add('tags', 'flex-row');

  // display single card and loop through the tag array
  const tagKeys = Object.keys(workValues[i].tags);
  const tagValues = Object.values(workValues[i].tags);
  for (let i = 0; i < tagKeys.length; i += 1) {
    // create the list element
    const tagList = document.createElement('li');
    tagList.textContent = tagValues[i];
    // console.log(tagValues[i]);
    projectTags.appendChild(tagList);
    // add list class - tag-btn
    tagList.classList.add('tag-btn');
  }
  // project action button container
  const previewBtnContainer = document.createElement('div');
  previewBtnContainer.classList.add('project-action-btn');

  // preview buttons
  const previewBtn = document.createElement('button');
  previewBtn.classList.add('submit-btn', 'text-17');
  previewBtnContainer.appendChild(previewBtn);

  // set attributes for all buttons
  const btnKeys = Object.keys(workValues[i].buttonAttr);
  const btnValues = Object.values(workValues[i].buttonAttr);
  for (let i = 0; i < btnKeys.length; i += 1) {
    if (btnKeys[i] === 'title' && btnValues[i] !== '') {
      previewBtn.innerHTML = btnValues[i];
    }
    if (btnKeys[i] === 'id' && btnValues[i] !== '') {
      previewBtn.setAttribute(btnKeys[i], btnValues[i]);
    }
  }

  rightBlock.append(
    titleDiv,
    titleDivH2,
    stackUl,
    descP,
    projectTags,
    previewBtnContainer,
  );
}

// function for modal
// create pop up function
function showModal(project) {
  // code to iterate through the project stack list
  const stackUlLiKeys = Object.keys(project.projectStack);
  const stackUlLivalues = Object.values(project.projectStack);

  const stackUlListItems = stackUlLivalues.map((value, index) => {
    const stackUlListItem = document.createElement('li');
    stackUlListItem.textContent = value;

    if (stackUlLiKeys[index] === 'subTitle') {
      stackUlListItem.classList.add(
        'color-N600',
        'big-screen-text-15',
        'text-13-bold',
      );
    } else if (
      stackUlLiKeys[index] === 'stack'
      || stackUlLiKeys[index] === 'year'
    ) {
      stackUlListItem.classList.add(
        'color-N100',
        'text-13-bold',
        'big-screen-text-15',
      );
    } else if (
      stackUlLiKeys[index] === 'img'
      || stackUlLiKeys[index] === 'img2'
    ) {
      stackUlListItem.classList.add('counter-img');
    }

    return stackUlListItem;
  });

  const stackUl = document.createElement('ul');
  stackUl.classList.add(
    'project-detail-container',
    'flex-row',
    'project-stack',
  );
  stackUl.append(...stackUlListItems);

  // get the list of stack
  // const tagKeys = Object.keys(project.tags);
  const tagValues = Object.values(project.tags);

  const tagListItems = tagValues.map(
    (value) => `<li class="tag-btn">${value}</li>`,
  );

  const projectTags = `
  <ul class="tags flex-row">
    ${tagListItems.join('')}
  </ul>
`;

  // add the stackUl list to the previewBox HTML string
  const previewBox = `
  <div class="project-detail-container flex-column">
    <div class="preview-title flex-row">
      <h2 class="text-32 color-N800 big-screen-text-40-LH-52">${project.projectTitle}</h2>
      <img class="close-details" src="./images/cancel.png"/>
    </div>
      ${stackUl.outerHTML}
    <img src= "${project.img}" class= "portfolio-snapshot-desktop"/>
    <div class= "right-block flex-column">
      <p class= "primary-text-100 text-15 color-N600 big-screen-text-16-LH-30"> ${project.projectDesc} </p>
      <div class= "right-block-grid flex-column">
      ${projectTags}
      <div class= "divider"></div>
        <div class= "preview-btns">
          <div class= "project-action-btn flex-row">
            <button class= "submit-btn text-15 flex-row img" type= "button" role= "button">
            See live
            <img src= "./images/live.png"/>
            </button>
            <button class= "submit-btn text-15 flex-row img" type= "button" role= "button">
            See source
            <img src= "./images/source.png"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>`;

  // add the previewBox HTML to the document
  modal.innerHTML = previewBox;

  const closeModalBtn = document.querySelector('.close-details');
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }
}

// open modal function
const submitBtns = document.querySelectorAll('.submit-btn');
if (submitBtns) {
  submitBtns.forEach((button) => {
    button.addEventListener('click', (event) => {
      const buttonId = event.target.id;
      const project = workSection.find(
        (project) => project.id.toString() === buttonId,
      );
      if (project) {
        showModal(project);
        modalOverlay.classList.add('active');
        modal.classList.add('active');
      }
    });
  });
}
