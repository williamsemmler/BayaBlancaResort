$(document).ready(() => {

    $('.nav-item, i').hover(
        e => { $(e.target).toggleClass('hover') }
    )
    $('.imgRoom1, .imgRoom2, .imgRoom3').hover(
        e => { $(e.target).toggleClass('movimentoImgFundo')})


})