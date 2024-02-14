import gsap from 'gsap'

export default class IndexHover {
	constructor() {
		this.legends = document.querySelectorAll('.hero__legend-item')
		this.legendImgs = document.querySelectorAll('.img.legends_img')
		gsap.set(this.legendImgs, {
			height: '0%',
			transformOrigin: 'top',
		})

		this.initHover()
	}

	addEventListeners() {
		this.legends.forEach((legend, i) => {
			legend.addEventListener('mouseenter', () => {
				gsap.to(this.legendImgs[i], {
					height: '100%',
					duration: 0.5,
					ease: 'power2.out',
				})
			})

			legend.addEventListener('mouseleave', () => {
				gsap.to(this.legendImgs[i], {
					height: '0%',
					duration: 0.5,
					ease: 'power2.out',
				})
			})
		})
	}

	initHover() {
		this.addEventListeners()
	}
}
