---
layout: default
---


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

   
  </div>
  <br />
  {% endfor %}
</div>



