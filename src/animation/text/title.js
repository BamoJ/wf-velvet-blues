import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default class Title {
	constructor() {
		this.el = document.querySelectorAll('[data-animation=title]')
		this.init()
	}

	titleIn() {
		this.el.forEach((el) => {
			this.title = el.querySelectorAll('.char')

			if (this.title.length === 0) return

			this.tl = gsap.timeline({
				paused: true,
			})
			this.tl.from(this.title, {
				yPercent: 100,
				duration: 1.25,
				stagger: {
					each: 0.035,
					from: 'start',
				},
				ease: 'power3.out',
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
		this.titleIn()
	}
}
