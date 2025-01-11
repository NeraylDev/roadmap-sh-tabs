var activeTabName = 'first-tab';
var activeTabButton;

function activateTab(tabName, button){
    if (activeTabName != null)
        document.getElementById(activeTabName).style.display = 'none';
    
    if (activeTabButton != null)
        activeTabButton.classList.remove('selected');

    document.getElementById(tabName).style.display = 'block';
    button.classList.add('selected')
    activeTabName = tabName
    activeTabButton = button;
}