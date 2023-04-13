---
layout: page
title: How Can I Help You?
SEO_title: Contact Me | Joshua DeGrasse-Baumann
permalink: /contact/
---

<div class="tabs is-centered is-small is-fullwidth is-boxed">
  <ul class="mx-0">
    <li class="is-active" data-label="form">
      <a>
        <span class="icon is-small"><i class="fas fa-envelope" aria-hidden="true"></i></span>
        <span>Send a Message</span>
      </a>
    </li>
    <li data-label="calendar">
      <a>
        <span class="icon is-small"><i class="fas fa-calendar" aria-hidden="true"></i></span>
        <span>Schedule a Paid Consultation</span>
      </a>
    </li>
  </ul>
</div>

<div class="tab-content">
  <div class="tab-pane is-active" id="form" role="tabpanel" aria-hidden="false">
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
  </div>
  <div class="tab-pane is-hidden" role="tabpanel" id="calendar" aria-hidden="true">
    <div id="tidycal-embed" data-path="jdegbau/seo-helpline-consultation"></div>
  </div>
</div>

<script>
const tabs = document.querySelectorAll('.tabs ul li');
const tabContent = document.querySelectorAll('.tab-content .tab-pane');

tabs.forEach(function(tab) {
  tab.addEventListener('click', function() {
    const tabLabel = tab.dataset.label;

    // hide all tab content
    tabContent.forEach(function(content) {
      content.classList.add('is-hidden');
      content.setAttribute('aria-hidden', 'true');
    });

    // show the clicked tab content
    const activeTab = document.getElementById(tabLabel);
    activeTab.classList.remove('is-hidden');
    activeTab.setAttribute('aria-hidden', 'false');

    // set the clicked tab as active
    tabs.forEach(function(tab) {
      tab.classList.remove('is-active');
    });
    tab.classList.add('is-active');
  });
});
</script>

<script src="https://www.google.com/recaptcha/api.js?render=6LcqzBQkAAAAAIY-WkCc5I0VZ0gB5_h7oblR-06K"></script>

<script src="https://asset-tidycal.b-cdn.net//js/embed.js"></script>

<script>
	grecaptcha.ready(function() {
		grecaptcha.execute('6LcqzBQkAAAAAIY-WkCc5I0VZ0gB5_h7oblR-06K', {action: 'homepage'})
		.then(function(token) {
			document.getElementById('captchaResponse').value = token;
		});
	});
</script>
