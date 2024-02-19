import gsap from 'gsap' // Import GSAP

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

		const tl = gsap.timeline({
			onComplete: this.updatePage.bind(this),
		})

		tl.to(
			'.t__wrap.first',
			{
				scale: 0.95,
				duration: 1,
				ease: 'power1.out',
			},
			0,
		)
		tl.to(
			'.t__wrap.first',
			{
				opacity: 0.1,
				duration: 1,
				ease: 'power1.out',
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
				duration: 1.75,
				ease: 'expo.out',
			},
			'<+0.35',
		)

		tl.from(
			'.t__wrap.second [data-animation=head]',
			{
				yPercent: 110,
				duration: 1,
				ease: 'power4.easeOut',
				stagger: {
					each: 0.03,
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
		tl.fromTo(
			'.t__wrap.second .img_whipe',
			{
				height: 200,
			},
			{
				height: 0,
				duration: 1.5,
				ease: 'power3.out',
			},
			'<',
		)
	}

	updatePage() {
		window.location = this.nextPageLink
	}

	init() {
		this.onClick()
	}
}
