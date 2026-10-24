# Brief: Family Fortunes-style classroom survey game

Use this brief to build an interactive "Family Fortunes" (US: "Family Feud") guessing game for a classroom, projected on a big screen. Students guess the top answers from a survey; the presenter types each guess and matching answers are revealed on the board.

Before building, ask me for anything in **Inputs** I haven't supplied.

## Inputs (fill in)

- **Title:** e.g. Journalism Fortunes
- **Question / subtitle:** e.g. We surveyed the industry: the top challenges facing journalism
- **Source credit:** e.g. Reuters Institute 2026 State of the Media Report
- **Answers** (in rank order, with survey %):

| # | Short label (big text) | Full wording (small text under label) | % |
|---|---|---|---|
| 1 | Accuracy | Misinformation, accuracy, factchecking and verification | 50 |
| 2 | Resources | Resource constraints: budgets, staff cuts, workload | 49 |
| 3 | AI | AI impacts on production, search referrals and trust | 43 |
| 4 | Audiences | Audience behaviour, consumption changes, news avoidance | 42 |
| 5 | Competition | Competition from non-journalists eg creators and influencers | 28 |
| 6 | Commercial pressure | Commercial pressures, SEO, algorithms, sponsored content | 27 |
| 7 | Press freedom | Press freedom, censorship and safety | 24 |

- **Accepted variations:** optional. If not supplied, generate 20–35 synonyms, abbreviations, related terms and common phrasings per answer (e.g. for Accuracy: fake news, misinfo, disinformation, fact checking, verification, propaganda, hoaxes…).
- **Placeholder guess** in the input box: something silly that is NOT a valid answer (e.g. "goblins").

## Game rules

- Two teams: **Blue Team** and **Red Team**. Blue starts.
- The active team's guess is typed into the input and submitted (Enter or button).
- **Correct:** the tile flips to reveal the answer; the team scores points equal to the answer's %. Revealed tiles stay revealed.
- **Already revealed:** say so, no penalty.
- **Wrong:** the active team gets an X (max 3).
- **X counts are kept per team** and carry over when the turn passes back and forth. The strike display always shows the active team's Xs.
- On a team's 3rd X, the turn passes to the other team automatically. A team already on 3 Xs that answers wrong again passes straight back.
- "Pass to other team" button switches turn manually without changing Xs.
- **Game over** when both teams have 3 Xs: reveal all remaining answers, block further input, and show a Game Over panel announcing the winner (or a draw) with final scores.
- **Reset** clears board, scores, Xs and game-over state.

## Answer matching (fuzzy)

Normalise both guess and aliases: lowercase, strip apostrophes and punctuation, collapse whitespace. Then, for each answer's aliases (plus its label):

1. Exact match.
2. Guess contains an alias of 4+ characters, or an alias contains a guess of 5+ characters.
3. Typo tolerance via Levenshtein distance: ≤1 for aliases under 7 chars, ≤2 for 7–11, ≤3 for 12+ (skip if length differs by more than 4).

## Board and controls

- Board: one tile per answer, rank number on the left. Hidden tiles show a dashed gold bar. Revealed tiles show the **short label large and uppercase**, the full wording smaller underneath, and the % large on the right. Tiles pop on reveal.
- Side panel: input box + "Lock it in" button labelled with the active team (in team colour); feedback message (green correct, red wrong with a shake, gold already-revealed); three X boxes; two team score cards (active team glows in its colour, labelled "At the podium" / "Waiting"); Pass button; one-line rules note.
- Header buttons: Sound on/off, Full screen (browser fullscreen API), Reveal all (for debrief), Reset.
- Sound effects via Web Audio (no files): rising chime for correct, low buzz for wrong, soft blip for already revealed.

## Visual style: 80s retro game show

- Deep navy/indigo stage background with a radial glow at top.
- Scrolling neon perspective-style grid (magenta and cyan lines) fading in towards the bottom; faint CRT scanlines over everything; a thin magenta-to-cyan horizon line.
- Title in Anton, uppercase, pale gold with a pulsing neon glow (gold + magenta) and hard drop shadow. Subtitle in hot pink, wide letter-spacing.
- Body/UI text in Barlow Condensed (bold condensed sans). Numbers in Anton.
- Answer tiles: chunky beveled look with a gold gradient frame, blue gradient face, inner highlights and shadows.
- Team colours: Blue #39b7ff, Red #ff4d6d. Gold accent #f0c04a. X marks red #e0483c.
- Sized for a projector: large type, all sizes fluid with the viewport, board in a responsive grid.

## Delivery

A single self-contained interactive file (HTML). All answer data, notes and aliases live in one data array at the top of the logic so it is easy to swap in a new survey.
