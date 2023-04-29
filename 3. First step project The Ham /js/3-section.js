const thirdTabs = document.querySelector('.third-block-tabs');
const thirdTabsChildren = document.querySelectorAll('.third-tabs-title');
const thirdItem = document.querySelectorAll('.tab-block');

thirdTabs.addEventListener('click', function (event) {
    if (event.target.closest('.third-tabs-title')) {
        thirdTabsChildren.forEach(element => {
            element.classList.remove('active');
        });
        thirdItem.forEach(element => {
            if (element.dataset.tabs === event.target.dataset.tabs) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
        event.target.classList.toggle('active');
    }
});

export default 'thirdSection';
