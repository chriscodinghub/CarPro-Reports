function dataStore() {
    //Gets the user input which should be a year
    var textInput = $(".car-btn").siblings(".userInput").val()
    console.log(textInput)
    
    //Gets the list of previously searched year from local storage or an empty array if it doesn't exist
    var searchedYear = JSON.parse(localStorage.getItem('year') || '[]')
    //checks if a searched city is already in the list
    if (!searchedYear.includes(textInput)) {
        //Will push the new city to the list
        searchedYear.push(textInput)
        //Updates local storage with the new list of cities
        localStorage.setItem('year', JSON.stringify(searchedYear))
    }
}