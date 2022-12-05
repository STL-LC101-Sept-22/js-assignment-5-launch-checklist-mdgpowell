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
   const pilotStatus = document.getElementById("pilotStatus");
   const copilotStatus = document.getElementById("copilotStatus");
   const fuelStatus = document.getElementById("fuelStatus");
   const cargoStatus = document.getElementById("cargoStatus");
   const launchStatus = document.getElementById("launchStatus");

   
   pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
   copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
   
   if (fuelLevel < 10000) {
    list.style.visibility = "visible";
    fuelStatus.innerHTML = "Fuel level too low for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "rgb(199, 37, 78)";
   } else {
    fuelStatus.innerHTML = "Fuel level high enough for launch"
   }
   if (cargoLevel > 10000) {
    list.style.visibility = "visible";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch"
    launchStatus.innerHTML = "Shuttle Not Ready for Launch"
    launchStatus.style.color = "rgb(199, 37, 78)";
   } else {
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
   }
   if (fuelLevel >= 10000 && cargoLevel <= 10000) {
    launchStatus.style.color = "rgb(65, 159, 106)";
    launchStatus.innerHTML = "Shuttle is Ready for Launch";
    list.style.visibility = "hidden";
   }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")

    let data = await planetsReturned.json();
    return data;
}

function pickPlanet(planets) {
    return planets[Math.floor(Math.random()*planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
