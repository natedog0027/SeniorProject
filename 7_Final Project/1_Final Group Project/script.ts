import vegaEmbed, { VisualizationSpec } from "vega-embed";

// TODO: Change this line to read the dataset of your choice. Right now this just reads the cat program dataset. Replace this with your own data file.
const dataString: string = await (await fetch('data/cat-program.json')).text();

// TODO: Define an interface to describe the dataset, and set that interface as the type of this dataset array.
const dataset = JSON.parse(dataString);
