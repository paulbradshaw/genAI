# Custom GPTs, Gemini Gems and Claude Skills and Artifacts

This repo contains resources related to custom chatbots built on top of large language models (LLM). 
  
ChatGPT calls these Custom GPTs, Gemini calls them [Gems](https://gemini.google.com/gems/view) and Claude calls them Skills. There are also Claude Artifacts: webpages and tools that can be published online, such as dashboards and calculators.

Gemini Gems are free to create at the time of writing. To use Custom GPTs or Claude Skills and Artifacts you will need a paid account. 

There are differences in how they work but the broad principle is similar: each of them allows you to build something on top of the LLM by adding custom instructions and uploading files which responses can be 'grounded' in.

## Gemini Gems

You can only upload 10 documents to a gem, but you can also link it to a collection of documents stored in NotebookLM, which provides a way around this (NotebookLM has a limit of 50 documents).

* [Finding stories in action plans](https://github.com/paulbradshaw/genAI/blob/main/prompts/gems/actionplans.md)
* [An assistant for finding stories in company accounts](https://github.com/paulbradshaw/genAI/blob/main/prompts/customGPTskillsGems/gemCompanyAccounts.md)

## Custom GPTs

* A CustomGPT to provide student journalists with feedback and guidance: [Paul's mini editor](https://github.com/paulbradshaw/genAI/blob/main/prompts/customGPTskillsGems/GPTminieditor.md)

## Claude Skills

Claude Skills use markdown files, so the files that start with `skill` in this directory are the actual markdown files that you upload to Claude or that Claude creates. 

* [This newsletter skill](https://github.com/paulbradshaw/genAI/blob/main/prompts/customGPTskillsGems/skillNewsletterLinks.md) converts a HTML page of bookmarks from a Pinboard account into a newsletter section rounding up those links.

## Claude Artifacts

Creating an Artifact in Claude involves some initial questions before the more customised prompting starts. You can [see an example of responses and prompts used to create a dashboard here](https://github.com/paulbradshaw/genAI/blob/main/prompts/customGPTskillsGems/dashboard_artifact.md)

This also means it's easy to share skills and use other people's - you can find skills made by other people by searching around. [Florent Daudens shares his skills in a guide here](https://huggingface.co/spaces/fdaudens/ai-journalism-skills)

* [A Skill to generate a newsletter section based on links that I've bookmarked on Pinboard](https://github.com/paulbradshaw/genAI/blob/main/prompts/customGPTskillsGems/skillNewsletterLinks.md)
