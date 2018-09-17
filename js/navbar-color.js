const intro_section = $('.intro-section').offset().top
const project_section = $('.project-container').offset().top

$(document).scroll(() => {
    const scrollPos = $(document).scrollTop();
    if (scrollPos < project_section) {
        $('.navbar').css('background-color', $('.intro-section').css('background-color'))
        $('.navbar-brand a').addClass('white')
        $('.navigation .navigation-link').addClass('special')
        $('.navigation .active').addClass('special-active')
    } else {
        $('.navbar').css('background-color', 'white')
        $('.navbar-brand a').removeClass('white')
        $('.navbar-brand a').addClass('navbar-brand-color')
        $('.navigation .navigation-link').removeClass('special')
        $('.navigation .navigation-link').addClass('nav-link-color')
        $('.navigation .active').removeClass('special-active')
        $('.navigation .active').addClass('nav-link-active-color')
    }
})