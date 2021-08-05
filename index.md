---
layout: page
title: "The Home of Joshua DeGrasse-Baumann"
permalink: /
---

## Hello! I'm Josh!

<h3>Articles</h3>
<ul>
{% for post in site.posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>