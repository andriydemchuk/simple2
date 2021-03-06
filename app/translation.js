﻿define(['modules/templateSettings'], function (templateSettings) {

    return {
        getTextByKey: function (key) {
            var translations = templateSettings.translations;
            for (var i = 0; i < translations.length; i++) {
                if (translations[i].key == key) {
                    return _.unescape(translations[i].value);
                }
            }
            
            throw 'Unable to localize ' + key;
        }
    }
})