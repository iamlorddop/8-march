(checkAndRepaint)();
window.onresize = checkAndRepaint;

function checkAndRepaint() {
  if (window.innerHeight >= 700) {	
	document.addEventListener('mousemove', parallax)
  } else {
	document.addEventListener('scroll', parallax)
  }

}

function parallax(e) {
	this.querySelectorAll('.parallax').forEach(parallax => {
		const speed = parallax.getAttribute('data-speed')

		const x = (window.innerWidth - e.pageX * speed) / 100
		const y = (window.innerHeight - e.pageY * speed) / 100

		parallax.style.transform = `translateX(${x}px) translateY(${y}px)`
	})
}