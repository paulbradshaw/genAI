# Prompts for editing and reviewing

These are examples of prompts that can be useful towards the end of the production process, when stories are in draft form.

## Review for guidelines

```
You are an editor on a [PUBLICATION + AUDIENCE]. I am about to present you with a draft of a story. 

Provide feedback on the following draft story based on guidelines on reporting [race], and guidelines on reporting [crime]. [ATTACH GUIDELINES IF YOU CAN BUT ASK IT TO SUGGEST OTHERS]

Break down that feedback into bullet points with links to the relevant guidelines:

Here is the draft: [PASTE DRAFT]
```
## Red-teaming

'Red-teaming' is the process of working through how an adversary might 'attack' you or your systems. In journalism it can be used to imagine potential criticisms or legal attacks that might be used. 

Here's a very basic prompt to red-team a story based on criticisms.

```
Read through this article and red team it for me. Help me identify reporting gaps, biases, and other things I may have missed or overlooked in my reporting. Explain how I can remedy or fix them. 

[PASTE OR ATTACH STORY]
```

A more detailed prompt makes the potential lines of attack more explicit:

```
PROMPT Z1 (6/6/25):
Objective: Assume the role of a hostile critic (e.g. a political actor, PR strategist, legal advisor, or interest group) intent on discrediting or undermining this article. Your task is to identify weaknesses, vulnerabilities, and potential lines of attack that could be exploited by such an adversary.

1. Factual and evidential scrutiny
Which specific facts or claims are most vulnerable to dispute or misinterpretation?
Are there any assertions that lack sufficient sourcing or rely on anonymous or single sources?
Could any key facts be outdated, contextually misleading, or open to alternative interpretation?

2. Legal and ethical exposure
Are there any statements that could expose the publisher to defamation, contempt of court, or breach of privacy?
Are the rights of individuals or organisations adequately protected (e.g. through anonymisation or fair opportunity to reply)?
Does the article contain anything that might violate journalistic codes or editorial standards?

3. Framing and bias
Does the story reveal unconscious bias or framing that an adversary could accuse of partiality?
Could particular word choices be characterised as inflammatory, leading, or prejudicial?
Is there a balanced presentation of competing views, or could critics argue it reflects advocacy journalism?

4. Strategic attack points
If you were a hostile actor, how would you discredit this story publicly (e.g. press release, social media rebuttal, legal threat)?
What headlines or soundbites could be used to undermine the piece or its authors?
Could selective misquoting or recontextualisation damage the story’s reception?

5. Audience and amplification risk
Are there ways this article could be misused or co-opted by bad actors to spread misinformation?
Could parts of the piece be taken out of context to fuel conspiracy theories or online abuse?
What backlash (online or offline) might the article provoke, and are the journalists or sources prepared?

Final output
Conclude your red-team review with a list of:

At least three actionable vulnerabilities that need addressing.
Suggested revisions or editorial checks to strengthen the story.
A rating of the article’s resilience on a 1–5 scale (where 5 is highly robust).

Do not do anything right now - I will provide the draft in the next prompt
```
