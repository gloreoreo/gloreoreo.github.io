/* Ref: https://stackoverflow.com/questions/22015908/onclick-not-working-on-mobile-touch/22015946#22015946 */
const container = $('.dropdown-menu')
const hamburger = $('.dropdown i')
$(document).on('click touch', (e) => {
  e.stopPropagation()
  e.preventDefault()

  const hamburgerIsTarget = hamburger.is(e.target)
  if (hamburgerIsTarget) {
    container.toggle()
  } else if (!container.is(e.target) && !hamburgerIsTarget && container.has(e.target).length === 0) {
    container.hide()
  } 
})