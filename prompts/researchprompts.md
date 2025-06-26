# Prompts for research

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

Adapted from [Advanced Prompt Engineering for Reducing Hallucination](https://medium.com/@bijit211987/advanced-prompt-engineering-for-reducing-hallucination-bb2c8ce62fc6)

```
Prompt 1: [QUESTION]

Prompt 2: On a scale of 0 to 10, how confident are you in your answer above? Please explain your reasoning clearly.

Prompt 3: could you provide 1–2 factual sources where you have seen evidence for [CLAIM]? Please cite specific references.
```


## Augmenting prompts with documents

This prompt is adapted from [Finding Newsworthy Documents using Generative AI](https://generative-ai-newsroom.com/finding-newsworthy-documents-using-generative-ai-a43a41a90e30) and a [Reddit thread by Jdonovan](https://www.reddit.com/r/LangChain/comments/1amjc9g/rag_does_not_stop_hallucinations/?rdt=40388)

```
You are a sceptical crime reporter with excellent judgment for what makes a compelling news story. You have years of experience of unpacking PR spin and political misinformation. You are working on an investigation about how the justice system deals with reports of harassment. 

Look at the attached conference proceedings and identify which 10 pieces of information are most relevant to the investigation — and what pages they are on. Your responses are always grounded in the specific document provided to you. Do not lie.

Internally generate three possible responses, then evaluate each for accuracy against the context
```

## Summarising documents

```
You are a sceptical education reporter with excellent judgment for what makes a compelling news story. You have years of experience of unpacking PR spin and political misinformation. You are looking for ideas for a story about school uniform, specifically any potential stories about 1) rules not being followed, or 2) enforced, 3) unintended consequences of rules, or 4) new rules being needed. 

Look at the attached rules, regulations, laws and guidance that apply to uniform and create a table of all the rules mentioned, identifying the document(s) and page(s) where the rules comes from. Add columns for each of the four categories listed above, with suggestions. Provide a downloadable table in markdown.
```

## Focusing on techniques, not answers

```
You are an experienced OSINT researcher working with a team investigating council spending on school transport. The biggest beneficiary of that spending is a company called [FAKE? COMPANY NAME], and the team are looking to gather as much information as possible about its director, [INSERT FAKE? NAME]. 

[NAME] is also connected to a holding company, [COMPANY 1], and two other companies: [COMPANY 2] and [COMPANY 3]. 
Suggest OSINT strategies for identifying information about this person.
```

## Finding sources

```
Suggest academic experts for an investigative feature on [the influence of the private sector on NHS dentistry]. Make sure they represent the diversity of society.
```

## Sourcing strategies + diversity

```
You are an editor on a [PUBLICATION + AUDIENCE]. A journalist is working on an investigation that will reveal [TOP LINE]

She is about to start gathering quotes for the piece from experts, representatives, those responsible and those affected, and wants to ensure the sources reflect the diversity of the society we live in—across race, gender, age, disability, socioeconomic background, geography, and other lived experiences.

Suggest a strategy for identifying potential interviewees who can offer varied perspectives on the topic. Specifically: 
Suggest practical steps to take to proactively seek out underrepresented voices. 
List examples of organisations, networks, or directories (especially UK-based, but include international if relevant) that connect journalists with diverse spokespeople or experts. 
Provide guidance on how to approach individuals who are not traditional media commentators or who may have limited media experience.
```

## FOI requests

```
You are a [UK journalist] working on an investigation into [schools' contracts with suppliers of school uniform and sports kits]. Write an FOI request that can be sent to [each school] asking for details of the contract - anticipating potential exemptions that they may try to use to refuse the request
```

## Other research tasks that genAI is useful for

* FOI requests: Draft and review (ask it to anticipate potential exemptions, or ‘red team’ it)
* Scraping: Use built-in AI in Google Colab etc.
* Sources: strategies and organisations, not just names
* Google Dorks: dedicated AI tools: DorkGPT, Henk Van Ess’s Google Word Sniper & AI Search Whisperer; Dork Genius; EarthGPT (satellite imagery)

