---
title: How to Scrape People Also Ask Questions With Screaming Frog
SEO_title: Scraping People Also Ask With Screaming Frog
slug: /how-to-scrape-people-also-ask-questions-with-screaming-frog/
excerpt: Learn how to use Screaming Frog to scrape People Also Ask questions directly from SERPs.
featured_image: 
redirect_from: 
---
## Configuring Screaming Frog
Let's get some housekeeping out of the way and set up our Screaming Frog configuration to work around a few quirks.

First, there are a few basic settings we need to tweak:
- Under Configuration > robots.txt > Settings, change the dropdown to "Ignore robots.txt"
- Under Configuration > Speed, change "Max Threads" to 1 (this is technically optional, but should help prevent running into CAPTCHA errors for larger lists)
- Under Configuration > User-Agent, change "Pre-set User-Agents" to one of the standard browser user-agents. I recommend Chrome.
Once those changes are in place, we can get to the tricky part—using Screaming Frog's "Extraction" function.
Go to Configuration > Custom > Extraction. You'll see a modal that looks like this:

The first box is mostly just a label. You can name it whatever you want, but we'll go with "PAA Question" for this example.

The next dropdown is where things get a little more complicated. Officially, there are several ways we could set this up, but in this case I'm going to recommend changing the dropdown to CSSPath (essentially meaning we're looking for a specific element as if we were styling it with CSS). In the box now labeled "Enter CSS Path," enter the following snippet:
`.related-question-pair`

Finally, change the next dropdown to "Extract Text" and then hit okay.

And that's it! Screaming Frog is now configured to scrape PAAs. Next, we need to give it a list.

> **Pro Tip:** Plan to do this often? Remember that you can always save the configuration settings and easily load them again later!

## Assembling Your URL List

In order to scrape PAAs at scale, we'll need a list of URLs for the SERPs those PAAs live on. The good news is: it's very easy to predict what those URLs will be!

Ultimately, you're looking at crawling URLs that look like this:

> https://www.google.com/search?q=best+dog+food

All you have to do is replace the bit after ?q= with whatever keyword you want. If you have even a basic knowledge of Google Sheets or Excel, the next steps should be obvious. But just in case they're not:

Configure a spreadsheet where column A is your list of keywords—one per row. Then, enter this formula in column B:

`="https://www.google.com/search?q="&A2`

Then, fill that formula down the rest of the rows. Boom—you've now got your list of URLs to crawl in Screaming Frog.

## Actually Scraping the PAAs

From here, all you need to do is put Screaming Frog into list mode, paste the URLs, and hit "Start."

As Screaming Frog does its thing, you should start to see data piling in to the "Custom Extraction" report.

Admittedly, the format here is a bit wonky—each PAA on a page will recieve it's own column. Still, you should be able to export this into a spreadsheet and clean it up fairly easily.

And that's it! You should now have a nice, healthy list of People Also Ask questions for analysis!

## Potential Pitfalls
This method works for me at the time of writing, but it can be a bit fragile. If it's not working for you, here are a few potential things to think about:
- Google changes the underlying code of its SERPs with some regularity. The `.related-question-pair` selector works for now, but it may change in the future.
- Crawling SERPs this way too frequenrly or too quickly _can_ result in Google showing you a CAPTCHA challenge. If this happens, it will prevent Screaming Frog from capturing the PAAs on those questions.
- This is admittedly NOT the best solution. There are tools out there that can do this at scale, but this is a fun use of Screaming Frog and great if you're just looking for some quick and dirty content ideas for keywords you already have available.