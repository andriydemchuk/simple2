define(['knockout'], function (ko) {

    ko.bindingHandlers.syncHeight = {
        init: function (element, valueAccessor) {

            _.defer(function () {

                var handler = function () {

                    var height = 0,
                        $elemHeight = 0;

                    $('.text-matching-source-wrapper, .text-matching-target').each(function () {

                        $(this).css('height', 'auto');

                        $elemHeight = parseInt($(this).css('height'));

                        if ($elemHeight > height) {
                            height = $elemHeight;
                        }
                    });

                    $('.text-matching-source-wrapper, .text-matching-target').each(function () {
                        $(this).css('height', height + 'px');
                    });

                    console.log('called');

                }

                handler();

                var debounced = _.debounce(handler, 10);

                $(window).on('resize orientationchange', debounced);

                ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                    $(window).off('resize orientationchange', debounced);
                });
            });

        }
    }

});