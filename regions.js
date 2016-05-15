    //  google.charts.load('current', {'packages':['controls']});
   //  google.charts.load('current', {'packages':['table']});
  google.charts.setOnLoadCallback(drawVisualization2)
 function drawVisualization2() {
 // grab the CSV
   $.get("https://raw.githubusercontent.com/simonnyc/IS608-NYC-data/master/vis_df2.csv", function(csvString) {
      // transform the CSV string into a 2-dimensional array
      var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});
        // this new DataTable object holds all the data
      var data = new google.visualization.arrayToDataTable(arrayData);

      // this view can select a subset of the data at a time
      var view = new google.visualization.DataView(data);
      view.setColumns([1,2]);




        // Define category pickers for 'Neighborhood', 'Cuisine'
        var NeighborhoodPicker = new google.visualization.ControlWrapper({
          'controlType': 'CategoryFilter',
          'containerId': 'control1',
          'options': {
            'filterColumnLabel': 'Neighborhood',
            'ui': {
              'labelStacking': 'horizontal',
              'allowTyping': false,
              'allowMultiple': false
            }
          }
        });
        var regionPicker = new google.visualization.ControlWrapper({
          'controlType': 'CategoryFilter',
          'containerId': 'control2',
          'options': {
            'filterColumnLabel': 'CUISINE',
            'ui': {
              'labelStacking':'horizontal',
              'allowTyping': false,
              'allowMultiple': false,
              'label': 'Cuisine Type',
              'selectedValuesLayout': 'below'
            }
          }
        });

        // Define a bar chart to show 'Score' data.
        // The bar chart will show _only_ if the user has choosen a value
        // from both category pickers.
        var barChart = new google.visualization.ChartWrapper({
          'chartType': 'BarChart',
          'containerId': 'chart1',
          'options': {
           title: 'Restaurants by Neighborhood and Cuisine Type',
           'legend': 'right',

        width: 500,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
            hAxis: {
                   textStyle : {fontSize: 8 },
                   title: 'Score',
                   minValue: 0
             },
            vAxis: {  textStyle : {fontSize: 8 },
                 title: 'Restaurant'
             }
          },
          'chartArea': {'left': 15, 'top': 15, 'right': 0, 'bottom': 0},
          // Configure the barchart to use columns 2 (Restaurant) and 3 (Score)
          'view': {'columns': [2, 3]}
        });

        // Define a table.
        // The table shows whatever is selected by the category pickers. It's here
        // just for reference and debugging.
        var table = new google.visualization.ChartWrapper({
          'chartType': 'Table',
          'containerId': 'chart2',
          'options': {
            'width': '600px'
          }
        });

        // Create the dashboard.
        var dashboard2 = new google.visualization.Dashboard(document.getElementById('dashboard2'));
        // Configure the controls so that:
        // - the 'Neighborhood' selection drives the 'Region' one,
        // - both the 'Neighborhood' and 'Region' selection drive the barchart
        // - both the 'Neighborhood' and 'Region' selection drive the table
        dashboard2.bind(NeighborhoodPicker, regionPicker);
        dashboard2.bind([NeighborhoodPicker, regionPicker], [barChart, table]);
        // Draw the dashboard
        dashboard2.draw(data);

        google.visualization.events.addListener(dashboard2, 'ready', function() {
          var NeighborhoodSelectedValues = NeighborhoodPicker.getState()['selectedValues'];
          var regionSelectedValues = regionPicker.getState()['selectedValues'];
          if (NeighborhoodSelectedValues.length == 0 || regionSelectedValues.length == 0) {
            document.getElementById('chart1').style.visibility = 'visible';
          } else {
            document.getElementById('chart1').style.visibility = 'visible';
          }
        });
      }
      )};
      google.setOnLoadCallback(drawVisualization2);