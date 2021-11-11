// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   
 

// function validateInput(testInput) {
   
// };

// function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
//     window.addEventListener("load", function () {
//         let form = document.querySelector("form");
//         form.addEventListener("submit", function () {
//           let pilotName = document.querySelector("input[name=pilotName]");
//           let copilotName = document.querySelector("input[name=copilotName]");
//           let fuelLevel = document.querySelector("input[name=fuelLevel]");
//           let cargoLevel = document.querySelector("input[name=cargoMass]");
          
//           let item = document.getElementById("faultyItems")
          

//          document.getElementById("pilotStatus").innerHTML = `${pilotName} Ready for takeoff!`
//          document.getElementById("copilotStatus").innerHTML= `${copilotName} Ready for takeoff!`
     
//          if(fuelLevel < 10000) {
//             ready = false
//             launchStatus.style.color = "red"
//             launchStatus.innerHTML = "Shuttle not ready for launch"
//          } else if (cargoLevel > 10000) {
//              ready = false
//             item.style.visibility='visible'
//             launchStatus.style.color = "red"
//             launchStatus.innerHTML = "Shuttle not ready for launch"
//          } else if (ready === true) {
//              style.visibility='visible'
//             launchStatus.style.color = "green"
//             launchStatus.innerHTML = "Shuttle is ready for launch"
//          }


//         })
//      })
// }


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("handlers.education.launchcode.org/static/planets.json").then( function(response) {
         return response.json()
          
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    window.addEventListener('load', function() {
        planets = fetch("handlers.education.launchcode.org/static/planets.json").then(function (response) {
            then(function (json) {
                let randomPlanet = Math.floor(Math.random() * json.length)
                console.log(json[randomPlanet].name);
                document.getElementById('missionTarget').innerHTML =              
                     `<h2>Mission Destination</h2>
                <ol>
                    <li>Name:${json[randomPlanet].name} </li>
                    <li>Diameter:${json[randomPlanet].diameter} </li>
                    <li>Star: ${json[randomPlanet].star}</li>
                    <li>Distance from Earth:${json[randomPlanet].distance} </li>
                    <li>Number of Moons:${json[randomPlanet].moons} </li>
                </ol>
                <img src="${json[randomPlanet].imageUrl}">`
   
                    }
                )
            })
        })
    }
}
   
           


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
