$(function () {
    AOS.init();
});
$('#humberger').click(function () {

    // If the clicked element has the rotate class, remove the rotate class from EVERY .panel-title>.state element
    if ($('#mobile').hasClass('hidden')) {
        $('#mobile').removeClass('hidden');
    } else {
        $('#mobile').addClass('hidden');
    }
});
$('.greeting').click(function () {
    // If the clicked element has the rotate class, remove the rotate class from EVERY .panel-title>.state element
    if ($('#modal').hasClass('hidden')) {
        $('#modal').removeClass('hidden');
    } else {
        $('#modal').addClass('hidden');
    }
});
