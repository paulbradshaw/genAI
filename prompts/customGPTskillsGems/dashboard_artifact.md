# Prompts for a data dashboard (Claude Artifact)

Below is a transcript of a chat to create a Claude Artifact: a [dashboard to explore data](https://claude.ai/public/artifacts/6d56f4ec-4395-4adf-bded-2338aa55db8c)

Creating an Artifact in Claude starts with a guide that asks you some initial questions. In this case you first choose the category **Apps and websites**.

Below are the initial questions and responses:

```
**Assistant:** Great choice! There are many different types of apps and websites we could create. To get started, could you tell me:
- What kind of app or website did you have in mind?
- What's the main purpose or idea?
- Any particular style or vibe you're going for?

---

**User:**
- What kind of app or website do you have in mind? → Web app / tool
- What's the main purpose or idea? → Display data / analytics
- Any particular style or vibe you're going for? → Clean & minimal

---

**Assistant:** Love it! A clean, data-focused web app. A couple more questions to nail down the details:

What kind of data will you be displaying, and who's the audience for this tool? Also:
- How will data get into the app?
- What types of visualizations do you need?

---

**User:**
- How will data get into the app? → User uploads a file (CSV/Excel)
- What types of visualizations do you need? → Tables, Charts & graphs, CSV download
```

At this point Claude presents you with a plan for the data analytics web app, and asks `Does this match your vision? Any changes before I start building?`

Here's the rest of the interaction:

```
**User:** I want to create an interface which allows journalists to select an authority of interest (from unique values in rows), and measures of interest (columns) and get a downloadable CSV of the results (plus some visual representation of it). I need to attach two key datasets:
- Timeseries data on asset sales by councils
- Meta data on what the columns mean

---

**Assistant:** That sounds like a really well-defined tool! Before I build, let me get a couple of details sorted. Please go ahead and upload your two files. While you're grabbing those:
- Should journalists be able to select multiple authorities to compare?
- For the visual representation, what would be most useful?

---

**User:**
- Should journalists be able to select multiple authorities to compare? → Yes, multi-select
- For the visual representation, what would be most useful? → Line chart (trends over time)

---

**Assistant:** Perfect! Now please go ahead and upload your two files — the timeseries asset sales data and the metadata file.

---

**User:** I can't upload them. I've published the metadata at this URL (skip the first 3 rows): https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-kb3KqsbiFeNvgjtnYDTYAesF0uLDDEUKhMCLVm_Atv1cpNuA9rJM1-IMPv8Q0gV257OW099g8lEn/pub?gid=566851937&single=true&output=csv

---

**Assistant:** Google Sheets is blocking direct fetching. A couple of options: (1) paste the first 10–20 rows directly into the chat, or (2) tell me the key column names and I'll build the tool to fetch the URL directly in the browser. Can you share the column names and structure? And do you have a similar published URL for the timeseries data?

---

**User:** Yes: https://www.gov.uk/government/statistics/local-authority-capital-expenditure-and-receipts-in-england-final-outturn-time-series

---

**Assistant:** *(Searched GOV.UK and found the direct CSV link and data structure.)*

Good — I now have a solid understanding of the dataset. Here's my plan:

**Local Authority Capital Data Explorer**

- On load, fetches both the GOV.UK CSV and your Google Sheets metadata in parallel
- **Step 1 — Select authorities**: searchable multi-select of all unique `LA_Name` values
- **Step 2 — Select measures**: searchable multi-select of data columns, shown with human-readable labels from metadata
- **Results**: a filtered data table, a line chart of selected measures over time per authority, and a "Download CSV" button
- Clean, minimal design — white + light grey, clear typography

Two things to confirm before I build:
1. Is your metadata Google Sheet still at the URL you shared?
2. Should the line chart show one line per authority, or one line per measure?

---

**User:**
1. Yes
2. The line chart shouldn't be shown until an authority is selected, AND a measure is selected, then it should just show that authority and measure over the time period covered by the data

---

**Assistant:** *(Built the first version of the artifact.)*

Here's your Local Authority Capital Data Explorer. On load it fetches both datasets, then offers searchable multi-select for authorities and measures, a results table, a line chart (only shown when exactly one authority and one measure are selected), and a CSV download.

---

**User:** It says `Error loading data: [object ProgressEvent]`. None of the dropdown menus work.

---

**Assistant:** *(Rewrote the artifact with a proper `fetch()` approach, better error handling, and a manual file upload fallback.)*

The error was because the browser was blocking PapaParse's built-in `download: true`. Fixed by using `fetch()` directly, adding meaningful error messages, and adding a file upload fallback UI in case auto-fetch fails.

---

**User:** It says `Could not auto-fetch data: Failed to fetch. Please upload the files manually below.` There is nowhere to upload them?

---

**Assistant:** *(Fixed the upload section to always be visible rather than conditionally shown.)*

The upload panel should now always be visible. You should see two file inputs — one for the time series CSV (downloadable from GOV.UK) and one for the metadata CSV (downloadable from your Google Sheet).

---

**User:** Where it currently says `Capital expenditure & receipts · England · 2018‑19 to 2024‑25` add a description of what the tool does, and instructions on how to use it, with a link to where the data comes from.

---

**Assistant:** *(Added a description panel below the header explaining the tool's purpose, how to use it, and linking to the GOV.UK source.)*

Done! There's now a description panel just below the header that explains what the tool does, how to use it, and links to the GOV.UK source.
```
