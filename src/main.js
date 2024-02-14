import Scroll from './utils/lenis'
import CardScroll from './animation/cardscroll'
import Transition from './animation/transition'

import './styles/style.css'
class App {
	constructor() {
		this.init()
	}

	init() {
		new Transition()
		new CardScroll()
		Scroll()
	}
}

new App()
