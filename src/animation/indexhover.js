import gsap from 'gsap'

export default class IndexHover {
	constructor() {
		this.width = window.innerWidth
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
					duration: 0.75,
					ease: 'power2.out',
					overwrite: true,
				})
				gsap.to(this.legends[i].querySelectorAll(' .char'), {
					yPercent: -100,
					duration: 0.55,
					ease: 'power3.out',
					stagger: {
						each: 0.02,
						from: 'center',
					},
					overwrite: true,
				})
			})

			legend.addEventListener('mouseleave', () => {
				gsap.to(this.legendImgs[i], {
					height: '0%',
					duration: 0.5,
					ease: 'power2.out',
					overwrite: true,
				})
				gsap.to(this.legends[i].querySelectorAll(' .char'), {
					yPercent: 0,
					duration: 0.5,
					ease: 'power3.out',
					stagger: {
						each: 0.02,
						from: 'center',
					},
					overwrite: true,
				})
			})
		})
	}

	initHover() {
		this.addEventListeners()
	}
}
