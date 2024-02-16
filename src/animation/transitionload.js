import gsap from 'gsap'
import SplitType from 'split-type'
export default class PageTransition {
	constructor() {
		this.initTransition()
		this.initLinkClick()
		this.initBackButton()
	}

	initTransition() {
		const transitionIn = gsap.timeline({
			onComplete: () => this.hideTransition(),
		})

		transitionIn.to('.transition', {
			yPercent: 100,
			duration: 1.35,
			ease: 'power4.inOut',
		})
	}

	hideTransition() {
		document.querySelector('.transition').style.display = 'none'
	}

	initLinkClick() {
		document.querySelectorAll('a').forEach((link) => {
			link.addEventListener('click', (e) =>
				this.handleLinkClick(e, link),
			)
		})
	}

	handleLinkClick(event, link) {
		const hostname = new URL(link.href).hostname
		if (
			hostname === window.location.host &&
			!link.href.includes('#') &&
			link.getAttribute('target') !== '_blank'
		) {
			event.preventDefault()
			const loadTransition = document.querySelector('.transition')
			loadTransition.style.display = 'block'
			const destination = link.href

			const transitionOut = gsap.timeline({
				onComplete: () => this.navigateTo(destination),
			})

			transitionOut.fromTo(
				'.transition',
				{ yPercent: -100 },
				{
					yPercent: 0,
					duration: 1.5,
					ease: 'power4.inOut',
				},
			)
		}
	}

	navigateTo(destination) {
		window.location = destination
	}

	initBackButton() {
		window.addEventListener('pageshow', (event) =>
			this.handleBackButton(event),
		)
	}

	handleBackButton(event) {
		if (event.persisted) {
			window.location.reload()
		}
	}
}
