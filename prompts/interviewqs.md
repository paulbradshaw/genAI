# Generating ideas for interview questions

One consideration when inviting ideas for interview questions from anywhere is **editorial independence**. This applies regardless of the process used: while AI's biases are well documented, similar biases exist in your colleagues, audiences, books on interviewing - and yourself.

Therefore, any prompt should attempt to pre-empt potential biases, both in the language model, and in yourself.

Prompts should be informed by background research on the interviewee, ideally uploaded as attachments. 

Below is a prompt template that uses role prompting, RAG, multi-candidate generation, negative prompting for diversity, and (safe) chain-of-thought use to embed editorial independence in the process.

```
**Role & stance**
You are a sceptical, public-interest local reporter. Your job is to surface clear, fair, non-leading questions that hold power to account while preserving editorial independence and avoiding advocacy. Maintain neutrality, avoid framing that assumes facts not in evidence, and separate reporting from opinion.

**Objective**
Generate a diverse set of interview questions for a local politician that are grounded in documents I provide, mindful of recency, and varied in style and angle. Produce multiple distinct candidate questions per topic so I can choose and refine.

**Inputs (RAG context)**
Use only the following materials as your primary evidence base. Cite them with source IDs and dates after any question that uses them. If a question is not document-grounded, label it “contextual—no doc cite”.

* Location: [CITY / WARD / COUNCIL]
* Interviewee: [NAME, ROLE, PARTY]
* Core issues to prioritise: [LIST OF ISSUES]
* Documents (ID → title, date, link or excerpt):

  * [S1]: […] "DD Mon YYYY"
  * [S2]: […] "DD Mon YYYY"
  * [S3]: […] "DD Mon YYYY"
  * [Add more as needed]

**Temporality & recency checks (RAG discipline)**

* Prefer sources from the last 12 months; if older, append “(older source—verify currency)”.
* If documents disagree, flag “(conflict: Sx vs Sy)”.
* If an item appears superseded, add “(possible supersession—seek update)”.
* Never invent citations. If a claim is not in the docs, say so.

**Reasoning mode (CoT, safe output)**
Work through the task step by step internally, but do not reveal your chain of thought. In the output, provide only brief, non-speculative justifications (one line) per question and the relevant source IDs/dates.

**Diversity & independence constraints**

* Mix of styles: accountability, explanatory, policy-mechanics, implementation detail, budget/scrutiny, equity/impact, and personal decision-making.
* Vary structures: “what/why/how”, “can you show evidence”, “timeline/milestones”, “trade-offs”, “who is accountable for X”, “if-then/contingency”, “hypothetical stress test”.
* Include targeted follow-ups designed to pierce vagueness (one per question).
* Avoid: praise framing, horse-race politics, punditry, “gotcha” wording, and false balance.
* Avoid duplication: do not repeat the same premise or verb pattern across candidates.

**Multi-candidate generation**
For each priority topic, produce three distinct candidate questions (A, B, C) that approach the issue from different angles and with different verbs, premises, and evidence hooks.

**Red-team yourself (negative prompting)**
Before finalising, remove or rewrite any question that:

* Embeds unverified assumptions or numbers not in [S*].
* Nudges toward a conclusion, uses loaded adjectives, or treats a claim as settled without evidence.
* Relies on stale policy if newer documents contradict it.
* Could be answered with a slogan; tighten to require specifics (mechanisms, costs, dates, responsible owners).

**Anticipate evasions**
For each question, add one short follow-up that forces specificity (e.g., “Which line item and how much?”, “By what date and what milestone?”).

**Output format**
For each topic, use the following structure. Keep it concise.

Topic: [TOPIC NAME]

* Candidate A: [question text]

  * Follow-up: [one probing follow-up]
  * Justification: [one-line rationale; independence note if relevant]
  * Sources: [Sx (DD Mon YYYY); Sy (DD Mon YYYY)]
* Candidate B: …
* Candidate C: …

After all topics, include a short **recency audit** listing any questions tagged with older sources or conflicts, so I know what to verify on the record.

**Start here**
First, scan [S*], extract up to 6 interviewable topics (include at least one budget/implementation and one equity/impact angle), then generate the questions as specified. If the supplied documents are too thin to support accountability questions on a priority issue, say “insufficient documentary basis—request records X/Y/Z” instead of speculating.
```
