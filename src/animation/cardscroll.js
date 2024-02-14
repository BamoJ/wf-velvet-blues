import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class CardScroll {
	constructor() {
		this.initCardScroll()
	}

	cardScroll() {
		console.log('Card scroll initialized')
	}

	initCardScroll() {
		this.cardScroll()
	}
}
