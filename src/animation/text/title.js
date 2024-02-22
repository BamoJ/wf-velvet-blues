import gsap from 'gsap'

export default class Title {
	constructor() {
		this.el = {
			title: document.querySelectorAll('[data-animation=title]'),
		}
	}
}
