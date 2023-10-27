function searchCars() {
  
var options = {
  method: "GET",
  headers: { "X-Api-Key": "bHmMS6Y1Uh7qh8GEsYOYsA==27pfSz2CXKjlH5w4" },
};
$(".car-btn").on("click", function () {
  var textInput = $(".car-btn").siblings(".userInput").val();
  var model = textInput;
  var url = "https://api.api-ninjas.com/v1/cars?limit=5&model=" + model;

  $(".results").empty();

  fetch(url, options)
  .then(function(resp){
    return resp.json()
  })
  .then(function(data){
    var results = data
    console.log(results)
    results.forEach(function({make, model, year, fuel_type, cylinders, drive}){
      var card = document.createElement('div')
      card.classList.add('card')
      card.innerHTML = `
      <div class="card-body">
        <h3 class="card-make">${make}, ${model}</h3>
        <h4 class="card-subtitle mb-2 text-body-secondary">Fuel Type: ${fuel_type}, Cylinders: ${cylinders}, Drive: ${drive}</h4>
        <p class="card-text">Year: ${year}</p>
        <br>
      </div>
      `
      
      document.querySelector('.results').appendChild(card)
    })
  })
  });
}
searchCars()




//   fetch(url, options)
//     .then((resp) => resp.json())
//     .then((data) => {
//         var results = data
//         console.log(results)
//       //  results.forEach(function({make, model, year, fuel_type, cylinders, drive}))
//     })
//     .catch((err) => {
//       console.log("error ${err}");
//     });
