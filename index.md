---
layout: default
---



  <div class="columns">
    {% for post in site.posts limit:3 offset:offset %}
    <div class="column is-4">
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <a href="{{ post.url }}"><img src="images/{{ post.img }}" class="img-responsive" alt="{{ post.title }} image" /></a>
      <p>{{ post.summary }}</p>
      </div>
    {% endfor %}
</div>




