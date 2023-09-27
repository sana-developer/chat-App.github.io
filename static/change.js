// Wrap your jQuery code in $(document).ready()




$(document).ready(function() {
    $(".go-back").hide();
    // var username = prompt("Enter your name: ");

    // // Send the username to the server via an AJAX POST request
    // $.ajax({
    //     type: 'POST',
    //     url: '/', // Replace with the appropriate server endpoint URL
    //     data: { username: username },
    //     success: function(response) {
    //         // Handle the response from the server if needed
    //         console.log(response);
    //     },
    //     error: function(error) {
    //         // Handle any errors that occur during the AJAX request
    //         console.error('Error:', error);
    //     }
    // });

    // var newDiv = $("<div></div>");
    // newDiv.text(username);
    // $(".head-right").append(newDiv);
    //if ($(window).width() <= 803) {
        // // Select the container div
        //  var $container = $(".container");

        //  // Iterate through each .inner div
        //  $container.find(".outer").each(function () {
        //      // Create a new anchor element
        //      var anchor = $("<a>");

        //      // Set the href attribute for the anchor
        //      anchor.attr("href", "messaging");

        //      // Wrap the current .inner div with the anchor
        //      $(this).wrap(anchor);
        //  });
        // };

    // Handle clicks on elements with class "outer"
    $(".outer").click(function () {
        // Check if the window width is less than or equal to 803px
        if ($(window).width() <= 803) {
            
            $(".right-container").show();
            $(".go-back").show();
            $(".left-container").hide();
            $(".show").hide();
            $(".go-back").click(function(){
                $(".left-container").show();
                $(".right-container").hide();
            });
        } else {
            $(".show").hide();
        }
    });

});


