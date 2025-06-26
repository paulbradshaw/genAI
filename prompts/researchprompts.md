# Prompts for research

There are a number of **risks** in genAI tools for research:

* Hallucination (genAI makes up information - and references/citations)
* Biases (training data reflects wider issues around who is able to publish online and what they publish about)
* Knowledge cut-off (many genAI tools are only trained up to a certain date)
* Positivity and gullibility/credulousness (genAI is not very good at questioning sources or the premise of your prompt)
* Greediness (genAI tools tend to do more than asked).

The following prompts incorporate techniques to reduce some of these risks.

## Role prompting + Chain of Thought (CoT) + temperature

This prompt combines a number of prompt design techniques to reduce (but not remove!) the risk of hallucination:

```
Your role is to provide a neutral, well-sourced overview with minimal speculation. Avoid interpretative or speculative language. Base all statements on publicly available, credible sources. For every claim:

Check that the source exists and is publicly verifiable.

Assess the source’s credibility – prioritise official government websites, reputable news organisations, academic publications, or expert think tanks.

Note the independence or political leaning of the source, if relevant.

If a viewpoint is contested, present any known counterarguments or critiques, with source attribution.

Avoid conjecture – if data or confirmation is lacking, state that clearly.
```

## ReAct (Reason + Act) prompting

