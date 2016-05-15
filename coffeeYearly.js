

      google.charts.setOnLoadCallback(drawVisualization);


      function drawVisualization() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
         ['Year','STARBUCKS','DUNKIN DONUTS','PICCOLO CAFE','THE COFFEE BEAN TEA LEAF','GREGORYS COFFEE','Average'],
         ['2012',8,12.4,18.2,17.33,13.76,13.938],
         ['2013',9.96,13.99,15.5,11,10,12.09],
         ['2014',16.3,11.28,12.93,11.4,14.21,13.224],
         ['2015',9.07,13.5,15.73,11.18,11.57,12.21],
         ['2016',9.2,9.57,11.33,19.8,20.88,14.156]
      ]);

    var options = {
      title : 'Yearly Coffee Shops Scores',
      vAxis: {title: 'Score'},
      hAxis: {title: 'Year'},
      seriesType: 'bars',
      series: {5: {type: 'line'}},
      colors: ['#AED6F1', '#85C1E9', '#5DADE2', '#2980B9', '#1F618D', '#E74C3C']
    };

    var chart = new google.visualization.ComboChart(document.getElementById('coffee_div'));
    chart.draw(data, options);
  }
