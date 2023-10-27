
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
