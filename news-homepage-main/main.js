const openButton = document.querySelector('.mobile-nav-toggle');
const closeButton = document.querySelector('.mobile-nav-close');
const navbarList = document.querySelector('.navbar-list');

const showFunction =  () => {
        navbarList.setAttribute('data-visible', 'true');
        closeButton.classList.remove('hidden');
        openButton.classList.add('hidden');
    
}

const removeFunction = () => {
    navbarList.setAttribute('data-visible', 'false');
    closeButton.classList.add('hidden');
    openButton.classList.remove('hidden');
}

openButton.addEventListener('click', showFunction);
closeButton.addEventListener('click', removeFunction);