---
layout: page
title: "Hello! I'm Josh!"
SEO_title: About Joshua DeGrasse-Baumann
excerpt: Joshua DeGrasse-Baumann is an SEO consultant, data enthusiast, and web developer specializing in helping businesses improve their online visibility and performance.
permalink: /about-josh/
---

<div class="column">
  <h2 class="subtitle is-3">SEO Strategist, Data Enthusiast, Developer</h2>
  
  <p>I help businesses unlock their digital potential through strategic SEO, data analysis, and web development solutions. Currently serving as Lead SEO Strategist at <a href="https://www.fireandspark.com/">Fire&Spark</a>, I specialize in creating customized search strategies that drive meaningful results.</p>
  
  <p>With expertise in technical SEO, content optimization, and programmatic approaches, I turn complex data into actionable insights that help businesses thrive in competitive online landscapes.</p>
  
  <h3 class="title is-4 mt-5">What I Do</h3>
  
  <div class="columns is-multiline">
    <div class="column is-half">
      <div class="card has-shadow">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <span class="icon has-text-primary is-large">
                <i class="fa-solid fa-magnifying-glass fa-2x"></i>
              </span>
            </div>
            <div class="media-content">
              <p class="title is-5">SEO Strategy</p>
            </div>
          </div>
          <div class="content">
            <p>Comprehensive audits, keyword research, and implementation plans that improve your site's visibility and performance in search results.</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="column is-half">
      <div class="card has-shadow">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <span class="icon has-text-info is-large">
                <i class="fa-solid fa-chart-line fa-2x"></i>
              </span>
            </div>
            <div class="media-content">
              <p class="title is-5">Data Analysis</p>
            </div>
          </div>
          <div class="content">
            <p>Turning complex web analytics into clear, actionable insights that drive decision-making and business growth.</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="column is-half">
      <div class="card has-shadow">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <span class="icon has-text-success is-large">
                <i class="fa-solid fa-code fa-2x"></i>
              </span>
            </div>
            <div class="media-content">
              <p class="title is-5">Web Development</p>
            </div>
          </div>
          <div class="content">
            <p>Creating and optimizing websites with a focus on user experience, performance, and search engine friendliness.</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="column is-half">
      <div class="card has-shadow">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <span class="icon has-text-warning is-large">
                <i class="fa-solid fa-robot fa-2x"></i>
              </span>
            </div>
            <div class="media-content">
              <p class="title is-5">Programmatic SEO</p>
            </div>
          </div>
          <div class="content">
            <p>Leveraging automation and data-driven approaches to scale SEO efforts efficiently for larger websites.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <h3 class="title is-4 mt-5">Professional Experience</h3>
  
  <div class="columns is-multiline">
    <div class="column is-full">
      <div class="card has-shadow">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <span class="icon has-background-primary has-text-white" style="padding: 10px; border-radius: 50%;">
                  <i class="fa-solid fa-briefcase"></i>
                </span>
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-5">Lead SEO Strategist</p>
              <p class="subtitle is-6 has-text-primary-dark"><strong>Fire&Spark</strong> | Current Position</p>
            </div>
          </div>
          <div class="content">
            <p>Leading SEO strategy development and implementation for clients across various industries, with a focus on sustainable, long-term growth.</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="column is-full">
      <div class="card has-shadow">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <span class="icon has-background-grey-light has-text-white" style="padding: 10px; border-radius: 50%;">
                  <i class="fa-solid fa-briefcase"></i>
                </span>
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-5">Previously</p>
              <p class="subtitle is-6 has-text-grey-dark"><strong>Rocket Clicks</strong></p>
            </div>
          </div>
          <div class="content">
            <p>Delivered comprehensive SEO solutions and digital marketing strategies for diverse client portfolios.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <h3 class="title is-4 mt-5">Latest Articles</h3>
  <div class="content">
    <ul class="post-list">
      {% for post in site.posts limit:5 %}
        <li>
          <a href="{{ post.url }}">{{ post.title }}</a>
          <span class="post-meta"> - {{ post.date | date: "%b %-d, %Y" }}</span>
        </li>
      {% endfor %}
    </ul>
    <a href="/blog/" class="button is-primary is-outlined mt-3">View All Articles</a>
  </div>
  
  <h3 class="title is-4 mt-5">Need SEO Help?</h3>
  <p>Whether you're facing an urgent SEO challenge or looking for strategic guidance, I'm here to help. Book a consultation through my SEO Helpline for personalized advice.</p>
  <a href="/seo-helpline/" class="button is-primary mt-2"><i class="fa-solid fa-phone mr-2"></i>Schedule a Consultation</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://jdegbau.com/about-josh/",
      "url": "https://jdegbau.com/about-josh/",
      "name": "About Joshua DeGrasse-Baumann",
      "description": "Joshua DeGrasse-Baumann is an SEO consultant, data enthusiast, and web developer specializing in helping businesses improve their online visibility and performance.",
      "inLanguage": "en-US",
      "isPartOf": { "@id": "https://jdegbau.com/#website" },
      "mainEntity": { "@id": "https://jdegbau.com/#person" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://jdegbau.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About",
            "item": "https://jdegbau.com/about-josh/"
          }
        ]
      }
    },
    {
      "@type": "ItemList",
      "name": "Services offered by Joshua DeGrasse-Baumann",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Service",
            "name": "SEO Strategy",
            "description": "Comprehensive audits, keyword research, and implementation plans that improve site visibility and performance in search results.",
            "provider": { "@id": "https://jdegbau.com/#person" }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Service",
            "name": "Data Analysis",
            "description": "Turning complex web analytics into clear, actionable insights that drive decision-making and business growth.",
            "provider": { "@id": "https://jdegbau.com/#person" }
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Creating and optimizing websites with a focus on user experience, performance, and search engine friendliness.",
            "provider": { "@id": "https://jdegbau.com/#person" }
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Service",
            "name": "Programmatic SEO",
            "description": "Leveraging automation and data-driven approaches to scale SEO efforts efficiently for larger websites.",
            "provider": { "@id": "https://jdegbau.com/#person" }
          }
        }
      ]
    }
  ]
}
</script>
