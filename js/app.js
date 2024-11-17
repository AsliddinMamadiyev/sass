window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    // tabs
    const tabList = document.querySelectorAll('.tab-list');
    const tabContent = document.querySelectorAll('.tab-content');

    function hideTabContent() {
        tabList.forEach(item => item.classList.remove('active'))
        tabContent.forEach(content => {
            content.classList.add('hide');
            content.classList.remove('show');
        })
    }
    function showTabContent(idx = 0) {
        tabList[idx].classList.add('active');
        tabContent[idx].classList.add('show');
        tabContent[idx].classList.remove('hide');
    }

    hideTabContent();
    showTabContent();

    tabList.forEach((btn, index) => {
        console.log(index);
    })
})

