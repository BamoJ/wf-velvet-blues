import gsap from 'gsap'
import { Flip } from 'gsap/Flip'
import SplitType from 'split-type'
gsap.registerPlugin(Flip)

export default class Preloader {
	constructor() {
		this.state = Flip.getState('.intro__img, .intro__img-wrap')
		this.wrap = document.querySelector('.intro__img-wrap')
		this.imgs = document.querySelectorAll('.intro__img .img')
		gsap.set(this.imgs, {
			transformOrigin: 'bottom bottom',
		})
		this.init()
	}

	flip() {
		this.wrap.classList.toggle('flex')

		Flip.from(this.state, {
			duration: 1.5,
			ease: 'power3.inOut',
			scale: true,
			absolute: true,
			stagger: 0.035,
		})
			.to(
				'.whipe',
				{
					duration: 0.5,
					ease: 'power4.easeOut',
					height: '100%',
					stagger: {
						each: 0.05,
					},
				},
				'>-0.1',
			)
			.to(
				'.intro__load',
				{
					yPercent: -100,
					duration: 1.5,
					ease: 'expo.inOut',
				},
				'>-0.3',
			)
	}

	init() {
		this.tl = gsap
			.timeline({})

			.from(this.imgs, {
				duration: 0.4,
				ease: 'power3.easeOut',
				scaleY: 0,
				stagger: {
					each: 0.3,
					from: 'start',
				},
			})
			.add(() => {
				this.flip()
			}, '>')
	}
}
