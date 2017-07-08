export default class Theme {
	constructor(availableThemes, defaultTheme) {
		this.availableThemes   = availableThemes;
		this.defaultTheme      = defaultTheme || availableThemes[0];
		this.stylesheetElement = null;
	}

	get name() {
		return localStorage.getItem('theme') || this.defaultTheme;
	}

	set name(value) {
		localStorage.setItem('theme', value);
	}

	setPrevTheme() {
		const themeNumber = this.availableThemes.indexOf(this.name);
		const nextThemeNumber = themeNumber - 1 < 0
			? this.availableThemes.length - 1
			: themeNumber - 1;

		this.name = this.availableThemes[nextThemeNumber];
	}

	setNextTheme() {
		const themeNumber = this.availableThemes.indexOf(this.name);
		const nextThemeNumber = themeNumber < 0 ||
		                        themeNumber + 1 >= this.availableThemes.length
			? 0
			: themeNumber + 1;

		this.name = this.availableThemes[nextThemeNumber];
	}

	bindStylesheet(stylesheetElement) {
		this.stylesheetElement = stylesheetElement;
	}

	bindSwitch(switchElement, mode = 'next', themeName) {
		switchElement.addEventListener('click', event => {
			switch (mode) {
			case 'next':
				this.setNextTheme();
				break;
			case 'prev':
				this.setPrevTheme();
				break;
			case 'name':
			default:
				if (this.availableThemes.includes(themeName))
					this.name = themeName;
			}

			if (this.stylesheetElement === null) {
				const link = document.createElement('link');

				link.id   = 'theme';
				link.rel  = 'stylesheet';
				link.href = 'styles/theme-' + this.name + '.css';

				document.getElementsByTagName('head')[0].appendChild(link);
				this.stylesheetElement = link;
			}

			this.stylesheetElement.href = 'styles/theme-' + this.name + '.css';
		});
	}
}
