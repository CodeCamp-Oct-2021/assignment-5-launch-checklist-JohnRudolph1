window.addEventListener("load", function () {
    //obtain the planets object using fetch/json
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(
      function (response) {
        response.json().then(function (json) {
          // create variable to equal random planet pulled from object * json.length or 5
          let randomPlanet = Math.floor(Math.random() * json.length);
          //print randomPlanet to console to ensure it works
          console.log(json[randomPlanet].name);
          let div = document.getElementById("missionTarget");
          div.innerHTML =
            //refernce object pulled during the fetch at the index of random.property of object
            `<h2>Mission Destination</h2>
                <ol>
                
                    <li>Name:${json[randomPlanet].name} </li>
                    <li>Diameter:${json[randomPlanet].diameter} </li>
                    <li>Star: ${json[randomPlanet].star}</li>
                    <li>Distance from Earth:${json[randomPlanet].distance} </li>
                    <li>Number of Moons:${json[randomPlanet].moons} </li>
                </ol>
                <img src="${json[randomPlanet].image}" alt = "Planet">`
        });
      }
    );
 
  





  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    let cargoMass = document.querySelector("input[name=cargoMass]").value;
    let faultyItems = document.getElementById("faultyItems");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");

  //  let listedPlanets;
  //  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  //  ; 
    if (
      pilotName.value === "" ||
      copilotName.value === "" ||
      fuelLevel === "" ||
      cargoMass === ""
    ) {
      alert("All Fields Required");
      event.preventDefault();
    } else if (
      isNaN(pilotName.value) === false ||
      isNaN(copilotName.value) === false ||
      isNaN(fuelLevel) === true ||
      isNaN(cargoMass) === true
    ) {
      //make alert more detailed
      alert("WARNING! Input must be valid");
      event.preventDefault();
    } else {
      pilotStatus.innerHTML = `${pilotName.value} ready for takeoff!`;
      copilotStatus.innerHTML = `${copilotName.value} ready for takeoff!`;
      faultyItems.style.visibility = "visible";
    
      if (fuelLevel < 10000 && cargoMass > 10000) {
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        fuelStatus.innerHTML = "Fuel level is too low for launch";
        cargoStatus.innerHtml = "Cargo mass is too heavy for launch";
        
        event.preventDefault();
      } else if (cargoMass < 10000 && fuelLevel > 10000) {
        launchStatus.style.color = "green";
        launchStatus.innerHTML = "Shuttle ready for launch";
        fuelStatus.innerHTML = "Fuel level is high enough for launch";
        cargoStatus.innerHtml = "Cargo level is light enough for launch";
        event.preventDefault();
      } else if (cargoMass < 10000 && fuelLevel < 10000) {
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle is not ready for launch";
        fuelStatus.innerHTML = "Fuel Level is too low for launch";
        cargoStatus.innerHTML = "Cargo level is light enough for launch";

        event.preventDefault();
      } else if (cargoMass > 10000 && fuelLevel > 10000) {
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle is not ready for launch";
        fuelStatus.innerHTML = "Fuel Level is high enough for launch";
        cargoStatus.innerHTML = "Cargo level is too heavy for launch";

        event.preventDefault();
      }
event.preventDefault()
      
    }
  });

})
