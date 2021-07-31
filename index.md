---
layout: default
title: "Happy Jekylling!"
---

## You're ready to go!

<h3>Articles</h3>
<a href="{% link blog.md %}">See the whole blog</a>
<ul>
{% for post in site.posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>
