// Follow along with the instructions here.
import vegaEmbed, { VisualizationSpec } from "vega-embed";

const chart: VisualizationSpec = {
  data: {
    url: "https://gist.githubusercontent.com/ayaankazerouni/b760d0b26460d0d95d6b02e85d83cca7/raw/ad1b24a675c4285b8e4d1735d83e1dd041bc2f12/cat-program.json"
  },
  mark: {
    type: 'point'
  },
  encoding: {
    x: {
      field: 'Birthday',
      type: 'temporal'
    },
    y: {
      field: 'Arrival Date',
      type: 'temporal'
    },
    color: {
      field: 'Sex',
      type: 'nominal'
    },
    shape: {
      field: 'Up for Adoption',
      type: 'nominal'
    }
  }
};

const el = document.getElementById('chart');
vegaEmbed(el, chart);

// This is a URL1
const countyDataStr: string = await (await fetch('lab-6-dataset.json')).text();

const countyData = JSON.parse(countyDataStr);


console.log("Some logged text here I am");

