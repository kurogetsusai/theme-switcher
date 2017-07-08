import Theme from './lib/theme.js';

const theme = new Theme(['light', 'dark', 'cyan']);
theme.bindStylesheet(document.getElementById('theme'));
theme.bindSwitch(document.getElementById('theme-switch-prev'), 'prev');
theme.bindSwitch(document.getElementById('theme-switch-next'), 'next');
theme.bindSwitch(document.getElementById('theme-switch-light'), 'name', 'light');
theme.bindSwitch(document.getElementById('theme-switch-dark'), 'name', 'dark');
theme.bindSwitch(document.getElementById('theme-switch-cyan'), 'name', 'cyan');

