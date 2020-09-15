
$(window).on('scroll', function() {
    scrollTop = $(window).scrollTop()
    
    titleScrollOut(scrollTop)
    backgroundScrollIn(scrollTop)
    purchaseScrollIn(scrollTop)
    aboutScrollIn(scrollTop)
})


function titleScrollOut(scrollTop){
    const titleOpacity = 1 - Math.min(scrollTop / 500, 1) 
    $('div.hero-text-container').css("opacity", titleOpacity)
}

function backgroundScrollIn(scrollTop){
    let backgroundOpacity = Math.min(scrollTop / 500, 1)

    
    const aboutTop = $('#about').position().top
    const scrollBottom = scrollTop + $(window).height();

    if (scrollBottom >= aboutTop){
        backgroundOpacity = 1.5 + ((aboutTop - scrollBottom + 200) / 500)
    }
    

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
    const aboutTop = $('#about').position().top
    const amount = Math.max((aboutTop - scrollTop) / $(window).height(), 0)
    $('#about').css('opacity', 1.1-amount)
    $('img.author-photo').css('top', (Math.max(amount-0.3, 0)*100))
    $('.about-text-container').css('right', (Math.max(amount-0.3, 0)*60))
}
