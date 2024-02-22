import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default class Line {
	constructor() {
		this.el = document.querySelectorAll('[data-animation=line]')
		this.init()
	}

	lineIn() {
		this.el.forEach((el) => {
			if (this.el === 0) return
			this.tl = gsap.timeline({
				paused: true,
			})
			this.tl.from(el, {
				width: 0,
				duration: 1.5,
				ease: 'power3.inOut',
			})

			ScrollTrigger.create({
				trigger: el,
				start: 'top 90%',
				end: 'bottom bottom',
				animation: this.tl,
				toggleActions: 'play none none reverse',
			})
		})
	}

	init() {
		this.lineIn()
	}
}
