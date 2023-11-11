var someData = [
{ "dia": new Date("2023-01-02"), "canvi": 401.03, "mes": 1},
{ "dia": new Date("2023-01-03"), "canvi": 403.33, "mes": 1},
{ "dia": new Date("2023-01-04"), "canvi": 395.85, "mes": 1},
{ "dia": new Date("2023-01-05"), "canvi": 396.88, "mes": 1},
{ "dia": new Date("2023-01-06"), "canvi": 396.96, "mes": 1},
{ "dia": new Date("2023-01-09"), "canvi": 397.25, "mes": 1},
{ "dia": new Date("2023-01-10"), "canvi": 399.00, "mes": 1},
{ "dia": new Date("2023-01-11"), "canvi": 399.1, "mes": 1},
{ "dia": new Date("2023-01-12"), "canvi": 399.6, "mes": 1},
{ "dia": new Date("2023-01-13"), "canvi": 396.96, "mes": 1},
{ "dia": new Date("2023-01-16"), "canvi": 398.98, "mes": 1},
{ "dia": new Date("2023-01-17"), "canvi": 399.58, "mes": 1},
{ "dia": new Date("2023-01-18"), "canvi": 396.15, "mes": 1},
{ "dia": new Date("2023-01-19"), "canvi": 396.43, "mes": 1},
{ "dia": new Date("2023-01-20"), "canvi": 395.88, "mes": 1},
{ "dia": new Date("2023-01-23"), "canvi": 395.98, "mes": 1},
{ "dia": new Date("2023-01-24"), "canvi": 397.33, "mes": 1},
{ "dia": new Date("2023-01-25"), "canvi": 388.75, "mes": 1},
{ "dia": new Date("2023-01-26"), "canvi": 387.38, "mes": 1},
{ "dia": new Date("2023-01-27"), "canvi": 388.85, "mes": 1},
{ "dia": new Date("2023-01-30"), "canvi": 390.53, "mes": 1},
{ "dia": new Date("2023-01-31"), "canvi": 390.91, "mes": 1},
{ "dia": new Date("2023-02-01"), "canvi": 390.2, "mes": 2},
{ "dia": new Date("2023-02-02"), "canvi": 387.2, "mes": 2},
{ "dia": new Date("2023-02-03"), "canvi": 386.58, "mes": 2},
{ "dia": new Date("2023-02-06"), "canvi": 390.83, "mes": 2},
{ "dia": new Date("2023-02-07"), "canvi": 394.4, "mes": 2},
{ "dia": new Date("2023-02-08"), "canvi": 388.73, "mes": 2},
{ "dia": new Date("2023-02-09"), "canvi": 385.8, "mes": 2},
{ "dia": new Date("2023-02-10"), "canvi": 389.78, "mes": 2},
{ "dia": new Date("2023-02-13"), "canvi": 385.48, "mes": 2},
{ "dia": new Date("2023-02-14"), "canvi": 382.45, "mes": 2},
{ "dia": new Date("2023-02-15"), "canvi": 380.58, "mes": 2},
{ "dia": new Date("2023-02-16"), "canvi": 382.65, "mes": 2},
{ "dia": new Date("2023-02-17"), "canvi": 386.61, "mes": 2},
{ "dia": new Date("2023-02-20"), "canvi": 382.83, "mes": 2},
{ "dia": new Date("2023-02-21"), "canvi": 382.19, "mes": 2},
{ "dia": new Date("2023-02-22"), "canvi": 382.33, "mes": 2},
{ "dia": new Date("2023-02-23"), "canvi": 381.43, "mes": 2},
{ "dia": new Date("2023-02-24"), "canvi": 380.6, "mes": 2},
{ "dia": new Date("2023-02-27"), "canvi": 379.93, "mes": 2},
{ "dia": new Date("2023-02-28"), "canvi": 377.68, "mes": 2},
{ "dia": new Date("2023-03-01"), "canvi": 373.58, "mes": 3},
{ "dia": new Date("2023-03-02"), "canvi": 374.63, "mes": 3},
{ "dia": new Date("2023-03-03"), "canvi": 378.71, "mes": 3},
{ "dia": new Date("2023-03-06"), "canvi": 377.00, "mes": 3},
{ "dia": new Date("2023-03-07"), "canvi": 377.38, "mes": 3},
{ "dia": new Date("2023-03-08"), "canvi": 379.87, "mes": 3},
{ "dia": new Date("2023-03-09"), "canvi": 379.1, "mes": 3},
{ "dia": new Date("2023-03-10"), "canvi": 383.65, "mes": 3},
{ "dia": new Date("2023-03-13"), "canvi": 390.95, "mes": 3},
{ "dia": new Date("2023-03-14"), "canvi": 391.5, "mes": 3},
{ "dia": new Date("2023-03-15"), "canvi": 397.5, "mes": 3},
{ "dia": new Date("2023-03-16"), "canvi": 396.43, "mes": 3},
{ "dia": new Date("2023-03-17"), "canvi": 395.93, "mes": 3},
{ "dia": new Date("2023-03-20"), "canvi": 399.21, "mes": 3},
{ "dia": new Date("2023-03-21"), "canvi": 391.58, "mes": 3},
{ "dia": new Date("2023-03-22"), "canvi": 388.55, "mes": 3},
{ "dia": new Date("2023-03-23"), "canvi": 384.75, "mes": 3},
{ "dia": new Date("2023-03-24"), "canvi": 386.8, "mes": 3},
{ "dia": new Date("2023-03-27"), "canvi": 385.3, "mes": 3},
{ "dia": new Date("2023-03-28"), "canvi": 382.95, "mes": 3},
{ "dia": new Date("2023-03-29"), "canvi": 379.8, "mes": 3},
{ "dia": new Date("2023-03-30"), "canvi": 380.63, "mes": 3},
{ "dia": new Date("2023-03-31"), "canvi": 379.5, "mes": 3},
{ "dia": new Date("2023-04-03"), "canvi": 378.84, "mes": 4},
{ "dia": new Date("2023-04-04"), "canvi": 376.83, "mes": 4},
{ "dia": new Date("2023-04-05"), "canvi": 376.19, "mes": 4},
{ "dia": new Date("2023-04-06"), "canvi": 376.1, "mes": 4},
{ "dia": new Date("2023-04-07"), "canvi": 0.0, "mes": 4},
{ "dia": new Date("2023-04-10"), "canvi": 0.0, "mes": 4},
{ "dia": new Date("2023-04-11"), "canvi": 375.23, "mes": 4},
{ "dia": new Date("2023-04-12"), "canvi": 376.23, "mes": 4},
{ "dia": new Date("2023-04-13"), "canvi": 374.55, "mes": 4},
{ "dia": new Date("2023-04-14"), "canvi": 373.68, "mes": 4},
{ "dia": new Date("2023-04-17"), "canvi": 371.7, "mes": 4},
{ "dia": new Date("2023-04-18"), "canvi": 371.68, "mes": 4},
{ "dia": new Date("2023-04-19"), "canvi": 376.35, "mes": 4},
{ "dia": new Date("2023-04-20"), "canvi": 377.68, "mes": 4},
{ "dia": new Date("2023-04-21"), "canvi": 377.23, "mes": 4},
{ "dia": new Date("2023-04-24"), "canvi": 375.15, "mes": 4},
{ "dia": new Date("2023-04-25"), "canvi": 375.42, "mes": 4},
{ "dia": new Date("2023-04-26"), "canvi": 375.83, "mes": 4},
{ "dia": new Date("2023-04-27"), "canvi": 373.58, "mes": 4},
{ "dia": new Date("2023-04-28"), "canvi": 373.78, "mes": 4},
{ "dia": new Date("2023-05-01"), "canvi": 0.0, "mes": 5},
{ "dia": new Date("2023-05-02"), "canvi": 371.98, "mes": 5},
{ "dia": new Date("2023-05-03"), "canvi": 375.63, "mes": 5},
{ "dia": new Date("2023-05-04"), "canvi": 373.94, "mes": 5},
{ "dia": new Date("2023-05-05"), "canvi": 372.48, "mes": 5},
{ "dia": new Date("2023-05-08"), "canvi": 372.2, "mes": 5},
{ "dia": new Date("2023-05-09"), "canvi": 371.68, "mes": 5},
{ "dia": new Date("2023-05-10"), "canvi": 370.98, "mes": 5},
{ "dia": new Date("2023-05-11"), "canvi": 371.45, "mes": 5},
{ "dia": new Date("2023-05-12"), "canvi": 370.98, "mes": 5},
{ "dia": new Date("2023-05-15"), "canvi": 369.3, "mes": 5},
{ "dia": new Date("2023-05-16"), "canvi": 369.2, "mes": 5},
{ "dia": new Date("2023-05-17"), "canvi": 371.25, "mes": 5},
{ "dia": new Date("2023-05-18"), "canvi": 373.87, "mes": 5},
{ "dia": new Date("2023-05-19"), "canvi": 376.73, "mes": 5},
{ "dia": new Date("2023-05-22"), "canvi": 374.73, "mes": 5},
{ "dia": new Date("2023-05-23"), "canvi": 376.45, "mes": 5},
{ "dia": new Date("2023-05-24"), "canvi": 372.7, "mes": 5},
{ "dia": new Date("2023-05-25"), "canvi": 372.3, "mes": 5},
{ "dia": new Date("2023-05-26"), "canvi": 371.61, "mes": 5},
{ "dia": new Date("2023-05-29"), "canvi": 371.45, "mes": 5},
{ "dia": new Date("2023-05-30"), "canvi": 370.4, "mes": 5},
{ "dia": new Date("2023-05-31"), "canvi": 370.85, "mes": 5},
{ "dia": new Date("2023-06-01"), "canvi": 370.42, "mes": 6},
{ "dia": new Date("2023-06-02"), "canvi": 371.36, "mes": 6},
{ "dia": new Date("2023-06-05"), "canvi": 369.28, "mes": 6},
{ "dia": new Date("2023-06-06"), "canvi": 368.63, "mes": 6},
{ "dia": new Date("2023-06-07"), "canvi": 368.73, "mes": 6},
{ "dia": new Date("2023-06-08"), "canvi": 368.65, "mes": 6},
{ "dia": new Date("2023-06-09"), "canvi": 368.73, "mes": 6},
{ "dia": new Date("2023-06-12"), "canvi": 368.15, "mes": 6},
{ "dia": new Date("2023-06-13"), "canvi": 371.13, "mes": 6},
{ "dia": new Date("2023-06-14"), "canvi": 370.8, "mes": 6},
{ "dia": new Date("2023-06-15"), "canvi": 376.03, "mes": 6},
{ "dia": new Date("2023-06-16"), "canvi": 373.00, "mes": 6},
{ "dia": new Date("2023-06-19"), "canvi": 374.4, "mes": 6},
{ "dia": new Date("2023-06-20"), "canvi": 372.55, "mes": 6},
{ "dia": new Date("2023-06-21"), "canvi": 369.9, "mes": 6},
{ "dia": new Date("2023-06-22"), "canvi": 369.43, "mes": 6},
{ "dia": new Date("2023-06-23"), "canvi": 369.9, "mes": 6},
{ "dia": new Date("2023-06-26"), "canvi": 369.1, "mes": 6},
{ "dia": new Date("2023-06-27"), "canvi": 368.5, "mes": 6},
{ "dia": new Date("2023-06-28"), "canvi": 371.73, "mes": 6},
{ "dia": new Date("2023-06-29"), "canvi": 370.9, "mes": 6},
{ "dia": new Date("2023-06-30"), "canvi": 371.93, "mes": 6},
{ "dia": new Date("2023-07-03"), "canvi": 375.03, "mes": 7},
{ "dia": new Date("2023-07-04"), "canvi": 375.39, "mes": 7},
{ "dia": new Date("2023-07-05"), "canvi": 378.4, "mes": 7},
{ "dia": new Date("2023-07-06"), "canvi": 382.95, "mes": 7},
{ "dia": new Date("2023-07-07"), "canvi": 388.33, "mes": 7},
{ "dia": new Date("2023-07-10"), "canvi": 382.65, "mes": 7},
{ "dia": new Date("2023-07-11"), "canvi": 379.5, "mes": 7},
{ "dia": new Date("2023-07-12"), "canvi": 376.48, "mes": 7},
{ "dia": new Date("2023-07-13"), "canvi": 375.15, "mes": 7},
{ "dia": new Date("2023-07-14"), "canvi": 374.55, "mes": 7},
{ "dia": new Date("2023-07-17"), "canvi": 373.03, "mes": 7},
{ "dia": new Date("2023-07-18"), "canvi": 373.68, "mes": 7},
{ "dia": new Date("2023-07-19"), "canvi": 375.00, "mes": 7},
{ "dia": new Date("2023-07-20"), "canvi": 379.24, "mes": 7},
{ "dia": new Date("2023-07-21"), "canvi": 380.3, "mes": 7},
{ "dia": new Date("2023-07-24"), "canvi": 378.38, "mes": 7},
{ "dia": new Date("2023-07-25"), "canvi": 378.33, "mes": 7},
{ "dia": new Date("2023-07-26"), "canvi": 384.13, "mes": 7},
{ "dia": new Date("2023-07-27"), "canvi": 379.03, "mes": 7},
{ "dia": new Date("2023-07-28"), "canvi": 383.26, "mes": 7},
{ "dia": new Date("2023-07-31"), "canvi": 386.93, "mes": 7},
{ "dia": new Date("2023-08-01"), "canvi": 389.25, "mes": 8},
{ "dia": new Date("2023-08-02"), "canvi": 386.88, "mes": 8},
{ "dia": new Date("2023-08-03"), "canvi": 390.85, "mes": 8},
{ "dia": new Date("2023-08-04"), "canvi": 391.73, "mes": 8},
{ "dia": new Date("2023-08-07"), "canvi": 389.5, "mes": 8},
{ "dia": new Date("2023-08-08"), "canvi": 388.5, "mes": 8},
{ "dia": new Date("2023-08-09"), "canvi": 388.44, "mes": 8},
{ "dia": new Date("2023-08-10"), "canvi": 385.13, "mes": 8},
{ "dia": new Date("2023-08-11"), "canvi": 382.8, "mes": 8},
{ "dia": new Date("2023-08-14"), "canvi": 382.78, "mes": 8},
{ "dia": new Date("2023-08-15"), "canvi": 388.48, "mes": 8},
{ "dia": new Date("2023-08-16"), "canvi": 385.45, "mes": 8},
{ "dia": new Date("2023-08-17"), "canvi": 384.73, "mes": 8},
{ "dia": new Date("2023-08-18"), "canvi": 383.59, "mes": 8},
{ "dia": new Date("2023-08-21"), "canvi": 381.73, "mes": 8},
{ "dia": new Date("2023-08-22"), "canvi": 382.03, "mes": 8},
{ "dia": new Date("2023-08-23"), "canvi": 383.33, "mes": 8},
{ "dia": new Date("2023-08-24"), "canvi": 384.23, "mes": 8},
{ "dia": new Date("2023-08-25"), "canvi": 381.78, "mes": 8},
{ "dia": new Date("2023-08-28"), "canvi": 382.63, "mes": 8},
{ "dia": new Date("2023-08-29"), "canvi": 382.25, "mes": 8},
{ "dia": new Date("2023-08-30"), "canvi": 379.85, "mes": 8},
{ "dia": new Date("2023-08-31"), "canvi": 380.13, "mes": 8},
{ "dia": new Date("2023-09-01"), "canvi": 383.73, "mes": 9},
{ "dia": new Date("2023-09-04"), "canvi": 383.05, "mes": 9},
{ "dia": new Date("2023-09-05"), "canvi": 386.00, "mes": 9},
{ "dia": new Date("2023-09-06"), "canvi": 389.15, "mes": 9},
{ "dia": new Date("2023-09-07"), "canvi": 387.58, "mes": 9},
{ "dia": new Date("2023-09-08"), "canvi": 385.7, "mes": 9},
{ "dia": new Date("2023-09-11"), "canvi": 384.1, "mes": 9},
{ "dia": new Date("2023-09-12"), "canvi": 385.08, "mes": 9},
{ "dia": new Date("2023-09-13"), "canvi": 384.35, "mes": 9},
{ "dia": new Date("2023-09-14"), "canvi": 384.3, "mes": 9},
{ "dia": new Date("2023-09-15"), "canvi": 383.75, "mes": 9},
{ "dia": new Date("2023-09-18"), "canvi": 384.13, "mes": 9},
{ "dia": new Date("2023-09-19"), "canvi": 383.25, "mes": 9},
{ "dia": new Date("2023-09-20"), "canvi": 383.7, "mes": 9},
{ "dia": new Date("2023-09-21"), "canvi": 387.78, "mes": 9},
{ "dia": new Date("2023-09-22"), "canvi": 386.7, "mes": 9},
{ "dia": new Date("2023-09-25"), "canvi": 391.08, "mes": 9},
{ "dia": new Date("2023-09-26"), "canvi": 388.88, "mes": 9},
{ "dia": new Date("2023-09-27"), "canvi": 390.85, "mes": 9},
{ "dia": new Date("2023-09-28"), "canvi": 392.35, "mes": 9},
{ "dia": new Date("2023-09-29"), "canvi": 389.5, "mes": 9},
{ "dia": new Date("2023-10-02"), "canvi": 388.6, "mes": 10},
{ "dia": new Date("2023-10-03"), "canvi": 386.73, "mes": 10},
{ "dia": new Date("2023-10-04"), "canvi": 387.32, "mes": 10},
{ "dia": new Date("2023-10-05"), "canvi": 387.08, "mes": 10},
{ "dia": new Date("2023-10-06"), "canvi": 386.81, "mes": 10},
{ "dia": new Date("2023-10-09"), "canvi": 388.55, "mes": 10},
{ "dia": new Date("2023-10-10"), "canvi": 387.38, "mes": 10},
{ "dia": new Date("2023-10-11"), "canvi": 386.55, "mes": 10},
{ "dia": new Date("2023-10-12"), "canvi": 385.9, "mes": 10},
{ "dia": new Date("2023-10-13"), "canvi": 387.73, "mes": 10},
{ "dia": new Date("2023-10-16"), "canvi": 387.05, "mes": 10},
{ "dia": new Date("2023-10-17"), "canvi": 384.98, "mes": 10},
{ "dia": new Date("2023-10-18"), "canvi": 384.13, "mes": 10},
{ "dia": new Date("2023-10-19"), "canvi": 383.99, "mes": 10},
{ "dia": new Date("2023-10-20"), "canvi": 383.05, "mes": 10},
{ "dia": new Date("2023-10-23"), "canvi": 381.98, "mes": 10},
{ "dia": new Date("2023-10-24"), "canvi": 383.2, "mes": 10},
{ "dia": new Date("2023-10-25"), "canvi": 385.3, "mes": 10},
{ "dia": new Date("2023-10-26"), "canvi": 383.5, "mes": 10},
{ "dia": new Date("2023-10-27"), "canvi": 382.93, "mes": 10},
{ "dia": new Date("2023-10-30"), "canvi": 382.43, "mes": 10},
{ "dia": new Date("2023-10-31"), "canvi": 382.13, "mes": 10},
{ "dia": new Date("2023-11-01"), "canvi": 383.75, "mes": 11},
{ "dia": new Date("2023-11-02"), "canvi": 382.00, "mes": 11}
]

