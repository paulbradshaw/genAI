# Prompts for data cleaning

![](https://onlinejournalismblog.com/wp-content/uploads/2023/02/dirty-data-problems.png)

Data cleaning can involve a number of different processes, from reshaping data to making terms consistent (for a full guide, see [What is dirty data and how do I clean it? A great big guide for data journalists](https://onlinejournalismblog.com/2023/04/18/what-is-dirty-data-and-how-do-i-clean-it-a-great-big-guide-for-data-journalists/))

Here are some useful prompts for each:

## Reshaping data

One of the most common cleaning tasks is reshaping data from a 'wide' format (a pivot table is a common example) to a 'long' one. 

For example, if you are given data in a pivot table with a column for each year, you will probably need to reshape it so that there is just a single column called 'year' instead.

Because this is a common process with its own jargon, you only need a relatively simple prompt (adapt the column names to your own scenario):

```
Reshape this data from wide to long so that it fits into the following columns:

Force	| Crime category| Crime code | Outcome description | Total | Year from | Year to
```

## Reconciliation: making naming consistent

If you have a column of data with inconsistent names, e.g. "Avon and Somerset" in one cell and "Avon & Somerset" in another, or acronyms like "BBC" but also full names like "British Broadcasting Corporation", AI can be very good at reconciling those. 

A good prompt for this task should include an example or list of the 'canonical' terms that you want to reconcile variations against. [This post](https://institute.aljazeera.net/en/ajr/article/3580) describes one such list as part of cleaning data for a project at Al Jazeera. In the example below I've uploaded a spreadsheet with multiple levels of crime category, as well as other contextual information like related codes and laws. 

You should also ask for a confidence level to be included - this allows you to filter the data to the low confidence matches first, and manually check those, then work up to the medium confidence, and so on. 

Here's the example prompt:

```
# OBJECTIVE
To create a lookup list of 'clean' crime categories to use when police provide multiple variations of those categories.
I have attached a spreadsheet with three columns of categories that should be used: 'Class', 'Sub class' and 'Offence'.
Each category could be from any of those levels.
Factors for variation include inconsistent spelling, capitalisation, abbreviation and case.
In some cases acronyms are used instead of full phrases (e.g. GBH instead of grievous bodily harm).
In others, extra information such as laws/sections and codes are included.

#TASK
I will give you a list of crime categories given by police in FOI responses. This will form the basis of a table.

Add a column which suggests the most likely 'clean' version for the category based on the CSV attached.

Add a third column indicate whether this is a 'Class', 'Sub class' or 'Offence' from the columns in the attached CSV 

Add a column indicating the 'confidence' level for that clean version (high, medium or low). 

If you are unable to allocate a clean version, indicate this instead.

Create a downloadable CSV from the resulting table.

[PASTE/ATTACH LIST, ATTACH CSV OF LIST OF CATEGORIES]
```