Another prompt design technique to tackle potential hallucination. Adapted from [Advanced Prompt Engineering for Reducing Hallucination](https://medium.com/@bijit211987/advanced-prompt-engineering-for-reducing-hallucination-bb2c8ce62fc6)

```
Prompt 1: [QUESTION]

Prompt 2: On a scale of 0 to 10, how confident are you in your answer above? Please explain your reasoning clearly.

Prompt 3: could you provide 1–2 factual sources where you have seen evidence for [CLAIM]? Please cite specific references.
```


## Augmenting prompts with documents

Searches of documents are much better than searches of the LLM's 'knowledge' (actually its ability to predict expressions of knowledge). 

This prompt incorporates some role prompting to reduce the 'temperature' of the language model, and Chain of Thought prompting to reduce potential hallucination.

The prompt is adapted from [Finding Newsworthy Documents using Generative AI](https://generative-ai-newsroom.com/finding-newsworthy-documents-using-generative-ai-a43a41a90e30) and a [Reddit thread by Jdonovan](https://www.reddit.com/r/LangChain/comments/1amjc9g/rag_does_not_stop_hallucinations/?rdt=40388)

```
You are a sceptical crime reporter with excellent judgment for what makes a compelling news story. You have years of experience of unpacking PR spin and political misinformation. You are working on an investigation about how the justice system deals with reports of harassment. 

Look at the attached conference proceedings and identify which 10 pieces of information are most relevant to the investigation — and what pages they are on. Your responses are always grounded in the specific document provided to you. Do not lie.

Internally generate three possible responses, then evaluate each for accuracy against the context
```

## Summarising documents

This prompt applies the same techniques as above, but also thinks about a structured output: a table.

```
You are a sceptical education reporter with excellent judgment for what makes a compelling news story. You have years of experience of unpacking PR spin and political misinformation. You are looking for ideas for a story about school uniform, specifically any potential stories about 1) rules not being followed, or 2) enforced, 3) unintended consequences of rules, or 4) new rules being needed. 

Look at the attached rules, regulations, laws and guidance that apply to uniform and create a table of all the rules mentioned, identifying the document(s) and page(s) where the rules comes from. Add columns for each of the four categories listed above, with suggestions. Provide a downloadable table in markdown.
```

## Focusing on techniques, not answers

Another risk of using genAI for research is **deskilling**, so consider prompts that focus on the journey (research strategies) rather than the destination (answers). That's particularly useful with OSINT. Here's an example prompt that does that (whether you use real or fake names will depend on how public the information is that you're working with):

```
You are an experienced OSINT researcher working with a team investigating council spending on school transport. The biggest beneficiary of that spending is a company called [FAKE? COMPANY NAME], and the team are looking to gather as much information as possible about its director, [INSERT FAKE? NAME]. 

[NAME] is also connected to a holding company, [COMPANY 1], and two other companies: [COMPANY 2] and [COMPANY 3]. 
Suggest OSINT strategies for identifying information about this person.
```

## Finding sources

Here's a basic prompt to generate a list of potential sources for stories. It incorporates a request for "diversity" to address biases in the language model's training data - but remember that "diversity" itself here is lacking context, and the model will therefore have to *predict* what you mean.

```
Suggest academic experts for an investigative feature on [the influence of the private sector on NHS dentistry]. Make sure they represent the diversity of society.
```

## Sourcing strategies + diversity

The prompt below adds in that context, defining explicitly what is meant by diversity. But even that isn't going to be enough: ChatGPT may be able to 'see' some genders by predicting what gender a name represents, and to a lesser extent ethnicity, but characteristics like sexuality, disability, etc. will have to be explicitly declared somewhere. 

As a result it's again better to ask for strategies instead of answers:

```
You are an editor on a [PUBLICATION + AUDIENCE]. A journalist is working on an investigation that will reveal [TOP LINE]

She is about to start gathering quotes for the piece from experts, representatives, those responsible and those affected, and wants to ensure the sources reflect the diversity of the society we live in—across race, gender, age, disability, socioeconomic background, geography, and other lived experiences.

Suggest a strategy for identifying potential interviewees who can offer varied perspectives on the topic. Specifically: 
Suggest practical steps to take to proactively seek out underrepresented voices. 
List examples of organisations, networks, or directories (especially UK-based, but include international if relevant) that connect journalists with diverse spokespeople or experts.

Provide guidance on how to approach individuals who are not traditional media commentators or who may have limited media experience.
```

## FOI requests

GenAI can be useful in **drafting** your FOI request, before you refine it - or you can use it to **review** an existing FOI request. Here's an example of a prompt to draft an initial FOI:

```
You are a [UK journalist] working on an investigation into [schools' contracts with suppliers of school uniform and sports kits]. Write an FOI request that can be sent to [each school] asking for details of the contract - anticipating potential exemptions that they may try to use to refuse the request
```

Here's one to review it:

```
You are a [media lawyer with an expertise in FOI]. A journalist working on an investigation into [schools' contracts with suppliers of school uniform and sports kits] has drafted an FOI request to send to [schools] asking for details of [contracts].

'Red team' the request as if you were the recipient. Anticipate potential exemptions that they may try to use to refuse the request, or other ways they may wilfully misinterpret the request to avoid providing the information that the journalist wants.
```

## Scraping and coding

Writing code is a low-risk application of genAI (it's not audience-facing, and results are easily tested - they either work or they don't). 

Coding tools are increasingly incorporating genAI features which can generate code, suggest bug fixes, and/or predict the code you are about to type. But the results will vary enormously based on how much information you provide in your prompts or other elements which are used to inform the genAI: **comments** and **text blocks** play a big role here.

A [Google Colab notebook](https://colab.research.google.com/) is one tool (part of Google Drive). You will need to make sure AI is enabled by going to the *Tools > Settings* menu, then clicking on **AI Assistance** and ticking the boxes that enable/consent to AI assistance. Sometimes it takes a while for the AI auto-suggest to kick in, so you might need to use the Gemini button in the upper right corner to get it started with generating code, or click the *'generate with AI'* text that appears when you create a new code block.

In Colab, typing the comment `#import libraries for scraping` is sometimes enough for it to suggest (predict) code importing the libraries that you need - especially if you've described your objective first. It may also be that Colab learns from your other notebooks.

In the code below the lines starting with a `#` symbol are the comments that were typed into Colab's code block. The lines underneath those comments contain code that was auto-generated (predicted) by Colab's built-in AI. 

The most important part of this process is **describing the HTML around the information you want to scrape**. Most scraping code stays the same regardless of what is being changed - but the 'selector' (code that describes what you want to fetch from a page) almost always changes. So you will need to look at the HTML of the page to identify this. GenAI can help with this - you can describe what you are trying to do and paste a section of HTML to inform the prompt.

```
#import libraries for scraping
import requests
from bs4 import BeautifulSoup
import pandas as pd

#fetch the URL https://www.gov.uk/government/publications/publishing-details-of-deliberate-tax-defaulters-pddd/current-list-of-deliberate-tax-defaulters
url = 'https://www.gov.uk/government/publications/publishing-details-of-deliberate-tax-defaulters-pddd/current-list-of-deliberate-tax-defaulters'
response = requests.get(url)

#turn url into a BeautifulSoup object
soup = BeautifulSoup(response.text, 'html.parser')

#scrape the <table> into a data frame
table = soup.find('table')
df = pd.read_html(str(table))[0]

#export df as a csv
df.to_csv('deliberate_tax_defaulters.csv', index=False)

#download csv to computer
from google.colab import files
files.download('deliberate_tax_defaulters.csv')

```


## Advanced search queries (Google Dorks)

A Google Dork is an advanced search query, typically using search operators like `filetype:`, `intitle:` and so on. Some can be especially complex. 

A number of dedicated AI tools have been created to help with creating these. They include: 

* Henk Van Ess's [AI Research Pilot](https://digitaldigging.org/research/)
* [DorkGPT](https://dorkgpt.com/)
* [DorkSearch.com](https://dorksearch.com/)
* Henk Van Ess’s [Google Word Sniper](https://www.googlewordsniper.eu/)
* [AI Search Whisperer](https://www.digitaldigging.org/p/ai-search-whisperer)
* [Dork Genius](https://chatgpt.com/g/g-Mgwnmi9k6-dork-genius/c/988bdc3f-8184-4d4c-bdd5-7f4ffa344e8a)
* [EarthGPT](https://chatgpt.com/g/g-xKVz8Hiwa-earthgpt-maps-satellite-images-geography/c/147025b6-67c0-4803-adf8-052741369b74) (satellite imagery)

