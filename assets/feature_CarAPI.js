function searchCars() {
  
var options = {
  method: "GET",
  headers: { "X-Api-Key": "bHmMS6Y1Uh7qh8GEsYOYsA==27pfSz2CXKjlH5w4" },
};
$(".car-btn").on("click", function () {
  var textInput = $(".car-btn").siblings(".userInput").val();
  var year = textInput;
  var url = "https://api.api-ninjas.com/v1/cars?limit=20&year="+year;

  $(".results").empty();

  fetch(url, options)
  .then(function(resp){
    return resp.json()
  })
  
  .then(function(data){
    var results = data
    console.log(results)

    var uniqueNames = [];

    results.forEach(function({make, model, year, fuel_type, cylinders, drive}){
      var fullName = make + " " + model;
      // Check if the name is already in the uniqueNames array
      if (!uniqueNames.includes(fullName)) {
        uniqueNames.push(fullName);

      var card = document.createElement('div')
      card.classList.add('card')
      card.classList.add('results')
      card.innerHTML = `
        <div class="ui green card">
          <div class="results">
            <div class="ui relaxed divided list">
              <div class="item">
                <div class="content">
                  <div style="text-decoration: underline;">${make} ${model}</div>
                  <p>Cylinder: ${cylinders}</p>
                  <p>Fuel: ${fuel_type}</p>
                  <p>Drive Type: ${drive}</p>
                  <p>Year: ${year}
                </div>
              </div>
            </div>
          </div>
        </div>
          `

      document.querySelector('.results').appendChild(card)
      dataStore()
      }
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

