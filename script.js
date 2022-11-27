// Write your JavaScript code here!

//const { formSubmission } = require("./scriptHelper"); 
//COMMENTING THE ABOVE LINE OUT FIXED A ERROR

window.addEventListener("load", function() {
    let pilotNameInput = document.querySelector("input[name=pilotName]")
    let copilotNameInput = document.querySelector("input[name=copilotName]")
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]")
    let cargoMassInput = document.querySelector("input[name=cargoMass]")

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    const submitButton = document.getElementById("formSubmit");
    submitButton.addEventListener("click", function() {
        //Validate input
        if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
            alert("All fields are required.");
            preventDefault();
        }
        let list = ""
        formSubmission(document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);
    })
});