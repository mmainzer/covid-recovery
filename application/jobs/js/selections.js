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

	// set the correct label and kpi values for the first geography now filtered
	$('#geo').text(selectedOption);
	$('#kpiOne').text(kpiSelect[selectedOption].MarchEmployed);
    $('#kpiTwo').text(kpiSelect[selectedOption].CumClaims);
    $('#kpiThree').text(kpiSelect[selectedOption].Employed);
    $('#kpiFour').text(kpiSelect[selectedOption].Unemployed);
    $('#kpiFive').text(kpiSelect[selectedOption].PctChngEmployed);

    if (selectedLevel == 'MSA') {
		// hide rc layer
		map.setLayoutProperty('rcLines','visibility','none');
		map.setLayoutProperty('countyLines','visibility','none');
		// filter msa layer
		map.setFilter('msaLines',["match",["get","NAME"],selectedOption,true,false]);
		// show msa layer
		map.setLayoutProperty('msaLines','visibility','visible');
	} else if (selectedLevel == 'Regional Commission') {
		// hide msa layer
		map.setLayoutProperty('msaLines','visibility','none');
		map.setLayoutProperty('countyLines','visibility','none');
		// filter rc layer
		map.setFilter('rcLines',["match",["get","Regional Commission"],selectedOption,true,false]);
		// show rc layer
		map.setLayoutProperty('rcLines','visibility','visible');
	} else if (selectedLevel == 'County') {
		map.setLayoutProperty('msaLines','visibility','none');
		map.setLayoutProperty('rcLines','visibility','none');
		map.setFilter('countyLines',["match",["get","County"],selectedOption,true,false]);
		map.setLayoutProperty('countyLines','visibility','visible');
	} else {
		// hide rc and msa layers
		map.setLayoutProperty('msaLines','visibility','none');
		map.setLayoutProperty('rcLines','visibility','none');
		map.setLayoutProperty('countyLines','visibility','none');
	}

});

// when the drop down select is changed, run the update chart function
$("#geo-select").change(function() {
	// recover selected option
	let selectedOption = d3.select(this).property("value")
	let selectedLevel = $('#level-select option:selected').text()
	// run the updated chart function with this selected option
	$('#geo').text(selectedOption);
	$('#kpiOne').text(kpiSelect[selectedOption].MarchEmployed);
    $('#kpiTwo').text(kpiSelect[selectedOption].CumClaims);
    $('#kpiThree').text(kpiSelect[selectedOption].Employed);
    $('#kpiFour').text(kpiSelect[selectedOption].Unemployed);
    $('#kpiFive').text(kpiSelect[selectedOption].PctChngEmployed);

	if (selectedLevel == 'MSA') {
		// hide rc layer
		map.setLayoutProperty('rcLines','visibility','none');
		map.setLayoutProperty('countyLines','visibility','none');
		// filter msa layer
		map.setFilter('msaLines',["match",["get","NAME"],selectedOption,true,false]);
		// show msa layer
		map.setLayoutProperty('msaLines','visibility','visible');
	} else if (selectedLevel == 'Regional Commission') {
		// hide msa layer
		map.setLayoutProperty('msaLines','visibility','none');
		map.setLayoutProperty('countyLines','visibility','none');
		// filter rc layer
		map.setFilter('rcLines',["match",["get","Regional Commission"],selectedOption,true,false]);
		// show rc layer
		map.setLayoutProperty('rcLines','visibility','visible');
	} else if (selectedLevel == 'County') {
		map.setLayoutProperty('msaLines','visibility','none');
		map.setLayoutProperty('rcLines','visibility','none');
		map.setFilter('countyLines',["match",["get","County"],selectedOption,true,false]);
		map.setLayoutProperty('countyLines','visibility','visible');
	} else {
		// hide rc and msa layers
		map.setLayoutProperty('msaLines','visibility','none');
		map.setLayoutProperty('rcLines','visibility','none');
		map.setLayoutProperty('countyLines','visibility','none');
	}

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