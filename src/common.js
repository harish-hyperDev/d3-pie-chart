var data = [    {name: "Alex", share: 20.70}, 
                {name: "Shelly", share: 30.92},
                {name: "Clark", share: 15.42},
                {name: "Matt", share: 13.65},
                {name: "Jolene", share: 19.31}
            ];

var width = 500, height = 500, radius = Math.min(width, height)/2
var svg = d3.select("#chart")
            .append("svg")
            .attr("width", width)
            .attr("height", height)

var g = svg.append("g")
            .attr("transform", "translate ("+ width / 2 + "," + height / 2 + ")");

var color = d3.scaleOrdinal(['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c']);

var pie = d3.pie().value((d) => {return d.share})
var arc = d3.arc()            
            .innerRadius(0)
            .outerRadius(radius)

console.log(pie(data))

var arcs = g.selectAll("arc")
            .data(pie(data))
            .enter()
            /* .append("g")
            .attr("class", "arc") */

    arcs.append("path")
        .attr("class","tooltip_area")
        .attr("fill", (d,i) => {
            return color(i)
        })
        .attr("d", arc);


