import Lenis from '@studio-freight/lenis'

export default function Scroll() {
	const lenis = new Lenis({
		duration: 1.45,
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		smoothWheel: true,
		wheelMultiplier: 1,
		autoResize: true,
		touchMultiplier: 1,
	})

	const raf = (time) => {
		lenis.raf(time)
		requestAnimationFrame(raf)
	}

	requestAnimationFrame(raf)
}
