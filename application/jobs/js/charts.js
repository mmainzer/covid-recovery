// set the dimensions and margins for the chart
let margin = {top: 10, right: 30, bottom: 30, left: 60};
let height = $(window).height() * .33;
let width = $(window).width() * .44;
let indMargin = {top: 10, right: 20, bottom: 50, left: 125};
let indWidth = $(window).width() * .44;
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

// initiate global variables to use outside of d3 call
let claimData;
let yClaims;
let xAxis;
let barsClaims;

let industryData;
let xIndustry;
let yIndustry;
let barsIndustry;

// get data and build first bar chart
d3.csv('https://raw.githubusercontent.com/mmainzer/covid-recovery/master/application/app-data/uiClaims.csv', d3.autoType)
	.then(function(data) {
		
		claimData = data;
		// list of areas to filter by
		const areas = d3.map(data, function(d){return(d.Area)}).keys()

		buildTable(claimData,claimData[0].Area);

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
					.call(d3.axisLeft(yClaims).ticks(5).tickFormat(d3.format("~s")));

		// create a tooltip
		const claimsTip = d3.select("#claimsBar")
								.append("div")
							    .style("opacity", 0)
							    .attr("class", "tooltip")
							    .style("background-color", "white")
							    .style("border", "solid")
							    .style("border-width", "2px")
							    .style("border-radius", "5px")
							    .style("padding", "5px")

		const claimsMouseOver = function(d) {
			claimsTip
			      .style("opacity", 1)
			    d3.select(this)
			      .style("stroke", "black")
			      .style("opacity", 1)
		}

		const claimsMouseMove = function(d) {
			claimsTip
			      .html("There were " + d.Claims + " in " + d.Area + " during the week of " + d.date)
			      .style("left", (event.pageX-100)+"px")
			      .style("top", (event.pageY-100)+"px")
		}

		const claimsMouseLeave = function(d) {
			claimsTip
			      .style("opacity", 0)
			    d3.select(this)
			      .style("stroke", "none")
		}

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
							.on("mouseover", claimsMouseOver)
						    .on("mousemove", claimsMouseMove)
						    .on("mouseleave", claimsMouseLeave)



});

// for industry bar chart
d3.csv('https://raw.githubusercontent.com/mmainzer/covid-recovery/master/application/app-data/industryClaims.csv', d3.autoType)
	.then(function(data) {
		industryData = data;
		// list of areas to filter by
		const areas = d3.map(industryData, function(d){return(d.Area)}).keys()

		buildIndustryTable(industryData,industryData[0].Area);

		// add x axis for claims
		xIndustry = d3.scaleLinear()
							.domain([0, d3.max(data, function(d) { return d.Claims; }) + 5])
							.range([0,indWidth]);
		
		svgIndustry.append("g")
					.attr("transform", "translate(0," + indHeight + ")")
					.attr("class","x axis")
					.call(d3.axisBottom(xIndustry).tickFormat(d3.format("~s")))
					.selectAll(".tick text")
						.attr("transform", "translate(-10,0)rotate(-45)")
	      				.style("text-anchor", "end");
				

		// add y axis for industry labels
		yIndustry = d3.scaleBand()
						    .range([ 0, indHeight ])
						    .domain(industryData.map(function(d) { return d.Ind; }))
						    .padding(.1);
		
		svgIndustry.append("g")
		    		.call(d3.axisLeft(yIndustry))

		  // create a tooltip
		const industryTip = d3.select("#industryBar")
								.append("div")
							    .style("opacity", 0)
							    .attr("class", "tooltip")
							    .style("background-color", "white")
							    .style("border", "solid")
							    .style("border-width", "2px")
							    .style("border-radius", "5px")
							    .style("padding", "5px")

		const indMouseOver = function(d) {
			industryTip
			      .style("opacity", 1)
			    d3.select(this)
			      .style("stroke", "black")
			      .style("opacity", 1)
		}

		const indMouseMove = function(d) {
			industryTip
			      .html("Since March, there have been " + d.Claims + " claims in " + d.Industry + " in " + d.Area)
			      .style("left", (event.pageX+50)+"px")
			      .style("top", (event.pageY)+300+"px")
		}

		const indMouseLeave = function(d) {
			industryTip
			      .style("opacity", 0)
			    d3.select(this)
			      .style("stroke", "none")
		}


		// create the bar charts
		barsIndustry = svgIndustry.selectAll("barsIndustries")
							.data(industryData.filter(function(d){return d.Area==areas[0]}))
							.enter()
							.append("rect")
								.attr("class", "bar claims")
								.attr("x", xIndustry(0) )
							    .attr("y", function(d) { return yIndustry(d.Ind); })
							    .attr("width", function(d) { return xIndustry(d.Claims); })
							    .attr("height", yIndustry.bandwidth() )
							    .attr("fill", "#003a5d")
							    .attr("border-color", "#003a5d")
							.on("mouseover", indMouseOver)
						    .on("mousemove", indMouseMove)
						    .on("mouseleave", indMouseLeave)

});
