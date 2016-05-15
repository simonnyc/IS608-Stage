

      google.charts.load('current', {'packages':['corechart', 'controls', 'map', 'table']});
      google.charts.setOnLoadCallback(drawDashboard)

      // Load the Visualization API and the controls package.
     // google.charts.load('current', {'packages':['controls']});

      // Set a callback to run when the Google Visualization API is loaded.
      //google.charts.setOnLoadCallback(drawDashboard);


      // Callback that creates and populates a data table,
      // instantiates a dashboard, a range slider and a pie chart,
      // passes in the data and draws it.
      function drawDashboard() {

        // Create our data table.
        var data = google.visualization.arrayToDataTable([
         ['Year','STARBUCKS','DUNKIN DONUTS','PICCOLO CAFE','THE COFFEE BEAN TEA LEAF','GREGORYS COFFEE'],
         ['2012 ',8,12.4,18.2,17.33,13.76],
         ['2013 ',9.96,13.99,15.5,11,10],
         ['2014 ',16.3,11.28,12.93,11.4,14.21],
         ['2015 ',9.07,13.5,15.73,11.18,11.57],
         ['2016 ',9.2,9.57,11.33,19.8,20.88]
        ]);

        // Create a dashboard.
        var dashboard = new google.visualization.Dashboard(
            document.getElementById('dashboard_div'));

        // Create a range slider, passing some options
        var coffeeRangeSlider = new google.visualization.ControlWrapper({
          'controlType': 'NumberRangeFilter',
          'containerId': 'filter_div',
          'options': {
           'filterColumnLabel': 'STARBUCKS',
           'ui': { 'label': 'Score' }
          },

        });

        // Create a line chart, passing some options
        var LineChart = new google.visualization.ChartWrapper({
          'chartType': 'LineChart',
          'containerId': 'chart_div',
          'options': {
          title: 'Top Coffee Shops since 2012 ',
            'width': 600,
            'height': 500,
            'pieSliceText': 'value',
            'legend': 'right',
            hAxis: {
                   textStyle : {fontSize: 12, color: 'black' },
                   title: 'Year',titleTextStyle: {fontName: 'Arial Black'},
                   minValue: 0
             },
            vAxis: {
                    textStyle : {fontSize: 12, color: 'black' },
                     title: 'Score',titleTextStyle: {fontName: 'Arial Black'}
             },
              colors: ['#AED6F1', '#85C1E9', '#5DADE2', '#2980B9', '#1F618D']
            //colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']
          }
        });

        // Establish dependencies, declaring that 'filter' drives 'lineChart',
        // so that the pie chart will only display entries that are let through
        // given the chosen slider range.
        dashboard.bind(coffeeRangeSlider, LineChart);

        // Draw the dashboard.
        dashboard.draw(data);
      };
