
/* from:::: http://stackoverflow.com/questions/4261363/javascript-html-toggle-visibility-automatically-causing-one-div-element-to-h */

function toggle_visibility(newSection) {
        $(".section").not("#" + newSection).hide();
        $("#" + newSection).show();
    }