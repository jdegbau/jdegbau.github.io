{% assign words = content | number_of_words %}
{% if words < 180 %}
1 min read
{% else %}
{{ words | divided_by:180 }} min read
{% endif %}