$(function() {var chart = new FusionCharts({
    type: 'column2d',
    renderAt: 'chart-container',
    width: '400',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Top 3 Juice Flavors",
            "subCaption": "Last year",
            "xAxisName": "Flavor",
            "yAxisName": "Amount (In USD)",
            "numberPrefix": "$",
            "placevaluesInside": "1",
            "theme": "fint"
        },

        "data": [{
            "label": "Apple",
            "value": "810000",
            "link": "P-detailsWin,width=400,height=300,toolbar=no,scrollbars=yes, resizable=no-http://fusioncharts.com"
        }, {
            "label": "Cranberry",
            "value": "620000",
            "link": "P-detailsWin,width=400,height=300,toolbar=no,scrollbars=yes, resizable=no-http://www.fusioncharts.com/explore/charts/"
        }, {
            "label": "Grapes",
            "value": "350000",
            "link": "P-detailsWin,width=400,height=300,toolbar=no,scrollbars=yes, resizable=no-http://blog.fusioncharts.com/"
        }]
    },
    "events": {
        "beforeRender": function(evtObj, argObj) {
            var iframeElement = document.createElement('iframe');
            iframeElement.setAttribute('id', 'pop-up');
            iframeElement.style.cssText = 'name: drill; width:400; height:300;scrolling:yes;frameborder:0';
            argObj.container.parentNode.insertBefore(iframeElement, argObj.container.nextSibling);
        }
    }
}
).render('chart-container-1'); });