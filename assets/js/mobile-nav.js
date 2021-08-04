var toggleButton = document.getElementById('toggle');
var sidebar = document.getElementById('sidebar');

toggleButton.addEventListener('click', openNav);

// Change the alt text for the #toggle button (for screen readers)

function changeAltText(altText) {
	toggleButton.setAttribute('alt', altText);
}

// Open drawer when #toggle button is clicked

function openNav() {
	sidebar.classList.add('open');
    toggle.classList.remove('fa-bars');
    toggle.classList.add('fa-times');
	changeAltText('close navigation');
	toggleButton.removeEventListener('click', openNav);
	toggleButton.addEventListener('click', closeNav);
}

// Close drawer when #toggle-open button is clicked

function closeNav() {
	sidebar.classList.remove('open');
    toggle.classList.remove('fa-times');
    toggle.classList.add('fa-bars');
	changeAltText('open navigation');
	toggleButton.id = 'toggle';
	toggleButton.removeEventListener('click', closeNav);
	toggleButton.addEventListener('click', openNav);
}