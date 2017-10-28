// Our labels along the x-axis
var years = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017];
// For drawing the lines
var cocacola = [41.41,44.14,58.21,67.63,67.99,73.76,74.29,78.42,80.69,83.84,80.31,78.14];
//var apple = [15.98,24.73,55.21,63.11,83.15,153.29,182.92,185.07,147.88,246.99,228.46,234.67]; CHANGE TO CONSUMTION?????

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
		{ 
		  data: cocacola,
		  label: "Coca Cola",
		  borderColor: "white",
		  fill: false
		}/*,
		{
		data: apple,
		label: "Apple",
		borderColor: "#2e5b7f",
		fill: false
		}*/
	    ]
  }
});