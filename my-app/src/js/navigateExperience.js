function showContent(id) {
    // Hide all content items
    const contentItems = document.querySelectorAll('.content-item');
    contentItems.forEach(item => {
        item.style.display = 'none';
    });

    // Show the selected content item
    document.getElementById(id).style.display = 'block';

    // Remove 'active' class from all sidebar items
    const sidebarItems = document.querySelectorAll('.sidebar li');
    sidebarItems.forEach(item => {
        item.classList.remove('active');
    });

    // Add 'active' class to the selected sidebar item
    document.getElementById(id + '-tab').classList.add('active');
}
showContent("upstatement");
// Show the first content item by default
document.addEventListener('DOMContentLoaded', () => {
    showContent('upstatement');
});
