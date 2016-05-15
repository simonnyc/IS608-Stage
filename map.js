
     // google.charts.load("current", {packages:['map']});
   google.charts.setOnLoadCallback(drawChart2)
      function drawChart2() {
        var data = google.visualization.arrayToDataTable([
          ['Lat', 'Long', 'Name'],

          [40.834518,-73.940807, 'ORTIZ RESTAURANT'],
	      [40.761184,-73.957797, 'XING WONG BBQ'],
	      [40.760539,-73.958355, 'HUNAN BISTRO'],
	      [40.760539,-73.958355, 'CARVAL PIZZERIA'],
	      [40.704043,-74.013188, 'OPEN MARKET'],
	      [40.731165,-73.99192, 'OH TAISHO'],
	      [40.776603,-73.946627, 'RIDGEWAY DINER'],
	      [40.734671,-73.994585, 'VSPOT ORGANIC'],
	      [40.742178,-73.983232, 'PIPPALI'],
	      [40.755404,-73.979483,'THAI GRILL SUSHI BAR'],
	      [40.776603,-73.946627, 'CHEF YU / AZUKI'],
	      [40.721083,-74.005845, 'CHA CHAS BACKYARD GARDEN BAR  CAFE'],
	      [40.760539,-73.958355, 'MEGASUN RESTAURANT']
        ]);

        var map = new google.visualization.Map(document.getElementById('map_div2'));
        map.draw(data, {showTip: true});
      };

