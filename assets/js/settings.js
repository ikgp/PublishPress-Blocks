jQuery(document).ready(function ($) {
    // Show/hide the images caption option
    $('#gallery_lightbox').on('change', function () {
        if (this.checked) {
            $('#gallery_lightbox_caption_wrapper').removeClass('hidden-item');
        } else {
            $('#gallery_lightbox_caption_wrapper').addClass('hidden-item');
        }
    });

    if ($('#gallery_lightbox').is(':checked')) {
        $('#gallery_lightbox_caption_wrapper').removeClass('hidden-item');
    }

    $('#advgb-config-close').click(function () {
        $('#advgb-config-success').slideUp();
    });

    $('.advgb_qtip').qtip({
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
            classes: 'advgb_qtip'
        },
        show: 'hover',
        hide: {
            fixed: true,
            delay: 10
        }
    });

    $('.minicolors-input').minicolors('settings', {
        change: function() {
            jQuery(this).trigger('change');
        },
        hide: function () {
            saveCustomStyleChanges();
        }
    }).attr('maxlength', '7');

    // Function for Custom Style tab
    initCustomStyleMenu();

    function initCustomStyleMenu() {
        // Add new custom style
        (initCustomStyleNew = function () {
            $('#mybootstrap a.advgb-customstyles-new').unbind('click').click(function (e) {
                that = this;
                $.ajax({
                    url: ajaxurl,
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        action: 'advgb_custom_styles_ajax',
                        task: 'new'
                    },
                    success: function (res, stt) {
                        if (stt === 'success') {
                            $(that).parent().before('<li class="advgb-customstyles-items" data-id-customstyle="' + res.id + '"><a><i class="advgbicon-quill"></i> <span class="advgb-customstyles-items-title">' + res.title + '</span></a><a class="copy"><i class="advgbicon-copy"></i></a><a class="trash"><i class="advgbicon-trash"></i></a><ul style="margin-left: 30px"><li class="advgb-customstyles-items-class">('+ res.name +')</li></ul></li>');
                            initCustomStyleMenu();
                        } else {
                            alert(stt);
                        }
                    }
                });
                return false;
            })
        })();

        // Delete custom style
        (initCustomStyleDelete = function () {
            $('#mybootstrap .advgb-customstyles-items a.trash').unbind('click').click(function (e) {
                that = this;
                var cf = confirm('Do you really want to delete "' + $(this).prev().prev().text().trim() + '"?');
                if (cf === true) {
                    var id = $(that).parent().data('id-customstyle');
                    $.ajax({
                        url: ajaxurl,
                        type: 'POST',
                        dataType: 'json',
                        data: {
                            action: 'advgb_custom_styles_ajax',
                            id: id,
                            task: 'delete'
                        },
                        success: function (res, stt) {
                            if (stt === 'success') {
                                $(that).parent().remove();
                                if (res.id == myStyleId) {
                                    customStylePreview();
                                } else {
                                    customStylePreview(myStyleId);
                                }
                            } else {
                                alert(stt);
                            }
                        }
                    });
                    return false;
                }
            })
        })();

        // Copy custom style
        (initCustomStyleCopy = function () {
            $('#mybootstrap .advgb-customstyles-items a.copy').unbind('click').click(function (e) {
                that = this;
                var id = $(that).parent().data('id-customstyle');
                $.ajax({
                    url: ajaxurl,
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        action: 'advgb_custom_styles_ajax',
                        id: id,
                        task: 'copy'
                    },
                    success: function (res, stt) {
                        if (stt === 'success') {
                            $(that).parents('.advgb-customstyles-list').find('li').last().before('<li class="advgb-customstyles-items" data-id-customstyle="' + res.id + '"><a><i class="advgbicon-quill"></i> <span class="advgb-customstyles-items-title">' + res.title + '</span></a><a class="copy"><i class="advgbicon-copy"></i></a><a class="trash"><i class="advgbicon-trash"></i></a><ul style="margin-left: 30px"><li class="advgb-customstyles-items-class">('+ res.name +')</li></ul></li>');
                            initCustomStyleMenu();
                        } else {
                            alert(stt);
                        }
                    }
                });
                return false;
            })
        })();

        // Choose custom style
        (initTableLinks = function () {
            $('#mybootstrap .advgb-customstyles-items a:not(".copy, .edit, .trash, .advgb-customstyles-new"), #mybootstrap .advgb-customstyles-items ul').unbind('click').click(function (e) {
                id = $(this).parent().data('id-customstyle');
                $('#mybootstrap .advgb-customstyles-list li').removeClass('active');
                $(this).parent().addClass('active');
                customStylePreview(id);

                return false;
            })
        })();

        // Function to select text when clicking edit
        $.fn.selectText = function(){
            var doc = document        , element = this[0]        , range, selection    ;
            if (doc.body.createTextRange) {
                range = document.body.createTextRange();
                range.moveToElementText(element);
                range.select();
            } else if (window.getSelection) {
                selection = window.getSelection();
                range = document.createRange();
                range.selectNodeContents(element);
                selection.removeAllRanges();
                selection.addRange(range);
            }
            element.focus();
        };
    }

    // Add Codemirror
    var myCssArea, myEditor, myCustomCss, myStyleId;
    myCssArea = document.getElementById('advgb-customstyles-css');
    myEditor = CodeMirror.fromTextArea(myCssArea, {
        mode: 'css',
        lineNumbers: true,
        extraKeys: {"Ctrl-Space": "autocomplete"}
    });

    $(myCssArea).on('change', function() {
        myEditor.setValue($(myCssArea).val());
    });

    myEditor.on("blur", function() {
        myEditor.save();
        $(myCssArea).trigger('propertychange');

    });

    // Fix Codemirror not displayed properly
    $('#custom-styles-tab').one('click', function () {
        myEditor.refresh();
        customStylePreview();
    });

    customStylePreview();
    function customStylePreview(id_element) {
        if (typeof (id_element) === "undefined") {
            id_element = $('#mybootstrap ul.advgb-customstyles-list li:first-child').data('id-customstyle');
            $('#mybootstrap ul.advgb-customstyles-list li:first-child').addClass('active');
        }
        if (typeof (id_element) === "undefined" || id_element ==="") return;
        $.ajax({
            url: ajaxurl,
            type: 'POST',
            dataType: 'json',
            data: {
                action: 'advgb_custom_styles_ajax',
                id: id_element,
                task: 'preview'
            },
            success: function (res, stt) {
                if (stt === 'success') {
                    $('#advgb-customstyles-title').val(res.title);
                    $('#advgb-customstyles-classname').val(res.name);
                    $('#advgb-customstyles-identify-color').minicolors('value', res.identifyColor);

                    myStyleId = id_element;
                    myCustomCss = '{\n' + res.css + '\n}';

                    var previewTarget = $(".advgb-customstyles-target");
                    previewTarget.attr('style','');

                    if (typeof(myCustomCss) !== 'undefined' || myCustomCss !== '') {
                        $('#advgb-customstyles-css').val(myCustomCss);
                    } else {
                        $('#advgb-customstyles-css').val('');
                    }
                    myEditor.setValue(myCustomCss);
                    parseCustomStyleCss();
                } else {
                    alert(stt);
                }
            },
            error: function(jqxhr, textStatus, error) {
                alert(textStatus + " : " + error);
            }
        })
    }

    String.prototype.replaceAll = function(search, replace) {
        if (replace === undefined) {
            return this.toString();
        }
        return this.split(search).join(replace);
    };

    // Parse custom style text to css for preview
    function parseCustomStyleCss() {
        var previewTarget = $("#advgb-customstyles-preview .advgb-customstyles-target");
        var parser = new (less.Parser);
        var content = '#advgb-customstyles-preview .advgb-customstyles-target ' + myEditor.getValue();
        parser.parse(content, function(err, tree) {
            if (err) {
                // Show error to the user
                if (err.message == 'Unrecognised input') {
                    err.message = configData.message;
                }
                alert(err.message);
                return false;
            } else {
                cssString = tree.toCSS().replace("#advgb-customstyles-preview .advgb-customstyles-target {","");
                cssString = cssString.replace("}","").trim();
                cssString = cssString.replaceAll("  ", "");
                myCustomCss = cssString;

                var attributes = cssString.split(';');
                for(var i=0; i<attributes.length; i++) {
                    if( attributes[i].indexOf(":") > -1) {
                        var entry = attributes[i].split(/:(.+)/);
                        previewTarget.css( jQuery.trim(""+entry[0]+""), jQuery.trim(entry[1]) );
                    }
                }

                return true;
            }
        })
    }

    // Bind event to preview custom style after changed css text
    (initCustomCssObserver = function () {
        var cssChangeWait;
        $('#advgb-customstyles-css').bind('input propertychange', function() {
            clearTimeout(cssChangeWait);
            cssChangeWait = setTimeout(function() {
                parseCustomStyleCss();
                saveCustomStyleChanges();
            }, 500);
        });
    })();

    $('#advgb-customstyles-title, #advgb-customstyles-classname').on('keypress', function (e) {
        if (e.which === 13) {
            e.preventDefault();
            saveCustomStyleChanges();
        }
    });
    $('#advgb-customstyles-title, #advgb-customstyles-classname').on('change', function (e) {
        saveCustomStyleChanges();
    });

    // Save custome style
    function saveCustomStyleChanges() {
        var myTitle =  $('#advgb-customstyles-title').val().trim();
        var myClassname =  $('#advgb-customstyles-classname').val().trim();
        var myIdentifyColor =  $('#advgb-customstyles-identify-color').val().trim();

        $.ajax({
            url: ajaxurl,
            type: 'POST',
            data: {
                action: 'advgb_custom_styles_ajax',
                id: myStyleId,
                title: myTitle,
                name: myClassname,
                mycss: myCustomCss,
                mycolor: myIdentifyColor,
                task: 'style_save'
            },
            success: function (res, stt) {
                if (stt === 'success') {
                    // Update list items
                    thisStyle = $('.advgb-customstyles-list').find('li[data-id-customstyle='+myStyleId+']');
                    thisStyle.find('.advgb-customstyles-items-title').text(myTitle);
                    thisStyle.find('.advgb-customstyles-items-class').text('('+myClassname+')');

                    autosaveNotification = setTimeout(function() {
                        $('#savedInfo').fadeIn(200).delay(2000).fadeOut(1000);
                    }, 500);
                } else {
                    alert(stt)
                }
            },
            error: function(jqxhr, textStatus, error) {
                alert(textStatus + " : " + error + ' - ' + jqxhr.responseJSON);
            }
        })
    }
});