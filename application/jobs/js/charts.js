// set the dimensions and margins for the chart
let margin = {top: 10, right: 30, bottom: 30, left: 60};
let height = $(window).height() * .33;
let width = $(window).width() * .45;
let indMargin = {top: 10, right: 30, bottom: 50, left: 125};
let indWidth = $(window).width() * .45;
let indHeight = $(window).height() * .5;

width = width - margin.left - margin.right,
height = height - margin.top - margin.bottom;

indWidth = indWidth - indMargin.left - indMargin.right,
indHeight = indHeight - indMargin.top - indMargin.bottom;

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
						    .attr("width", indWidth + indMargin.left + indMargin.right)
						    .attr("height", indHeight + indMargin.top + indMargin.bottom)
						  .append("g")
						    .attr("transform",
						          "translate(" + indMargin.left + "," + indMargin.top + ")");

// date parser
const parser = d3.timeParse("%m-%d-%Y");

let claimData;
let yClaims;
let xAxis;
let barsClaims;

let industryData;
let xIndustry;
let barsIndustry;

// get data and build first bar chart
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

// for industry bar chart
d3.csv('https://raw.githubusercontent.com/mmainzer/covid-recovery/master/application/app-data/industryClaims.csv', d3.autoType)
	.then(function(data) {
		industryData = data;
		// list of areas to filter by
		const areas = d3.map(data, function(d){return(d.Area)}).keys()
		const dates = ( d3.map(data, function(d){return(d.Ind)}).keys() ).length - 1

		// add x axis for claims
		xIndustry = d3.scaleLinear()
							.domain([0, d3.max(data, function(d) { return d.Claims; }) + 5])
							.range([0,indWidth]);
		
		svgIndustry.append("g")
					.attr("transform", "translate(0," + indHeight + ")")
					.call(d3.axisBottom(xIndustry).tickValues(xIndustry.domain()))
					.selectAll(".tick text")
						.attr("transform", "translate(-10,0)rotate(-45)")
	      				.style("text-anchor", "end");
				

		// add y axis for industry labels
		let yIndustry = d3.scaleBand()
						    .range([ 0, indHeight ])
						    .domain(data.map(function(d) { return d.Ind; }))
						    .padding(.1);
		
		svgIndustry.append("g")
		    		.call(d3.axisLeft(yIndustry))


		// create the bar charts
		barsIndustry = svgIndustry.selectAll("barsIndustries")
							.data(data.filter(function(d){return d.Area==areas[0]}))
							.enter()
							.append("rect")
							.attr("class", "bar claims")
							.attr("x", xIndustry(0) )
						    .attr("y", function(d) { return yIndustry(d.Ind); })
						    .attr("width", function(d) { return xIndustry(d.Claims); })
						    .attr("height", yIndustry.bandwidth() )
						    .attr("fill", "#003a5d")
						    .attr("border-color", "#003a5d")

});
