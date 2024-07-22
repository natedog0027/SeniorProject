import vegaEmbed, { VisualizationSpec } from 'vega-embed';


// Read the data
const dataset: string = await (await fetch('dataset.json')).text();
const countyData = JSON.parse(dataset);
