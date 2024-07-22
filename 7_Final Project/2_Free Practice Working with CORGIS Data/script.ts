import vegaEmbed, { VisualizationSpec } from "vega-embed";

const response = await fetch('https://think.cs.vt.edu/corgis/datasets/json/astronauts/astronauts.json');
const data = await response.json();

/*
{
  Profile: {
    
  },
  Mission: {
    Durations: {
      mission duration
      eva duration
    }
  }
}
*/

interface LifetimeEVAHours {
  name: string,
  evaHours: number
};

const toPlot: LifetimeEVAHours[] = [];
for (const current of data) {
  const astronautName: string = current['Profile']['Name'];
  const lifetimeEVAHours: number = current['Profile']['Lifetime Statistics']['EVA duration'];

  const obj: LifetimeEVAHours = {
    name: astronautName,
    evaHours: lifetimeEVAHours
  };

  if (!toPlot.includes(obj)) {
    toPlot.push(obj);
  }
}

toPlot.sort((a, b) => b['evaHours'] - a['evaHours']);

const chart: VisualizationSpec = {
  title: "Astronaut EVA hours",
  data: {
    values: toPlot
  },
  mark: 'bar',
  encoding: {
    x: {
      field: 'name',
      type: 'nominal',
      sort: '-y'
    },
    y: {
      field: 'evaHours',
      type: 'quantitative',
    }
  }
}

const div: HTMLElement = document.getElementById('chart');
vegaEmbed(div, chart);