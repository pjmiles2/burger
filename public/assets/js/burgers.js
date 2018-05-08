// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour-burger").on("click", function(event) {
      var id = $(this).data("id");
    
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: {
          devoured: "1"
        }
      }).then(
        function() {
          console.log("Devoured the burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#addburger").val().trim(),
        devoured: "0"
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  