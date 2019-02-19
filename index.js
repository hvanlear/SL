$(function() {
  $("#js-shopping-list-form").submit(event => {
    event.preventDefault();
    const userTextElement = $(this).find("#shopping-list-entry");
    //not working
    $(".shipping-list").append(
      "<div class = 'shopping-item-controls'>" + "</div>"
    );

    $(".shopping-list").append(
      "<li class= 'shopping-item'>" + `${userTextElement.val()}` + "</li>"
    );
  });
});

// not toggling the current checked item
$("ul").on("click", ".shopping-item-toggle", function(event) {
  $(this)
    .closest("li")
    .toggleClass("shopping-item__checked");
});

$("ul").on("click", ".shopping-item-delete", function() {
  $(this)
    .closest("li")
    .remove();
});
