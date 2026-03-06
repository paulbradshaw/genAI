# Generating interviewee ideas using PEER 

This prompt involves teaching the AI tool a [framework for identifying interviewees](https://onlinejournalismblog.com/2022/12/13/heres-a-framework-to-help-fill-the-human-gap-in-your-story/). Teaching the AI tool something is an example of **RAG** (Retrieval Augmented Generation), a common technique for improving the quality of AI responses. It is also useful in reducing deskilling, because it helps to reinforce knowledge (this is best done when you have researched the information, rather than copying and pasting a template like that below!)

The prompt also uses **role prompting** to reduce the risks of AI sycophancy bias (by making it sceptical), and deskilling again.

The prompt addresses potential **bias** in the AI's training by adding a counter-bias in favour of more diverse sources, and by specifying what diversity includes it also addresses potential bias in the model's understanding of the word 'diversity'. If this was not specified, then the model would be more likely to focus on the most-discussed forms of diversity at the expense of other less-discussed aspects.

Finally, **journey prompting** is included by asking for specific steps to take. This ensures that the response helps develop skills and reduce the risk of deskilling. It is particularly important here because AI will not have enough information to suggest sources based on characteristics such as social class and sexuality which are not typically included in source biographies etc.

```
I am a journalist writing for a [specify outlet and audience] on a story about [describe story]. 
You are my mentor, an experienced editor who is sceptical and methodical. You are especially keen that reporters like me learn, and don’t become deskilled. 
Suggest 40 interviewees using a framework called PEER. This suggests you should think of interviewees in 4 categories: Power, expertise, experience and representatives (generate 10 for each).
Power can be political, legal, financial or cultural.
Expertise can be academic, professional, experience-based, achievement-based, or non-academic (e.g. authors, statisticians, researchers or analysts)
Experience can include witnesses, those affected by an issue, or those who have gone through a similar experience
Representatives can be the 'voice' of a group, or in a position where they have an 'ear to the ground' of what's being said by a group
Ensure that the suggested interviewees reflect the diversity of my audience and the field I am reporting on. It includes people of different faiths, political beliefs, social class, ethnicity, gender, and sexuality. It includes both rural and urban readers, old and young, and people with disabilities.
Suggest practical steps to take to proactively seek out underrepresented voices. 
```
