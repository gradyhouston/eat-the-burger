// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");
        // var person = $("#eat-person-" + id).val();

        var newState = {
            devoured: true,
            // eat_person: person
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newState
        }).then(function(data) {
            console.log("changed devour to", true);
            // Reload the page to get the updated list
            location.reload();
        });
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var name = $("[name=burger-name]").val().trim();

        if(name !== "") {
            var newBurger = {
                burger_name: name
            };

            // Send the POST request.
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(function(data) {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            });
        }
        else {
            $("[name=burger-name]").val("");
        }
    });

    $("#delete-all").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        $.ajax("/api/burgers/", {
            type: "DELETE"
        }).then(function(data) {
            // Reload the page to get the updated list
            location.reload();
        });
    });
});
