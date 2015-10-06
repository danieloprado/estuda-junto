
(function(angular) {
    "use strict";

    angular.module("app")
        .directive("chartPercent", [pie]);

    function pie(colorProvider) {
        return {
            restrict: 'A',
            scope: {
                options: "="
            },
            template: "<div id=\"text\"><span class=\"h3 m-l-sm step\">{{options.text}}</span><span class=\"text-sm\">{{options.textSmall}}</span></div><div id=\"graph\"></div>",
            link: function($scope, elem, attrs) {
                elem.css({
                    'min-height': '150px'
                });

                $.plot(elem, [{
                    data: [
                        [0, 0],
                        [1, 0.8414709848078965],
                        [2, 0.9092974268256817],
                        [3, 0.1411200080598672],
                        [4, -0.7568024953079282],
                        [5, -0.9589242746631385],
                        [6, -0.27941549819892586],
                        [7, 0.6569865987187891],
                        [8, 0.9893582466233818],
                        [9, 0.4121184852417566],
                        [10, -0.5440211108893698],
                        [11, -0.9999902065507035],
                        [12, -0.5365729180004349],
                        [13, 0.4201670368266409],
                        [14, 0.9906073556948704],
                        [15, 0.6502878401571168],
                        [16, -0.2879033166650653],
                        [17, -0.9613974918795568],
                        [18, -0.7509872467716762],
                        [19, 0.14987720966295234]
                    ],
                    label: 'Aceitação',
                    color: '#23b7e5'
                }], {
                    bars: {
                        show: true,
                        barWidth: 0.6,
                        fillColor: {
                            colors: [{
                                opacity: 0.5
                            }, {
                                opacity: 0.9
                            }]
                        }
                    },
                    xaxis: {
                        font: {
                            color: '#ccc'
                        }
                    },
                    yaxis: {
                        font: {
                            color: '#ccc'
                        },
                        min: -2,
                        max: 2
                    },
                    grid: {
                        hoverable: true,
                        clickable: true,
                        borderWidth: 0,
                        color: '#ccc'
                    },
                    series: {
                        shadowSize: 1
                    },
                    tooltip: false
                });

            }
        };
    }

})(angular);