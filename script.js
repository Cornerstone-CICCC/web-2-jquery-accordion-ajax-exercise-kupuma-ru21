$(function () {
  $(".accordion-header").click(function () {
    var $content = $(this).next(".accordion-content");
    $(".accordion-content").not($content).slideUp();
    $content.slideToggle();
  });

  $("button:contains('Load To-Do Items')").click(() => {
    $.ajax({
      url: "https://dummyjson.com/todos",
      success: function (result) {
        result.todos.forEach(({ todo }) => {
          $("ul").append(`<li>${todo}</li>`);
        });
      },
    });
  });
});
