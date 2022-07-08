// From chart variable download

function downloadJPG(chart, imageTitle) {
	var img = new Image();
	img.addEventListener("load", function () {
		var canvas = document.createElement("canvas");
		canvas.width = img.width;
		canvas.height = img.height;
		var ctx = canvas.getContext("2d");
		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, img.width, img.height);
		ctx.drawImage(img, 0, 0);
		var link = document.createElement("a");
		link.href = canvas.toDataURL("image/jpeg");
		link.download = imageTitle + ".jpg";
		link.click();
	});
	img.src = chart.getImageURI();
}

function downloadPDF(chart, fileName){
	var img = new Image();
	img.addEventListener("load", function () {
		var canvas = document.createElement("canvas");
		canvas.width = img.width;
		canvas.height = img.height;
		var ctx = canvas.getContext("2d");
		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, img.width, img.height);
		ctx.drawImage(img, 0, 0);
		imgData = canvas.toDataURL("image/jpeg")

		window.jsPDF = window.jspdf.jsPDF;
		var pdf = new jsPDF();

		pdf.addImage(imgData, "JPEG", 10, 10);
		pdf.save(fileName + ".pdf");
	});
	img.src = chart.getImageURI();
}

// From svg node

function downloadSVG(svg, imageTitle) {
	var rects = svg.querySelectorAll("rect");
	rects.forEach((element) => {
        if (element.getAttribute("fill") == "#ffffff")
            element.setAttribute("fill", "transparent")
	});


	var textSVG = new XMLSerializer().serializeToString(svg);
	var element = document.createElement("a");
	element.setAttribute(
		"href",
		"data:text/plain;charset=utf-8," + encodeURIComponent(textSVG)
	);
	element.setAttribute("download", imageTitle + ".svg");

	element.style.display = "none";
	element.click();


	rects.forEach((element) => {
		if(element.getAttribute("fill") == "transparent")
            element.setAttribute("fill","#ffffff")
	});
}

function downloadPNG(svg, imageTitle) {
	// svg variable is the svg tag from which we want to get an PNG
	var rects = svg.querySelectorAll("rect");
	rects.forEach((element) => {
        if (element.getAttribute("fill") == "#ffffff")
            element.setAttribute("fill", "transparent")
	});

	var textSvg = new XMLSerializer().serializeToString(svg);
	textSvg = '<?xml version="1.0"?>\n ' + textSvg;
	var imgsrc = "data:image/svg+xml;base64," + btoa(textSvg);
	var img = new Image();
	img.src = imgsrc;
	img.onload = function () {
		var canvas = document.createElement("canvas");
		canvas.width = img.width;
		canvas.height = img.height;
		var ctx = canvas.getContext("2d");
		ctx.fillStyle = "transparent";
		ctx.fillRect(0, 0, img.width, img.height);

		ctx.drawImage(img, 0, 0);
		var link = document.createElement("a");
		link.download = imageTitle + ".png";
		link.href = canvas.toDataURL("image/png");
		console.log(imageTitle);
		link.click();
	};


	rects.forEach((element) => {
		if(element.getAttribute("fill") == "transparent")
            element.setAttribute("fill","#ffffff")
	});
}
