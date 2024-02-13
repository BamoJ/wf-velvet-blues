import barba from '@barba/core'
import gsap from 'gsap'
import resetWebflow from '../utils/resetwfix'

export default class Transition {
	constructor() {
		this.init()
	}

	init() {
		barba.init({
			transitions: [
				{
					name: 'default-transition',
					leave(data) {
						return gsap.to(data.current.container, {
							opacity: 0,
							duration: 0.5,
							ease: 'power2.out',
						})
					},
					enter(data) {
						return gsap.to(data.current.container, {
							opacity: 0,
							duration: 0.5,
							ease: 'power2.out',
						})
					},
				},
			],
		})

		// Add Barba.js hook to scroll to top after transition
		barba.hooks.after((data) => {
			window.scrollTo(0, 0) // Scroll to top of the page
			resetWebflow(data) // Reset Webflow interactions
		})
	}
}
