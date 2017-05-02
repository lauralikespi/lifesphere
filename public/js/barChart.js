var lineChartData = {
    labels: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        datasets: [{
            label: "Spend",
            fillColor: "rgba(220,220,220,0)",
            strokeColor: "#3b6063",
            pointColor: "#3b6063",
            data: [20, 30, 80, 20, 40, 10, 60]
        }, {
            label: "Budget",
            fillColor: "rgba(151,187,205,0)",
            strokeColor: "#77bbc5",
            pointColor: "#77bbc5",
                  data: [60, 10, 40, 30, 80, 30, 20]
              }]

          }

Chart.defaults.global.animationSteps = 50;
Chart.defaults.global.tooltipYPadding = 16;
Chart.defaults.global.tooltipCornerRadius = 0;
Chart.defaults.global.tooltipTitleFontStyle = "normal";
Chart.defaults.global.tooltipFillColor = "#c9a6ce";
Chart.defaults.global.animationEasing = "easeOutBounce";
Chart.defaults.global.responsive = true;
Chart.defaults.global.scaleLineColor = "black";
Chart.defaults.global.scaleFontSize = 16;


var ctx = document.getElementById("canvas").getContext("2d");
var LineChartDemo = new Chart(ctx).Line(lineChartData, {
    pointDotRadius: 10,
    bezierCurve: false,
    scaleShowVerticalLines: false,
    scaleGridLineColor: "black",
    legendTemplate : '<ul>'
                  +'<% for (var i=0; i<datasets.length; i++) { %>'
                    +'<li>'
                    +'<span style=\"background-color:<%=datasets[i].lineColor%>\"></span>'
                    +'<% if (datasets[i].label) { %><%= datasets[i].label %><% } %>'
                  +'</li>'
                +'<% } %>'
              +'</ul>'
});
document.getElementById("legendDiv").innerHTML = LineChartDemo.generateLegend();


