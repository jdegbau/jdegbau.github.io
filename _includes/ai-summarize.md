{% assign post_url = site.url | append: page.url %}
{% assign encoded_prompt = "Summarize this url: " | append: post_url %}

<div class="ai-summarize-links" style="margin: 2rem 0; padding: 1.5rem; background-color: #f5f5f5; border-radius: 8px; border-left: 4px solid #3273dc;">
  <p style="font-weight: 600; margin-bottom: 1rem; font-size: 0.95rem;">🤖 Have an AI summarize this post:</p>
  
  <div style="display: flex; flex-direction: column; gap: 0.75rem;">
    <a href="https://chatgpt.com/?prompt=Summarize+this+url%3A+{{ post_url | url_encode }}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: #3273dc; display: flex; align-items: center; gap: 0.5rem;">
      🔗 ChatGPT
    </a>
    
    <a href="https://claude.ai/new?q=Summarize%20this%20url%3A%20{{ post_url | url_encode }}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: #3273dc; display: flex; align-items: center; gap: 0.5rem;">
      🔗 Claude
    </a>
    
    <a href="https://www.perplexity.ai/search/new?q=Summarize%20this%20url%3A%20{{ post_url | url_encode }}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: #3273dc; display: flex; align-items: center; gap: 0.5rem;">
      🔗 Perplexity
    </a>
    
    <a href="https://www.google.com/search?udm=50&aep=11&q=Summarize%20this%20url%3A%20{{ post_url | url_encode }}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: #3273dc; display: flex; align-items: center; gap: 0.5rem;">
      🔗 Google AI Mode
    </a>
  </div>
</div>
