// Grab a reference to the button
const button = document.getElementById('myButton');
let count = 0;
// Event listener
button.addEventListener('click', function () {
    // What should happen when the button is clicked?
    const countSpan = document.getElementById('clickCount');
    count = count + 1;
    countSpan.innerHTML = count.toString();
});
import vegaEmbed from "vega-embed";
const dataset = await (await fetch('lab-6-dataset.json')).text();
const countyData = JSON.parse(dataset);
const csEnrollment = countyData.filter((c) => ['AP CS', 'Non-AP CS'].includes(c['courseType']));
const baseChart = {
    title: 'CS Enrollments',
    data: {
        values: csEnrollment
    },
    mark: {
        type: 'bar'
    },
    encoding: {
        x: {
            field: 'race',
            type: 'nominal'
        },
        y: {
            field: 'totalStudents',
            aggregate: 'sum',
            type: 'quantitative',
            title: 'Number of students'
        },
    }
};
let categories = [];
vegaEmbed('#chart', baseChart);
document.querySelector('#rural').addEventListener('change', function () {
    // Create a new chart and draw that
    let newChart;
    if (this.checked) {
        categories.push('rural');
    }
    else {
        categories = categories.filter(c => c !== 'rural');
    }
    newChart = getChart(categories, baseChart);
    vegaEmbed('#chart', newChart);
});
// Every time the "gender" box is checked or unchecked,
// the following code is run.
const genderCheckbox = document.querySelector('#gender');
genderCheckbox.addEventListener('change', function () {
    // Inside here, "this" refers to the checkbox
    let newChart;
    if (this.checked) {
        categories.push('gender');
        // Make a copy of the old chart.
        newChart = getChart(categories, baseChart);
    }
    else {
        categories = categories.filter(c => c !== 'gender');
        newChart = getChart(categories, baseChart);
    }
    vegaEmbed('#chart', newChart);
});
function getChart(categories, baseChart) {
    const copy = JSON.parse(JSON.stringify(baseChart));
    if (categories.includes('gender')) {
        copy['encoding']['color'] = {
            field: 'gender',
            type: 'nominal'
        };
    }
    if (categories.includes('rural')) {
        copy['encoding']['row'] = {
            field: 'isRural',
            type: 'nominal'
        };
    }
    return copy;
}
//# sourceMappingURL=script.js.map