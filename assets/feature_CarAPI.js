function searchCars() {
  
var options = {
  method: "GET",
  headers: { "X-Api-Key": "bHmMS6Y1Uh7qh8GEsYOYsA==27pfSz2CXKjlH5w4" },
};
$(".car-btn").on("click", function () {
  var textInput = $(".car-btn").siblings(".userInput").val();
  var make = textInput;
  var url = "https://api.api-ninjas.com/v1/cars?limit=50&make=" + make;

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
function dropDownCars(){
  var options = {
    method: "GET",
    headers: { "X-Api-Key": "bHmMS6Y1Uh7qh8GEsYOYsA==27pfSz2CXKjlH5w4" },
  };
  var years = [];

for (var year = 1950; year <= 2020; year++) {
  years.push(year);
}
  // var year = menuContainer;
  var url = "https://api.api-ninjas.com/v1/cars?year="+years;
  fetch(url, options)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data)
    var years = data.map(function(car) {
      return car.year;
    });

    var yearDropdown = document.getElementById("car-year");
    var menuContainer = yearDropdown.querySelector(".menu");

    years.forEach(function(year) {
      var item = document.createElement("div");
      item.classList.add("item");
      item.setAttribute("data-value", year);
      item.textContent = year;

      menuContainer.appendChild(item);
    });
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

