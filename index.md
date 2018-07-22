---
layout: default
summary: I'm a frontend web developer that specializes in css and javascript framework and static site generators like Jekyll and Gatsby.
---


<section>
<p>I'm a frontend web developer that specializes in css and javascript framework and static site generators like Jekyll and Gatsby.</p>
</section>
  <div class="columns">
    {% for post in site.posts limit:3 offset:offset %}
    <div class="column is-4">
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <a href="{{ post.url }}"><img src="images/{{ post.img }}" class="img-responsive" alt="{{ post.title }} image" /></a>
      <p>{{ post.summary }}</p>
      </div>
    {% endfor %}
</div>




