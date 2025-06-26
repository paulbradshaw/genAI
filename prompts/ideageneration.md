# Prompts for idea generation

Below are some examples of prompts for idea generation. Square brackets indicate elements that can be replaced with your own contexts.

## A basic CAREful prompt

This prompt includes context, asks for something specific, with rules and examples (CARE).

```
I am an investigative journalist working for a national news website in Spain. The audience is urban professionals aged 20-40.  
Generate 5 ideas for features about [water abstraction]. Each idea should be max 50 words.
[Here are some examples of headlines of features that I like:] [PASTE HEADLINES]
```

## A follow-up prompt applying a framework

'Teaching' the chatbot some principles of your trade improves results and helps avoid deskilling. Here's an example (the four rules come from [this blog post](https://onlinejournalismblog.com/2024/07/10/investigative-journalism-and-chatgpt-using-generative-ai-for-story-ideas/):

```
There are four particular types of stories that investigative journalists tell about rules. Those are:

Rules having unintended consequences
Rules not being followed
Rules not being enforced
The need for new rules

Generate two story ideas for each of these types
```

## A prompt using the 7 angles framework

Here's another example of teaching as part of a prompt. This one uses the [7 angles for data stories](https://onlinejournalismblog.com/2020/08/11/here-are-the-7-types-of-stories-most-often-found-in-data/)

```
You are an editor in a data journalism team at a UK news website. I am going to give you some information about types of story angles that can help you identify story ideas based on any dataset.

Here are the first four angles. Please just confirm you understand this, and then I will give you some data to generate ideas for.

Scale stories ‘reveal’ the scale of something, typically a problem, but it can also be a topical issue.

Change stories reveal a trend: that something is rising or falling. A lack of change can be newsworthy too, especially if the government has pledged to reduce or improve something and it’s not happening.

Ranking stories are all about what, who, when and where are the best or worst when it 
comes to a particular metric. It might also be about how a category or place 
relevant to the audience ranks against others.

Variation stories, in contrast, reveal the very existence of variation where 
we might aim to avoid it, i.e. it reveals unfairness. Examples include people 
not being treated equally, or not having equal access to services. These are 
sometimes called ‘postcode lottery’ stories
```

## A prompt augmented with data

In the example prompt below, three rows of data (including the header row - this is important) are pasted as part of the prompt, **augmenting** it with extra information.

```
Now, here are the first two rows of a dataset on the gender pay gap at each company in the UK. Use the four angles I explained to suggest 10 story ideas for this data, max 50 words each:

EmployerName	Address	CompanyNumber	SicCodes	DiffMeanHourlyPercent	DiffMedianHourlyPercent	Women earn more than men?	DiffMeanBonusPercent	DiffMedianBonusPercent	MaleBonusPercent	FemaleBonusPercent	MaleLowerQuartile	FemaleLowerQuartile	MaleLowerMiddleQuartile	FemaleLowerMiddleQuartile	MaleUpperMiddleQuartile	FemaleUpperMiddleQuartile	MaleTopQuartile	FemaleTopQuartile	Female top quartile 50 or above	No link?	Name	Position	CompanyLinkToGPGInfo	ResponsiblePerson	EmployerSize	CurrentName	SubmittedAfterTheDeadline	DueDate	DateSubmitted

"Bryanston School",Incorporated	"Bryanston House,
Blandford,
Dorset,
United Kingdom,
DT11 0PX"	226143	85310	19.6	32.5	FALSE			0	0	32.4	67.6	38.2	61.8	44.9	55.1	53.3	46.7	FALSE	FALSE	Michael McGovern 	Chief Operating Officer	https://www.bryanston.co.uk/employment	Michael McGovern (Chief Operating Officer)	500 to 999	"Bryanston School",Incorporated	FALSE	05/04/2019 00:00:00	03/04/2019 13:43:34
```

## A prompt augmented with documents

Adding documents can 'ground' your prompt in more specific, concrete information. 

```
[ATTACH DOCS]
You are a sceptical education reporter with excellent judgment for what makes a compelling news story. You have years of experience of unpacking PR spin and political misinformation. You are looking for ideas for a story about school uniform, specifically any potential stories about 1) rules not being followed, or 2) enforced, 3) unintended consequences of rules, or 4) new rules being needed. 

Look at the attached rules, regulations, laws and guidance that apply to uniform and identify 5 areas that might be potential avenues to investigate. 
```
