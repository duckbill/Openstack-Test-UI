/**
 *
 * @author zhouhua
 * 
 */

;(function($, window, document, undefined) {
    $.fn.themeFileInput = function(title, option) {
        return this.each(function(){
            var ele_class = $(this).attr("class");
            var ele_style = $(this).attr("style");
            var btn_class = $(this).data("button-class");
            var btn_title = $(this).attr("value");
            if(btn_title !== '' && !title ) {
                title = btn_title;
            } else if(btn_title === '' && !title) {
                title = 'File';
            }
            var ele_id = $(this).attr("id");
            var new_ele_id = "subsititute-for-" + ele_id;
            var new_ele = "<div data-input-theme=\"theme-file-input\"> \
                             <div for=\"" + new_ele_id +"\" class=\"" + ele_class + "\"></div> \
                             <div id=\"" + new_ele_id + "\" class=\"" + btn_class + "\" style=\"" + ele_style + "; display:inline-block;\">" + title + "</div> \
                           </div>";
            $(new_ele).insertAfter($(this));
            var height = $(new_ele).find("#" + new_ele_id).height();
            $(new_ele).find("[for=" + new_ele_id + "]").css("height",height);
            $(document).on('click', '#' + new_ele_id + ', [for=' + new_ele_id + ']', function(){
                $("#" + ele_id).trigger('click');
            });
            $(this).on('change', function(){
                var file = $(this).val();
                file = file.replace(/^.*(\\|\/|\:)/, '');
                $("[for=" + new_ele_id + "]").html(file);
            });
            $(this).hide();
        });
    };

    $.fn.themeFileInputAddClass = function(className) {
        if($(this).next().data("input-theme") == "theme-file-input") {
            var ele_id = $(this).attr("id");
            var new_ele_id = "subsititute-for-" + ele_id;
            $("[for="+new_ele_id+"]").oldAddClass(className);
            return $(this);
        } else {
            return $.fn.oldAddClass.call(this, className);
        }
    }

    $.fn.themeFileInputRemoveClass = function(className) {
        if($(this).next().data("input-theme") == "theme-file-input") {
            var ele_id = $(this).attr("id");
            var new_ele_id = "subsititute-for-" + ele_id;
            $("[for="+new_ele_id+"]").oldRemoveClass(className);
            return $(this);
        } else {
            return $.fn.oldRemoveClass.call(this, className);
        }
    }

    $.fn.oldAddClass = $.fn.addClass;
    $.fn.oldRemoveClass = $.fn.removeClass;
    $.fn.addClass = $.fn.themeFileInputAddClass;
    $.fn.removeClass = $.fn.themeFileInputRemoveClass;

})(jQuery, window, document);