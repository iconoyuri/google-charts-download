google.charts.load("current", {
	packages: ["geochart"],
});
google.charts.setOnLoadCallback(drawRegionsMap);
function drawRegionsMap() {
	var data = google.visualization.arrayToDataTable([
		["Country", "Popularity"],
		["Germany", 200],
		["United States", 300],
		["Brazil", 400],
		["Canada", 500],
		["France", 600],
		["Cameroon", 600],
		["RU", 700],
	]);

	var options = {};

	var chart = new google.visualization.GeoChart(
		document.getElementById("chart_div")
	);

	chart.draw(data, options);
	// rect = charDiv.querySelector("svg > rect");
	// rect.remove();

	// svg is the tag representing the chart displayed on the page
	setTimeout(() => {
		var svg = document.querySelector("#chart_div svg");
		// svg.
		// console.log(svg)
		downloadSVG(svg, "image");
		downloadPNG(svg, "image");
		downloadJPG(chart, "image");
	}, 2000);
}
