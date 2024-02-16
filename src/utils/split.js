import SplitType from 'split-type'

export default class Split {
	constructor() {
		this.width = window.innerWidth
		this.initSplit()
	}

	splitText() {
		this.runSplit = () => {
			this.text = document.querySelectorAll('[data-stagger=text]')

			this.text.forEach((text) => {
				this.textContent = text.textContent

				this.split = new SplitType(this.text, {
					types: 'lines,words,chars',
					lineClass: 'lineChild',
				})

				this.textLine = document.querySelectorAll('.lineChild')

				this.textLine.forEach((line) => {
					this.lineContent = line.innerHTML
					line.innerHTML = ''
					line.innerHTML = `<span class="line_inner" style="display: block;">${this.lineContent}</span>`
				})
			})
		}

		this.runSplit()

		window.addEventListener('resize', () => {
			if (this.width !== window.innerWidth) {
				this.width = window.innerWidth
				this.split.revert()
				this.text.textContent = this.textContent
				this.runSplit()
			}
		})
	}

	initSplit() {
		this.splitText()
	}
}
