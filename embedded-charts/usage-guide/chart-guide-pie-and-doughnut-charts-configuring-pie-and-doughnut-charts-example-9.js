$(function() {var chart = new FusionCharts({
    type: 'pie2d',
    renderAt: 'chart-container',
    width: '450',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Split of revenue by product categories",
            "subCaption": "Last year",
            "numberPrefix": "$",
            "showPercentValues": "1",
            "showPercentInTooltip": "0",
            "decimals": "1",
            "useDataPlotColorForLabels": "1",
            //Configuring slicing distance
            "slicingDistance ": "10",
            //Theme
            "theme": "fint"
        },
        "data": [{
            "label": "Food",
            "value": "285040"
        }, {
            "label": "Apparels",
            "value": "146330"
        }, {
            "label": "Electronics",
            "value": "105070"
        }, {
            "label": "Household",
            "value": "49100"
        }]
    }
}
).render('chart-container-9'); });