{% if page.layout == "post" %}
    {% comment %}
    This if statement is used to add read time to individual blog posts
    {% endcomment %}
    {% assign words = content | number_of_words %}
    {% if words < 180 %}
    1 min read
    {% else %}
    {{ words | divided_by:180 }} min read
    <script src="/assets/js/progress-bar.min.js" type="text/javascript"></script>
    {% endif %}
{% else %}
    {% comment %}
    This else statement is used to add read time to the cards on blog.md-note the "post.content" instead of "content"
    {% endcomment %}
    {% assign words = post.content | number_of_words %}
    {% if words < 180 %}
    1 min read
    {% else %}
    {{ words | divided_by:180 }} min read
    {% endif %}
{% endif %}   