# Council Asset Dashboard — Reusable Build Spec

This document describes how to recreate the Durham County Council Asset Acquisitions & Disposals dashboard for a different council or dataset. Paste this whole document into a new chat with Claude, along with your CSV data (or a sample of it), and ask Claude to build the dashboard following this spec.

## How to use this file

1. Start a new chat.
2. Paste this entire document.
3. Attach your CSV file(s) — or paste a sample of 5–10 rows so Claude can see the column structure.
4. Say something like: "Build me a dashboard like this for [Council Name]'s asset data."
5. Claude will ask clarifying questions if anything is ambiguous (e.g. column names, date formats).

## Project summary

A self-contained React dashboard (built as a Claude artifact) for visualising local council property transactions — acquisitions and disposals of land/buildings. Designed for journalists to explore public spending data and identify potential story leads. No backend required; all data loads via a CSV upload screen so the published artifact works for any audience without external dependencies or CORS issues.

## Core design decisions (carry these over)

- **CSV upload screen, not embedded data or live fetch.** Google Sheets/CORS fetches don't work reliably in published artifacts. Embedding data as JSON bloats the code and can't be updated. A simple upload screen (two file inputs) is the most robust solution for a shareable public artifact. Include direct download links to the source CSVs (e.g. published Google Sheets links) right above the upload buttons so users can grab the data in one click.
- **Everything processed client-side.** No server, no analytics, no data leaves the browser. State this explicitly in the UI for journalist/audience trust.
- **A "Reload data" button** in the header lets users swap in updated CSVs without restarting the artifact.
- **Tabs, not one long scroll.** Use a tabbed interface so different angles of the data don't overwhelm a single page.

## Data structure expected

Two CSV files (or adapt to however many categories your council's data has — e.g. some councils may only have one combined file):

1. **Disposals** — sales of land/property by the council
2. **Acquisitions** — purchases of land/property by the council

Typical columns (adapt names to your actual data):
- A reference/packet number
- A deed or transaction number
- An asset/deed name or description (often includes a place name — useful for story angles even without coordinates)
- A deed/transaction type (freehold, leasehold, disposal, community asset transfer, etc.)
- A case reference (often blank)
- A transaction date (commonly `DD-Mon-YY` or `DD/MM/YYYY` format — robust date parsing needed)
- A consideration/value column (commonly has currency symbols, encoding issues like `Â£`, blank values, "unknown", or values embedded as text like "£114,400,000.00")

**Important data quirks to handle:**
- Many transactions are valued at **£0 or £1** (gifts, community transfers, internal moves) — these are invisible in value-based totals but numerically significant. Always build a dedicated view for transaction *counts* alongside transaction *value*.
- Currency parsing must strip `£`, commas, encoding artifacts (`Â£`), and handle non-numeric placeholder text ("unknown", "on condition of sale").
- Dates may be inconsistent in format; build a flexible parser that tries multiple formats (`DD-Mon-YY`, `DD/MM/YYYY`, ISO).

## Dashboard structure (tabs)

1. **Overview** — KPI cards (total acquisitions value, total disposals value, net position, transaction count) + annual bar chart (acquisitions vs disposals by value) + transaction count line chart + pie chart of transaction split.
2. **Trends** — net position by year (acquisitions minus disposals) + cumulative value over time (running totals).
3. **Counts** — a dedicated tab focused on transaction *counts* rather than value, since many low/no-value transactions are invisible in financial charts. Include: count KPIs, stacked bar of valued vs £0/£1 transactions per year, acquisitions vs disposals by count per year, counts by category with a zero-value-rate table.
4. **By Type/Category** — breakdown by deed type or transaction category: horizontal bar chart (top 10–12) + summary table.
5. **Table** — full searchable, sortable transaction log. Search by name; sort by date/name/type/value; paginate or cap displayed rows (e.g. first 200) with a note to filter further.
6. **Story Leads** — a journalism-specific tab that auto-generates potential angles under five headings, computed live from the loaded data:
   - **Scale stories** — absolute figures, percentages, proportions of zero-value deals
   - **Change stories** — rises/falls year-on-year, peak years, recent-vs-historical comparison
   - **Ranking stories** — biggest single transactions, categories with highest zero-value rates
   - **Relationship stories** — correlations between acquisition/disposal activity, suggested FOI angles
   - **Exploratory stories** — a single "five things we found" structured summary combining the above
   
   Each lead should include a **headline**, a **detail** paragraph with real computed numbers, and a **reporter tip** suggesting a follow-up action (FOI request, cross-referencing budgets, checking land registry, etc.). Always include an editorial disclaimer that figures must be verified before publication.

## Filters (apply across all tabs)

- Year filter (dropdown, "All" + each year present in the data)
- Category/deed type filter (dropdown, "All" + each type present)
- Search box (free text, filters by asset name — table tab only, or apply globally if desired)

## Visual style

- Clean, editorial, newsroom-appropriate — not flashy. Muted background (`#f8fafc`), white cards with subtle shadow, a dark navy header band (`#1e3a5f`).
- Consistent colour coding: blue for acquisitions/spend, red for disposals/income, green for net/positive, amber for zero-value/flagged items.
- KPI cards with a coloured left border matching the metric's category colour.
- Recharts library for all charts (bar, line, pie) — responsive containers, light grid lines, tooltips with full currency formatting.
- Currency formatting: abbreviate in chart axes/KPIs (£1.2m, £450k) but show full precise values in tooltips and tables (£1,234,567).

## Technical implementation notes

- Single React functional component, `useState`/`useMemo` for state and derived data — no external state libraries.
- CSV parsing: handle both comma and tab-delimited files, strip BOM characters, handle quoted fields with embedded commas, fix common encoding issues (`Â£` → `£`).
- Date parsing: write a flexible parser supporting `DD-Mon-YY`, `DD/MM/YYYY`, and ISO formats; treat unparseable dates as excluded from charts and noted to the user if significant.
- All currency values parsed to plain numbers (strip symbols, commas, whitespace); treat non-numeric placeholder values as 0 unless told otherwise.
- No localStorage/sessionStorage — use React state only (artifact environment restriction).
- File upload via standard `<input type="file">` with `FileReader.readAsText()` — no server upload, no `window.fs.readFile` (that API only works for files already in the conversation, not for a published/shared artifact).

## Things to ask the user about before building

- What are the actual column names in their CSV(s)? (Confirm exact headers, since councils vary.)
- Do they have one combined dataset or separate files per category (acquisitions/disposals/transfers)?
- Is there any location data (postcodes, coordinates, ward names)? If yes, a map view can be added; if only place names in free text, geocoding would need a separate enrichment step.
- Should zero/low-value transactions be excluded from totals or flagged separately? (Recommended: flag separately, never silently exclude.)
- Any known data quality issues to flag (e.g. encoding problems, inconsistent date formats, missing values)?

## Known limitations to mention to the user

- No mapping/geographic view unless coordinate or postcode data is available.
- Story Leads are computer-generated pattern observations, not verified journalism — always flagged as needing human verification before publication.
- Large CSVs (multiple thousands of rows) may need a row cap in the table view for performance; full data still feeds the charts and KPIs.
