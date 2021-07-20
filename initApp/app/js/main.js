
'use strict';

jQuery(function($) {
    initObjectFitImagesPolyfill();

    function initObjectFitImagesPolyfill() {
        let $ofi = $('img.js-ofi');
        objectFitImages($ofi);
    }

});