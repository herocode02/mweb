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

 $(function() {
    var images = $(".gallery img");
    var currentIndex = images.length, temporaryValue, randomIndex;
    
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = images[currentIndex];
      images[currentIndex] = images[randomIndex];
      images[randomIndex] = temporaryValue;
    }
    
    $(".gallery").html(images);
  });
  
