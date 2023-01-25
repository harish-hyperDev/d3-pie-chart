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

var color = d3.scaleOrdinal()                
                .range(['#ffd384','#94ebcd','#fbaccc','#d3e0ea','#fa7f72']);

var pie = d3.pie().value((d) => {return d.share})

var tooltip = d3.select("body")
                .append("div")
                .attr('class', 'tooltip')
                .style("position", "absolute")
                .style("z-index", "10")
                .style("visibility", "hidden")
                .style("background", "#fff")
                .style("padding", "5px")
                .style("border-radius", "7px")
                .text("");
        

var arc = g.selectAll("arc")
            .data(pie(data))
            .enter()

var path = d3.arc()
            .innerRadius(0)
            .outerRadius(radius);

    arc.append("path")        
        .attr("d", path)        
        .attr("fill", (d) => {return color(d.data.name)})

        // mouseover effects
        .on("mouseover", (d) => { 
                                    tooltip.text(d.data.share); 
                                    return tooltip.style("visibility", "visible");
                                })

        .on("mousemove", () => { 
                                    return tooltip.style("top", (d3.event.pageY-10)+"px")
                                                  .style("left",(d3.event.pageX+15)+"px");
                            })

        .on("mouseout", () => { return tooltip.style("visibility", "hidden") })


var label = d3.arc()
                .innerRadius(0)
                .outerRadius(radius)
                
            arc.append("text")
                .attr("transform", (d) => `translate(${label.centroid(d)})`)
                .text((d) => { return d.data.name })                
                .style("font-family", "arial")
                .style("font-size", "15")
                

// var mouseover = 
// console.log(pie(data))


/* var arcs = g.selectAll("arc")
            .data(pie(data))
            .enter()
            .append("g")
            .attr("class", "arc")
            .append("path")
            .attr("class","tooltip_area")
            .attr("fill", (d,i) => {
                return color(i)
            })
            .attr("d", arc); */
            

    

/* svg.selectAll(".arc")
    .data(pie(data))
    .enter()
    .append("text")
    .text((d) => { return d.data.name })
    .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")";  })
    .style("text-anchor", "middle")
    .style("font-size", 17) */

