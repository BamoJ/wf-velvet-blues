import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class QuoteScroll {
	constructor() {
		this.el = document.querySelectorAll("[data-animation='quotes']")

		this.init()
	}

	quoteScroll() {
		this.el.forEach((el) => {
			gsap.set(el, {
				perspective: 1000,
				perspectiveOrigin: '100% 50%',
			})

			this.quote = el.querySelectorAll('.word')
			this.tl = gsap.timeline({
				paused: true,
			})
			this.tl.from(this.quote, {
				opacity: 0.1,
				duration: 2,
				ease: 'sine.out',
				stagger: 0.6,
			})

			ScrollTrigger.create({
				pin: true,
				pinSpacing: true,
				trigger: '.quotes__wrapper',
				scrub: 1,
				start: 'top 10%',
				end: '+=100%',
				animation: this.tl,
				toggleActions: 'play none none reverse',
			})
		})
	}
	destroy() {
		ScrollTrigger.getAll().forEach((trigger) => {
			trigger.kill()
		})
	}

	onResize() {
		this.destroy()
		this.init()
	}

	init() {
		this.quoteScroll()
	}
}
