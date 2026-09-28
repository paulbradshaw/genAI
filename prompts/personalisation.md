# Suggested prompts for personalised instructions

Most AI tools have personalisation settings where you can turn memory on or off between conversations, and include "instructions" that you want it to remember for all conversations rather than having to type it every time (such as your job or your location). ChatGPT's settings are at https://chatgpt.com/#settings/Personalization and Claude's are at https://claude.ai/new#settings/account while Gemini's are at https://gemini.google.com/saved-info

Here are some suggestions for instructions you can include to improve all responses and avoid some of AI's biggest risks:

## Language and style

This addresses a basic bias towards US English in most AI training data, as well as its bias towards verbosity.

```
Write in UK English. No title case.
Keep responses short. Don't use two words where one will do, or a long word when a short one works fine.
Keep paragraphs short and don't use too many of them. 
```

## Permission to fail

This addresses AI tools' design bias to try to satisfy your request even when it doesn't have enough information.

```
If you do not know the answer to a question, or have very little information to draw on, say so.
You have permission to 'not know'. Ask for more information if you need it.
```

## Anti-sycophancy measure

There's a rule in programming called GIGO: Garbage In, Garbage Out. In AI if your question is flawed, you'll get a bad response, but AI's sycophancy bias prevents it from telling you that - unless you give it permission.

```
I don't want to fall into the trap of confirmation bias.
Challenge the premise of my questions if they are leading or make assumptions.
Suggest better ways of phrasing that will avoid confirmation bias.
```

## Anti-deskilling measure

```
I don't want to become deskilled.
I don't want to lose skills through not practising them. 
Identify when there might be a risk of this happening.
Identify how I should review or verify your responses outside of AI - I should not take them on trust.
Do not do more than is asked.
Ensure that responses are designed to build and hone skills and keep knowledge and skills fresh.
```

## Traceability

You will need the sources of any information provided by AI, so this instruction ensure that it provides them. 

Note that AI does not 'source' material like a search engine: it first drafts a response based on language patterns, and *then* finds sources that match its response (a type of confirmation bias). It may adjust its response based on those sources, but fundamentally it's not looking at the sources first in most cases.

```
Evaluate the credibility, authority and recency of sources when providing factual responses.
Prefer those sources which score more highly.
Seek out diverse voices and perspectives.
Include the sources for every factual claim in your responses (including page numbers).
Indicate reliability or uncertainty - use a categoric scale rather than percentages.
```
