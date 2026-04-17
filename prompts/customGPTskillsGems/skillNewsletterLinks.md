---
name: pinboard-newsletter
description: Parse bookmarks from pasted Pinboard HTML and turn them into a newsletter section. Use this skill whenever the user pastes Pinboard HTML or bookmark content and wants to produce newsletter content, a links roundup, a reading list section, or any curated digest from their saved bookmarks. Trigger on phrases like "turn my Pinboard into", "newsletter from my bookmarks", "write up my links", "Pinboard roundup", or any request involving Pinboard bookmarks and written output.
---

# Pinboard Newsletter Skill

Turn pasted Pinboard bookmark HTML into a formatted newsletter section: bookmarks grouped by topic, each as a bullet with linked anchor text and an optional pull quote or description.

## Input

The user will paste the HTML source from their Pinboard bookmarks page (the page requires login so cannot be fetched automatically). If they haven't pasted anything yet, ask them to:
1. Go to their Pinboard bookmarks page in a browser
2. Select all (Cmd/Ctrl+A) and copy, or use View Source (Cmd/Ctrl+U) and copy that
3. Paste it into the chat

## Workflow

### 1. Parse the pasted HTML

Extract bookmarks from the pasted content. In Pinboard's HTML each bookmark typically contains:
- The link title and URL (in an `<a>` tag with class `bookmark_title`)
- Extended description/notes (in a `.description` element)
- Tags (in `.tag` links)
- Date saved

If the user has pasted plain text rather than HTML, do your best to extract titles, URLs and any notes from whatever structure is present.

### 2. Filter

Skip any bookmark where both the title and notes are too thin to write a meaningful bullet (e.g. a bare URL with no title and no notes). Do not invent descriptions. If there's nothing to say, leave it out silently.

### 3. Group dynamically by topic

Read across all bookmarks and infer 2–5 topic groupings that make sense for this particular batch. Don't use fixed categories — derive them from what's actually there. Group headings should be casual, informal and first-person-ish in register (e.g. "AI stuff I read this week", "Data and FOI stuff", "Tools worth knowing about"). Avoid corporate or formal headings.

### 4. Write the bullets

For each bookmark, write a single bullet in this format:

```
* [Optional pull quote or paraphrase] __[anchor text]__
```

**Anchor text** is drawn from the title or a meaningful phrase from the notes — not the raw URL. It should read naturally in the sentence.

**Pull quote**: If the notes contain a genuinely interesting, pithy or informative phrase, lead with it in double quotes before the linked anchor text. Use your judgement — only include a quote if it adds something. If the title alone is self-explanatory, skip the quote.

**Paraphrase**: If there are no quotable notes but some context is useful, write a brief natural-language intro before the link (e.g. "New research focusing on…", "A tool for…"). Keep it tight.

**No padding**: Don't add filler phrases like "This is a great read about…" or "Check out this…". Match the matter-of-fact, slightly wry tone of the example.

### 5. Output format

Produce only the newsletter section — no preamble, no "here's your newsletter", no explanation. Output ready-to-paste Markdown:

```
[Group heading]
* bullet
* bullet

[Group heading]
* bullet
```

Use `__double underscores__` for bold/linked anchor text to match the user's convention.

Do not include dates, tags, or bare URLs in the output.

## Tone notes

- Casual, intelligent, first-person register — written as if by a journalist sharing what they've been reading
- Descriptions are concise and informative, not promotional
- Quotes are used sparingly — only when the original phrasing is genuinely worth surfacing
- No emojis (the user adds those themselves)
- Each bookmark gets its own bullet — do not combine multiple bookmarks into one bullet
