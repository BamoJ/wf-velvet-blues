import gsap from 'gsap'

export default function IndexHover() {
	const legends = document.querySelectorAll('.hero__legend-item')
	const legendImgs = document.querySelectorAll('.img.legends_img')
	gsap.set(legendImgs, { height: '0%', transformOrigin: 'top' })

	legends.forEach((legend, i) => {
		legend.addEventListener('mouseenter', () => {
			gsap.to(legendImgs[i], {
				height: '100%',
				duration: 0.5,
				ease: 'power2.out',
			})
		})

		legend.addEventListener('mouseleave', () => {
			gsap.to(legendImgs[i], {
				height: '0%',
				duration: 0.5,
				ease: 'power2.out',
			})
		})
	})
}
