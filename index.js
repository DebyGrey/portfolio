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

function initMenu() {
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
}

function initPopup() {
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
        // console.log(previewBtn.getAttribute('id'));
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
    const popupOverlay = document.querySelector('.overlay-preview');
    popupOverlay.classList.toggle('active');
    const modalBox = document.querySelector('.preview');
    modalBox.classList.add('preview', 'flex-column');
    modalBox.classList.toggle('active');
    // create project detail container
    const popupHeader = document.createElement('div');
    popupHeader.classList.add('project-detail-container');
    // create title header
    const titleHeader = document.createElement('div');
    titleHeader.classList.add('preview-title', 'flex-row');
    popupHeader.appendChild(titleHeader);
    // create h2 element in project detail container
    const titleDivH2 = document.createElement('h2');
    titleDivH2.classList.add(
      'text-32',
      'color-N800',
      'big-screen-text-40-LH-52',
    );
    titleDivH2.textContent = project.projectTitle;
    // create portfolio snapshot element
    const cancelBtnImg = document.createElement('img');
    cancelBtnImg.src = './images/cancel.png';
    cancelBtnImg.classList.add('close-details');
    // close  modal
    if (cancelBtnImg) {
      cancelBtnImg.addEventListener('click', () => {
        const closeModal = document.querySelector('.preview');
        closeModal.classList.remove('active');
      });
    }
    // create ul element in project detail container
    const stackUl = document.createElement('ul');
    stackUl.classList.add(
      'project-detail-container',
      'flex-row',
      'project-stack',
    );
    // display stack list
    const stackUlLiKeys = Object.keys(project.projectStack);
    const stackUlLivalues = Object.values(project.projectStack);
    for (let i = 0; i < stackUlLiKeys.length; i += 1) {
      // create li element in project detail container
      const stackUlList = document.createElement('li');
      stackUlList.textContent = stackUlLivalues[i];
      stackUl.appendChild(stackUlList);
      // add css to the selcted items that pass the conditions
      if (stackUlLiKeys[i] === 'subTitle') {
        stackUlList.classList.add(
          'color-N600',
          'big-screen-text-15',
          'text-13-bold',
        );
      }
      if (stackUlLiKeys[i] === 'stack' || stackUlLiKeys[i] === 'year') {
        stackUlList.classList.add(
          'color-N100',
          'text-13-bold',
          'big-screen-text-15',
        );
      }
      if (stackUlLiKeys[i] === 'img' || stackUlLiKeys[i] === 'img2') {
        stackUlList.classList.add('counter-img');
      }
    }
    // create portfolio snapshot element
    const portfolioSnapshot = document.createElement('img');
    portfolioSnapshot.src = project.img;
    portfolioSnapshot.classList.add('portfolio-snapshot');
    // create right-block element
    const rightBlock = document.createElement('div');
    rightBlock.classList.add('right-block', 'flex-column');
    // p element in right block
    const descP = document.createElement('p');
    descP.classList.add(
      'primary-text-100',
      'text-15',
      'color-N600',
      'big-screen-text-16-LH-30',
    );
    descP.innerHTML = project.projectDesc;
    // create a div to hold stack tags, divider and buttons
    const rightBlockGrid = document.createElement('div');
    rightBlockGrid.classList.add('flex-column', 'right-block-grid');
    // create and register tag ul list
    const projectTags = document.createElement('ul');
    projectTags.classList.add('tags', 'flex-row');
    rightBlockGrid.appendChild(projectTags);
    // display single card and loop through the tag array
    const tagKeys = Object.keys(project.tags);
    const tagValues = Object.values(project.tags);
    for (let i = 0; i < tagKeys.length; i += 1) {
      // create the list element
      const tagList = document.createElement('li');
      tagList.textContent = tagValues[i];
      projectTags.appendChild(tagList);
      // add list class - tag-btn
      tagList.classList.add('tag-btn');
    }
    // create divider
    const divider = document.createElement('div');
    divider.classList.add('divider');
    rightBlockGrid.appendChild(divider);
    // project action button container
    const previewBtnsContainer = document.createElement('div');
    previewBtnsContainer.classList.add('preview-btns', 'flex-row');

    // preview buttons
    const previewBtnHolder1 = document.createElement('div');
    previewBtnHolder1.classList.add('project-action-btn');
    // buttons one
    const previewBtn1 = document.createElement('button');
    previewBtn1.classList.add('submit-btn', 'text-15', 'flex-row', 'img');
    previewBtn1.type = 'button';
    previewBtn1.role = 'button';
    previewBtn1.innerHTML = 'See live <img src="./images/live.png"/>';
    // preview buttons
    const previewBtnHolder2 = document.createElement('div');
    previewBtnHolder2.classList.add('project-action-btn');
    // buttons one
    const previewBtn2 = document.createElement('button');
    previewBtn2.classList.add('submit-btn', 'text-15', 'flex-row');
    previewBtn2.type = 'button';
    previewBtn2.role = 'button';
    previewBtn2.innerHTML = 'See source <img src="./images/source.png"/>';
    previewBtnHolder1.appendChild(previewBtn1);
    previewBtnHolder2.appendChild(previewBtn2);
    previewBtnsContainer.append(previewBtnHolder1, previewBtnHolder2);
    rightBlockGrid.append(previewBtnsContainer);
    rightBlock.append(descP, rightBlockGrid);
    titleHeader.append(titleDivH2, cancelBtnImg);
    popupHeader.appendChild(stackUl);
    modalBox.append(popupHeader, portfolioSnapshot, rightBlock);
  }

  const submitBtns = document.querySelectorAll('.submit-btn');
  if (submitBtns) {
    submitBtns.forEach((button) => {
      button.addEventListener('click', (event) => {
        // const buttonId = parseInt(event.target.dataset.id, 10);
        const buttonId = event.target.id;
        // console.log(`The button with ID "${buttonId}" was clicked`);
        const project = workSection.find((project) => project.id == buttonId);
        if (project) {
          showModal(project);
          // console.log(`Button ${buttonId} clicked for ${project.projectTitle}`);
        }
      });
    });
  }
  const closeBtn = document.querySelector('.close-details');
  function closeModal() {
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        const popupOverlay = document.querySelector('.overlay-preview');
        popupOverlay.classList.remove('active');
        const modalBox = document.querySelector('.preview');
        modalBox.classList.remove('preview');
        // modalBox.classList.toggle('active');
      });
    }
  }
}
window.addEventListener('DOMContentLoaded', () => {
  initMenu();
  initPopup();
});
