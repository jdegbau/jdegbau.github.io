---
layout: default
title: Josh's Blog
permalink: /blog/
---

{% for post in site.posts %}
  <div class="post">
    <a href="{{ post.url }}"><h2 class="title">{{ post.title }}</h2></a>
    <p class="meta">{{ post.date | date: "%B %e, %Y" }}</p> 
    {{ post.excerpt }}
  </div>
{% endfor %}