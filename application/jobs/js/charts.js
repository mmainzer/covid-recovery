// set the dimensions and margins for the chart
let margin = {top: 10, right: 30, bottom: 30, left: 60};
let height = $(window).height() * .33;
let width = $(window).width() * .45;

width = width - margin.left - margin.right,
height = height - margin.top - margin.bottom;

// append the svg object for cases chart
const svgClaims = d3.select("#claimsBar")
					  .append("svg")
					    .attr("width", width + margin.left + margin.right)
					    .attr("height", height + margin.top + margin.bottom)
					  .append("g")
					    .attr("transform",
					          "translate(" + margin.left + "," + margin.top + ")");

// append the svg object for cases chart
const svgIndustry = d3.select("#industryBar")
						  .append("svg")
						    .attr("width", width + margin.left + margin.right)
						    .attr("height", height + margin.top + margin.bottom)
						  .append("g")
						    .attr("transform",
						          "translate(" + margin.left + "," + margin.top + ")");

// date parser
const parser = d3.timeParse("%m-%d-%Y");

let claimData;
let yClaims;
let xAxis;
let barsClaims;

d3.csv('https://raw.githubusercontent.com/mmainzer/covid-recovery/master/application/app-data/uiClaims.csv', d3.autoType)
	.then(function(data) {
		claimData = data;
		// list of areas to filter by
		const areas = d3.map(data, function(d){return(d.Area)}).keys()
		const dates = ( d3.map(data, function(d){return(d.date)}).keys() ).length - 1

		// add x axis --> it is a date format
		let x = d3.scaleBand()
					.range([ 0, width ])
					.domain(data.map(function(d) { return d.date; }))
					.padding(0.2);

		// let xAxis = d3.axisBottom(x).tickValues(x.domain());
		xAxis = d3.axisBottom(x).tickValues(x.domain());

		svgClaims.append("g")
					.attr( "transform", "translate(0," + height + ")" )
					.call(xAxis);

		// add y axis for claims
		yClaims = d3.scaleLinear().range([height, 0]);
		yClaims.domain([0, d3.max(data, function(d) { return d.Claims; }) + 5]);


		svgClaims.append("g")
					.attr("class","y axis")
					.call(d3.axisLeft(yClaims).ticks(5));


		// create the bar charts
		barsClaims = svgClaims.selectAll("barClaims")
							.data(data.filter(function(d){return d.Area==areas[0]}))
							.enter()
							.append("rect")
							.attr("class", "bar claims")
							.attr("x", function(d) { return x(d.date); })
						    .attr("y", function(d) { return yClaims(d.Claims); })
						    .attr("width", x.bandwidth())
						    .attr("height", function(d) { return height - yClaims(d.Claims); })
						    .attr("fill", "#003a5d")
						    .attr("border-color", "#003a5d")

});
