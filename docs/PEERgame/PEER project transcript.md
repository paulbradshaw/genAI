# PEER Source Game: project transcript

Prompts are reproduced verbatim. Responses are the replies shown in chat. Some earlier parts of the conversation were trimmed from my working memory and can't be reproduced exactly; these are marked *[not available]* and summarised where possible.

---

## Prompt 1

> Objective: I want to create a game to help journalism students learn about generating ideas for interviewees and sources, and reinforce knowledge of a framework for doing this called PEER. The game should steer students away from interviewing 'members of the public' or friends and family, and get them thinking more critically about who makes a good source and why, and what questions particular stories raise.
>
> Context: Attached are two blog posts about the PEER framework. The earlier post focuses more on the roles that interviewees play, and doesn't yet call it PEER, while the later one combines case studies and witnesses to create the PEER mnemonic and digs deeper into the subtleties of each source.
>
> Process: Use the material as the basis for a game where a student is presented with a scenario and must apply that knowledge in a judgement. In earlier levels they simply classify a source as either power, expertise, experience or representatives. In later levels they will be presented with a story lead and select the right mix of sources to have more than one type (this might be drag and drop). The game should be progressively harder. Have a two team option (blue and red team) with play switching from one team to another if a question is answered wrong.
>
> Note that the same source can fit into more than one category depending on the questions they are asked and the role they will play in the story, so it must be clear how they will be used. For example, a politician might be 'power' in one story where they are asked what is being done about a problem, but in another story they might be 'representative' where they are asked how many constituents are raising the problem, and in a third they might be 'experience' if the story is about abuse of politicians. They might also be an expert in a story where they are asked for advice for new MPs.
>
> Have a mix of story types, e.g. crime, sport, health, education etc. Features and news. Some stories might only require one type of source (e.g. a feature where only experts speak), but most will need a mix (personal experience or representatives plus independent expertise plus holding power to account)

### Response 1

*[not available]* I built `PEER Source Game.dc.html` using the Industry design system. It has five levels that get harder as you go:

1. Know your PEER: classify a single source.
2. Same face, different role: the same kind of person plays different roles depending on the question they are asked.
3. Find the blind spot: choose the source that fills the gap in a draft story.
4. Answer the story's questions: drag sources onto the questions the story raises.
5. Build the interview list: pick a full list of sources for a story lead.

Other features:
- Solo mode, or Blue v Red, where play passes to the other team after a wrong answer.
- Points go up with each level.
- Optional timer, shuffling and cheat sheet.
- Each source is shown with the question they will be asked, so their role is clear.
- Weak options include vox pops, friends and family, sources who repeat a role already covered, and unverified posts.

## Prompt 2

> Found issues — fixing…

### Response 2

*[not available]* Fixed the issues found when checking the game.

---

## Prompt 3

> Are these questions always going to be the same? I need to be able to check all questions and answers are accurate. Is there a way I can get a list (e.g. the JSON)
> In level 3 the options say "asked" but they haven't been approached yet. So change to "Ask:"
> Change 'A sourcing game for journalism students' to: 'A game about making the best interview choices'

### Response 3

Yes, the questions are always the same: 25 fixed questions. Only the order of questions and options is shuffled, and you can turn shuffling off in the settings. You can download two versions of the full list:

- **PEER answer key.md** is easier to read. It has every question, the correct answer, the weak options and the explanation shown after each answer.
- **PEER questions.json** has the raw data the game uses.

The other two changes are done:
- "Asked:" now reads "Ask:" on levels 4 and 5 as well as level 3, since none of those sources have been approached yet.
- The start-screen line now reads "A game about making the best interview choices".

If you correct the JSON, you'll need to send it back to me to update the game. I can make the game read directly from the JSON file instead, so your edits there change the game without a rebuild.

---

## Prompt 4

