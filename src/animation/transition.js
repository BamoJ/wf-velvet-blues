import barba from '@barba/core'
import gsap from 'gsap'
import resetWebflow from '../utils/resetwfix'
import IndexHover from './indexhover'

export default class Transition {
	constructor() {
		this.initBarba()
	}

	homePageLeaveAnimation(data) {
		return gsap.to(data.current.container, {
			opacity: 0,
			duration: 1,
			ease: 'power3.inOut',
		})

		// Add your GSAP animation for the Home page when leaving
	}

	homeEn(data) {
		gsap.from(data.next.container, {
			opacity: 0,
			duration: 1,
			ease: 'power3.inOut',
		})
	}

	initBarba() {
		const self = this
		// Initialize Barba.js
		barba.init({
			prevent: ({ href }) => href === window.location.href,
			transitions: [
				{
					name: 'home-transition',
					from: { namespace: ['home'] },
					to: { namespace: 'legend' },
					async leave(data) {
						await self.homePageLeaveAnimation(data)
					},
					async enter(data) {
						await self.homeEn(data)
					},
				},
				{
					name: 'legend-transition',
					from: { namespace: ['legend'] },
					to: { namespace: 'home' },
					async leave(data) {
						await self.homePageLeaveAnimation(data)
					},
					async enter(data) {
						await self.homeEn(data)
					},
				},
				{
					name: 'legend-to-transition',
					from: { namespace: ['legend'] },
					to: { namespace: 'legend' },
					async leave(data) {
						await self.homePageLeaveAnimation(data)
					},
					async enter(data) {
						await self.homeEn(data)
					},
				},
			],
		})

		// Add Barba.js hook to scroll to top after transition
		barba.hooks.after((data) => {
			window.scrollTo(0, 0) // Scroll to top of the page
			resetWebflow(data) // Reset Webflow interactions
			new IndexHover() // Reinitialize hover animations
		})
	}
}
