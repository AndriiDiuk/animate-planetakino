const wrapperBlock = document.querySelector('.wrapper');

wrapperBlock.addEventListener('click', () => {
	tl.restart();
})

const tl = gsap.timeline({
	defaults: {
		duration: 0.75,
		ease: "Back.easeOut"
	}
})

tl.fromTo('.logo', { scale: 0 }, { scale: 1, ease: 'elastic.out(1.4,0.4)', duration: 1.5 })
tl.fromTo('#Vector_13', { scale: 0 }, { scale: 1 }, '<')
tl.fromTo('#Vector_12', { scale: 0 }, { scale: 1 }, '<50%')
tl.fromTo('#Vector_12', { y: 20, rotate: '0deg' }, { y: 0, rotate: '360deg', duration: 1.5 }, '<')
tl.to('#Vector_13', { scale: 0.1, x: 25, y: 26 }, '<50%')
tl.fromTo('#Vector_12', { scale: 0, x: 0, y: 0 }, { scale: 0.3, x: -50, y: 50 }, '<')
tl.to('#TXT', { opacity: 0, y: -10 }, '<')
tl.to('.logo__more-2', { display: "block", ease: 'elastic.out(1, 0.4)', delay: .1 }, '<50%')
tl.to('#Vector_13', { opacity: 0, duration: .2 })
tl.to('#Vector_12', { opacity: 0, duration: .2 }, '<')
tl.to('#Vector_13', { opacity: 1, })
tl.to('#Vector_12', { opacity: 1, }, '<')
tl.to('.logo__more-2', { opacity: 0, duration: .01 })
tl.to('.logo__more', { display: "block" }, '<')


