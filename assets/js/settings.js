jQuery(document).ready(function ($) {
    $('#gallery_lightbox').on('change', function () {
        if (this.checked) {
            $('#gallery_lightbox_caption_wrapper').removeClass('hidden-item');
        } else {
            $('#gallery_lightbox_caption_wrapper').addClass('hidden-item');
        }
    });

    $('#gbadv-config-close').click(function () {
        $('#gbadv-config-success').slideUp();
    });

    if ($('#gallery_lightbox').is(':checked')) {
        $('#gallery_lightbox_caption_wrapper').removeClass('hidden-item');
    }

    $('.gbadv_qtip').qtip({
        content: {
            attr: 'alt'
        },
        position: {
            my: 'top left',
            at: 'bottom bottom'
        },
        style: {
            tip: {
                corner: true
            },
            classes: 'wpsetips_qtip'
        },
        show: 'hover',
        hide: {
            fixed: true,
            delay: 10
        }
    });
});