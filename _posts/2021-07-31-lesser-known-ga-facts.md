---
title: 8 Lesser Known Facts About Google Analytics
excerpt: Google Analytics does some weird stuff, man.
permalink: /blog/lesser-known-google-analytics-facts/
featured-image: https://jdegbau.com/wp-content/uploads/8-Lesser-Known-Facts-About-Google-Analytics-Sessions.jpg
---

![8 Lesser Known Facts About Google Analytics](https://jdegbau.com/wp-content/uploads/8-Lesser-Known-Facts-About-Google-Analytics-Sessions.jpg) 

Sessions in Google Analytics are deceptively simple. It's just the number of visits to your website, right? Yes, but... No. At their heart, sessions _are_ meant to tell you how many people visited your website during a given time frame or meeting certain criteria. And in the vast majority of instances, that's exactly what they do. But sessions are also an artificial number created when certain conditions within a piece of code are met (e.g., when an initial hit is sent via the Google Analytics tracking code). Unfortunately, this code doesn't always match up with what the average user would consider a session on your website. Let's take a look at eight lesser known facts about Google Analytics sessions and how they might impact your data.

## 1. A Session Ends If The Campaign Data Changes

Let's start with an easy one. 

If you've ever dealt with cross-domain tracking, you'll know this one, but sessions being split by new source/medium data is often one of the first technical hurdles Google Analytics enthusiasts will face. 

f you're not familiar, there are many things that help Google Analytics 'define' a session to help group all of the interactions it contains. Among those are campaign data—how the user arrived to the site for that session. 

There are a number of ways that a session's campaign data can change, but here are a few of the most common examples:

* Self-referrals or referrals from third-party tools/payment processors
* One user clicking different ads in a short span of time
* Internal linking with UTM parameters (Hint: Don't do this!)

## 2. Sessions End At Midnight, Regardless of User Activity

Have you ever changed the "Time Zone Country or Territory" setting in your view settings? You might want to take a closer look. 

Most people know that a session in Google Analytics ends after 30 minutes of inactivity, but did you know that _all active sessions_ end at midnight in whatever timezone your view is set to? 

That's right. 

Let's say at 11:59pm, you have 100 visitors on your site. At 12:00am, all 100 of those visitors click to a new page. Guess what? Each and every one of them is counted as a new session. 

This might make sense if you're looking at a single day's worth of data—you'd almost certainly want those 100 sessions to count in some fashion on both days. The problem, however, is if you look at a date range that includes both the 11:59 sessions and the 12:00 sessions. 

Suddenly, you've got twice as many sessions, even though, realistically the user only ever came to the site once!

## 3. You Can Change The Default Session Timeout Length

For the vast majority of websites, 30 minutes of inactivity is more than enough to officially declare a session "over," but did you know that you can actually change how long Google Analytics waits to end a session due to inactivity? It's true! If you go to Tracking Info > Session Settings under the Property column of the Analytics admin area, you can adjust the length of time a session is given before it "times out." You can go as little as one minute or as long as four hours. Why would you want to adjust the session timeout setting? Here's just a few examples:

1.  You write a lot of long-form content that takes more than 30 minutes to read. If a user reads one whole piece and then goes to read another, they'll have started a second session.
2.  You have lots of video content, for the same reason as above.
3.  You're in a space where you expect users to linger on pages for longer periods of time (think comparison shopping, for ecommerce sites, for instance).

I'm not advocating a widespread changing of these settings—30 minutes is good for most sites—but it might be worth thinking about if you feel like your users may take more than 30 minutes on a given page. And remember: Inactivity means no pageviews _or_ events. You can also "extend" sessions by adding more event tracking.

## 4. Getting More Than 200,000 Sessions/Day Could Impact Your Reporting

Before diving into this one, let's remember that Google Analytics is a _free_ tool. An incredibly powerful free tool, but still a _free_ tool. Got it? Good, because here's the bad news: it has limitations. With a basic Google Analytics account, you may see some reporting delays if you get more than 200,000 sessions in a single day. Officially, Analytics documentation says that reports are updated within 24-48 hours, but if you hit that 200,000 session threshold, Analytics will only update your reports _once per day_. Now, most marketers don't look at same-day data in Google Analytics all that often, but this could result in _significant_ delays in data analysis. I've never personally run into this issue, but if you have, you've basically got two options: reduce the number of sessions you're sending to Analytics (hint: make sure none of it is spam!) or [upgrade to Google Analytics 360](https://marketingplatform.google.com/about/analytics-360/).

## 5. Technically, Anyone Can Send Sessions to Your Analytics Account

You're _probably_ familiar with Google Analytics spam at this point, but have you ever really thought about the implications of it? One of the biggest flaws with Google Analytics is that it's incredibly easy to send fake data to _anyone_'s Google Analytics account. In fact, the only thing you'd really need is the tracking ID of the account you'd want to send bad data to—assuming you're not just trying to mass spam random Analytics accounts. The trade-off with the simplicity of installing a Google Analytics code via a small piece of JavaScript is that it's easy for someone with even minimal coding experience to manipulate that code with bogus data. Unfortunately, there's not much you can do to proactively prevent this from happening. That's why it's so important to [regularly audit your Google Analytics account](https://jdegbau.com/services/google-analytics-audits/).

## 6. Sessions Are Limited to 500 Hits

An individual session can only contain a total of 500 pageviews and events. Once that limit is reached, the session is effectively over as far as Google Analytics is concerned, as no additional interactions will be processed. Realistically, it would take some incredible tracking granularity to hit this limit, but it is theoretically possible. For example, say you had even tracking set up to track every 1% of a video a user watched on your site, and a user watched five different videos. Since you'd be sending 100 hits per video (one event for each percent of the video watched), that user's session would have 500 hits—and that's not counting any pageviews or other events that may be triggered.

## 7. Your Average Session Duration Is Probably Longer than Google Analytics Says It Is

Average Session Duration is probably my least favorite metric in Google Analytics. That's not to say it's not a helpful metric, but it's just so misleading—especially if you don't spend a lot of time digging into the story behind the data. If you've ever looked at your average session duration with dismay, I've got some good news for you: It's probably longer than Analytics says it is. The challenge is, it's not actually measuring the total length of the session—it's measuring the time between the first hit and last hits of a given session that are sent to Analytics. Confused? Pretend Analytics starts a stop watch when the first pageview tag fires. The next time the Analytics code fires, GA can update it's session duration by subtracting the time of the first hit from the time of the second hit. But there's a crucial missing piece: Once the last pageview of a session is recorded, there's no way for Analytics to know how long a user spent on that page—there's no final hit sent to GA to officially say the session is over. The stopwatch would never stop. What this means, practically, is that Average Session Duration is really measuring _all but the last page_. Where this gets more frustrating, however, is when you consider sessions that bounce. Bounces _always_ have a session duration of zero seconds—because that stopwatch starts, but would never end.

## 8. You Can Have a Session With Only Non-Interaction Hits

Let's end with a weird one. It is theoretically possible to have a session made up entirely of non-interaction hits... meaning there actually _isn't_ a session! Confused? It's unlikely you'll ever see this, but it's an interesting hypothetical. If a user somehow got to your site and triggered some event that's flagged as a non-interaction hit but never recording a pageview, there's still technically data being sent to Google Analytics. But if none of that data is marked as an interaction, Google Analytics doesn't actually record a session. Weird!