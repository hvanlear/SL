$(function() {
  $("#js-shopping-list-form").submit(event => {
    event.preventDefault();
    const userTextElement = $(this).find("#shopping-list-entry");

    $(".shopping-list").append(
      `<li>
      <span class = 'shopping-item'>${userTextElement.val()}</span>
      
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
        <span class ="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
            <span class="button-label">delete</span>
        </button>
    </div>
</li>`
    );
    $("#shopping-list-entry").val("");
  });
});

// not toggling the current checked item
$("ul").on("click", ".shopping-item-toggle", function(event) {
  $(this)
    .closest("li")
    .find(".shopping-item")
    .toggleClass("shopping-item__checked");
});

$("ul").on("click", ".shopping-item-delete", function() {
  $(this)
    .closest("li")
    .remove();
});
