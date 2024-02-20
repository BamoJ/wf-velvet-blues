import Scroll from './utils/lenis'
import CardScroll from './animation/cardscroll'
import IndexHover from './animation/indexhover'
import Preloader from './animation/preloader'
import Split from './utils/split'
import pageTransition from './animation/transitionload'
import './styles/style.css'

class App {
	constructor() {
		this.init()
	}

	initPreload() {
		const isFirstLoad = sessionStorage.getItem('first_load') === null
		const dataPage = document.body.getAttribute('data-page')
		const loader = document.querySelector('.intro__load')

		if (dataPage === 'index' && isFirstLoad) {
			sessionStorage.setItem('first_load', 'true')
			loader.style.display = 'block'
			new Preloader() // Show the preloader
		} else if (dataPage === 'index' && !isFirstLoad) {
			loader.style.display = 'none'
			return
		}
	}

	initHover() {
		const dataPage = document
			.querySelector('body')
			.getAttribute('data-page')

		if (dataPage === 'index') {
			new IndexHover()
		} else return
	}

	init() {
		new Split()
		// new CardScroll()
		Scroll()
		this.initHover()
		new pageTransition()
		this.initPreload()
	}
}

document.addEventListener('DOMContentLoaded', () => {
	new App()
})
