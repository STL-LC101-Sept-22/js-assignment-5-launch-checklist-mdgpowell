// Write your JavaScript code here!


window.addEventListener("load", function() {
    let pilotName = document.querySelector("input[name=pilotName]")
    let copilotName = document.querySelector("input[name=copilotName]")
    let fuelLevel = document.querySelector("input[name=fuelLevel]")
    let cargoMass = document.querySelector("input[name=cargoMass]")

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    console.log("listed planets response:",listedPlanetsResponse)
    listedPlanetsResponse.then(function (result) {
        console.log("result: ", result)
        result.json().then(function (json) {
            listedPlanets = json;
            console.log("listedPlanets:",listedPlanets)
            let planet = pickPlanet(listedPlanets);
            addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
        })
    });
    // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

    

    const submitButton = document.getElementById("formSubmit");
    submitButton.addEventListener("click", function(event) {
        //Validate input
        event.preventDefault();
        if (validateInput(pilotName.value) === "Empty" || validateInput(copilotName.value) === "Empty" || validateInput(fuelLevel.value) === "Empty" || validateInput(cargoMass.value) === "Empty") {
            alert("All fields are required.");
        } else if (validateInput(fuelLevel.value) === "Not a Number" || validateInput(cargoMass.value) === "Not a Number") {
            alert("Fuel level and cargo mass must be numbers.")
        } else {
            let list = document.getElementById("faultyItems")
            formSubmission(document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);
        }
    })
});