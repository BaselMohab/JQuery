$(document).ready(function() {
    let modal = $('#galleryModal');
    let modalImg = $('#modalImage');
    let currentImgIndex = 1;
    let images = $('.gallery-img');
    
    images.click(function() {
        currentImgIndex = images.index(this);
        openModal($(this).attr('src'));
    });

    function openModal(src) {
        modal.show();
        modalImg.attr('src', src);
    }

    function closeModal() {
        modal.hide();
    }

    $('.close').click(function() {
        closeModal();
    });

    $('.next').click(function() {
        currentImgIndex = (currentImgIndex + 1) % images.length;
        modalImg.attr('src', images.eq(currentImgIndex).attr('src'));
    });

    $('.prev').click(function() {
        currentImgIndex = (currentImgIndex - 1 + images.length) % images.length;
        modalImg.attr('src', images.eq(currentImgIndex).attr('src'));
    });

    $(document).keydown(function(e) {
        if (e.key === "Escape") {
            closeModal();
        } else if (e.key === "ArrowRight") {
            $('.next').click();
        } else if (e.key === "ArrowLeft") {
            $('.prev').click();
        }
    });

    modal.click(function(event) {
        if ($(event.target).is(modal)) {
            closeModal();
    }
    });
});