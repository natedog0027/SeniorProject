Final project

For your final project in this course, you'll work in groups of 2–3 to create a data-driven website containing analyses, visualisations, and reflections based on a real-world dataset.

You can choose one of the following datasets:

    A dataset of your choice the CORGIS dataset of datasets — This option is recommended
    CS Education in California high schools (available in data/lab-6-dataset.json)
    Cats sheltered at the Cal Poly Cat Program (available in data/cat-program.json)
        This is an expanded version of the dataset you used in lab 1.

What's important is that the dataset is meaningful to you and your teammates, or your community. Your "community" here can be broadly construed — your household, your dorm, your family, your academic community, etc.
Task overview

Your task in this lab is to produce a data-driven web-based report based on the dataset you choose to work with. Think about it like writing a paper, but instead of just words, you're also presenting your data analysis.

You will put together everything you've learned so far to produce this document. Namely:

    HTML and CSS
    Vega-lite
    TypeScript

Put simply, I'd like for you to "tell me something interesting" from the data. For example, if you choose to work with the CS Education dataset, dig deeper into equity issues related to who takes CS courses in California schools.

For example, if you work with the Cat Program data, some questions you can try to answer are:

    Are older cats more or less likely to end up at the shelter permanently?
    Are older cats more likely to have health issues?
    Do most cats get their health shots before or after reaching the shelter?
    Are cats of certain colours likely to be at the shelter for longer periods of time than others?

You're encouraged to pursue questions that you find interesting. There is no requirement that you come up with "significant" or "surprising" responses.
Requirements

This is a fairly open-ended project. But there are a few minimum requirements I'd like each project to meet.

    You should produce 1–3 HTML pages. If you produce only 1, then it should be substantial. If you produce more than 1, then you should have a good reason for breaking it up into multiple pages.

    The "front page" (index.html) of your report should include a meaningful title as well as the names of all group members.

    You must produce at least 3 Vega-lite figures.
        Each figure should have a meaningful chart title and axis titles.
        Each figure should be accompanied by a <p> tag describing the main insights drawn from the figure.
        There should be at least 2 types of figures (e.g., don't produce only bar charts or only scatterplots).
        At least one figure should use the color visual encoding.

    You must use TypeScript to transform the data into suitable formats for your charts.
        This involves using functions, interfaces, map/filter/reduce, etc.
        In the <p> tag describing a given figure's insights, also describe in plain English any transformations you applied to the data to make the chart possible.

    You must use CSS to style your HTML page(s). The page(s) should be aesthetically pleasing, but should not distract from the key points in your report.

Submission and final presentation

Submit your project using Replit by the project deadline.

On the last day of class, your group will give a brief (5–7 minute) demonstration of your report in front of the rest of the class.