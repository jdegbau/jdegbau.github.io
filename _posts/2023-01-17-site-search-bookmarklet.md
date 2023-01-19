---
title: Quick Google Site Search Bookmarklet
SEO_title: Free Google Site Search Bookmarklet - Joshua DeGrasse-Baumann
excerpt: Copy my free site search bookmarklet to make site searching a little less painful.
redirect_from: 
featured_image: 
slug: /site-search-bookmarklet/
---

I'm super lazy and got tired of typing "site:{domain} {query}" into a new Google tab, so I wrote a quick bookmarklet to speed it up! Figured I'd share in case anyone is similarly keyboard disinclined:

```javascript
javascript: (function() {
	let domain = prompt('Which domain would you like to search?', document.location.host);

	if (!domain) {
		return
	}

	let query = prompt( 'What are you searching for?');

	if (!query) {
		return;
	}

	open("https://www.google.com/search?q=site:" + domain + "+" + query, "_blank");
})();
```

Just add this as the URL for a new bookmark, click that bookmark and you'll be prompted for a search query. It'll then do a site search for whatever site you're already on!

Finally, I'll get seconds of my time back!

## Most practical applications probably include:
- spot checking if a page is indexed
- looking for potential cannibalization issues