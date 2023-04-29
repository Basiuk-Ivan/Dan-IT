const tabs = document.querySelector('.tabs');

const tabsChildren = document.querySelectorAll('.tabs-title');
const tabsChildrenArr = [...tabsChildren];

const item = document.querySelectorAll('.tabs-item');
const itemArr = [...item];

tabs.addEventListener('click', function (event) {
    if (event.target.closest('.tabs-title')) {
        tabsChildrenArr.forEach(element => {
            element.classList.remove('active');
        });

        itemArr.forEach(element => {
            if (element.dataset.tabs === event.target.dataset.tabs) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
        event.target.classList.toggle('active');
    }
});
