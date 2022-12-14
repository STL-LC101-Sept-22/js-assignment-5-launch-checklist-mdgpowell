// Write your JavaScript code here!


window.addEventListener("load", async function() {
    let pilotName = document.querySelector("input[name=pilotName]")
    let copilotName = document.querySelector("input[name=copilotName]")
    let fuelLevel = document.querySelector("input[name=fuelLevel]")
    let cargoMass = document.querySelector("input[name=cargoMass]")

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = await myFetch();
    console.log("listed planets response:",listedPlanetsResponse)
    let planet = pickPlanet(listedPlanetsResponse);
    addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
   
    // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

    

    const submitButton = document.getElementById("formSubmit");
    submitButton.addEventListener("click", function(event) {
        //Validate input
        event.preventDefault();
        let list = document.getElementById("faultyItems");
        let launchStatus = document.getElementById("launchStatus");

        if (validateInput(pilotName.value) === "Empty" || validateInput(copilotName.value) === "Empty" || validateInput(fuelLevel.value) === "Empty" || validateInput(cargoMass.value) === "Empty") {
            list.style.visibility = "hidden";
            launchStatus.innerHTML = "Awaiting Information Before Launch";
            launchStatus.style.color = "black";
            alert("All fields are required.");
        } else if (validateInput(fuelLevel.value) === "Not a Number" || validateInput(cargoMass.value) === "Not a Number") {
            list.style.visibility = "hidden";
            launchStatus.innerHTML = "Awaiting Information Before Launch";
            launchStatus.style.color = "black";
            alert("Fuel level and cargo mass must be numbers.")
        } else if (validateInput(pilotName.value) === "Is a Number" || validateInput(copilotName.value) === "Is a Number") {
            list.style.visibility = "hidden";
            launchStatus.innerHTML = "Awaiting Information Before Launch";
            launchStatus.style.color = "black";
            alert("Pilot name and copilot name must be strings.")
        } else {
            
            formSubmission(document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);
        }
    })
});