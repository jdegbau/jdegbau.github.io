<div id="search">
<div id="search-container" class="field">
  <p class="control has-icons-right">
    <input type="text" id="search-input" class="input" placeholder="Search...">
    <span class="icon is-small is-right">
      <i class="fas fa-search"></i>
    </span>
  </p>
</div>

<ul id="results-container"></ul>
</div> <!-- end #search -->

<!-- Script pointing to search-script.js -->
<script src="/assets/js/instant-search.min.js" type="text/javascript"></script>

<!-- Configuration -->
<script>
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  searchResultTemplate: '<a class="is-paddingless" href="{permalink}"><article class="message is-small has-text-left"><div class="message-header"><p>{title}</p></div><div class="message-body">{excerpt}</div></article></a>',
  noResultsText: ("You stumped me!"),
  json: '/search.json'
})
</script>
<!-- Learn more here: https://github.com/christian-fei/Simple-Jekyll-Search -->
