// Import jquery from dependencies
import $ from 'jquery';

window.$ = $;
window.jQuery = $;

// Bootstrap

// Option 1: Import Full boostrap from dependencies
//import 'bootstrap';

// Option 2 : If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
require('./lib/bootstrap-explicit-pieces.js');


/* Sticky footer */
$(window).bind("load", function () {
    var footer = $("footer");
    var pos = footer.position();
    var height = $(window).height();
    height = height - pos.top;
    height = height - 50;
    if (height > 0) {
        footer.css({
            'margin-top': height + 'px'
        });
    }
});

// Index Page load
$('body.index').ready(function () {
    // For index Page coding
});