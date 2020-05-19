// function to detect Internet Explorer

function isInternetExplorer() {
	return window.navigator.userAgent.match(/(MSIE|Trident)/);
}

function showBrowserAlert() {
	if(isInternetExplorer()){
       // Do not show initial form
       $("#form").hide();
       $("#browserAlert").show();
    } else {
    	console.log('All good');
    }
}

// Initialize the dropdowns as select2 dropdowns via jquery plugin
$(document).ready(function() {
    $('.single-select').select2();
    const startKpiVal = 'Georgia';
    $('#geo').text(startKpiVal);
    $('#kpiOne').text(kpiSelect[startKpiVal].MarchEmployed);
    $('#kpiTwo').text(kpiSelect[startKpiVal].CumClaims);
    $('#kpiThree').text(kpiSelect[startKpiVal].Employed);
    $('#kpiFour').text(kpiSelect[startKpiVal].Unemployed);
    $('#kpiFive').text(kpiSelect[startKpiVal].PctChngEmployed);
});

$("#point-select").change(function() {
	var val = $(this).val();
	var size = selectObj.points[val].circles;
	var minSize = selectObj.points[val].min;
	var maxSize = selectObj.points[val].max;
	$('#minSize').text(minSize);
	$('#maxSize').text(maxSize);

	map.setPaintProperty('points','circle-radius',size);

});

// function to update chart on geography select
function update(selectedGeo) {
	// create new data with the selection
	let dataFilter = claimData.filter(function(d){return d.Area==selectedGeo})

	// create new min and max for the y axis
	yClaims.domain([0, d3.max(dataFilter, function(d) { return d.Claims; }) + 5]);


	// give new data to bars for update
	barsClaims
		.data(dataFilter)
		.transition()
		.duration(1000)
		.attr("y", function(d) { return yClaims(d.Claims); })
		.attr("height", function(d) { return height - yClaims(d.Claims); })

	// add an update to the y axis
	svgClaims.select(".y.axis")
		.transition()
		.duration(1000)
		.call(d3.axisLeft(yClaims).ticks(5));

	$('#geo').text(selectedGeo);
	$('#kpiOne').text(kpiSelect[selectedGeo].MarchEmployed);
    $('#kpiTwo').text(kpiSelect[selectedGeo].CumClaims);
    $('#kpiThree').text(kpiSelect[selectedGeo].Employed);
    $('#kpiFour').text(kpiSelect[selectedGeo].Unemployed);
    $('#kpiFive').text(kpiSelect[selectedGeo].PctChngEmployed);


}

function geoHighlight(level, option) {
	console.log(option);
	if (level == 'MSA') {
		// hide rc layer
		map.setLayoutProperty('rcLines','visibility','none');
		map.setLayoutProperty('countyLines','visibility','none');
		// filter msa layer
		map.setFilter('msaLines',["match",["get","NAME"],option,true,false]);
		// show msa layer
		map.setLayoutProperty('msaLines','visibility','visible');
	} else if (level == 'Regional Commission') {
		// hide msa layer
		map.setLayoutProperty('msaLines','visibility','none');
		map.setLayoutProperty('countyLines','visibility','none');
		// filter rc layer
		map.setFilter('rcLines',["match",["get","Regional Commission"],option,true,false]);
		// show rc layer
		map.setLayoutProperty('rcLines','visibility','visible');
	} else if (level == 'County') {
		map.setLayoutProperty('msaLines','visibility','none');
		map.setLayoutProperty('rcLines','visibility','none');
		map.setFilter('countyLines',["match",["get","County"],option,true,false]);
		map.setLayoutProperty('countyLines','visibility','visible');
	} else {
		// hide rc and msa layers
		map.setLayoutProperty('msaLines','visibility','none');
		map.setLayoutProperty('rcLines','visibility','none');
		map.setLayoutProperty('countyLines','visibility','none');
	}
}

//populate the geography dropdown based on the level that's been chosen in the level dropdown
$("#level-select").change(function() {
	//remove any existing option from the geography select
	$("#geo-select option").remove();
	// get the value of item selected in level-select
	var _val = this.options[this.selectedIndex].value;
	// go through the geographies object, find the matching value, and create an option for each
	for (var i in geographies[_val]) {
		// create option target
		var op = document.createElement('option');
		// set option value value
		op.value = geographies[_val][i];
		// set the display label
		op.text = geographies[_val][i];
		// append it to geography dropdown
		$('#geo-select').append(op);
	}

	// get the correct selected geography for changing charts, labels, kpis
	let selectedLevel = $('#level-select option:selected').text()
	let selectedOption = $("#geo-select option").first().text();

	update(selectedOption);

    geoHighlight(selectedLevel,selectedOption);

});

// when the drop down select is changed, run the update chart function
$("#geo-select").change(function() {
	// recover selected option
	let selectedOption = d3.select(this).property("value")
	let selectedLevel = $('#level-select option:selected').text()
	
	update(selectedOption);

	geoHighlight(selectedLevel,selectedOption);

});