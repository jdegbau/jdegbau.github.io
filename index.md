---
layout: default
title: "Happy Jekylling!"
---

## You're ready to go!

<h3>Articles</h3>
<ul>
{% for post in site.posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>
