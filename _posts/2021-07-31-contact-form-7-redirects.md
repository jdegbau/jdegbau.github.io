---
layout: default
title: (Solved) Redirecting Contact Form 7 Forms
excerpt: Contact Form 7 has depricated support for its built-in redirection solution. Learn how to recreate it with JavaScript and PHP.
permalink: /blog/contact-form-7-redirects/
redirect_from: 
  - /cf7/
  - /test-me/
---

> **Note:** This post originally appeared on [the Rocket Clicks blog](https://www.rocketclicks.com/client-education/contact-form-7-thank-page-redirects/). The version below has been slightly modified from that original version.

Contact Form 7 (CF7) is one of the most popular contact form plugin options for WordPress-based businesses. However, Contact Form 7 users should know that the process for sending users to a thank you page after a successful form submission has changed. According to the developer’s documentation, [they deprecated/removed that functionality at the end of 2017](https://contactform7.com/2017/06/07/on-sent-ok-is-deprecated/).

Contents:

* [The Old Method: What Changed?](#TheOldMethodWhatChanged)
* [New Method: One Thank You Page](#NewMethodOneThankYouPage)
* [New Method: Multiple Forms, Unique Thank You Pages](#NewMethodMultipleFormsUniqueThankYouPages)
* [New Method: One Form, Multiple Thank You Pages](#NewMethodOneFormMultipleThankYouPages)
* [Tracking Using Google Analytics Events](#TrackingUsingGoogleAnalyticsEvents)
* [Using a Plugin](#UsingaPlugin)

The updated contact form doesn’t impact the ability for users to submit forms (and for you to receive those submissions), but it _can_ have a dramatic impact on your ability to accurately track these submissions in Google Analytics and other analytics programs. Below is a quick guide on how to update your Contact Form 7 forms so that they still redirect to the proper thank you pages. **Please Note:** The new method will require you to edit your theme’s functions.php file. Please make sure you’re familiar with [the best practices of editing functions.php files](https://www.nosegraze.com/edit-functions-php/) – a single typo could make your site inaccessible.

The Old Method: What Changed?
-----------------------------

Before the update, you would configure a form to redirect using the Additional Settings field of the given contact form. In that field, you’d place a code similar to this: `on_sent_ok: "location = 'http://www.example.com/thank-you-page'";` This piece of code is essentially JavaScript – it’s just that the plugin is doing most of the work for you by creating the rest of the code surrounding what you enter. However, citing potential security risks, the developer plans to remove this functionality from the plugin. If and when this happens, your forms will no longer send users to thank you pages upon successful submissions.

New Method: One Thank You Page [](#NewMethodOneThankYouPage)
------------------------------

Most businesses, you’ll have a single thank you page that acts as the confirmation for all your forms. The good news for you is that I have a code you can (more or less) copy and paste. Ultimately, we’re still doing exactly what the old method did; we’re just doing it manually this time. Let’s get started. Copy and paste the following code at the bottom of your functions.php file:

{% highlight php %}
add_action( 'wp_footer', 'redirect_cf7' );

function redirect_cf7() {
?>

<script type="text/javascript">
document.addEventListener( 'wpcf7mailsent', function( event ) {
       location = 'https://www.example.com/thank-you/';
}, false );
</script>

<?php
}
{% endhighlight %}

**Before you save your file**, change `https://www.example.com/thank-you/` (in the fifth line) to your thank you page URL. That line of code should look familiar – it’s exactly what we had after `on_sent_ok` in the old method. Essentially, this code will add a script to the footer of your WordPress pages that ‘listens’ for successful form submissions (or, in this case, that a form submission has been emailed to you). When that criteria is met, the form redirects to the URL you’ve provided. Again, this is exactly what the old method did – we just have to draw it out a bit more.

New Method: Multiple Forms, Unique Thank You Pages
--------------------------------------------------

If you have multiple forms that each go to a unique thank you page, the process becomes a bit more complicated. With the old method, you could specify an `on_sent_ok` on a form-by-form basis. Unfortunately, the code above will send submissions from _every_ form to the same thank you page. This can still impact your tracking. The good news is: there’s a work around for that, too. This will, however, require some extra work. Start with pasting this code into your functions.php file:


{% highlight php %}
add_action( 'wp_footer', 'redirect_cf7' );

function redirect_cf7() {
?>
<script type="text/javascript">
document.addEventListener( 'wpcf7mailsent', function( event ) {
   if ( '947' == event.detail.contactFormId ) { // Sends sumissions on form 947 to the first thank you page
    location = 'https://www.example.com/thank-you-1/';
    } else if ( '1070' == event.detail.contactFormId ) { // Sends submissions on form 1070 to the second thank you page
        location = 'https://www.example.com/thank-you-2/';
    } else { // Sends submissions on all unaccounted for forms to the third thank you page
        location = 'https://www.example.com/thank-you-3/';
    }
}, false );
</script>
<?php
}
{% endhighlight %}

Like before, we’re creating a ‘listener’ to fire a specific code when someone submits a form. This time, however, we’re using conditional if…else JavaScript statements to further specify our criteria. Now, we’re saying: “If a form is submitted. check the form’s ID. If that ID is x, submit it to thank you page y. If that ID is w, then submit it to thank you page v.” Now comes the work on your end. For each form, you’ll need to identify the form ID and then use that as the conditional criteria. You can find this in the shortcode you’d use to place that form on a page or post. For example, the shortcode for the first ID in my example would look like this: `[contact-form-7 id="947" title="General Contact Form"]` The highlighted portion is the form’s ID. Copy that number and replace it with the ones in my example. For reference, this is the bit you’re replacing: `if ( '947' == event.detail.contactFormId )` You’ll need to update this on every form that has a unique thank you page. **Note:** Additional criteria in JavaScript if…else statements should start with `else if` instead of just `if`. For more information, check out [W3School’s documentation on conditional JavaScript statements](https://www.w3schools.com/js/js_if_else.asp). You might notice that the final statement is just else, followed by another line of code that redirects users to a thank you page. Technically, if…else statements are supposed to end with something happening if none of the specified conditions are met. In this case, we’re saying: if the form ID doesn’t match any of the specified IDs, then send users to a third thank you page. You have two options here:

* Omit this portion of the code (it’s not best practice, but the code should still function properly)
* Create a generalized thank you page and use it here on the off chance that there’s a form ID you haven’t accounted for.

New Method: One Form, Multiple Thank You Pages
----------------------------------------------

If you’ve got a single form that goes to multiple thank you pages based on how the form is filled out, then either:

* You’re not using Contact Form 7.
* You’re using a plugin that _likely_ has redirection solutions built into it.
* You’re already familiar with JavaScript.

Unfortunately, this solution doesn’t work very well for forms with conditional fields and thank you pages. While it _can_ be accomplished through JavaScript, the code would have to be customized heavily towards how your form is set up, which means you’ll likely need to consult a developer. That said, the last section of this article will cover plugins that might be able to help.

Tracking Using Google Analytics Events
--------------------------------------

This guide focused on getting Contact Form 7 to redirect users to thank you pages. However, you’ll also need to update your implementation if you track submissions through Google Analytics events. The process is the same as above, you just need to swap out any instances of `on_sent_ok: "location = 'http://www.example.com/thank-you-page'";` with `on_sent_ok: ga( 'send', 'event', 'Contact Form', 'submit' );` (or whatever you currently have after `on_sent_okay` in the Additional Settings field). This will then fire the event in Analytics once the form is successfully emailed to you.

Using a Plugin
--------------

In general, I recommend [avoiding plugins that add functionality you can achieve with a little custom code](https://premium.wpmudev.org/blog/too-many-plugins/), but if you’re not comfortable editing JavaScript/PHP and can’t work with a developer, there are plugins that can make redirecting to thank you pages more user-friendly. The most common example is [the Contact Form 7 Success Page Redirects plugin](https://wordpress.org/plugins/contact-form-7-success-page-redirects/). This is a free plugin that adds a new tab to your Contact Form 7 editor allowing you to select thank you pages from a dropdown list on a form-by-form basis. It’s worth noting here that this plugin only lets you redirect to _pages_, not posts. That’s probably not an issue for most people but could create limitations if you’ve got a complex lead funnel. You also can’t redirect to non-WordPress pages (whereas with the examples in this guide you can redirect to _any_ page on the internet). This plugin will also not allow you to send events to Google Analytics.

* * *

I’ve tried to write this in as non-coder-friendly language as possible, but, at its core, this solution is built on JavaScript. If you still have questions, feel free to reach out to me at [@jdegbau](https://twitter.com/jdegbau) on Twitter. Otherwise, you can [create a thread on the plugin’s official support form](https://wordpress.org/support/plugin/contact-form-7).