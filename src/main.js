import Scroll from './utils/lenis'
import CardScroll from './animation/cardscroll'
import IndexHover from './animation/indexhover'
import Preloader from './animation/preloader'

import './styles/style.css'
class App {
	constructor() {
		this.init()
	}

	init() {
		new Preloader()
		new CardScroll()
		new Scroll()

		const dataPage = document
			.querySelector('body')
			.getAttribute('data-page')
		if (dataPage === 'index') {
			new IndexHover()
		} else {
			return
		}
	}
}

document.addEventListener('DOMContentLoaded', () => {
	new App()
})
