(function($) {
  'use strict';

  // Line chart
  new Morris.Line({
    element: 'line-chart',
    data: [
      { سال: '1364', مقدار: 20 },
      { سال: '1366', مقدار: 10 },
      { سال: '1368', مقدار: 5 },
      { سال: '1370', مقدار: 5 },
      { سال: '1380', مقدار: 20 }
    ],
    xkey: 'سال',
    ykeys: ['مقدار'],
    labels: ['مقدار']
  });

  // Bar Chart
  new Morris.Bar({
    element: 'bar-chart',
    data: [
      { y: '1360', a: 100, b: 90 },
      { y: '1362', a: 75,  b: 65 },
      { y: '1364', a: 50,  b: 40 },
      { y: '1366', a: 75,  b: 65 },
      { y: '1368', a: 50,  b: 40 },
      { y: '1370', a: 75,  b: 65 },
      { y: '1380', a: 100, b: 90 }
    ],
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['سری آ', 'سری ب']
  });

  //Doughnut Chart
  new Morris.Donut({
    element: 'doughnut-chart',
    data: [
      {label: "فروش", value: 12},
      {label: "سود", value: 30},
      {label: "برگشتی", value: 20}
    ]
  });

  //Stacked Bar
  new Morris.Bar({
    element: 'stacked-bar-chart',
    data: [
      {x: '1370 Q1', y: 3, z: 2, a: 3},
      {x: '1370 Q2', y: 2, z: null, a: 1},
      {x: '1370 Q3', y: 0, z: 2, a: 4},
      {x: '1370 Q4', y: 2, z: 4, a: 3}
    ],
    xkey: 'x',
    ykeys: ['y', 'z', 'a'],
    labels: ['Y', 'Z', 'A'],
    stacked: true
  });

  //Updating Chart
  var nReloads = 0;
  function data(offset) {
    var ret = [];
    for (var x = 0; x <= 360; x += 10) {
      var v = (offset + x) % 360;
      ret.push({
        x: x,
        y: Math.sin(Math.PI * v / 180).toFixed(4),
        z: Math.cos(Math.PI * v / 180).toFixed(4)
      });
    }
    return ret;
  }
  var graph = new Morris.Line({
      element: 'real-time-chart',
      data: data(0),
      xkey: 'x',
      ykeys: ['y', 'z'],
      labels: ['sin()', 'cos()'],
      parseTime: false,
      ymin: -1.0,
      ymax: 1.0,
      hideHover: true
  });
  function update() {
    nReloads++;
    graph.setData(data(5 * nReloads));
    $('#reloadStatus').text(nReloads + ' reloads');
  }
  setInterval(update, 1000);

  //Area Chart
  new Morris.Area({
    element: 'area-chart',
    data: [
      { y: '1360', a: 100, b: 90 },
      { y: '1362', a: 75,  b: 65 },
      { y: '1364', a: 50,  b: 40 },
      { y: '1366', a: 75,  b: 65 },
      { y: '1368', a: 50,  b: 40 },
      { y: '1370', a: 75,  b: 65 },
      { y: '1380', a: 100, b: 90 }
    ],
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['سری آ', 'سری ب']
  });

})(jQuery);
