import animation from './animation'
import './styles/style.css'
import GLImage from './webgl'
class App {
	constructor() {
		this.initGLImage()
	}

	initGLImage() {
		const glElement = document.getElementById('glcanvas')
		if (!glElement) {
			return
		}
		this.glImage = new GLImage({
			dom: glElement,
		})
	}

	initAnimation() {
		animation()
	}
}

new App()
