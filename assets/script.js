$(document).ready(function () {
  // API URLs
  const yearApiUrl = "API for years";
  const makeApiUrl = "API for makes";
  const modelApiUrl = "API for models";

  // Dropdown elements
  const yearDropdown = $("#yearDropdown");
  const makeDropdown = $("#makeDropdown");
  const modelDropdown = $("#modelDropdown");

  // Year dropdown
  $.get(yearApiUrl, function (data) {
    data.forEach(function (year) {
      yearDropdown.append($("<option>").val(year).text(year));
    });
  });

  //Make dropdown
  $.get(makeApiUrl, function (data) {
    data.forEach(function (make) {
      makeDropdown.append($("<option>").val(make).text(make));
    });
  });

  // Model dropdown
  $.get(modelApiUrl, function (data) {
    data.forEach(function (model) {
      modelDropdown.append($("<option>").val(model).text(model));
    });
  });

  // Initialize the dropdown
  $(".ui.dropdown").dropdown();
});

var options = {
  method: "GET",
  headers: { "X-Api-Key": "bHmMS6Y1Uh7qh8GEsYOYsA==27pfSz2CXKjlH5w4" },
};
$(".ui button").on("click", function () {
  var textInput = $(".ui button").siblings(".userInput").val();
  var model = textInput;
  var url = "https://api.api-ninjas.com/v1/cars?limit=20&model=" + model;

  fetch(url, options)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("error ${err}");
    });
});
