# Prompt template for data analysis

Using AI for data analysis is high risk because the results are likely to be audience-facing in some way, and require high accuracy (see the Pulitzer Center's risk matrix in their video on [Using AI in journalism](https://www.youtube.com/watch?v=u3w5SegQPMw&list=PLHnHDmnHTrxc1MwgZd3C4a2bvP6prwAft&index=8))

It is also high risk because large language models are precisely that: language models, not calculators. 

GenAI tools perform analysis by *translating* a prompt into a Python script that it then runs. This means that there is a lot of potential for a prompt to be badly expressed and misunderstood. In my experiments with the process, I found that [multiple mistakes were made](https://onlinejournalismblog.com/2025/09/16/i-tested-ai-tools-on-data-analysis-heres-how-they-did-and-what-to-look-out-for/), largely down to how a natural language question, with all its ambiguities, was mistranslated into unambiguous, literal Python code. 

A good prompt, therefore, should be very explicit and detailed about the steps to be taken. It is essential that you are able to see how it has interpreted and translated your request into working code - which means you need some understanding of data analysis and Python code, or develop it as part of the process. You should also attempt the same analysis yourself alongside, to compare results.

The template below attempts to anticipate some of these risks:

```
Attached is data on [DESCRIBE THE DATA], as well as a glossary explaining what the columns mean, and details of the methodology.

Calculate [DESCRIBE OBJECTIVE] using the [SPECIFY COLUMN].

[DESCRIBE THE STEPS TO BE TAKEN IN ORDER TO PERFORM THE CALCULATION REQUIRED]

Tell me how many rows contain missing or null values in that column and explain how you handled them.

Show me the code you used, with comments explaining each step as if to a 15-year-old with no coding experience. Adapt the code so that it can be run in Google Colab and tested.

Before running any code, flag any assumptions you are making about the data or my question. Warn me if the question does not contain enough information to answer accurately, or if the result could be misleading without additional context. 

After calculating, run a sanity check: show the total number of rows in the dataset and the number used in the calculation.
```

Some key points:

* Attaching a glossary and methodology reduces the risk that important context is lost, for both the AI and the human user
* Specifying columns reduces the risk that the AI has to predict which is the most likely column you want to use
* Avoid non-explicit terms like "average" - specify mean or median
* Avoid asking for the top or bottom - ask for the top 10 or bottom 10 to ensure that entities with the same value can be seen
* Describing the steps is key: this ensures that you have thought about the practicalities of transforming data (e.g. averaging, adding, counting, cleaning) from its original state to an end result
* Read the code and comments to try to understand the steps that the code is taking with the data, and consider any unintended steps or which might shape the results (e.g. filtering out or sorting in a certain way)

