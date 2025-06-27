# Generative AI resources, tips and tools

This repo contains various resources related to the use of generative AI (aka Large Language Models or LLMs) in journalism. 

* Go to the [prompts folder](https://github.com/paulbradshaw/genAI/tree/main/prompts) to see **prompt design templates**.
* You'll find tips on **document search and document sets** to try out in [this folder](https://github.com/paulbradshaw/genAI/tree/main/docsfornotebooklm)
* Also here are [**slides** from my Centre for Investigative Journalism Summer School 2025 presentation on using genAI](https://github.com/paulbradshaw/genAI/blob/main/AI%20in%20journalism%20CIJ%202025.pdf) and [slides from 2024](https://github.com/paulbradshaw/genAI/blob/main/AI%20in%20journalism%20CIJ%202024.pdf).
* I've written a [series of posts](https://onlinejournalismblog.com/tag/CIJgenAI/) which walk through various applications of genAI in more detail
* In a separate post I [explore strategies for reducing the environmental impact](https://onlinejournalismblog.com/2025/06/19/how-to-reduce-the-environmental-impact-of-using-ai/) of genAI

Tools are listed below. 

## General-purpose genAI tools

* ChatGPT: https://chatgpt.com/
  * ChatGPT Playground (tweak settings such as 'temperature' - paid accounts only): https://platform.openai.com/playground
  * Custom GPTs: https://chatgpt.com/gpts
* Claude: https://claude.ai/
* Google Gemini: https://gemini.google.com/app
  * Google AI Studio (Gemini, but change temperature and other settings including audio generation): https://aistudio.google.com/
* Microsoft Copilot: https://copilot.microsoft.com/
* [LM Studio](https://lmstudio.ai/) allows you to download and run LLMs locally including Llama, DeepSeek, Qwen and Gemma

* [ChatBetter](https://www.chatbetter.com/) allows you to run a prompt across multiple LLMs, and [Galaxy.ai](https://galaxy.ai/) offers a single subscription to all services 

## Idea generation

* [Podcast Plan Generator](https://planner.alitu.com/) promises to "Create Your Perfect Podcast Strategy"
* Generate a colour palette with [Deblank Colors](https://deblank.com/colors)

## Document-focused genAI tools

* NotebookLM (Gemini): https://notebooklm.google.com/
* ChatPDF: https://www.chatpdf.com/
* AnythingLLM: https://anythingllm.com/
* PDF.ai: https://pdf.ai/

I've created a folder of [documents to try with NotebookLM (etc)](https://github.com/paulbradshaw/genAI/tree/main/docsfornotebooklm). Some suggestions:

* Download the [rules on school uniform](https://github.com/paulbradshaw/genAI/tree/main/docsfornotebooklm/schooluniformrules) and try a prompt asking it to identify potential story ideas from these.
* Download the [royal finances documents](https://github.com/paulbradshaw/genAI/tree/main/docsfornotebooklm/royalfinances) and ask it for story leads or ideas
* Generate a podcast based on water company documents - [see the readme file in that folder for a template prompt](https://github.com/paulbradshaw/genAI/tree/main/docsfornotebooklm/waterplans)
* Download [responses to a consultation on representation and portrayal on the BBC](https://github.com/paulbradshaw/genAI/tree/main/docsfornotebooklm/consultationbbc) and use genAI tools to summarise them, or suggest story ideas

## Transcription

* [Otter](https://get.otter.ai/) is an especially widely used AI-powered transcription tool, as is [Trint](https://trint.com/)
* [oTranscribe](https://otranscribe.com/) is an "open-source, browser-based transcription tool ideal for journalists and academic researchers who need a free and private solution" ([DigitalOcean](https://www.digitalocean.com/resources/articles/ai-transcription-tools#otranscribe))
* [Descript](https://www.descript.com/) combines transcription with audio and video editing with text-based multi-track editing
* [Whisper Web](https://huggingface.co/spaces/Xenova/whisper-web) offers "machine learning-powered speech recognition directly in your browser"

## Research-focused genAI tools including summarisation

* [Perplexity](https://www.perplexity.ai/) is an AI-based search engine
* Academic research: [Consensus](https://consensus.app) is an "AI-powered academic search engine" and [PubMed.AI](https://www.pubmed.ai/home) is "An Innovative Retrieval Tool That Harnesses The Power Of Artificial Intelligence To help You Find And Understand Relevant Biomedical Literature"
* YouTube video summarisation tools include [Summarize.ing](https://summarize.ing/), [GitMind](https://gitmind.com/youtube-video-summarizer) and [Monica](https://monica.im/en/products/ai-video-summarizer)
* [NoteGPT](https://notegpt.io/) summarises videos as well as other media such as PowerPoints and images
* [AURA](https://www.journalismai.info/blog/an-ai-research-tool-for-journalists) is "an AI-driven research tool designed to automate the creation of comprehensive, Wikipedia-style reports on various topics. STORM operates by gathering information from multiple sources, generating outlines, and producing well-structured articles with citations."
* [SmolDocling](https://huggingface.co/ds4sd/SmolDocling-256M-preview) is a tool for extracting text from images, including "Chart Recognition – Extracts and interprets chart data" and "Table Recognition – Supports column and row headers for structured table extraction."
* [Caracal](https://huggingface.co/spaces/wjbmattingly/caracal) extracts text from handwriting including named entity recognition
* Financial research: [Fintool](https://fintool.com/) gets "answers from SEC filings, earnings calls, and financial data"
* [Papercheck](https://daniellakens.blogspot.com/2025/06/introducing-papercheck.html?m=1) is "An Automated Tool to Check for Best Practices in Scientific Articles", that runs as a package in R
* [Document Claim Mapping](https://github.com/francesco-s/document-claim-mapping) "processes documents and maps factual claims to their corresponding source news."

## OSINT tools

* Advanced searches, known as Google Dorks, can be generated with tools like [DorkSearch.com](https://dorksearch.com/) and Henk Van Ess's [AI Research Pilot](https://digitaldigging.org/research/)
* [OSINVGPT](https://chatgpt.com/g/g-Mk7QifBG8-osinvgpt) is a custom GPT that "Assists with open-source investigation methods, research planning, tool selection, OSINV and Human Rights Law, and ethics."
* [Cylect](https://cylect.io/) is "the Ultimate AI OSINT Search Engine"
* Image search: [GeoSpy](https://geospy.web.app/)
* Image classification: the [Smart Image Sorter](https://colab.research.google.com/github/bellingcat/smart-image-sorter/blob/main/interface.ipynb) was created by Bellingcat to help with scenarios where, for example, you've scraped a large number of images and want to find those that match your criteria
* Dark web research: [Robin](https://github.com/apurvsinghgautam/robin) 
* Geo research: [Aino](https://aino.world/) "Process spatial data globally without GIS expertise—just ask questions, and AI provides the answers."
* Custom models for geospatial imagery: https://picterra.ch/


## Tools for coding

* [Google Colab](https://colab.research.google.com/) is a tool in Google Drive for writing Python and R notebooks. Its built-in AI will suggest code based on your comments and text blocks - you may need to use the built-in Gemini functionality first to activate it. You can also troubleshoot error messages by clicking on the option to have Gemini examine errors and suggest fixes
* [Cursor](https://www.cursor.com/en) is an "AI code editor"
* **Regular expression** tools include [Regex.ai](https://regex.ai/), [RegexGo](https://www.regexgo.com/) and [rgx.tools](https://rgx.tools/)
* [Zev](https://github.com/dtnewman/zev#readme) is a tool for helping you remember **command line** (terminal) commands using natural language
* **Undocumented APIs** are the focus of the [API Detection Engine](https://github.com/ecz2515/api-detection-engine)

  
## Data/spreadsheet tools

* Google Sheets has an `AI` function. [I wrote a guide to using it here](https://onlinejournalismblog.com/2025/04/10/google-sheets-has-a-new-ai-function-how-does-it-perform-on-classification-tasks/)
* HuggingFace's [Sheets](https://huggingface.co/spaces/aisheets/sheets) "is a tool to build and transform structured tables using AI and web search. You can build tables from scratch or augment your own spreadsheets"

## Visual tools

* Image generation tools include [OpenArt](https://openart.ai/), [Canva's image generator](https://www.canva.com/ai-image-generator/), [Pixlr's generator](https://pixlr.com/image-generator/) and [Bing Image Creator](https://www.bing.com/images/create)
* [Napkin](https://www.napkin.ai/) is a chart creation tool, quite powerful
* [Data Analyst](https://chatgpt.com/g/g-HMNcP6w7d-data-analyst?model=gpt-4o) is a custom GPT that offers to "Drop in any files and I can help analyze and visualize your data."
* [Lore Machine](https://www.loremachine.world/) "transforms story text into multimedia" ([used by one journalist to turn a story into a comic](https://www.technologyreview.com/2024/03/05/1089458/generative-ai-turn-my-story-into-comic-images-lore-machine/?truid=%252A%257CLINKID%257C%252A&mc_cid=17070bf49e&mc_eid=32e65cfa9b))

## Other lists

You can find other lists at the [Journalist's Toolbox](https://journaliststoolbox.ai/chatgpt-tools/) and [AI Tools for Local Newsrooms Database](https://airtable.com/appnP5pmnsMFGYoAI/shrQeIsvzGoTbdp7b/tblvwDhL4X23V1pTp/viwN8zctay9H2N0ir?blocks=hide).
