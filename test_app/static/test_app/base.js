
// Toggle For NavBars
function toggleNavBar() {
    const content_box = document.getElementById('content_box');
    const hamburger = document.getElementById('hamburger');

    if (content_box.style.display === 'block') {
        // List is currently displayed, retract it
        content_box.style.display = 'none';
        hamburger.innerHTML =  `
        <button class="text-white border border-white border-spacing-1 rounded-sm px-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        </button>`;

    } else {
        // List is hidden, display it
        content_box.style.display = 'block';
        content_box.style.height = '350px';
        hamburger.innerHTML = `
        <button class="text-white border border-white border-spacing-1 rounded-sm px-2">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="white">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
            </svg>
        </button>`;
    }
}

// Add an event listener to the icon for toggling the navigation bar
const icon = document.getElementById('hamburger');
icon.addEventListener('click', toggleNavBar);


function toggleElement(elementID) {
    const element = document.getElementById(elementID); 
    
    if (element.style.display === 'none' || !element.style.display) {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}
