var activeTabName = 'first-tab';
var activeTabButton;

function activateTab(tabName, button){
    if (activeTabName != null){
        var activeTab = document.getElementById(activeTabName);
        activeTab.style.display = 'none';
        button.classList.remove('selected');
    }
    
    activeTabName = tabName;
    
    document.getElementById(tabName).style.display = 'block';
    button.classList.add('selected')
    activeTabButton = button;
}