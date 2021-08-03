---
layout: default
title: Josh's Blog
permalink: /blog/
---
<div id="blog-cards">
{% for post in site.posts %}
  <div class="card">
    <a href="{{ post.url }}"><h2 class="title">{{ post.title }}</h2></a>
    <p class="date">{{ post.date | date: "%B %e, %Y" }}</p>
    <p class="excerpt">{{ post.excerpt }}</p>
    <img class="featured-image" src="{{ post.featured_image }}" />
  </div>
{% endfor %}
</div> <!-- end #blog-cards -->