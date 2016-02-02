$(function() {var chart = new FusionCharts({
    type: 'cylinder',
    dataFormat: 'json',
    id: 'fuelMeter-2',
    renderAt: 'chart-container',
    width: '200',
    height: '350',
    dataSource: {
        "chart": {
            "theme": "fint",
            "caption": "Diesel Level in Generator",
            "subcaption": "Bakersfield Central",
            "lowerLimit": "0",
            "upperLimit": "120",
            "lowerLimitDisplay": "Empty",
            "upperLimitDisplay": "Full",
            "numberSuffix": " ltrs",
            "showValue": "1",
            "chartBottomMargin": "45",
            "dataStreamUrl": "../../../resources/php/gauge-and-widgets-guide-cylinder-gauge-real-time-gauges-php-1.php",
            "refreshInterval": "2",
            "refreshInstantly": "1"
        },
        "value": "110"
    }
}
).render('chart-container-2'); });