# Prompts for FOI requests

AI can be helpful in a number of ways with FOI requests. Here are some examples of template prompts that can be adapted.

## FOI story ideas

This prompt injects some knowledge (a process called RAG) to improve the quality of the response. Wider reading such as this can play an important role in addressing the risk of deskilling that AI involves.

```
In his book Freedom of Information: A Practical Guide for UK Journalists, Matt Burgess gives the following suggestions for Generating ideas for FOI requests 
• Follow-ups: asking more information about stories you have already published. 
• Official meetings (including their minutes): details of schemes or problems may be mentioned in this, which can be followed up with FOI requests. 
• Events taking place, i.e. a special celebration that would incur costs - for example, Tower Hamlets Council spent £47,000 on curry awards with Ainsley Harriott (Hackney Gazette, 2014). 
• Crime sprees: requests can help to see if there are any trends, in specified areas or time periods, regarding particular crimes. 
• Press releases: asking for the data and information behind press releases issued that may not quite add up. 
• Fact checking claims: asking for the details behind a claim a poli tician or official makes. For example, if a police boss claims they have put more officers on the streets, a request could find the underlying figures. 
• Central government decisions: for local media organisations more information can be obtained on decisions that are made by central government and are specific to the organisation’s patch. 
• Requests about requests: asking for the details, and correspond ence, that led to a request being refused may uncover authorities trying to cover up what you have asked for. 

Based on those suggestions, list 10 ideas for ways a journalist could use FOI to get a story about [SPECIFY YOUR TOPIC OF INTEREST].
```


## Reverse-engineering an FOI story

One good way to get started with FOI is to find an older story which used FOI, and bring it up to date by sending a similar FOI request. 

In some cases you might be able to find the original FOI request (for example on an organisation's disclosure log where they publish the FOI requests they have received), but in most cases you will have to guess what the original FOI request asked for.

Here's a prompt that can help with that reverse-engineering process:

```
You are a journalist who is an expert in FOI. In my next prompt I will paste a story. I want you to try to answer the following questions about it:

How was FOI used? 
What bodies did they ask?
What questions do you think they asked? 
What could have been better?

You will think through your response step by step. 

Throughout this conversation do not respond with anything beyond the scope of the request
Do not try to please
Do not suggest any further actions
Avoid the tendency to be ‘gushing’ and promotional. Remain sceptical and critical.
Do not say too much – be succinct.
Don’t try to answer something if you do not know the answer. Give an indication of certainty or uncertainty for your answer
Don’t be biased. Take steps to address the fact that your knowledge reflects the bias of your training data
Don’t make things up. Take steps to address the fact that you have a tendency to hallucinate material that is not true.
Confirm you understand before we proceed
[PASTE OR ATTACH THE STORY]
```

## Getting critical feedback on an FOI request

AI can be especially useful in providing a fresh perspective on something you've written. This prompt uses role prompting to look at the draft from a more legal point of view.

```
You are a media lawyer who is an expert in the FOI Act.
A journalist has drafted the following FOI request as part of a story on [SPECIFY THE TARGET STORY ANGLE]. 
Give feedback on the draft, including general considerations they should bear in mind when drafting FOI requests, especially in terms of getting the material needed for a good story. 
Identify any potential exemptions that might be used and what phrases might be included in the request to anticipate those. Here is the draft:

[PASTE YOUR DRAFT FOI REQUEST]
```

## Red-teaming an FOI request

```
You are an FOI officer at [SPECIFY ORGANISATION].
Look at the attached FOI and identify reasons why you might refuse the request, or only be able to provide a lower level of detail than that requested.
Those reasons could be legal (e.g. exemptions under the FOI Act), practical (e.g. internal systems) or something else.
List the reasons succinctly, no more than 20 words per reason.
For each reason, suggest ways of improving the request, max 20 words per suggestion.
```
