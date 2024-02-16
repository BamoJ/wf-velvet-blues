import SplitType from 'split-type'

export default class Split {
	constructor() {
		this.width = window.innerWidth
		this.initSplit()
	}

	splitText() {
		this.runSplit = () => {
			this.split = new SplitType('[data-stagger=text]', {
				types: 'lines,words,chars',
			})
		}
		this.runSplit()
	}

	resize() {
		window.addEventListener('resize', () => {
			if (this.width !== window.innerWidth) {
				this.width = window.innerWidth
				this.split.revert()
				this.runSplit()
			}
		})
	}

	initSplit() {
		this.splitText()
		this.resize()
	}
}
