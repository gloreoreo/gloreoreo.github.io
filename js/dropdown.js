const container = $('.dropdown-menu')
const hamburger = $('.dropdown i')
$(document).on('touchend', (e) => {
  const hamburgerIsTarget = hamburger.is(e.target)
  if (hamburgerIsTarget) {
    container.toggle()
  } else if (!container.is(e.target) && !hamburgerIsTarget && container.has(e.target).length === 0) {
    container.hide()
  } 
})