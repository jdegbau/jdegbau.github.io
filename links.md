---
layout: none
title: My Favorite Links
SEO_title: My Favorite Links | Joshua DeGrasse-Baumann
excerpt:
permalink: /links/
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Favorite Links | Joshua DeGrasse-Baumann</title>
    <meta name="robots" content="noindex">
    <link rel="icon" href="/assets/img/favicon.gif" type="image/gif">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="stylesheet" href="{{ "/assets/css/main.css" | relative_url }}">
    <style>
        .hero {
            background-color: #f5f5f5;
        }
        .hero-body {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .box {
            width: 100%;
            max-width: 900px;
        }
        .button.is-fullwidth {
            margin-top: 10px;
        }
        .favicon {
            width: 24px; /* Adjust size as necessary */
            height: 24px; /* Adjust size as necessary */
            vertical-align: middle;
            border-radius: 50%; /* Optional: makes the favicon circular */
            border: 1px solid #ff4d00; /* Optional: remove if you prefer a border */
            background: #fff;
        }
    </style>
</head>
<body>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="box">
                <img class="container mb-4" width="200px" height="250px" src="/assets/img/joshua-degrasse-baumann.JPG" alt="Josh and Bailey" style="display: block;border-radius: 50%;">
                <h1 class="title has-text-centered">Joshua DeGrasse-Baumann</h1>
                <a class="button is-link is-rounded is-outlined is-fullwidth" href="https://jdegbau.com"><img src="" alt="favicon" class="favicon mr-2"> My Personal Website</a>
                <a class="button is-link is-rounded is-outlined is-fullwidth" href="https://bilt.page/r/URCB-UEF8"><img src="" alt="favicon" class="favicon mr-2"> Bilt Credit Card</a>
            </div>
        </div>
    </section>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            var links = document.querySelectorAll('a.button');

            links.forEach(function (link) {
                var url = new URL(link.href);
                var favicon = link.querySelector('.favicon');
                favicon.src = `https://www.google.com/s2/favicons?domain=${url.hostname}`;
            });
        });
    </script>

    <script src="https://kit.fontawesome.com/13ccd4d90b.js" crossorigin="anonymous" defer></script>
    <script src="//instant.page/5.1.0" type="module" integrity="sha384-by67kQnR+pyfy8yWP4kPO12fHKRLHZPfEsiSXR8u2IKcTdxD805MGUXBzVPnkLHw" defer></script>
</body>
</html>
