import gsap from 'gsap'
import Split from '../utils/split'
export default class IndexHover {
	constructor() {
		this.width = window.innerWidth
		this.legends = document.querySelectorAll('.hero__legend-item')
		this.legendImgs = document.querySelectorAll('.img.legends_img')
		gsap.set(this.legendImgs, {
			height: '0%',
			transformOrigin: 'top',
		})
		this.split = new Split()

		this.initHover()
	}

	addEventListeners() {
		this.legends.forEach((legend, i) => {
			legend.addEventListener('mouseenter', () => {
				gsap.to(this.legendImgs[i], {
					height: '100%',
					duration: 0.5,
					ease: 'power2.out',
					overwrite: true,
				})
				gsap.to(this.legends[i].querySelectorAll(' .char'), {
					y: '-100%',
					duration: 0.55,
					ease: 'power3.out',
					stagger: {
						each: 0.02,
					},
					overwrite: true,
				})
			})

			legend.addEventListener('mouseleave', () => {
				gsap.to(this.legendImgs[i], {
					height: '0%',
					duration: 0.5,
					ease: 'power2.out',
				})
				gsap.to(this.legends[i].querySelectorAll(' .char'), {
					y: '0%',
					duration: 0.5,
					ease: 'power3.out',
					stagger: 0.035,
					overwrite: true,
				})
			})
		})
	}

	initHover() {
		this.addEventListeners()
	}
}
