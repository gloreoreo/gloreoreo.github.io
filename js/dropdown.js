// Ref: https://gist.github.com/AndrewBarba/5477454
jQuery.fn.touchClick = function(fnc)
{
    if (fnc) {
        this.bind("touchend click",function(event){
            event.stopPropagation();
            event.preventDefault();
            if(event.handled !== true) {
                event.handled = true;
                return fnc.call(this,event);
            } else {
                return false;
            }
        });
    } else {
        this.trigger("click");
    }
}

const container = $('.dropdown-menu')
const hamburger = $('.dropdown i')
$(document).touchClick((e) => {
  const hamburgerIsTarget = hamburger.is(e.target)
  if (hamburgerIsTarget) {
    console.log("hamburger")
    container.toggle()
  } else if (!container.is(e.target) && !hamburgerIsTarget && container.has(e.target).length === 0) {
    container.hide()
  } 
})