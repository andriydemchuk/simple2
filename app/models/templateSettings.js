﻿define([], function () {
    var ctor = function(spec) {

        var defaultTranslations = [
                    { key: '[course]', value: 'Course:' },
                    { key: '[start course]', value: 'Start course' },
                    { key: '[finish course]', value: 'Finish course' },
                    { key: '[learning objectives]', value: 'Learning objectives:' },
                    { key: '[start]', value: 'Start' },
                    { key: '[home]', value: 'Home' },
                    { key: '[learning content]', value: 'Learning content' },
                    { key: '[submit]', value: 'Submit' },
                    { key: '[try again]', value: 'Try again' },
                    { key: '[next]', value: 'Next' },
                    { key: '[correct answer]', value: 'Correct answer' },
                    { key: '[incorrect answer]', value: 'Incorrect answer' },
                    { key: '[previous question]', value: 'previous' },
                    { key: '[next question]', value: 'next' },
                    { key: '[of]', value: 'of' },
                    { key: '[to complete]', value: 'to complete' },
                    { key: '[text matching question hint]', value: 'Drag items from right column to the left to match the pairs' },
                    { key: '[text matching question drop here]', value: 'Drop here' },
                    { key: '[statement question true text]', value: 'True' },
                    { key: '[statement question false text]', value: 'False' },
                    { key: '[drag and drop question all texts are placed]', value: 'All texts are placed' },
                    { key: '[drag and drop question drop here]', value: 'Drop here' },
                    { key: '[fill in the blank choose answer]', value: 'Choose the answer...' },
                    { key: '[thank you message]', value: 'Thank you, you can close the page now' },
                    { key: '[there are no questions]', value: 'No questions' },
                    { key: '[browser not supported]', value: 'Your browser is currently not supported.' },
                    { key: '[browser not supported hint]', value: 'Don’t worry, there is an easy fix. All you have to do is click one of the icons below and follow the instructions.' },
                    { key: '[page not found title]', value: 'Page not found (404)' },
                    { key: '[page not found message]', value: "Sorry, the page you have been looking for has not been found. Try checking the URL on errors, use the navigation above or click 'Home' link below." },
                    { key: '[tracking and tracing header]', value: 'Your credentials for progress tracking' },
                    { key: '[tracking and tracing hint]', value: 'Please enter your credentials and click "Start and report my results "to enable result tracking. Otherwise, click "Do not report, just start".' },
                    { key: '[tracking and tracing name field]', value: 'Your name' },
                    { key: '[tracking and tracing email field]', value: 'Your e-mail' },
                    { key: '[tracking and tracing name is not valid]', value: 'Fill in your name' },
                    { key: '[tracking and tracing email is not valid]', value: 'Enter a valid e-mail' },
                    { key: '[tracking and tracing skip reporting]', value: 'Do not report, just start' },
                    { key: '[tracking and tracing start]', value: 'Start and report my results' },
                    { key: '[tracking and tracing error]', value: 'Something is wrong' },
                    { key: '[tracking and tracing error hint]', value: 'If you continue without restarting, your learning results will not be reported.' },
                    { key: '[tracking and tracing restart course]', value: 'Restart course' },
                    { key: '[tracking and tracing continue anyway]', value: 'Continue anyway' },
                    { key: '[tracking and tracing reporting progress]', value: 'reporting results...' }
        ];

        if (!_.isNullOrUndefined(spec) && !_.isNullOrUndefined(spec.translations)) {
            spec.translations = mapTranslations(spec.translations);
        }
        
        function mapTranslations(translations) {
            return translations.concat(_.difference(defaultTranslations, translations));
        }

        var templateSetting = _.defaults(spec, {
            "logo": {
                "url": ""
            },
            "theme": {
                "key": ""
            },
            "xApi": {
                "enabled": true,
                "selectedLrs": "default",
                "lrs": {
                    "uri": "",
                    "credentials": {
                        "username": "",
                        "password": ""
                    },
                    "authenticationRequired": false
                },
                "allowedVerbs": []
            },
            "masteryScore": {
                "score": "100"
            },
            "translations": defaultTranslations
        });

        return templateSetting;
    };

    return ctor;

});