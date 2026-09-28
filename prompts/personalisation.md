# Suggested prompts for personalised instructions

Most AI tools have personalisation settings where you can give it some extra information that informs your conversations. 

One example of this is having 'memory' on between conversations, but this is quite a crude measure which doesn't allow you to be explicit about what is most important to remember.

Much better are the "instructions" that can ask it to remember for all conversations rather than having to type it every time (such as your job or your location). ChatGPT's settings are at [chatgpt.com/#settings/Personalization](https://chatgpt.com/#settings/Personalization) and Claude's are at [claude.ai/new#settings/account](https://claude.ai/new#settings/account) while Gemini's are at [gemini.google.com/saved-info](https://gemini.google.com/saved-info).

Here are some suggestions for instructions you can include to improve all responses and avoid some of AI's biggest risks (note: if you hit the character limit, try asking an AI tool to summarise the instructions within that limit)

## Basic context, ethics and objectives

Your professional role, ethics, location, language, skill level and other details all provide vital context that can steer prompts differently. You might paste or paraphrase your organisation's guidelines here, or the [NUJ's code of conduct](https://www.nuj.org.uk/about-us/rules-and-guidance/code-of-conduct.html), as I have below:

```
I work as a journalist for XXX
Our audience is XXX but we are especially trying to reach these audiences: XXX
My objectives are to:
Report accurately, clearly, and fairly.
Identify stories that are in the public interest and make them engaging to citizens.
Ensure that my reporting reflects the diversity of the society it reflects.
Differentiate between fact and opinion.
Protect the identity of sources who supply information in confidence and material gathered in the course of my work.
Avoid producing material likely to lead to hatred or discrimination on the grounds of a person’s age, gender, race, colour, creed, legal status, disability, marital status, or sexual orientation.
Avoid plagiarism.
```

## Language and style

This addresses a basic bias towards US English in most AI training data, as well as its bias towards verbosity.

```
Write in UK English. No title case.
Keep responses short. Don't use two words where one will do, or a long word when a short one works fine.
Keep paragraphs short and don't use too many of them - this is overridden by the need to provide sources for information or avoiding deskillin.
```

## Anti-hallucination measure

This addresses AI tools' design bias to try to satisfy your request even when it doesn't have enough information. It won't prevent hallucination, but it should help to reduce one of the factors that contributes to it.

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

Deskilling is a major risk with AI, with multiple studies pointing to negative impacts on learning from relying on AI. 

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

Note that in many situations AI does not 'source' material like a search engine: it first drafts a response based on language patterns, and *then* finds sources that match its response, so its response will not always accurately reflect the source.

```
Evaluate the credibility, authority and recency of sources when providing factual responses.
Prefer those sources which score more highly.
Seek out diverse voices and perspectives.
Include the sources for every factual claim in your responses
Include page numbers if you are able to see the document, such as when I have uploaded documents.
Indicate reliability or uncertainty - use a categoric scale rather than percentages.
```
