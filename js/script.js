$(document).ready(function() {

    /* code to tick items off the list using .on() */
    $('ul').on('click', 'i.fa.fa-check-circle', function(){
        console.log("check clicked");
        $(this).prev().prev().css("text-decoration", "line-through");
        $(this).prev().prev().css("color", "#99CC33");
        $(this).remove();
    });

    /* code to add new items to the list */
    $('i.fa.fa-plus-circle').click(function(){
        console.log("plus clicked");
        var x = $('.input-box').val();
        if (x == "") {
            x = "N/A";
        }
        $('.list ul').append("<li><p>" + x + "</p><i class='fa fa-minus-circle fa-2x'></i><i class='fa fa-check-circle fa-2x'></i></li>");
        $('.input-box').val("");

        /* code to remove items, inserted into the insert function, to be able to select newly added items using :last */

        $('ul i.fa.fa-minus-circle:last').click(function(){
            $(this).parent().remove();
        });

    });

    /* code to remove all */
    $('.remove-button').on('click', function(){
        console.log('remove all clicked');
        $('.list ul li').remove();
    });


});
