import Transition from './animation/transition'
import IndexHover from './animation/indexhover'
import Scroll from './utils/lenis'

import './styles/style.css'
class App {
	constructor() {
		this.init()
	}

	init() {
		new Transition()
		Scroll()
	}
}

new App()
