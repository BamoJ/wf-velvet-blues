import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class CardScroll {
	constructor() {
		this.initCardScroll()
	}

	cardScroll() {
		this.cards = document.querySelectorAll(
			'.live__card-link:nth-child(n+2):nth-child(-n+3)',
		)
		this.firstCard = document.querySelector(
			'.live__card-link:nth-child(1)',
		)

		this.tl = gsap
			.timeline({
				scrollTrigger: {
					trigger: '.track',
					start: 'top top',
					end: 'bottom bottom',
					pin: true,
					scrub: 0.6,
					markers: true,
				},
			})
			.to(this.firstCard, {
				scale: 0.9,
				ease: 'none',
				duration: 1,
			})
			.from(
				this.cards,
				{
					y: '100%',
					ease: 'none',
					duration: 1,
					stagger: {
						each: 1,
					},
				},
				'<+0.45',
			)
			.to(
				this.cards,
				{
					scale: 0.9,
					ease: 'none',
					duration: 1,
					stagger: {
						each: 1,
					},
				},
				'<+0.75',
			)
	}

	initCardScroll() {
		this.cardScroll()
	}
}
