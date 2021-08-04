---
layout: default
title: Search
permalink: /search/
---

<!-- Html Elements for Search -->
<div id="search-container">
<input type="text" id="search-input" class="input" placeholder="search...">
<ul id="results-container"></ul>
</div>

<!-- Script pointing to search-script.js -->
<script src="/assets/js/instant-search.min.js" type="text/javascript"></script>

<!-- Configuration -->
<script>
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  searchResultTemplate: '<div><a href="{url}"><h1>{title}</h1></a><span>{permalink}</span></div>',
  noResultsText: ("You stumped me!"),
  json: '/search.json'
})
</script>
<!-- Learn more here: https://github.com/christian-fei/Simple-Jekyll-Search -->