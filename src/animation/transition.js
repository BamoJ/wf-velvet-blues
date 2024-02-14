import barba from '@barba/core'
import gsap from 'gsap'
import resetWebflow from '../utils/resetwfix'
import IndexHover from './indexhover'

export default class Transition {
	constructor() {
		this.initBarba()
	}

	homeEnter() {
		const tl = gsap.timeline()
	}

	homeLeave() {
		const tl = gsap.timeline()
	}

	legendEnter() {
		const tl = gsap.timeline()
	}

	legendLeave() {
		const tl = gsap.timeline()
	}

	initBarba() {
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
			IndexHover() // Reinitialize hover animations
			window.scrollTo(0, 0) // Scroll to top of the page
			resetWebflow(data) // Reset Webflow interactions
		})
	}
}
