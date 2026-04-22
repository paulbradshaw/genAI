# Vibe coding a scrollytell 

An example of a [prompt](https://chatgpt.com/share/69e1ea49-1d90-8328-b787-a0e8e5edac68) used to generate HTML that will create a 'scrollytell' effect for a story.

In this example the story isn't written but some charts have been, so we ask it to include placeholder text that we can edit later. 

This gives us more control over the final version, and keeps the results simple and therefore easier to change.

Important techniques here include:

* Include specific HTML where needed (e.g. embed codes for charts)
* Specify platform (in this case that it can be used in a GitHub Pages website)


```
Generate code that I can use to create a scrollytell story on GitHub Pages.

Add placeholder text that I can edit between each chart 

And placeholder text while each chart scrolls.

Here is the embed code for the charts:

<div class="flourish-embed flourish-chart" data-src="visualisation/27786452"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/27786452/thumbnail" width="100%" alt="visualization" /></noscript></div>

<div class="flourish-embed flourish-chart" data-src="visualisation/27786395"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/27786395/thumbnail" width="100%" alt="visualization" /></noscript></div>

<div class="flourish-embed flourish-chart" data-src="visualisation/27786360"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/27786360/thumbnail" width="100%" alt="visualization" /></noscript></div>
```

You can see the [resulting page here](https://paulbradshaw.github.io/testscrollytell/)
