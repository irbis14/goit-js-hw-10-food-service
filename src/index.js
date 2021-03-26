import './styles.css';
import menu from './menu.json';
import menuItemTemplate from './templates/menu-template.hbs';

const menuRef = document.querySelector('.js-menu');
const themeRef = document.querySelector('input[id="theme-switch-toggle"]');
const bodyRef = document.body;
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuTemplate = menu.map(item => menuItemTemplate(item)).join('');
menuRef.innerHTML = menuTemplate;

const theme = localStorage.getItem('theme');
bodyRef.classList.add(theme);

if (bodyRef.classList.contains(Theme.DARK)) {
    themeRef.checked = true
} if (bodyRef.classList.contains(Theme.LIGHT)) {
    themeRef.checked = false
};

function themeChange() {
    bodyRef.classList.add(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
    themeRef.checked === true ? bodyRef.classList.toggle(Theme.LIGHT) : bodyRef.classList.toggle(Theme.DARK);
    localStorage.setItem('theme', bodyRef.classList);
};

themeRef.addEventListener('click', themeChange);