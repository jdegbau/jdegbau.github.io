---
layout: page
title: How Can I Help You?
SEO_title: Contact Me | Joshua DeGrasse-Baumann
permalink: /contact/
---

<script src="https://www.google.com/recaptcha/api.js"></script>
<form action="https://formcarry.com/s/1Z7gBO7piB" method="POST" accept-charset="UTF-8">
    <div class="columns">
        <div class="column">
            <div class="field">
                <label class="label">First Name</label>
                <div class="control">
                    <input class="input is-medium" type="text" name="firstName" placeholder="First Name">
                </div>
            </div>
        </div>
        <div class="column">
            <div class="field">
                <label class="label">Last Name</label>
                <div class="control">
                    <input class="input is-medium" type="text" name="lastName" placeholder="Last Name">
                </div>
            </div>
        </div>
    </div>
    <div class="field">
        <label class="label">Email</label>
        <div class="control">
            <input class="input is-medium" type="email" name="email" placeholder="Email">
        </div>
    </div>
    <div class="field">
        <label class="label">Message</label>
        <div class="control">
            <textarea class="textarea is-medium" name="message" placeholder="Message"></textarea>
        </div>
    </div>
    <input type="hidden" name="_gotcha">
    <input type="hidden" id="captchaResponse" name="g-recaptcha-response" />
    <div class="field">
        <div class="control">
            <button class="button is-link">Submit</button>
        </div>
    </div>
</form>

<script>
	grecaptcha.ready(function() {
		grecaptcha.execute('6LcqzBQkAAAAAIY-WkCc5I0VZ0gB5_h7oblR-06K', {action: 'homepage'})
		.then(function(token) {
			document.getElementById('captchaResponse').value = token;
		});
	});
</script>