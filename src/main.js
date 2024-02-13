import Transition from './animation/transition'
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
