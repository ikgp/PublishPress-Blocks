jQuery(document).ready(function ($) {
    $('.advgb-newsletter input.advgb-form-input').on('keydown', function (e) {
        if(e.which === 13) {
            e.preventDefault();
            return false;
        }
    });

    $('.advgb-newsletter form').submit(function (e) {
        e.preventDefault();
        var $thisForm = $(this).closest('.advgb-newsletter');
        var firstName = $(this).find('.advgb-form-input-fname').val();
        var lastName = $(this).find('.advgb-form-input-lname').val();
        var email = $(this).find('.advgb-form-input-email').val();
        var date = new Date();
        var submitDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear() + ' - ' + date.getHours() + ':' + date.getMinutes();

        if (typeof firstName !== "undefined") firstName = firstName.trim();
        if (typeof lastName !== "undefined") lastName = lastName.trim();
        if (typeof email !== "undefined") email = email.trim();

        if (firstName === '' || lastName === '' || email === '') {
            alert('You need to fill all fields!');
            return false;
        }

        $.ajax( {
            url: advgbNewsletter.ajax_url,
            type: "POST",
            data: {
                action: 'advgb_newsletter_save',
                f_name: firstName,
                l_name: lastName,
                email: email,
                submit_date: submitDate,
                captcha: typeof grecaptcha !== "undefined" ? grecaptcha.getResponse() : undefined
            },
            beforeSend: function () {
                $thisForm.find('.advgb-form-submit-wrapper').append('<div class="advgb-form-sending" />');
                $thisForm.find('.advgb-form-submit-success').remove();
            },
            success: function () {
                $thisForm.find('.advgb-form-sending').remove();
                var successText = $thisForm.find('.advgb-form-submit').data('success');
                successText = successText ? successText : 'Submitted with success!';
                $thisForm.append('<div class="advgb-form-submit-success">'+ successText +'</div>');
            },
            error: function ( jqxhr, textStatus, error ) {
                alert(textStatus + " : " + error + ' - ' + jqxhr.responseJSON);
                $thisForm.find('.advgb-form-sending').remove();
            }
        } )
    });
});