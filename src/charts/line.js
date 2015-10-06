
(function(angular) {
    "use strict";

    angular.module("app")
        .directive("chartLine", [line]);

    function line(colorProvider) {
        return {
            restrict: 'EA',
            scope: {
                options: "="
            },
            link: function($scope, elem, attrs) {
                elem.css('min-height', '240px');

                $.plot(elem, [{
                    data: [
                        [0, 7],
                        [1, 6.5],
                        [2, 12.5],
                        [3, 7],
                        [4, 9],
                        [5, 6],
                        [6, 11],
                        [7, 6.5],
                        [8, 8],
                        [9, 7]
                    ],
                    label: 'A',
                    points: {
                        show: true
                    },
                    lines: {
                        show: true,
                        fill: true,
                        fillColor: {
                            colors: [{
                                opacity: 0.1
                            }, {
                                opacity: 0.1
                            }]
                        }
                    }
                }, {
                    data: [
                        [0, 4],
                        [1, 4.5],
                        [2, 7],
                        [3, 4.5],
                        [4, 3],
                        [5, 3.5],
                        [6, 6],
                        [7, 3],
                        [8, 4],
                        [9, 3]
                    ],
                    label: 'B',
                    points: {
                        show: true,
                        radius: 4
                    }
                }], {
                    colors: ['#23b7e5', '#fad733'],
                    series: {
                        shadowSize: 2
                    },
                    xaxis: {
                        font: {
                            color: '#ccc'
                        }
                    },
                    yaxis: {
                        font: {
                            color: '#ccc'
                        }
                    },
                    grid: {
                        hoverable: true,
                        clickable: true,
                        borderWidth: 0,
                        color: '#ccc'
                    },
                    tooltip: false,
                    tooltipOpts: {
                        content: '%s of %x.1 is %y.4',
                        defaultTheme: false,
                        shifts: {
                            x: 0,
                            y: 20
                        }
                    }
                });

            }
        };
    }
})(angular);