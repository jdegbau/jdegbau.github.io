---
layout: page
title: Josh's Blog
permalink: /blog/
---

<div class="row columns is-multiline" id="blog-cards">
  {% for post in site.posts %}
    <div class="column is-one-third">
      <div class="card large">
        <a href="{{ post.url }}"><div class="card-image">
          <figure class="image is-16by9 mx-0">
            <img src="{% if post.featured_image %}{{ post.featured_image }}{% else %}/assets/img/default-blog-hero.gif{% endif %}" alt="{{ post.title }}">
          </figure>
        </div></a>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <a href="{{ post.url }}"><p class="title is-4 no-padding">{{ post.title }}</p></a>
            </div>
          </div>
            <div class="content">
            {{ post.excerpt }}
            </div>
        </div>
        <footer class="card-footer">
          <time class="card-footer-item" datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date: "%b %-d, %Y" }}</time>
          <p class="card-footer-item">
            {% include read-time.md %}         
          </p>
        </footer>
      </div>
    </div>
    {% endfor %}
</div>