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
			this.tl = gsap
				.timeline({
					paused: true,
					onComplete: () => {
						this.destroy()
					},
				})
				.from(el, {
					width: 0,
					duration: 2,
					ease: 'expo.out',
				})

			ScrollTrigger.create({
				trigger: el,
				start: 'top 90%',
				end: 'bottom bottom',
				animation: this.tl,
				toggleActions: 'play none none none',
			})
		})
	}

	destroy() {
		this.el.forEach((el) => {
			ScrollTrigger.getAll(el).kill()
		})
	}

	resize() {
		this.destroy()
		this.init()
	}

	init() {
		this.lineIn()
	}
}
