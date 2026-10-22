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

Created this file, `PEER project transcript.md`.
