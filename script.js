$(function() {
    $(".gallery img").swipe({
      swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
        if (direction == "down") {
          $(this).slideUp();
          $(this).next().slideDown();
        } else if (direction == "up") {
          $(this).slideUp();
          $(this).prev().slideDown();
        }
      }
    });
  });
  