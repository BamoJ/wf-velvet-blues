import gsap from 'gsap'
import { Flip } from 'gsap/Flip'
gsap.registerPlugin(Flip)

export default class Preloader {
	constructor() {
		this.state = Flip.getState('.intro__img, .intro__img-wrap')
		this.wrap = document.querySelector('.intro__img-wrap')
		this.imgs = document.querySelectorAll('.intro__img .img')
		this.heroLink = document.querySelectorAll('[data-animation=head]')
		this.heroNum = document.querySelectorAll('[data-animation=num]')
		this.navItems = document.querySelectorAll('[data-animation=nav]')

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
			stagger: 0.04,
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
			.from(
				this.heroLink,
				{
					yPercent: 100,
					duration: 0.8,
					ease: 'power4.easeOut',
					stagger: {
						each: 0.03,
					},
				},
				'>-0.65',
			)
			.from(
				this.heroNum,
				{
					yPercent: 100,
					duration: 1,
					ease: 'power2.easeOut',
					stagger: {
						each: 0.03,
					},
				},
				'<',
			)
			.from(
				this.navItems,
				{
					yPercent: 105,
					duration: 1,
					ease: 'power2.easeOut',
					stagger: {
						each: 0.2,
					},
				},
				'<+.3',
			)
			.from(
				'[data-el-navline]',
				{
					width: '0%',
					duration: 1.8,
					ease: 'power3.inOut',
				},
				'<-.2',
			)
			.from(
				'.hero__small-p .line_inner',
				{
					yPercent: 105,
					duration: 1,
					ease: 'power2.easeOut',
					stagger: {
						each: 0.2,
					},
				},
				'<+.2',
			)
			.from(
				'.hero__a',
				{
					autoAlpha: 0,
					duration: 1.5,
					ease: 'sine.easeOut',
				},
				'<',
			)
			.from(
				'.asterix',
				{
					autoAlpha: 0,
					duration: 1.5,
					ease: 'sine.easeOut',
				},
				'<',
			)
			.from(
				'.h1__small',
				{
					yPercent: 100,
					duration: 1,
					ease: 'power2.easeOut',
					stagger: {
						each: 0.05,
					},
				},
				'<',
			)
	}

	init() {
		this.tl = gsap
			.timeline({})

			.from(this.imgs, {
				duration: 0.4,
				yPercent: 100,
				stagger: {
					each: 0.3,
					from: 'start',
					ease: 'power1.easeOut',
				},
			})
			.add(() => {
				this.flip()
			}, '>')
	}
}
