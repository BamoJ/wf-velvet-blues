// Clone collection items
$('.album_item').each(function (index) {
	let parent = $(this).parent()
	$(this).clone().addClass('cloned').appendTo(parent)
})

// Create timeline
let tl = gsap.timeline({
	scrollTrigger: {
		trigger: '.sticky-wrapper',
		start: 'top 100%',
		end: 'bottom -69%',
		scrub: 3,
	},
})
tl.to('.album_item', {
	y: '0%',
	ease: 'none',
	duration: 1,
	stagger: 1,
})
tl.to(
	'.album_item',
	{ y: '-70%', scale: 0.4, ease: 'none', duration: 3, stagger: 1 },
	1,
)
tl.to(
	'.album_item',
	{ opacity: 0, ease: 'none', duration: 0.4, stagger: 1 },
	3.6,
)
