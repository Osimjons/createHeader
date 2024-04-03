'use strict';
document.body.style.backgroundColor = '#E5FF76';
document.body.style.fontFamily = 'Inter';

const menuItemList = ['Guides', 'Features', 'Pricing', 'Support', 'Changelog'];

const generateEl = (tagName, className) => {
  let newEl = document.createElement(tagName);
  newEl.classList.add(className);
  return newEl;
};

const addEl = (tagname, toPlace) => {
  toPlace.append(tagname);
};

const divContainer = generateEl('div', 'container');
document.body.append(divContainer);

// создаем Блок
const nav = generateEl('nav', 'header');
nav.style.maxWidth = '1200px';
nav.style.margin = 'auto';
nav.style.display = 'flex';
nav.style.justifyContent = 'space-between';
nav.style.alignItems = 'center';

addEl(nav, divContainer);

const logo = generateEl('div', 'header__logo');
logo.style.flexGrow = '1';
logo.style.cursor = 'pointer';
addEl(logo, nav);
const logoImg = generateEl('img', 'header__logo-img');
logoImg.src = './img/logo.svg';
logoImg.alt = 'logo';
addEl(logoImg, logo);

const menu = generateEl('div', 'header__menu');
addEl(menu, nav);
const menuList = generateEl('ul', 'header__list');
menuList.style.display = 'flex';
menuList.style.borderRight = '2px solid #C6DF5D';

addEl(menuList, menu);

for (let i = 0; i < menuItemList.length; i++) {
  let menuItem = generateEl('li', 'header__item');
  menuItem.style.listStyle = 'none';
  menuItem.style.padding = '10px 12px';
  menuItem.style.fontSize = '18px';
  menuItem.style.lineHeight = '1.3';
  menuItem.style.cursor = 'pointer';
  menuItemList[0];
  console.log('menuItemList: ', menuItemList);
  menuItem.innerText = menuItemList[i];
  // menuItemList[i]=toUpperCase()!!!
  addEl(menuItem, menuList);
}

const actions = generateEl('div', 'header__actions');
addEl(actions, nav);
const singIn = generateEl('button', 'header__actions-singin');
singIn.innerText = 'Sing in';
singIn.style.padding = '10px 12px';
singIn.style.fontSize = '18px';
singIn.style.cursor = 'pointer';
singIn.style.backgroundColor = 'transparent';
singIn.style.border = 'none';

addEl(singIn, actions);

const singUp = generateEl('a', 'header__actions-singup');
singUp.innerText = 'Sing up';
singUp.style.padding = '10px 24px';
singUp.style.backgroundColor = '#242424';
singUp.style.color = '#F0F0F0';
singUp.style.borderRadius = '40px';
singUp.style.cursor = 'pointer';
addEl(singUp, actions);
