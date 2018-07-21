---
layout: default
---

<<<<<<< HEAD
{% assign rows = site.posts.size | divided_by: 3.0 | ceil %}
{% for i in (1..rows) %}
  {% assign offset = forloop.index0 | times: 3 %}
  <div class="columns">
    {% for post in site.posts limit:3 offset:offset %}
    <div class="column is-4">
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <a href="{{ post.url }}"><img src="images/{{ post.img }}" class="img-responsive" alt="{{ post.title }} image" /></a>
      <p>{{ post.summary }}</p>
      </div>
    {% endfor %}
=======

<div class="column is-half is-offset-one-quarter">

  {% for post in site.posts  %}
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
           <a href="{{ post.url }}"> {{ post.title }}</a>
      </p>
      <a href="#" class="card-header-icon" aria-label="more options">
      <span class="icon">
      <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
      </a>
    </header>    

   
>>>>>>> 6fcd23799398fa8ddc292d358f891f59cb486583
  </div>
  <br />
  {% endfor %}
</div>



