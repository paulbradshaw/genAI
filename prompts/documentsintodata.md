# Prompts for turning documents into data

Documents can be a valuable source of *unstructured* data, and genAI tools can be useful in extracting that data and structuring it into a table. 

Here are some scenarios with prompt templates.

## Identifying potential ways of quantifying text

This first prompt is a good starting point for understanding how the documents might be turned into data:

```
I am a data journalist looking for potential stories in these documents.

Suggest ways that the documents could be quantified.

Identify 5 examples of textual data that could be extracted from that document and quantified (e.g. number of mentions, sentiment etc.)
```

## Classifying documents

If you have a series of similar documents, such as FOI responses, policies, reports, etc. then you can ask for a table which identifies which themes are mentioned in which documents. This can then be used to identify the scale of an issue (e.g. half of reports mention X) or its absence (e.g. only one in ten reports mention X). It can guide your reporting to the areas which are being most, or least, mentioned.

The key is to have a good list of the themes which could or should be mentioned. In the example prompt below the documents are [gender pay gap action plans](https://github.com/paulbradshaw/genAI/tree/main/docsfornotebooklm/genderpaygapplans) and the list comes from a page on "evidence-informed actions to reduce your gender pay gap and support employees experiencing menopause".

Note that the prompt should always also ask to include the page reference to allow for verification

```
Create a CSV table with a row for each document and a column for each measure listed below.
For each cell include any pages where that measure is mentioned in the document.

## MEASURES LIST:

Make job descriptions inclusive
Encourage applications from a range of candidates
Etc.
```

## Extracting data from sentences

Another scenario might involve reports where figures are part of sentences. In the Sovereign Grant Report 2023-24, for example, there are sentences like this: "In the year, members of the Royal Family undertook over 2,300 public engagements. His Majesty undertook 464 official engagements"

Here's a prompt which can be adapted to extract and structure that data - note that the prompt should always also store the page reference to allow for verification:

```
Create a table with a row for each Sovereign Grant report, and two columns for each member of the royal family. 

In the first column for each member extract the number of engagements attributed to that royal in that report. 

In the second column extract the page number where that information came from.
```

## Extracting entities: people, places, organisations, etc.

A common technique for turning documents into data is **entity extraction**: this is the process of identifying 'entities' such as people, organisations, places, and so on, which form the characters and settings of events that the documents might be able to tell stories about.

Here's an example of a prompt which uses this to identify the most common places mentioned in a series of documents. As always, it asks for a page number and document name, too, but also asks for further classification of the location by country and continent, for potential analysis later:

```
Use Named Entity Recognition (NER) to extract locations of all engagements mentioned in the Sovereign Grant Reports. 

Create a CSV table containing each separate location in column 1, with other columns detailing: the report name | year | page number | members of royal family involved (if named) | country | continent | quote details of visit | 

Where more than one location is part of a visit, put each location on a separate row, and add a ‘engagement ID’ column to indicate that each location was part of a single engagement (which will all share the same ID).
```
