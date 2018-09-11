$(document).mouseup(function(e) {
    const container = $('.dropdown-menu')
    const hamburger = $('.dropdown i')

    if (hamburger.is(e.target)) {
        container.toggle()
    } else if (!container.is(e.target) && !hamburger.is(e.target) && container.has(e.target).length === 0) {
        container.hide()
    }
})