# Crime Category Lookup — Conversation Log

## Overview

This conversation covers the creation of two lookup CSVs mapping inconsistent crime category strings from UK police FOI responses to canonical Home Office / ONS crime classifications.

---

## Task 1: 30 Forces Lookup

### Request

> The `classifying crimes in FOIs` folder has two CSV files in it containing crime classification categories. Within that folder is a folder called `FOI responses` containing CSV files with data from 30 police forces. There is a lot of inconsistency between the forces in the categories that they use: some use categories from different levels, some enter the category inconsistently (e.g. missing words, abbreviations) and some include extra information (e.g. Act/section and/or crime code). Create a lookup CSV which contains the following:
>
> - A column with all the unique categories used in the police force responses. These should match the originals exactly (preserve quotation marks, spaces, etc.)
> - A column with the 'clean' version of that category, based on the lookup files (no code or act/law etc.)
> - A column indicating which category level that clean version was taken from (Class, Sub class, Offence category, Offence description, New ONS sub-offence group, etc.)
> - A column indicating level of confidence in the match (high, medium, low)
> - A column with the 'Class' for the offence (top level of category)
> - A column indicating level of confidence in the Class match (high, medium, low)
>
> DO NOT USE THE FOI CLASSIFIER SKILL

### Input Files

| File | Description |
|------|-------------|
| `offencecategoriesLOOKUP.csv` | 999 rows. Columns: Offence Code, Offence description, Old PRC offence group, Old offence sub-group, New ONS offence group, New ONS sub-offence group |
| `Offence category list FOR LOOKUP (detailed).xlsx - Notifiable Offences .csv` | 1675 rows. Columns: Home Office code, Class, Sub class, Offence category, Offence, Act, Section, Current, etc. |
| 29 CSVs in `CSVs to combine/` | FOI response data. Columns: Filename, Sheet name, Force, Hospital, Crime category, Crime code, Crime sub-category, Outcome code, Outcome description, Total, Year from, Year to, Month |

Categories were extracted from both `Crime category` and `Crime sub-category` columns, excluding "NOT SPECIFIED".

### Output

**`crime_category_lookup.csv`** — 695 rows  
- 643 high confidence  
- 52 medium confidence  
- 0 low confidence

Output columns: `original_category`, `clean_category`, `category_level`, `match_confidence`, `class`, `class_confidence`

---

## Task 2: 29 Forces Lookup

### Request

> Repeat the process with this list: [full pasted list of ~570 categories labelled 'Category in 29forces data']

### Output

**`crime_category_lookup_29forces.csv`** — 569 rows  
- 538 high confidence  
- 31 medium confidence  
- 0 low confidence

---

## Technical Approach

### Crime Classification Hierarchy

**Home Office detailed lookup:**
Class → Sub class → Offence category → Offence description

**ONS simpler lookup:**
New ONS offence group → New ONS sub-offence group → Old PRC offence group → Old offence sub-group

### Canonical Top-Level Classes (13 total)

1. Violence Against The Person
2. Sexual Offences
3. Robbery
4. Theft
5. Burglary
6. Arson and Criminal Damage
7. Drug Offences
8. Possession of Weapons Offences
9. Public Order Offences
10. Vehicle Offences
11. Miscellaneous Crimes Against Society
12. Fraud Offences
13. N/A

### String Normalisation

```python
def norm(s):
    s = s.lower().strip()
    s = re.sub(r'\s+', ' ', s)
    s = s.replace(' & ', ' and ')
    s = s.replace('&', 'and')
    return s
```

### Act/Section Stripping

```python
def strip_act(s):
    patterns = [
        r'\s*[-–]\s*(?:The\s+)?[A-Z][a-zA-Z ,\']+(?:Act|Law|Order|Regulation|Directive)\s+\d{4}.*',
        r'\s*[-–]\s*[Cc]ommon [Ll]aw.*',
        r'\s*\((?:The\s+)?[A-Z][a-zA-Z ,\']+(?:Act|Law|Order|Regulation)\s+\d{4}.*\)\s*',
        r'\s*[-–]\s*(?:Sec|Section|s\.)\s*[\d\w\(\)]+.*',
        r'\s*\((?:Sec|Section|S|s)\s*[\d\w\(\)]+.*\)\s*',
    ]
    result = s
    for p in patterns:
        result = re.sub(p, '', result, flags=re.IGNORECASE).strip()
    return result
```

### Matching Logic

