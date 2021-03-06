{
        "type": "maps/abruzzo",
        "renderAt": "chart-container",
        "width": "700",
        "height": "500",
        "dataFormat": "json",
        "dataSource": {
                "chart": {
                "caption": "Global Population",
                "theme": "fint",
                "formatNumberScale":"0",
                "numberSuffix":"M",
                "showLabels":"1",
                "includeValueInLabels" : "1"
            },
            "colorrange": {
                "color": [
                    
                    {
                        "minvalue": "100",
                        "maxvalue": "500",
                        "code": "#D0DFA3",
                        "displayValue" : "100-500M"
                    },
                    {
                        "minvalue": "500",
                        "maxvalue": "1000",
                        "code": "#B0BF92",
                        "displayValue" : "500-1000M"
                    },
                    {
                        "minvalue": "1000",
                        "maxvalue": "2000",
                        "code": "#86b300",
                        "displayValue" : "1000-2000M"
                    },
                    {
                        "minvalue": "2000",
                        "maxvalue": "3000",
                        "code": "#00cc00",
                        "displayValue" : "2000-3000M"
                    }

                ]
            },
            "data": [{"id":"it.ch","value":1185},{"id":"it.aq","value":200},{"id":"it.pe","value":862},{"id":"it.te","value":2716}]
        }
    }