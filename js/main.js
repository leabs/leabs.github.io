$(document).on('ready', function(){
    bindLinks()
})
 
$(window).on("popstate", function(e) {
    // When the browser goes back replace the content and title
    $('title').html(e.originalEvent.state.title)
    $('#content').html(e.originalEvent.state.content)
})
 
function bindLinks(){
    $("a[href^='/']").on('click', function(e){
        // Stop link from activating
        e.preventDefault()
 
        // Get the URL to load
        url = $(this).attr('href')
 
        // Send a Get request to the URL
        $.get(url, function(data){
            // Get the title of the new page
            regex = /<title>(.*)<\/title>/g
            newTitle = regex.exec(data)[1]
 
            // Set the title to the new title
            $('title').html(newTitle)
 
            // Replace the content
            $('#content').html($(data).find('#content').html())
 
            // Push a new state to the browser
            history.pushState({
                'title': $('title').html(),
                'content': $('#content').html()
            }, newTitle, url)
 
            // Re Bind to all the links on the page
            bindLinks()
        })
    })
}

document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});