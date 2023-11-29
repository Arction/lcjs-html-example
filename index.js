// Replace the contents of this script tag if you want to test code from our examples:
// https://www.arction.com/lightningchart-js-interactive-examples/

// Extract required parts from LightningChartJS.
/// <reference path="lcjs.iife.d.ts" />
const { lightningChart } = lcjs; //Note: @arction/lcjs is not needed here, when using IIFE assembly

const lc = lightningChart({
  // Get your license key from https://lightningchart.com/js-charts/
  //  license: 'my-license-key'
});

// Create a XY Chart.
const chart = lc
  .ChartXY({
    // Set the chart into a div with id, 'target'.
    // Chart's size will automatically adjust to div's size.
    container: "target",
  })
  .setTitle("My first chart"); // Set chart title

const data = [
  { x: 0, y: 1.52 },
  { x: 1, y: 1.56 },
  { x: 2, y: 1.42 },
  { x: 3, y: 1.85 },
  { x: 4, y: 1.62 },
];

// Add a line series.
const lineSeries = chart.addLineSeries().setName("My data").add(data);