```python
def find_match(original):
    n_orig = norm(original)
    if n_orig in MANUAL:
        return MANUAL[n_orig], 'high'
    info, conf = exact_match(n_orig)
    if info: return info, conf
    stripped = strip_act(original)
    if stripped and stripped != original:
        n_stripped = norm(stripped)
        if n_stripped in MANUAL:
            return MANUAL[n_stripped], 'high'
        info, conf = exact_match(n_stripped)
        if info: return info, 'high'
    clean_try = original.rstrip('.')
    if clean_try != original:
        info, conf = exact_match(norm(clean_try))
        if info: return info, 'high'
    if stripped and stripped != original:
        info, conf = fuzzy_match(norm(stripped))
        if info: return info, conf
    info, conf = fuzzy_match(n_orig)
    if info: return info, conf
    return None, None
```

### Fuzzy Matching Thresholds

| Score | Confidence |
|-------|------------|
| ≥ 0.92 | high |
| ≥ 0.80 | medium |
| ≥ 0.75 | low |

Using Python `difflib.SequenceMatcher`.

### Lookup Dict Priority Order

1. `offence_lkp` (offence description, detailed file)
2. `offence_desc_lkp` (ONS offence description)
3. `offence_cat_stripped` (offence category, act-stripped)
4. `offence_cat_lkp` (offence category)
5. `subclass_lkp` (sub class)
6. `ons_sub_lkp` (New ONS sub-offence group)
7. `class_lkp` (class)
8. `ons_grp_lkp` (New ONS offence group)
9. `old_sub_lkp` (Old offence sub-group)
10. `old_prc_lkp` (Old PRC offence group)

---

## Errors and Fixes

| Issue | Root Cause | Fix |
|-------|-----------|-----|
| "Theft from a motor vehicle - Theft Act 1968 Sec 1" classed as Vehicle Offences | Act-stripped version matched an offence whose ONS group mapped to Vehicle Offences | Post-processing: any row with "theft from" + "motor vehicle" in original and class "Vehicle Offences" corrected to "Theft" |
| "Criminal Damage - Other Than Dwelling" matched to "Criminal damage to a dwelling" | Poor fuzzy match | Patched to "Criminal damage to a Building Other Than a Dwelling" under Arson and Criminal Damage |
| "Burglary Residential (Dwelling)" classed as Theft | Old classification placed domestic burglary under Theft | Patched to Sub class "Residential Burglary of a Home" under Burglary |
| "Assault Police Officer - Sec 47..." matched to "Assault on a traffic officer" | Poor fuzzy match | Patched to "Assault Occasioning Actual Bodily Harm" under Violence Against The Person |
| "Single Offender: Rape of a female aged 16 or over" matched to "Attempted rape…" | Fuzzy match incorrectly favoured "Attempted" | Patched to correct rape entry |
| "Disclose or threats to disclose private sexual photographs/film" classed as VAP | Incorrect class mapping | Changed to Sexual Offences |
| "Possession of an indecent or pseudo-photograph of a child" classed as MCA | Incorrect class mapping | Changed to Sexual Offences |
| "Threat or possession with intent to commit criminal damage…" classed as MCA | Incorrect class mapping | Changed to Arson and Criminal Damage |
| "Send grossly offensive/indecent communication" classed as VAP | Incorrect class mapping | Changed to Miscellaneous Crimes Against Society |
| 3 Task 1 unmatched entries (e.g. "Breach of a restraining order") | MANUAL dict checked before stripped version | Fixed `find_match` to check stripped version in MANUAL first; patched 3 entries directly |
| 4 Task 2 unmatched entries (e.g. "Burglary residential", "In charge of dog out of control…") | Missing MANUAL entries | Patched directly |
| 4 Task 2 low-confidence entries (e.g. "Cheque, Plastic Card and Online Bank Accounts (not PSP)") | Fuzzy match at low threshold | Corrected via targeted patch with correct clean categories and high/medium confidence |

---

## Special Cases

- **Numeric code prefixes** (e.g. "80 Absconding from…"): stripped before matching
- **ALL CAPS / mixed case**: handled by normalisation
- **Abbreviations** (ABH, GBH, S47, PC for Police Constable): handled via MANUAL override dict
- **Truncated entries** (e.g. "Breach of non", "Non"): mapped to N/A or closest match via MANUAL
- **"Attempted -" prefix entries** (Task 2 new): mapped as "Attempted [base offence]" with same class as base offence
- **Combined entries** (e.g. "Murder & Attempted Murder"): mapped at "Combined/generic" level

---

## Final Output Summary

| File | Rows | High | Medium | Low |
|------|------|------|--------|-----|
| `crime_category_lookup.csv` | 695 | 643 | 52 | 0 |
| `crime_category_lookup_29forces.csv` | 569 | 538 | 31 | 0 |

Both files located at:  
`/Users/paul/Documents/wip/claudecode/classifying crimes in FOIs/`
