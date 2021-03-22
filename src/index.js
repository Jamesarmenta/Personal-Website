import "./styles.css";

const main = document.querySelector('main');

for (let i = main.children.length; i >= 0; i--) {
    main.appendChild(main.children[Math.random() * i | 0]);
}

function getRandomIntBetween(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

const createIntroTextNode = () => {
    const node = document.createElement('div');
    node.className = 'grad text';
    node.innerHTML = 'James&nbsp;Armenta is a software&nbsp;engineer and artist from San&nbsp;Diego,&nbsp;California';
    return node;
}

const createContactNode = () => {
    const node = document.createElement('div');
    node.className = 'grad text';
    node.innerHTML = '<a href="mailto:armentajames@gmail.com">Contact me</a>';
    return node;
}

const createInstagramNode = () => {
    const node = document.createElement('div');
    node.className = 'grad text';
    node.innerHTML = '<a href="https://www.instagram.com/jamesarmenta/">@jamesarmenta&#8599;</a>';
    return node;
}

const createFooterNode = () => {
    const node = document.createElement('div');
    node.className = 'grad text';
    const TEXT_OPTIONS = [
        'Thanks for stopping by',
        'Thank you thank you thank you',
        'That\'s all, folks',
        'See ya next time!',
        'You made it to the bottom!'
    ]
    node.innerHTML = TEXT_OPTIONS[getRandomIntBetween(0,TEXT_OPTIONS.length-1)];
    return node;
}


document.querySelectorAll(".text").forEach((el) => {
  el.style.paddingLeft = `${getRandomIntBetween(0, 33)}%`;
  el.style.paddingRight = `${getRandomIntBetween(0, 33)}%`;
});

document.querySelectorAll(".grad").forEach((el) => {
  el.style.paddingRight = `${getRandomIntBetween(0, 40)}%`;
  el.style.paddingLeft = `${getRandomIntBetween(0, 40)}%`;
  el.style.marginBottom = `${getRandomIntBetween(12, 36)}px`;
});

const imageNodes = document.querySelectorAll(".grad");

imageNodes.forEach((el, idx) => {
    if (idx === 0) {
        insertAfter(createIntroTextNode(), el);
    };

    if (idx === 2) {
        insertAfter(createContactNode(), el);
    };

    if (idx === 4) {
        insertAfter(createInstagramNode(), el);
    };

    if (idx === imageNodes.length - 1) {
        insertAfter(createFooterNode(), el);
    }
});
