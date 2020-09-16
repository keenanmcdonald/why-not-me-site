$(window).on('scroll', function() {
    scrollTop = $(window).scrollTop()
    
    titleScrollOut(scrollTop)
    backgroundScrollIn(scrollTop)
    purchaseScrollIn(scrollTop)
    aboutScrollIn(scrollTop)
    highlightContact(scrollTop)
    hideArrow(scrollTop)
})

function hideArrow(scrollTop){
    const docTop = $('html').position().top

    if (scrollTop > docTop){
        $('.arrow').css('opacity', 0)
    }
    else{
        $('.arrow').css('opacity', 0.5)
    }
}

function titleScrollOut(scrollTop){
    const titleOpacity = 1 - Math.min(scrollTop / 500, 1) 
    $('div.hero-text-container').css("opacity", titleOpacity)
}

function backgroundScrollIn(scrollTop){
    let backgroundOpacity = Math.min(scrollTop / 500, 1)

    /*
    const aboutTop = $('#about').position().top
    const scrollBottom = scrollTop + $(window).height();

    if (scrollBottom >= aboutTop){
        backgroundOpacity = 1.5 + ((aboutTop - scrollBottom + 200) / 500)
    }
    */

    $('section.content').css("background-color", `rgb(26,26,26,${backgroundOpacity})`)
}

function purchaseScrollIn(scrollTop){
    const purchaseTop = $('#purchase').position().top
    const amount = Math.max((purchaseTop - scrollTop) / $(window).height(), 0)
    $('#purchase').css('opacity', 1.1-amount)
    $('img.cover').css('top', (Math.max(amount-0.3, 0)*100))
    $('img.cover').css('box-shadow', `-2px 2px 6px 0px rgba(0,0,0, ${1-(Math.min(0.2, amount)*3)})`);
    $('.description-container').css('left', (Math.max(amount-0.3, 0)*60))
}

function aboutScrollIn(scrollTop){
    const scrollBottom = scrollTop + $(window).height()
    const aboutBottom = $('#about').position().top + $('#about').height()
    const amount = Math.max((aboutBottom - scrollBottom) / $(window).height(), 0)
    $('#about').css('opacity', 1.1-amount)
    $('img.author-photo').css('top', (Math.max(amount-0.1, 0)*100))
    if(window. matchMedia("(min-width: 770px)"). matches){
        $('.about-text-container').css('right', (Math.max(amount-0.1, 0)*60))
    }
    $('.about-border').css('width', `${Math.min((1/amount*10), 70)}%`)
}

function highlightContact(scrollTop){
    const scrollBottom = scrollTop + $(window).height()
    const pageBottom = $('#contact').position().top + $('#contact').height()


    if (scrollBottom >= pageBottom){
        console.log(scrollBottom, pageBottom)
        $('div.contact').css('opacity', '100%')
    }
    else{
        $('div.contact').css('opacity', '70%')
    }
}

var docWidth = document.documentElement.offsetWidth;
[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);