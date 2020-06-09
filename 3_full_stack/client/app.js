$(document).ready(function () {
  $("#btnSubmit").on("click", () => {
    $.ajax({
      type: "GET",
      url: "/api/test",
    }).then((res) => {
      console.log(res);
    });
  });

  $("#btnSubmit2").on("click", () => {
    $.ajax({
      type: "GET",
      url: "/api/test2",
    }).then((res) => {
      console.log(res);
    });
  });
});
