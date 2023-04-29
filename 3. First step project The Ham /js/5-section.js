const fifthTabs = document.querySelector('.fifth-block-tabs');
const fifthTabsChildren = document.querySelectorAll('.fifth-tabs-title');
const button = document.querySelector('.fifth-button');
const IMG = [
    './img/5-section /second.img/img-1.jpg',
    './img/5-section /second.img/img-2.jpg',
    './img/5-section /second.img/img-3.jpg',
    './img/5-section /second.img/img-4.jpg',
    './img/5-section /second.img/img-5.jpg',
    './img/5-section /second.img/img-6.jpg',
    './img/5-section /second.img/img-7.jpg',
    './img/5-section /second.img/img-8.jpg',
    './img/5-section /second.img/img-9.jpg',
    './img/5-section /second.img/img-10.jpg',
    './img/5-section /second.img/img-11.jpg',
    './img/5-section /second.img/img-12.jpg',
];
const IMG1 = IMG.slice(0, 3);
const IMG2 = IMG.slice(3, 6);
const IMG3 = IMG.slice(6, 9);
const IMG4 = IMG.slice(9, 12);

const wrapp = document.querySelector('.fifth-tabs-imgs');

const tabsSecondImg = document.createElement('div');
tabsSecondImg.classList.add('fifth-tabs-second-img');
wrapp.append(tabsSecondImg);

const img1 = () => {
    IMG1.forEach(element => {
        const div = document.createElement('div');
        const hiddenBlock = document.createElement('div');
        const logo = document.createElement('div');
        const greenText = document.createElement('div');
        const grayText = document.createElement('div');
        const img = document.createElement('img');
        const icon = document.createElement('img');

        img.classList.add('img-2');
        div.classList.add('fifth-img-2');
        div.classList.add('active');
        logo.classList.add('show-info-logo');
        grayText.classList.add('show-info-gray-text');
        greenText.classList.add('show-info-green-text');
        hiddenBlock.classList.add('hidden-block');
        icon.classList.add('icon-info');

        div.setAttribute('data-tabs', 'Graphic Design');
        greenText.innerText = 'creative design';
        grayText.innerText = 'Graphic Design';
        img.src = element;
        icon.src = './img/5-section /icon.png';

        div.append(img);
        tabsSecondImg.append(div);
        div.prepend(hiddenBlock);
        hiddenBlock.prepend(greenText);
        hiddenBlock.append(grayText);
        hiddenBlock.prepend(logo);
        logo.append(icon);
    });
};
const img2 = () => {
    IMG2.forEach(element => {
        const div = document.createElement('div');
        const hiddenBlock = document.createElement('div');
        const logo = document.createElement('div');
        const greenText = document.createElement('div');
        const grayText = document.createElement('div');
        const img = document.createElement('img');
        const icon = document.createElement('img');

        img.classList.add('img-2');
        div.classList.add('fifth-img-2');
        div.classList.add('active');
        logo.classList.add('show-info-logo');
        grayText.classList.add('show-info-gray-text');
        greenText.classList.add('show-info-green-text');
        hiddenBlock.classList.add('hidden-block');
        icon.classList.add('icon-info');

        div.setAttribute('data-tabs', 'Web Design');
        greenText.innerText = 'creative design';
        grayText.innerText = 'Web Design';
        img.src = element;
        icon.src = './img/5-section /icon.png';

        div.append(img);
        tabsSecondImg.append(div);
        div.prepend(hiddenBlock);
        hiddenBlock.prepend(greenText);
        hiddenBlock.append(grayText);
        hiddenBlock.prepend(logo);
        logo.append(icon);
    });
};
const img3 = () => {
    IMG3.forEach(element => {
        const div = document.createElement('div');
        const hiddenBlock = document.createElement('div');
        const logo = document.createElement('div');
        const greenText = document.createElement('div');
        const grayText = document.createElement('div');
        const img = document.createElement('img');
        const icon = document.createElement('img');

        img.classList.add('img-2');
        div.classList.add('fifth-img-2');
        div.classList.add('active');
        logo.classList.add('show-info-logo');
        grayText.classList.add('show-info-gray-text');
        greenText.classList.add('show-info-green-text');
        hiddenBlock.classList.add('hidden-block');
        icon.classList.add('icon-info');

        div.setAttribute('data-tabs', 'Landing Pages');
        greenText.innerText = 'creative design';
        grayText.innerText = 'Landing Pages';
        img.src = element;
        icon.src = './img/5-section /icon.png';

        div.append(img);
        tabsSecondImg.append(div);
        div.prepend(hiddenBlock);
        hiddenBlock.prepend(greenText);
        hiddenBlock.append(grayText);
        hiddenBlock.prepend(logo);
        logo.append(icon);
    });
};
const img4 = () => {
    IMG4.forEach(element => {
        const div = document.createElement('div');
        const hiddenBlock = document.createElement('div');
        const logo = document.createElement('div');
        const greenText = document.createElement('div');
        const grayText = document.createElement('div');
        const img = document.createElement('img');
        const icon = document.createElement('img');

        img.classList.add('img-2');
        div.classList.add('fifth-img-2');
        div.classList.add('active');
        logo.classList.add('show-info-logo');
        grayText.classList.add('show-info-gray-text');
        greenText.classList.add('show-info-green-text');
        hiddenBlock.classList.add('hidden-block');
        icon.classList.add('icon-info');

        div.setAttribute('data-tabs', 'Wordpress');
        greenText.innerText = 'creative design';
        grayText.innerText = 'Wordpress';
        img.src = element;
        icon.src = './img/5-section /icon.png';

        div.append(img);
        tabsSecondImg.append(div);
        div.prepend(hiddenBlock);
        hiddenBlock.prepend(greenText);
        hiddenBlock.append(grayText);
        hiddenBlock.prepend(logo);
        logo.append(icon);
    });
};

button.addEventListener('click', function (event) {
    img1();
    img2();
    img3();
    img4();

    button.classList.remove('active');
});

fifthTabs.addEventListener('click', function (event) {
    const fifthItem = document.querySelectorAll('.img-info');
    const sec = document.querySelectorAll('.fifth-img-2');
    if (event.target.closest('.fifth-tabs-title')) {
        fifthTabsChildren.forEach(element => {
            element.classList.remove('active');
        });
        fifthItem.forEach(element => {
            if (event.target.dataset.tab) {
                element.classList.add('active');
            } else if (element.dataset.tabs === event.target.dataset.tabs) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
        sec.forEach(element => {
            if (event.target.dataset.tab) {
                element.classList.add('active');
            } else if (element.dataset.tabs === event.target.dataset.tabs) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
        event.target.classList.toggle('active');
    }
});

wrapp.addEventListener('mouseover', function (event) {
    if (event.target.closest('.active')) {
        event.target.style.opacity = 0;
    }
});
wrapp.addEventListener('mouseout', function (event) {
    if (event.target.closest('.active')) {
        event.target.style.opacity = 1;
    }
});

export default 'fifthSection';
