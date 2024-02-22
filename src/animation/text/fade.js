import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default class Fade {
	constructor() {
		this.el = document.querySelectorAll('[data-animation=fade]')
		this.init()
	}

	fadeIn() {
		this.el.forEach((el) => {
			this.words = el.querySelectorAll('.word')

			if (this.words.length === 0) return

			this.tl = gsap.timeline({
				paused: true,
			})
			this.tl.from(this.words, {
				opacity: 0,
				stagger: {
					amount: 0.8,
					from: 'random',
				},
				duration: 1,
				ease: 'sine.out',
			})

			ScrollTrigger.create({
				trigger: el,
				start: 'top 80%',
				end: 'bottom bottom',
				animation: this.tl,
				toggleActions: 'play none none reverse',
			})
		})
	}

	init() {
		this.fadeIn()
	}
}
