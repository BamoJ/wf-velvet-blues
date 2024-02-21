import Scroll from './utils/lenis'
import IndexHover from './animation/indexhover'
import Preloader from './animation/preloader'
import Split from './utils/split'
import pageTransition from './animation/transitionload'
import CardScroll from './animation/cardscroll'
import TextFade from './animation/text'
import './styles/style.css'

class App {
	constructor() {
		this.dataPage = document.body.getAttribute('data-page')
		this.init()
	}

	initPreload() {
		const isFirstLoad = sessionStorage.getItem('first_load') === null
		const loader = document.querySelector('.intro__load')

		if (this.dataPage === 'index' && isFirstLoad) {
			sessionStorage.setItem('first_load', 'true')
			loader.style.display = 'block'
			new Preloader() // Show the preloader
		} else if (this.dataPage === 'index' && !isFirstLoad) {
			loader.style.display = 'none'
			return
		}
	}

	initHover() {
		if (this.dataPage === 'index') {
			new IndexHover()
		} else return
	}

	initCardScroll() {
		if (this.dataPage === 'legend') {
			new CardScroll()
		} else return
	}

	init() {
		new Split()
		new TextFade()
		Scroll()
		this.initHover()
		new pageTransition()
		this.initPreload()
		this.initCardScroll()
	}
}

document.addEventListener('DOMContentLoaded', () => {
	new App()
})
