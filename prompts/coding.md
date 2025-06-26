# Coding and scraping with genAI

Some tips when it comes to using genAI for help with coding:

* A little knowledge goes a long way: genAI is most useful if you learn at least some coding/jargon
* Ask it to explain to a child so your understanding grows (and you don’t become deskilled)
* For scraping, specify the HTML tags/attributes that contain the information you want to fetch
* Break down each step for better results
* Check the website isn’t serving different HTML to the scraper when compared to what you see in a browser

## Writing a scraper in Google Colab

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
