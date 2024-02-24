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
				yPercent: 100,
				duration: 1,
				ease: 'power1.out',
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
		ScrollTrigger.getAll().forEach((trigger) => {
			trigger.kill()
		})
	}

	onResize() {
		this.destroy()
		this.init()
	}

	init() {
		this.slideIn()
	}
}
