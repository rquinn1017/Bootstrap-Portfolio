

$(document).ready(function(){
    // $('.header').height($(window).height());
    $("#quizGame").on("click", function() {
        window.open('https://rquinn1017.github.io/Quiz_Game/')
        });

        $('#quizGame').hover(function() {
            $(this).css('cursor','pointer');
})

$("#pwGenerator").on("click", function() {
    window.open('https://rquinn1017.github.io/Password_Generator/')
    });

    $('#pwGenerator').hover(function() {
        $(this).css('cursor','pointer');
})

})