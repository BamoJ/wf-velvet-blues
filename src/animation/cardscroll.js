import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { css } from 'jquery'

gsap.registerPlugin(ScrollTrigger)

export default class CardScroll {
	constructor() {
		this.cards = document.querySelectorAll('.live__card-link')
		this.cardHeight = ''
		this.animation = gsap.timeline()
		this.initCardScroll()
	}

	cardScroll() {
		this.animation.clear()
		this.cardHeight = this.cards[0].offsetHeight

		this.cards.forEach((card, index) => {
			if (index > 0) {
				gsap.set(card, { y: this.cardHeight * index })

				this.animation.to(card, {
					y: 0,
					duration: index * 0.25,
					ease: 'none',
				})
			}
		})

		ScrollTrigger.create({
			trigger: '.track',
			start: 'top top',
			end: 'bottom bottom',
			pin: true,
			scrub: true,
			animation: this.animation,
			invalidateOnRefresh: true,
			markers: true,
		})
	}

	initCardScroll() {
		this.cardScroll()
	}
}
