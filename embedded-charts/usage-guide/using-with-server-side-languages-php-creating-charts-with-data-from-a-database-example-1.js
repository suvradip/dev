$(function() {var chart = new FusionCharts({
    type: 'column2d',
    renderAt: 'chart-container',
    width: '600',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Top 10 Most Populous Countries",
            "paletteColors": "#0075c2",
            "bgColor": "#ffffff",
            "borderAlpha": "20",
            "canvasBorderAlpha": "0",
            "usePlotGradientColor": "0",
            "plotBorderAlpha": "10",
            "showXAxisLine": "1",
            "xAxisLineColor": "#999999",
            "showValues": "0",
            "divlineColor": "#999999",
            "divLineIsDashed": "1",
            "showAlternateHGridColor": "0"
        },
        "data": [{
            "label": "China",
            "value": "12000000"
        }, {
            "label": "India",
            "value": "10300000"
        }, {
            "label": "United States",
            "value": "2800000"
        }, {
            "label": "Indonesia",
            "value": "2300000"
        }, {
            "label": "Brazil",
            "value": "2000000"
        }, {
            "label": "Pakistan",
            "value": "1900000"
        }, {
            "label": "Russian Federation",
            "value": "1850000"
        }, {
            "label": "Bangladesh",
            "value": "1800000"
        }, {
            "label": "Japan",
            "value": "1830000"
        }, {
            "label": "Nigeria",
            "value": "1700000"
        }]
    }
}
).render('chart-container-1'); });