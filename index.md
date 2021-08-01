---
layout: default
title: "The Home of Joshua DeGrasse-Baumann"
---

## Hello! I'm Josh!

<h3>Articles</h3>
<a href="{% link blog.md %}">See the whole blog</a>
<ul>
{% for post in site.posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>
