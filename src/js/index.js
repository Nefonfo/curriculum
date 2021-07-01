import '../css/index.css';
import SwitchMode from './utils/switchMode';
import ButtonMenu from './utils/buttonMenu';

document.addEventListener('DOMContentLoaded', () => {
    const switch_mode = new SwitchMode(document.documentElement, '.switch-mode','dark', 'nfDarkMode');
    switch_mode.init();
    new ButtonMenu(
        document.querySelector('.hamburger'),
        'is-active',
        document.querySelector('#menu-offcanvas'),
        'hidden',
        document.querySelector('#menu-offcanvas-close')
    );
});