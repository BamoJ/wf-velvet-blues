import barba from '@barba/core'
import gsap from 'gsap'

export default class Transition {
	constructor() {
		this.init()
	}

	init() {
		barba.init({
			transitions: [
				{
					name: 'default-transition',
					leave() {
						console.log('leave')
					},
					enter() {
						console.log('enter')
					},
				},
			],
		})
	}
}
