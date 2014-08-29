$(function () {
    $('#images').exposure({ controlsTarget: '.exbImgnav',
	dataTarget : '.captioncontainer',
        showThumbs: false,
        controls: { prevNext: true, pageNumbers: false, firstLast: false },
        onImage: function (image, thumb) {
            $('.exposureWrapper > .exposureLastImage').stop().fadeOut(500, function () {
                $(this).remove();
            });
            image.hide().stop().fadeIn(1000);
        }
    });
});