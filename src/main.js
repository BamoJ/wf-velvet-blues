import Scroll from './utils/lenis'
import CardScroll from './animation/cardscroll'
import IndexHover from './animation/indexhover'
import Preloader from './animation/preloader'
import Split from './utils/split'
import PageTransition from './animation/transitionload'

import './styles/style.css'
class App {
	constructor() {
		this.init()
	}

	initLoadTrans() {
		const isFirstLoad = sessionStorage.getItem('first_load') === null
		const dataPage = document
			.querySelector('body')
			.getAttribute('data-page')
		const loader = document.querySelector('.intro__load')
		const transition = document.querySelector('.transition')

		if (dataPage === 'index') {
			if (isFirstLoad && dataPage) {
				sessionStorage.setItem('first_load', 'true')
				loader.style.display = 'block'
				transition.style.display = 'none'
				new Preloader() // Show the preloader
				new PageTransition()
			} else {
				transition.style.display = 'block'
				loader.style.display = 'none'
				new PageTransition()
			}
		} else if (!isFirstLoad) {
			transition.style.display = 'block'
			new PageTransition()
		} else {
			transition.style.display = 'block' // Display the transition element
			new PageTransition()
		}
	}

	init() {
		new Split()
		new CardScroll()
		new Scroll()
		this.initLoadTrans()

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
