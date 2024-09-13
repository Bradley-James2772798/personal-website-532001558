window.onload = function() {
    // Retrieve the saved theme from localStorage, if available
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);  // Apply the saved theme if present
    } else {
        setTheme('style');  // Default theme
    }
};

// Function to switch themes
function setTheme(theme) {
    const themeStyle = document.getElementById('theme-style');  // Make sure the ID matches HTML
    if (theme === 'style2') {
        themeStyle.href = 'style2.css';  // Load the second theme
    } else {
        themeStyle.href = 'style.css';   // Load the default theme
    }

    // Save the current theme to localStorage for persistence
    localStorage.setItem('theme', theme);

    console.log('Theme switched to:', theme);  // Debugging: check in console
}

// Button event listener for switching themes
document.getElementById('toggle-theme-btn').addEventListener('click', function() {
    const currentTheme = localStorage.getItem('theme') === 'style2' ? 'style' : 'style2';
    setTheme(currentTheme);  // Toggle between 'style' and 'style2'
});
