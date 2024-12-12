window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    
    // Show loading screen for a minimum of 3 seconds
    setTimeout(() => {
        loadingScreen.style.animation = 'scaleOut2 1s ease-in-out forwards'; // Specify animation name
        loadingScreen.addEventListener('animationend', () => {
            loadingScreen.style.display = 'none';
            mainContent.style.display = 'block';
        });
    }, 2000); // 3 seconds delay
});
