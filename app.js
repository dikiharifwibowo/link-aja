$('#humberger').click(function () {
    // If the clicked element has the rotate class, remove the rotate class from EVERY .panel-title>.state element
    if ($('#mobile').hasClass('hidden')) {
        $('#mobile').removeClass('hidden');
    } else {
        $('#mobile').addClass('hidden');
    }
});

