import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default class Slide {
	constructor() {
		this.el = document.querySelectorAll('[data-animation=slide]')
		this.init()
	}

	slideIn() {
		this.el.forEach((el) => {
			this.lineWords = el.querySelectorAll('.line_inner')

			if (this.lineWords.length === 0) return

			this.tl = gsap.timeline({
				paused: true,
			})
			this.tl.from(this.lineWords, {
				y: 100,
				duration: 2,
				ease: 'power3.out',
			})

			ScrollTrigger.create({
				trigger: el,
				start: 'top 100%',
				end: 'bottom bottom',
				animation: this.tl,
				toggleActions: 'play none none reverse',
			})
		})
	}

	init() {
		this.slideIn()
	}
}
