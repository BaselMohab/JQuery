$(document).ready(function() {
    $('.tab-links a').on('click', function(e) {
        e.preventDefault();
        
        let currentAttr = $(this).attr('href');
        
        $('.tab' + currentAttr).fadeIn(400).siblings().hide();
        
        $(this).parent('li').addClass('active').siblings().removeClass('active');
    });
});
