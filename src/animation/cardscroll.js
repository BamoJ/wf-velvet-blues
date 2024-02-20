import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class CardScroll {
	constructor() {
		this.initCardScroll()
	}

	cardScroll() {
		this.trigger = document.querySelector('.card-scroll')
		this.cards = document.querySelectorAll('.card-scroll__card')
		this.tl = gsap.timeline(
			{
				scrollTrigger: {
					trigger: this.trigger,
					start: 'top top',
					end: 'bottom top',
					scrub: 1,
					toggleActions: 'play none none reverse',
				},
			},

			tl.from(this.cards, {
				xPercent: -100,
				opacity: 0,
				duration: 1,
				stagger: 0.2,
			}),
		)
	}

	initCardScroll() {
		this.cardScroll()
	}
}
