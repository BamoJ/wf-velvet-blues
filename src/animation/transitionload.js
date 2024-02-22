import gsap from 'gsap' // Import GSAP
import CustomEase from 'gsap/CustomEase' // Import CustomEase

gsap.registerPlugin(CustomEase) // Register CustomEase

export default class pageTransition {
	constructor() {
		this.init()

		document.querySelector('.t__wrap').classList.add('first')

		this.nextPageLink = ''
	}

	onClick() {
		this.link = document.querySelectorAll(
			'[data-link=trans]:not(.w--current)',
		)
		this.link.forEach((link) => {
			link.addEventListener('click', (e) => {
				e.preventDefault()
				this.nextPageLink = link.getAttribute('href')
				const xhr = new XMLHttpRequest()
				xhr.open('GET', this.nextPageLink, true)
				xhr.onreadystatechange = () => {
					if (xhr.readyState === 4 && xhr.status === 200) {
						const response = xhr.responseText
						const tempDiv = document.createElement('div')
						tempDiv.innerHTML = response
						const element = tempDiv.querySelector('.t__wrap')
						element.classList.add('second')
						document.querySelector('.main').appendChild(element)
						this.transition()
					}
				}
				xhr.send()
			})
		})
	}

	transition() {
		document.querySelector('html').classList.add('animating')
		this.whipe = document.querySelector('.t__wrap.second .img_whipe')
		this.img = document.querySelector(
			'.t__wrap.second [data-animation=t-whipe]',
		)
		this.smallTransEl = document.querySelectorAll(
			'.t__wrap.second [data-animation=trans-p]',
		)

		const tl = gsap.timeline({
			onComplete: this.updatePage.bind(this),
			paused: false,
		})

		tl.to(
			'.t__wrap.first',
			{
				scale: 0.97,
				duration: 1,
				ease: 'power1.out',
			},
			0,
		)
		tl.to(
			'.t__wrap.first',
			{
				opacity: 0,
				duration: 1,
				ease: 'sine.out',
			},
			0,
		)
		tl.to(
			'.t__wrap.first',
			{
				y: 100,
				duration: 1,
				ease: 'power1.out',
			},
			0,
		)
		tl.from(
			'.t__wrap.second',
			{
				y: '100svh',
				duration: 1.6,
				ease: 'expo.out',
			},
			'<+0.55',
		)
		tl.from(
			'.t__wrap.second [data-animation=head]',
			{
				yPercent: 110,
				duration: 1,
				ease: 'power4.easeOut',
				stagger: {
					each: 0.025,
				},
			},
			'<+0.35',
		)
		tl.from(
			'.t__wrap.second [data-animation=num]',
			{
				yPercent: 100,
				duration: 1,
				ease: 'power3.easeOut',
				stagger: {
					each: 0.03,
				},
			},
			'<',
		)
		if (this.smallTransEl.length > 0) {
			tl.from(
				this.smallTransEl,
				{
					yPercent: 100,
					duration: 1,
					ease: 'power3.easeOut',
					stagger: {
						each: 0.03,
					},
				},
				'<',
			)
		}
		if (this.whipe && this.img) {
			tl.fromTo(
				this.whipe,
				{
					height: '100%',
				},
				{
					height: '0%',
					duration: 1.8,
					ease: CustomEase.create(
						'custom',
						'M0,0 C0.084,0.61 0.131,0.712 0.2,0.8 0.284,0.908 0.374,1 1,1 ',
					),
				},
				'<',
			)
			tl.fromTo(
				this.img,
				{
					scale: 1.2,
				},
				{
					scale: 1,
					duration: 1,
					ease: 'power2.out',
				},
				'<',
			)
		}
	}

	updatePage() {
		window.location = this.nextPageLink
	}

	init() {
		this.onClick()
	}
}
