(function($) {
  'use strict';
    //Pie Chart
  new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["رستوران یک", "رستوران دو", "رستوران سه", "رستوران چهار", "رستوران پنج"],
      datasets: [{
        label: "آلودگی هوا",
        backgroundColor: ["#ff0018", "#f7b11b","#ff6c60","#8663e1","#08bf6f"],
        data: [2478,5267,734,784,433]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'نرخ پیشبینی شده در 1400'
      }
    }
  });



  // Bar chart
  var barChart = new Chart(document.getElementById("bar-chart"), {
      type: 'bar',
      data: {
        labels: ["تهران", "مشهد", "قم", "زنجان", "کرج"],
        datasets: [
          {
            label: "آلودگی هوا",
            backgroundColor: ["#ff0018", "#f7b11b","#ff6c60","#8663e1","#08bf6f"],
            data: [2478,5267,1734,3384,1433]
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: '  آلودگی هوا پیشبینی شده '
        }
      }
  });

  //Line Chart
  var ctx = document.getElementById('line-chart').getContext("2d");
  var gradientStroke = ctx.createLinearGradient(0, 0, 0, 450);
  gradientStroke.addColorStop(0, '#ff0018');

  var gradientFill = ctx.createLinearGradient(0, 0, 0, 450);
  gradientFill.addColorStop(0, "rgba(53,127,250,0.4)");
  gradientFill.addColorStop(1, "rgba(255,255,255,0)");

  // all data
  var data_1 = [1800, 1600, 2300, 2800, 3600, 2900, 3000, 3800, 3600];
  var data_2 = [4100, 3800, 3200, 3400, 2700, 2600, 3300, 3000, 2900];
  var labels = ["دی-11", "دی-12", "دی-13", "دی-14", "دی-15", "دی-16", "دی-17","دی-18", "دی-19"];

  var lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: "داده",
            borderColor: gradientStroke,
            pointBorderColor: gradientStroke,
            pointBackgroundColor: gradientStroke,
            pointHoverBackgroundColor: gradientStroke,
            pointHoverBorderColor: gradientStroke,
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 2,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 1,
            data: data_1
        }]
    },
    options: {
        legend: {
        display: false,
        position: "bottom"
        },
        scales: {
          yAxes: [{
            ticks: {
              fontColor: "rgba(0,0,0,0.5)",
              fontStyle: "bold",
              beginAtZero: true,
              maxTicksLimit: 200,
              padding: 20
            },
            gridLines: {
              drawTicks: false,
              display: false
            }

        }],
        xAxes: [{
            gridLines: {
              zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "rgba(0,0,0,0.5)",
              fontStyle: "bold"
            }
        }]
      }
    }
  });




  //Polar Chart
  new Chart(document.getElementById("polar-chart"), {
    type: 'polarArea',
    data: {
      labels: ["تهران", "مشهد", "قم", "زنجان", "کرج"],
      datasets: [
        {
          label: "آلودگی هوا",
          backgroundColor: ["#ff0018", "#f7b11b","#ff6c60","#8663e1","#08bf6f"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: '  آلودگی هوا در سال 1400'
      }
    }
  });

  //Doughnut Chart
  new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["تهران", "مشهد", "قم", "زنجان", "کرج"],
      datasets: [
        {
          label: "آلودگی هوا",
          backgroundColor: ["#ff0018", "#f7b11b","#ff6c60","#8663e1","#08bf6f"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: '  آلودگی هوا پیشبینی شده در 1400'
      }
    }
  });

  //Group Bar Chart
  new Chart(document.getElementById("bar-chart-grouped"), {
    type: 'bar',
    data: {
      labels: ["1900", "1950", "1999", "2050"],
      datasets: [
        {
          label: "تهران",
          backgroundColor: "#3e95cd",
          data: [133,221,783,2478]
        }, {
          label: "قم",
          backgroundColor: "#8e5ea2",
          data: [408,547,675,734]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'رشد آلودگی'
      }
    }
  });

  //Mixed Chart
  new Chart(document.getElementById("mixed-chart"), {
    type: 'bar',
    data: {
      labels: ["1900", "1950", "1999", "2050"],
      datasets: [{
          label: "قم",
          type: "line",
          borderColor: "#8e5ea2",
          data: [408,547,675,734],
          fill: false
        }, {
          label: "تهران",
          type: "line",
          borderColor: "#3e95cd",
          data: [133,221,783,2478],
          fill: false
        }, {
          label: "قم",
          type: "bar",
          backgroundColor: "#ff6c60",
          data: [408,547,675,734],
        }, {
          label: "تهران",
          type: "bar",
          backgroundColor: "#f7b11b",
          backgroundColorHover: "#3e95cd",
          data: [133,221,783,2478]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'نرخ بر اساس دو شهر: قم و تهران'
      },
      legend: { display: false }
    }
  });

})(jQuery);
