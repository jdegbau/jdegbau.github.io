---
title: Why I Hate Average Session Duration
excerpt: Contact Form 7 has depricated support for its built-in redirection solution. Learn how to recreate it with JavaScript and PHP.
slug: /why-i-hate-average-session-duration/
---

How long are users spending on your website? If you’re trusting the number you see in Google Analytics, you’ve probably got a more bleak picture than what the actual number is.

The Average Session Duration metric in Google Analytics is one of my least favorite metrics, but it’s not because I think it’s unhelpful. My disdain instead comes from how misunderstood the metric is. In short, it’s not telling you exactly what you think it is.

The problem lies in how Google Analytics arrives at the value for that metric. Common sense tells you that this number would take the length of each session from start to finish divided by the total number of sessions, but there’s a major limitation in how Google Analytics actually arrives at this number.

In reality, what average session duration is measuring is the time between the session’s first and last _interactions_. That might not seem like a huge distinction, but the implications are massive.

At it’s most basic level, that fact means that the final pageview of a session does NOT count towards the average session duration, regardless of how long the user spent on that final page.

For example, let’s say Dan comes to your website’s homepage and, after 30 seconds, clicks on a link to your blog. From there, he spends two minutes looking at the list of blog posts before picking one to read. It takes him eight minutes to read the post, at which point he immediately closes his browser.

How long is his session duration?

If you said ten minutes and thirty seconds, congratulations: your math and common sense skills are on point. Unfortunately, your in for a rough time when you look at Google Analytics. In Analytics, Dan’s session duration is going to be just two minutes and thirty seconds.

The challenge is: Analytics has no way of knowing that Dan closed his browser. Therefore, it has no way to know how long he actually spent on the page.

This limitation leaves Google Analytics with two options: give the final page a time on page of 0 seconds or default to the session timeout (typically 30 minutes). Going in either direction has its cons, but Analytics uses the first option.

**Barring any custom set up, ALL final pageviews contribute 0 seconds to the average session duration.**

That’s bad enough, but the problem actually gets even worse. And that problem comes in the form of bounces.

Bounces, by their nature, have only a single interaction. And that means Google Analytics has no way to determine the length of the session. Therefore, **all bounces have a session duration of zero.**

Here’s the “Aha” moment.

Let’s say you’ve got a fairly typical average session duration of 1:30. For the sake of simplicity, let’s say that’s across 100 sessions. Now let’s say you’re bounce rate is also a typical 40%. Already, nearly _half_ of your sessions will have a session duration of 0 according to Google Analytics. You don’t have to be great at math to know that that will _dramatically_ drag down the average. And that’s before you take into account scenarios like Dan’s.

What Can You Do About It?
-------------------------

Not much, unfortunately. Your best course of action would be to set up event tracking for key actions on your site, since this would add additional interactions that Google Analytics can use to extend the session duration.

A common example would be to set up scroll depth tracking that sends events to Google Analytics as users scroll down a certain percentage of the page (commonly, 25%, 50%, 75%, and 100%). With this method, say someone comes to your blog from a social media post, reads the whole blog and then leaves your site. Ordinarily, this would be considered a bounce, and therefore have a session duration of zero. But with scroll depth tracking, Analytics can measure the time between the initial pageview and the final scroll depth event and use that to calculate the session duration. It still won’t be a perfectly accurate number, but it will be much closer.

> **Note:** Using this method will also _dramatically_ impact your bounce rate. If a user only views one blog post, they’d traditionally be considered a bounce, but if they trigger a scroll-depth event, they will no longer be considered a bounce—even if they don’t view any other pages.

Another option, though in my mind less beneficial, would be to set up an exit-intent event (similar to an exit-intent popup). If you’re not familiar, exit intent is when a user moves their mouse towards the top of the browser (towards the URL bar). You could theoretically have an Analytics event fire when that happens, giving Analytics the ability to calculate session duration by measuring the time between the initial pageview and the exit-intent event.

> **Note:** Exit intent is trickier on mobile, so this approach would likely weight session duration differently on desktop and mobile.