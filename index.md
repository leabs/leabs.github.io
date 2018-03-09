---
layout: default
---

{% assign rows = site.posts.size | divided_by: 2.0 | ceil %}
{% for i in (1..rows) %}
  {% assign offset = forloop.index0 | times: 2 %}
  <div class="row">
    {% for post in site.posts limit:2 offset:offset %}
    <div class="col-sm-6">
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <img src="{{ post.img }}" class="img-responsive" alt="{{ post.title }} image" />
      <p>{{ post.summary }}</p>
      </div>
    {% endfor %}
  </div>
{% endfor %}

