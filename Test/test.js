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

	// svg is the node of the chart displayed on the page
	setTimeout(() => {
		var svg = document.querySelector("#chart_div svg");
		downloadSVG(svg, "image");
		downloadPNG(svg, "image");
		downloadJPG(chart, "image");
		downloadPDF(chart, "image");
	}, 2000);
}
