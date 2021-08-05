var winX = null;
var winY = null;

window.addEventListener('scroll', function () {
    if (winX !== null && winY !== null) {
        window.scrollTo(winX, winY);
    }
});

function disableWindowScroll() {
    winX = window.scrollX;
    winY = window.scrollY;
}

function enableWindowScroll() {
    winX = null;
    winY = null;
}

var toggleButton = document.getElementById('toggle');
var toggleIcon = toggleButton.querySelectorAll('i')[0];
var sidebar = document.getElementById('sidebar');

toggleButton.addEventListener('click', openNav);

// Change the alt text for the #toggle button (for screen readers)

function changeAltText(altText) {
	toggleButton.setAttribute('alt', altText);
}

// Open drawer when #toggle button is clicked

function openNav() {
	sidebar.classList.add('open');
    toggleIcon.classList.remove('fa-bars');
    toggleIcon.classList.add('fa-times');
	changeAltText('close navigation');
	toggleButton.removeEventListener('click', openNav);
	toggleButton.addEventListener('click', closeNav);
    disableWindowScroll();
}

// Close drawer when #toggle-open button is clicked

function closeNav() {
	sidebar.classList.remove('open');
    toggleIcon.classList.remove('fa-times');
    toggleIcon.classList.add('fa-bars');
	changeAltText('open navigation');
	toggleButton.id = 'toggle';
	toggleButton.removeEventListener('click', closeNav);
	toggleButton.addEventListener('click', openNav);
    enableWindowScroll();
}