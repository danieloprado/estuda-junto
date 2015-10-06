
(function(angular) {
    "use strict";

    angular.module("app")
        .directive("chartDonut", [pie]);

    function pie(colorProvider) {
        return {
            restrict: 'EA',
            scope: {
                options: "="
            },
            link: function($scope, elem, attrs) {
                elem.css({
                    height: '150px'
                });


                $.plot(elem, [{
                    "label": "1º série",
                    "data": 40
                }, {
                    "label": "2º série",
                    "data": 10
                }, {
                    "label": "3º série",
                    "data": 20
                }, {
                    "label": "4º série",
                    "data": 12
                }, {
                    "label": "5º série",
                    "data": 18
                }], {
                    series: {
                        pie: {
                            show: true,
                            innerRadius: 0.7,
                            stroke: {
                                width: 0
                            },
                            label: {
                                show: false,
                                threshold: 0.05
                            }
                        }
                    },
                    colors: ['#7266ba', '#23b7e5', '#27c24c', '#fad733', '#f05050'],
                    grid: {
                        hoverable: true,
                        clickable: true,
                        borderWidth: 0,
                        color: '#ccc'
                    },
                    tooltip: false
                });

            }
        };
    }

})(angular);