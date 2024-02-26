/*
 * Main JS file for the project
 * This file is used to initialize the project and import the necessary modules
 */

/**
 * Utility functions
 */
import SmoothScroll from './utils/lenis'
import Split from './utils/split'

/**
 * Animation modules
 */
import IndexHover from './animation/indexhover'
import Preloader from './animation/preloader'
import pageTransition from './animation/transitionload'
import CardScroll from './animation/scroll/cardscroll'
import QuoteScroll from './animation/scroll/quotes'
import Line from './animation/line'

/**
 * Text animations
 */
import Slide from './animation/text/text'
import Fade from './animation/text/fade'
import Title from './animation/text/title'

/**
 * Random Message :D
 */

import hello from './hello'

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
		new SmoothScroll()
		new Split()
		new Slide()
		new Fade()
		new Title()
		new QuoteScroll()
		new Line()
		new pageTransition()
		this.initHover()
		this.initPreload()
		this.initCardScroll()
		hello()
	}
}

window.Webflow ||= []
window.Webflow.push(() => {
	new App()
})