> Update the questions to reflect considerations around diversity: it's not just who is interviewed but considering under represented voices in each area.
> For example:
> In the UK, out of 164 university vice-chancellors, only two are Black. There are 165 Black professors in the UK – out of 23,515. Only 61 UK professors are Black women.
> In the three academic years from 2016-17 to 2018-19, UK research councils granted 19,868 funded PhD studentships – but only 245 were allocated to students of Black and mixed-Black heritage.
> Figures from 2014 show that just 1.9% of police officers had declared a disability
> According to charity leadership body Association of Chief Executives of Voluntary Organisations (ACEVO), more than a sixth of British charity bosses have been privately educated compared to around 7% of the wider UK population.
> Some strategies for addressing this include
> - [Diverse experts directories](https://researchguides.journalism.cuny.edu/findingexperts/diverse-experts)
> - Go through representative bodies (e.g. [Disabled Police Association](https://www.joiningthepolice.co.uk/supporting-diversity/support-organisations/disabled-police-association), [SBA](https://societyofblackacademics.com/)) and [initiatives](https://www.governmentevents.co.uk/event/the-inclusion-and-diversity-in-the-voluntary-sector-conference/#overview)/[events](https://www.kcl.ac.uk/events/queer-in-academia-speaker-event-2023)
> - LinkedIn may provide details on education & membership
> - Ask people who have written about lack of diversity in their field
> - Free ebook: [Everybody In](https://www.media-diversity.org/additional-files/Everybody_In_Book.pdf)
>
> Make the game more visual and human by using pixel art characters for each source. Again this should avoid cliche (e.g. doctors should not always be male, nurses female etc) and represent the diversity of society across multiple dimensions: age, class, gender, ethnicity, sexuality, disability, urban/rural, etc.

### Response 4

I've made **PEER Source Game v2** with the diversity material and pixel-art characters. The original file is unchanged.

**New level 4, "Widen the net"** (5 questions, 3 points each). Each question gives a situation, one of your statistics in a "Who gets heard" box, and a choice of next step:
- **Universities:** the first three experts found are similar white men. The best choice is diverse experts directories and the Society of Black Academics.
- **Policing:** officers suggested by the press office. The best choice is to also go through the Disabled Police Association. One wrong answer is asking a disabled officer only about their disability.
- **Charities:** leaders from large national charities. The best choice is checking LinkedIn and looking at speakers from sector diversity events, linked to the ACEVO figure.
- **Interest rates:** an economist found through a directory. The question is what to ask her: her expertise, not her identity.
- **Early-career scientists:** linked to the PhD studentship figure. The best choice is asking people who have written about the lack of diversity in their field, and Queer in Academia-style events.
- Each wrong answer is labelled as a default choice, tokenism or the wrong role.
- Your resource links appear on that level's intro screen and on the final screen.

**Other levels:**
- Most questions in levels 3, 5 and 6 now end with a "Widen the net" tip. These cover rural sources, fathers as well as mothers, disabled and LGBTQ+ supporters' groups, class, and avoiding stereotypes in knife crime coverage.
- Individual sources now have names, chosen to reflect a range of backgrounds.

**Characters:** every source has a pixel portrait, and vox pops show a small crowd. The casting avoids the cliches you mentioned, for example:
- a male nurse with long Covid wearing a sunflower lanyard
- a woman former footballer
- a Sikh police and crime commissioner
- a disabled dad who chairs the parent council, and a disabled debt adviser, both wheelchair users
- an older Black residents' chair
- a gay MP

Gender, age, skin tone, class cues and hidden disabilities are mixed across the set. Being drawn in pixels, some of these details are subtle.

The answer key (`PEER answer key.md`) and `PEER questions.json` are updated to match. They now include the new level, the tips and the resource list.

One thing to check: the tips and the wording of the options are my own, so you may want to review them, especially the claims about who is affected more by long Covid and by exam errors.

## Prompt 5

> Found issues — fixing…

### Response 5

I've fixed the glasses on the pixel characters. They looked like a solid black bar over the eyes and are now drawn as an outline frame with the eyes showing through. The frame is pale on darker skin tones so it stays visible.

---

## Prompt 6

> Export a markdown file containing a transcript of all the prompts and responses used to create this artifact

### Response 6

The transcript is ready to download. All your prompts appear word for word. My first two replies are summaries rather than exact text, as their original wording is no longer available, and the file marks where that applies. The later replies match what I wrote in chat.

---

## Prompt 7

> Here's the book Everybody In. This should flesh out the bare facts I provided about the lack of diversity in various professions. Update the new level to reflect the expanded information you now have.

*(Attachment: Everybody In, Calver, Kemp and Ryder, 2017)*

### Response 7

I've updated level 4, "Widen the net", using Everybody In. It now has 8 questions instead of 5.

**Three new questions:**
- **Gender:** a business school press office offers the same male economist again. The fact box gives the City University monitoring (male experts outnumbered women on flagship news by 4 to 1, later nearer 3 to 1) and the wider ratio of about 2.5 to 1 in law, academia and cabinet. The best choice is asking for a woman and being ready to persuade her. Two wrong answers are "balance it with a vox pop of women" and dropping the expert.
- **Class and accent:** a care home manager with 15 years' experience has a strong regional accent. The fact box gives the Sutton Trust figures on privately educated journalists and the book's question "Are you equating accent or manner with expertise?". Wrong answers include treating her as a case study because of her accent.
- **Ethnicity:** the same community spokesman is quoted on exclusions, policing and housing. The fact box gives the 94% white journalists figure and the book's "Rent-A-Quote" point. The best choice is community and parents' groups plus researchers. Wrong answers include relying on the newsroom's only Black reporter to find someone.

**Other changes:**
- The policing question now adds the book's figure of 6.9 million working-age disabled people (19% of the working population), set against the police figure of 1.9%. It also quotes the line that disabled people are "spoken about, but not often listened to".
- The level intro now credits the book, and its entry in the resource list describes the chapters.
- The answer key and JSON are updated to match.

The book was published in 2017, so its figures are dated. For example, the Sutton Trust study is from 2006 and the 94% figure is from 2016. The fact boxes give these dates, but you may want newer data. For the exclusions story lead, I relied on my general knowledge of UK exclusion figures; the book doesn't cover it, so that one needs checking too.

---

## Prompt 8

> Here is some more material on diversity and sourcing. Incorporate this into the game design.

*(Attachments: Ed Yong, "I Spent Two Years Trying to Fix the Gender Imbalance in My Stories", The Atlantic; "You're probably not quoting enough women. Let us help you.", Columbia Journalism Review; "Tips to enhance the diversity of women in your reporting", IJNet; Adamson, Malik, Okeke and Bayley-Hay (2026), "This is how journalism has always been done": White neutrality, newsroom norms, and an AI intervention in source diversification; Masini et al., "Measuring and Explaining the Diversity of Voices and Viewpoints in the News", Journalism Studies; plus the earlier PEER blog posts)*

### Response 8

I've added the new articles to the game as **level 5, "Check your habits"**, so there are now seven levels.

**Level changes:**
- **Level 4, "Widen the net"**, now has 6 questions about where to look for sources.
- **Level 5, "Check your habits"**, has 8 questions about habits that narrow who gets heard, at 3 points each. The interest rates and accent questions moved here from level 4.

**Six new questions in level 5:**
- **Roles, not just numbers:** a gene therapy story where the experts are all men and the only woman is a parent. This is based on Ed Yong's gene-editing story.
- **Track your sources:** Yong's spreadsheet figures (24% women rising to 50%, about 15 minutes per piece) and the Global Media Monitoring Project's 24% figure.
- **Who you contact:** only the men replied. This uses Yong's 1.3 v 1.6 contact rates and Anna Fifield's experience from the CJR piece.
- **Deadline defaults:** a death after police restraint, based on the 2026 Adamson et al. newsroom study. It covers official framing and not making minority colleagues the "educators".
- **One type of actor:** a visa story with two politicians, based on Masini et al.'s finding that about half of immigration articles quote only one type of actor.
- **Intersectionality and language:** tradeswomen who are all white and in their thirties. This covers asking about pronouns and the "womxn" problem, from the IJNet piece.

**Other changes:**
- The resource list now includes SheSource, Informed Opinions, Quote This Woman+, Request a Woman Scientist and Diverse Sources, plus a tip about tracking your sources. The links come from the articles.
- The answer key and JSON are updated, and the answer key now lists the sources behind each research box.

The research boxes mix countries: the Adamson study is Canadian, and the Fifield example and Crenshaw's suspension figure are from the US. You may want to point this out to students or swap in UK data.

---

## Prompt 9

> Generate a new transcript of the prompts and responses so far

### Response 9

The updated transcript is ready to download. It now runs to prompt 9, adding the Everybody In and research-article updates and this request. The attachments for prompts 7 and 8 are listed by title. My first two replies are still summaries rather than exact text.

---

## Prompt 10

> Check the names of all the black and asian sources in the game - are any of them not obviously 'ethnic'?

### Response 10

All 8 Asian characters and 4 of the 8 named Black characters have names that clearly signal their heritage. Only **3** have names that don't:

- **Winston Clarke**, residents' association chair (1.7)
- **Marcus Bell**, nurse with long Covid (6.2)
- **Beverley Grant**, season ticket holder (6.3)

All three are Black, and English first names and surnames like these are common among Black Caribbean Britons.

**Black names that signal heritage:** Grace Mensah (1.2), Tunde Afolabi (1.5), Femi Adeyemi (2.7) and Funmi Adebayo (5.1) all have West African surnames. Sam Okoro (6.1) has a neutral first name but a Nigerian surname.

**Asian names, all signalling heritage:** Nadia Rahman (1.1), Priya Shah (1.6), Rina Kapoor (2.1), Imran Siddiqui (2.4), Ash Patel (3.1), Harjit Singh Gill (3.2), Anjali Rao (6.1) and Leila Haddad (6.2, an Arabic name).

The checks also turned up some gaps:
- **Asian names:** none is plain British, although many British Asians have names like Daniel Khan or Sophie Chen.
- **East and Southeast Asian sources:** there are none at all, Chinese British included.
- **Skin tone:** the lightest brown tone, used for several South Asian characters, may read as white at small sizes.
- **Unnamed characters:** about 30 Black and Asian characters have no name, only a description. Most are experts or officials, so the casting itself is mixed, but names only appear on some cards.

I haven't changed anything yet. I could:
- swap one or two Asian names for plain British ones
- add East and Southeast Asian sources, for example a Chinese British GP or a Filipino nurse union rep
- darken the skin tone for the South Asian characters

---

## Prompt 11

> Audit the diversity of the sources you have so far, and create a breakdown. Export this as a CSV.
>
> Then for two Asian names replace the forename with two names that better represent the diversity of forenames including the fact that some people Anglicise their given names.
>
> Yes, add East and Southeast Asian sources, for example a Chinese British GP or a Filipino nurse union rep
>
> Once complete, add an extra HTML page for the game with a table of 'all sources' including the pixelart image for each source included, and a diversity audit for those sources, to demonstrate exactly one of the practices the game is advising about.

### Response 11

The source audit, the name changes and the new East and Southeast Asian sources are all in, plus a new **PEER Sources Audit** page.

**Name changes:**
- **Rina Kapoor → Lucy Kapoor**, an English forename.
- **Harjit Singh Gill → Harry Singh Gill**, a commonly Anglicised form of Harjit.

**New East and Southeast Asian sources:**
- **Dr Kevin Lam**, a Chinese British GP who chairs the county's local medical committee, in a new level 1 question about rural waits (Representative).
- **Marites Santos**, a Filipino nurse and union steward, in two new level 2 questions. On a strike vote she is a Representative; on moving to the UK to nurse she is Experience.
- **Linh Nguyen**, a Vietnamese British nail bar owner. She replaces "another shop owner" in level 3.
- The bank chief executive in level 7 is now Korean British.

**The audit** covers 75 people, not counting the scenario figures. It records:
- gender, age, ethnicity, disability, LGBTQ+, faith shown, and whether the source is rural or from a small town
- each person's appearances in the game, with how they appear (best answer, good choice, draft source, distractor, weak option or scenario figure) and their PEER role

The characteristics are the ones I cast each character with, not anything the sources stated themselves, and the page says so.

**The audit page:**
- **Breakdown:** a chart for each characteristic, compared with Census 2021 figures where one exists.
- **Findings and roles:** what the audit shows, plus a table of who gets which PEER role.
- **All sources:** a table of every source with its pixel portrait, which you can filter.
- **CSV:** a download button that rebuilds the CSV from the current game, so the audit stays in sync if the questions change.
- The game's start screen links to the page.

**What the audit found in the game:**
- Power and expertise are shared out well. Women hold 9 of the 15 power appearances and 11 of the 15 expertise appearances.
- **9 of the 11 "friend or family" weak options are Black or Asian.** This could suggest that minority sources are the people a reporter knows rather than experts to seek out. I'd recommend rebalancing it.
- Disability is under-represented: 9% of people, against 17.8% of the population.
- LGBTQ+, rural and class are barely recorded.

The answer key and JSON are updated for the new questions and names. Should I rebalance the friend and family options and add more disabled sources?

---

## Prompt 12

> Given that your audience is journalists and journalism students, and ethnic minorities are under-represented in that audience, the 'friends and family' category is likely to be overwhelmingly white (and this is a category people cannot change through the strategies outlined). So update those friends/family sources to flip to 8/11 white.
>
> Generate 3 ideas for changing one of the questions so that it addresses the urban bias in news reporting.
> Do the same for neurodiversity, disability (factoring in that a large proportion of disabilities are not visible) and sexuality/gender

### Response 12

*[not available]* This response was interrupted by an error, so its text wasn't saved. It proposed three ideas each for urban bias, neurodiversity, disability and sexuality/gender (12 in total). One of them, referred to in prompt 13, was a level 2 question with an autistic structural engineer.

---

## Prompt 13

> I'm not sure why the autism is relevant to
> "Level 2, same face, different role: an autistic structural engineer is Expertise when asked about a bridge closure. The same person is Experience when asked about getting a job."
> Others are OK to add

### Response 13

I suggested it to show that a source's identity doesn't decide their role. You're right that autism has no bearing on a bridge closure, and a story about "getting a job" is too vague to make autism relevant. It would only work if the second story were specifically about autism, such as "Autistic adults far less likely to be in work". I've dropped it and am building the other 11.

I've added the other 11 ideas to the game.

**Urban bias**
- **3.2 shoplifting:** the lead now covers the whole county. The case study is a village shop and post office owner, and the commissioner is asked about rural areas too. The "Widen the net" tip is new.
- **1.4 bus cuts:** the source is now Gwen Pritchard, a parish council chair whose village is losing its last evening bus (Representative).
- **New question 4.7, hosepipe ban:** all your contacts are near the newsroom. The best answer is the rural community council, the NFU, parish clerks and village Facebook groups.

**Neurodiversity**
- **3.1 ADHD:** Ash Patel is now an adult diagnosed at 34, speaking for himself rather than about his son.
- **New question 5.9:** an autistic researcher asks for questions in advance and a video call. The best answer is to agree, as a reasonable adjustment. One wrong answer is mentioning his autism in a story about maths teaching.

**Disability**
- **4.2 policing:** the fact box notes that many disabilities can't be seen and not everyone declares one. The explanation gives Crohn's disease, diabetes and hearing loss as examples.
- **New question 5.10:** counting disabled sources from photos. The best answer is to record what sources tell you and work with disabled people's organisations. Asking every source is marked as intrusive, with anonymous surveys suggested instead.
- **7.2 rail:** the commuter now has ME and books passenger assistance.

**Sexuality and gender**
- **New question 7.4, Pride funding cut:** a build-the-list question. It needs the council (Power), the organisers (Representative), and either a volunteer (Experience) or an economist (Expertise).
- **New question 5.11:** a trans pensions economist. The best answer is to ask about pensions and check how she wants to be described, as with any source. Wrong answers include asking about her transition and outing her.
- **6.3 ticket prices:** a new question slot for an LGBTQ+ supporters' group. The tip now points to women's supporters' groups instead.

**Audit changes:**
- Named sources who only appear in level 4 and 5 situations, such as Funmi Adebayo and Rachel Moore, are now counted as sources. Before, they were left out with the background figures.
- The audit now counts 86 people. Disability is 12% of the people counted (half hidden), rural 5% and LGBTQ+ 10%.
- The findings, CSV, answer key and JSON are updated to match.

The Pride question adds a white friend, so friend and family options are now 9 of 12 white. Rural sources are still the biggest gap.

---

## Prompt 14

> Why don't we add the source audit as an easter egg revealed once they complete the final level?

### Response 14

The source audit is now a hidden extra that only appears after the final level.

- **Start screen:** the audit link is gone.
- **Final score screen:** a new card headed "Unlocked: one more thing" now appears, titled "We tracked our sources too". It shows a strip of the pixel portraits, a line explaining the audit, and a "See the source audit" button.
- **Audit page:** the header link now says "Play again" instead of "Back to the game".

Anyone with the file name can still open the audit page directly.

---

## Prompt 15

> The link to the extra page doesn't work on the Claude hosted version, although the exported project file does include the extra HTML page.
> Fix the broken link and rename the HTML page - instead of PEER Sources Audit.dc.html name it PEERaudit.html

### Response 15

I've renamed the audit page to **PEERaudit.html** and pointed the "See the source audit" button on the final screen at the new name. I haven't been able to test the hosted version, so I can't confirm the button now works there.

I've also rewritten two links inside the audit page so the spaces in the game's file name are spelled out in the link:
- the "Play again" link back to the game
- the link the page uses to load the source data from the game

If the hosted version only serves the main game file and not the pages next to it, any link to another page will still break. If it does, I can move the audit into the game itself, as a screen that appears after the final level, so nothing depends on a second file.

---

## Prompt 16

> Generate a new transcript with prompts added since the last time I asked (immediately after my prompt "Here is some more material on diversity and sourcing. Incorporate this into the game design.")

### Response 16

Updated this file, `PEER project transcript.md`, to add prompts 10 to 16.
