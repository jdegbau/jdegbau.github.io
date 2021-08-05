---
layout: page
title: Josh's Blog
permalink: /blog/
---

<div class="section" id="blog-cards">
        <div class="columns">
        <div class="row columns is-multiline">
        {% for post in site.posts %}
          <div class="column is-6">
            <div class="card large">
              <a href="{{ post.url }}"><div class="card-image">
                <figure class="image is-16by9">
                  <img src="{{ post.featured_image }}" alt="{{ post.title }}">
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
      </div>