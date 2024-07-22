# Activity — Loop patterns

Think about how you would go about solving the following problem using one or more of the loop patterns we've learned about. We'll talk about implementing them as a class.

Let’s imagine that you have a list that contains amounts of rainfall for each day, collected by a meteorologist. Her rain gathering equipment occasionally makes a mistake and reports a negative amount for that day. We have to ignore those. Additionally, there will be a "sentinel" value of "-99999", after which we stop counting.

We need to write a program to (a) calculate the total rainfall by adding up all the positive integers (and only the positive integers) up to the sentinel value, (b) count the number of positive integers, and (c) return the average rainfall at the end. Only return the average if there was some rainfall, otherwise return `-Infinity`.