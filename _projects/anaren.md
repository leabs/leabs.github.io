---
layout: page
title: Anaren.com
excerpt_separator:  <!--more-->
description: "Drupal 7 site for the space and defence company featuring product tables with over 700 products, landing pages on supported markets, and content reviewed by stake-holders."
category: Projects
type: drupal
image: screenshots/anaren/1.png
tags:
  - Drupal
  - CSS
  - JQuery 
permalink: /anaren/
comments: false
---

<div class="owl-carousel owl-theme">
	{% for image in site.static_files %}
	    {% if image.path contains 'assets/screenshots/anaren/' %}
	    <div> 
	    	<a href="{{ site.baseurl }}{{ image.path }}" >
	        	<img src="{{ site.baseurl }}{{ image.path }}" alt="{{ page.title }} project screenshot" />
	    	</a>
	    </div>
	    {% endif %}
	{% endfor %}
	<h3>test</h3>
</div>

<script type="text/javascript">
    function run(agent) {
  agent.show();

  // add stuff here:
  agent.play("GestureUp");
  agent.speak("Feel free to click the images to check them out full screen.");

  setTimeout(function() {
    agent.play("CheckingSomething");

    setTimeout(function() {
      agent.play('Congratulate');

      setTimeout(function() {
        agent.speak("Hello 1997!");

        agent.play("Pleased");

      }, 2000);
    }, 4000);
  }, 3000);
}

document.addEventListener('DOMContentLoaded', function() {
  clippy.load('Clippy', run);
});
</script>

<script>
	$('.owl-carousel').owlCarousel({
    lazyLoad:true,
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})
</script>