var width = 300,
    height = 300,
    radius = Math.min(width, height)/2;

var color = d3.scale.category20();

          var pie = d3.layout.pie()
              .value(function(d) { return d.spend; })
              .sort(null);

          var arc = d3.svg.arc()
              .innerRadius(radius - radius)
              .outerRadius(radius);

          var svg = d3.select("#pieChart").append("svg")
              .attr("width", width)
              .attr("height", height)
              .append("g")
              .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

          svg.append("g")
            .attr("class", "slices");
          svg.append("g")
            .attr("class", "labels");
          svg.append("g")
            .attr("class", "lines");

          d3.tsv("data.tsv", type, function(error, data) {
            var path = svg.datum(data).selectAll("path")
                .data(pie)
              .enter().append("path")
                .attr("fill", function(d, i) { return color(i); })
                .attr("d", arc);

            d3.selectAll("input")
                .on("change", change);

            
            var timeout = setTimeout(function() {
              d3.select("input[value=\"spend\"]").property("checked", true).each(change);
            }, 0);
            

            function change() {
              var value = this.value;
              clearTimeout(timeout);
              pie.value(function(d) { return d[value]; }); // change the value function
              path = path.data(pie); // compute the new angles
              path.attr("d", arc); // redraw the arcs
            }
          });

          function type(d) {
            d.spend = +d.spend;
            d.overSpend = +d.overSpend;
            d.test = +d.test;
            return d;
          }
