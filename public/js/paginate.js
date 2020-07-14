(function ($) {
    'use strict';
    $(function () {
        var PageJump = $('#PageJump');
        var PageJumpDropDown = $('#PageJumpDropDown');
        PageJump.click(function () {
            PageJumpDropDown.toggleClass('hidden');
        })
    })
})(jQuery);
