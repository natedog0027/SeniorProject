import vegaEmbed from "vega-embed";
const response = await fetch('https://think.cs.vt.edu/corgis/datasets/json/astronauts/astronauts.json');
const data = await response.json();
;
const toPlot = [];
for (const current of data) {
    const astronautName = current['Profile']['Name'];
    const lifetimeEVAHours = current['Profile']['Lifetime Statistics']['EVA duration'];
    const obj = {
        name: astronautName,
        evaHours: lifetimeEVAHours
    };
    if (!toPlot.includes(obj)) {
        toPlot.push(obj);
    }
}
toPlot.sort((a, b) => b['evaHours'] - a['evaHours']);
const chart = {
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
};
const div = document.getElementById('chart');
vegaEmbed(div, chart);
//# sourceMappingURL=script.js.map