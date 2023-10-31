function dogFacts() {
    var options = {
      method: 'GET',
      headers: {'accept': 'application/json'}
    };
  
    var dogURL = 'https://dogapi.dog/api/v2/facts';
  
    fetch(dogURL, options)
      .then(function(resp) {
        return resp.json();
      })
      .then(function(data) {
        // console.log(data);
        var fact = data.data[0].attributes.body;
        console.log(fact)
        var card = document.createElement('div')
      card.classList.add('card')
      card.innerHTML = `
      <div class="card-body">
        <h2 class="card-make">Random fun facts about dogs!</h2>
        <h3 class="card-make">${fact}</h3>
        <br>
      </div>
      `

      document.querySelector('#dogFacts').appendChild(card)
      });
  }
  
  dogFacts();