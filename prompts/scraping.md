# Prompts for scraping

GenAI is especially good for generating code, so scraping is one of the best uses. 

Scraping is also **low risk** as an application of AI, because it's not audience facing, and accuracy can be easily tested, as "accuracy" in this context means that the code works (the accuracy of the scraped material itself is separate and is tested in the same way regardless of whether genAI is used or not). 

In terms of risk assessment:

* Hallucination
* Bias
* Environment
* Deskilling
* Gullibility
* Sycophancy

## Scraping in Google Sheets: a prompt to generate an `IMPORTXML` formula

The `IMPORTXML` function in Google Sheets needs two ingredients: a URL, and XPath describing the tags containing the information you want to scrape. 

```
Write an IMPORTXML formula to grab the name in the following HTML:
<h2 class="heading-medium">
<span id="officer-name-1">
<a class="govuk-link" href="/officers/TsUptBhCshaitzV6Bw-q5HQ-Jbg/appointments"  onclick="javascript:_paq.push(['trackGoal', 5]);">SEAVILL, Charlotte Jane</a>
</span>
I don't want to be deskilled by using AI, so explain what is happening in simple terms a normal person can understand.
```
