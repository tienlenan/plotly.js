/**
* Copyright 2012-2020, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

'use strict';

var d3 = require('d3');

var styleOne = require('../pie/style_one');
var resizeText = require('../bar/style').resizeText;

module.exports = function style(gd) {
    var s = gd._fullLayout._funnelarealayer.selectAll('.trace');
    resizeText(gd, s, 'funnelarea');

    s.each(function(cd) {
        var cd0 = cd[0];
        var trace = cd0.trace;
        var traceSelection = d3.select(this);

        traceSelection.style({opacity: trace.opacity});

        traceSelection.selectAll('path.surface').each(function(pt) {
            d3.select(this).call(styleOne, pt, trace);
        });
    });
};
