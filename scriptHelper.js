// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
   */
  let missionTarget = document.getElementById("missionTarget");
  missionTarget.innerHTML = `
  <h2>Mission Destination</h2>
  <ol>
      <li>Name: ${name}</li>
      <li>Diameter: ${diameter}</li>
      <li>Star: ${star}</li>
      <li>Distance from Earth: ${distance}</li>
      <li>Number of Moons: ${moons}</li>
  </ol>
  <img src="${imageUrl}">`;
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty"
    } else if (isNaN(testInput)) {
        return "Not a Number"
    } else if (!isNaN(testInput)) {
        return "Is a Number"
    } 
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   //What is "list"?
   const faultyItemsDiv = document.getElementById("faultyItems");
   const pilotStatus = document.getElementById("pilotStatus");
   const copilotStatus = document.getElementById("copilotStatus");
   const fuelStatus = document.getElementById("fuelStatus");
   const cargoStatus = document.getElementById("cargoStatus");
   const launchStatus = document.getElementById("launchStatus");

   
   pilotStatus.innerHTML = `Pilot name: ${pilot}`;
   copilotStatus.innerHTML = `Copilot name: ${copilot}`;
   
   if (fuelLevel < 10000) {
    faultyItemsDiv.style.visibility = "visible";
    fuelStatus.innerHTML = "Not enough fuel for the journey";
    launchStatus.innerHTML = "Shuttle not ready for launch";
    launchStatus.style.color = "red";
   } else {
    fuelStatus.innerHTML = "Fuel level high enough for launch"
   }
   if (cargoLevel > 10000) {
    faultyItemsDiv.style.visibility = "visible";
    cargoStatus.innerHTML = "Too much mass for the shuttle to take off"
    launchStatus.innerHTML = "Shuttle not ready for launch"
    launchStatus.style.color = "red";
   } else {
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
   }
   if (fuelLevel >= 10000 && cargoLevel <= 10000) {
    launchStatus.style.color = "green";
    launchStatus.innerHTML = "Shuttle is ready for launch";
    faultyItemsDiv.style.visibility = "visible";
   }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")

    return planetsReturned;
}

function pickPlanet(planets) {
    return planets[Math.floor(Math.random()*planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