var width = 750,
      height = 750,
      start = 0,
      end = 2.25,
      numSpirals = 3
      margin = {top:50,bottom:50,left:50,right:50};

    var theta = function(r) {
      return numSpirals * Math.PI * r;
    };

    // used to assign nodes color by mes
    var color = d3.scaleOrdinal(d3.schemeCategory10);

    var r = d3.min([width, height]) / 2 - 40;

    var radius = d3.scaleLinear()
      .domain([start, end])
      .range([40, r]);

    var svg = d3.select("#chart").append("svg")
      .attr("width", width + margin.right + margin.left)
      .attr("height", height + margin.left + margin.right)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var points = d3.range(start, end + 0.001, (end - start) / 1000);

    var spiral = d3.radialLine()
      .curve(d3.curveCardinal)
      .angle(theta)
      .radius(radius);

    var path = svg.append("path")
      .datum(points)
      .attr("id", "spiral")
      .attr("d", spiral)
      .style("fill", "none")
      .style("stroke", "steelblue");

    var spiralLength = path.node().getTotalLength(),
        N = 365,
        barWidth = (spiralLength / N) - 1;

/*
    var someData = [];
    for (var i = 0; i < N; i++) {
      var currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + i);
      someData.push({
        date: currentDate,
        value: Math.random(),
        group: currentDate.getMonth()
      });
    }
*/

    var timeScale = d3.scaleTime()
      .domain(d3.extent(someData, function(d){
        return d.dia;
      }))
      .range([0, spiralLength]);
    
    // yScale for the bar height
    var yScale = d3.scaleLinear()
      .domain([350, d3.max(someData, function(d){
        return d.canvi;
      })])
      .range([0, (r / numSpirals) - 30]);

    svg.selectAll("rect")
      .data(someData)
      .enter()
      .append("rect")
      .attr("x", function(d,i){
        
        var linePer = timeScale(d.dia),
            posOnLine = path.node().getPointAtLength(linePer),
            angleOnLine = path.node().getPointAtLength(linePer - barWidth);
      
        d.linePer = linePer; // % distance are on the spiral
        d.x = posOnLine.x; // x postion on the spiral
        d.y = posOnLine.y; // y position on the spiral
        
        d.a = (Math.atan2(angleOnLine.y, angleOnLine.x) * 180 / Math.PI) - 90; //angle at the spiral position

        return d.x;
      })
      .attr("y", function(d){
        return d.y;
      })
      .attr("width", function(d){
        return barWidth;
      })
      .attr("height", function(d){
        return yScale(d.canvi);
      })
      .style("fill", function(d){return color(d.mes);})
      .style("stroke", "none")
      .attr("transform", function(d){
        return "rotate(" + d.a + "," + d.x  + "," + d.y + ")"; // rotate the bar
      });
    
    // add date labels
    var tF = d3.timeFormat("%b %Y"),
        firstInMonth = {};

    svg.selectAll("text")
      .data(someData)
      .enter()
      .append("text")
      .attr("dy", 10)
      .style("text-anchor", "start")
      .style("font", "10px arial")
      .append("textPath")
      // only add for the first of each month
      .filter(function(d){
        var sd = tF(d.dia);
        if (!firstInMonth[sd]){
          firstInMonth[sd] = 1;
          return true;
        }
        return false;
      })
      .text(function(d){
        return tF(d.dia);
      })
      // place text along spiral
      .attr("xlink:href", "#spiral")
      .style("fill", "grey")
      .attr("startOffset", function(d){
        return ((d.linePer / spiralLength) * 100) + "%";
      })


    var tooltip = d3.select("#chart")
    .append('div')
    .attr('class', 'tooltip');

    tooltip.append('div')
    .attr('class', 'dia');
    tooltip.append('div')
    .attr('class', 'canvi');

    svg.selectAll("rect")
    .on('mouseover', function(d) {

        tooltip.select('.dia').html("dia: <b>" + d.dia.toDateString() + "</b>");
        tooltip.select('.canvi').html("canvi: <b>" + Math.round(d.canvi*100)/100 + "<b>");

        d3.select(this)
        .style("fill","#FFFFFF")
        .style("stroke","#000000")
        .style("stroke-width","2px");

        tooltip.style('display', 'block');
        tooltip.style('opacity',2);

    })
    .on('mousemove', function(d) {
        tooltip.style('top', (d3.event.layerY + 10) + 'px')
        .style('left', (d3.event.layerX - 25) + 'px');
    })
    .on('mouseout', function(d) {
        d3.selectAll("rect")
        .style("fill", function(d){return color(d.mes);})
        .style("stroke", "none")

        tooltip.style('display', 'none');
        tooltip.style('opacity',0);
    });