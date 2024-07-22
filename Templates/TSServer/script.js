// Read the data
const dataset = await (await fetch('dataset.json')).text();
const countyData = JSON.parse(dataset);
export {};
//# sourceMappingURL=script.js.map