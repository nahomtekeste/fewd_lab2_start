//provide skeleton
 function expand(divname)
 {
   let mydiv=document.getElementById(divname);
   mydiv.style.display = "block";    
 }
 
 function collapse(divname)
 {
   let mydiv=document.getElementById(divname);
   mydiv.style.display = "none";        
 }

 // Event handler for the "Western" header
function handleWestern() {
  expand("western");
  collapse("borneo");
}

 // Event handler for the "Borneo" header
function handleBorneo() {
  expand("borneo");
  collapse("western");
}

// Register event handlers for the headers
function registerHandlers() {
  let westernHeader = document.getElementById("westerntitle");
  let borneoHeader = document.getElementById("borneotitle");

  // Check if the headers exist and then attach event listeners
  if (westernHeader) {
    westernHeader.addEventListener("mouseover", handleWestern);
  }
  
  if (borneoHeader) {
    borneoHeader.addEventListener("mouseover", handleBorneo);
  }

  alert("Event handlers registered!"); // Alert added here

}


// Remove event handlers for the headers
function removeHandlers() {
  let westernHeader = document.getElementById("westerntitle");
  let borneoHeader = document.getElementById("borneotitle");

  // Check if the headers exist and then remove event listeners
  if (westernHeader) {
    westernHeader.removeEventListener("mouseover", handleWestern);
  }

  if (borneoHeader) {
    borneoHeader.removeEventListener("mouseover", handleBorneo);
  }
  alert("Event handlers removed!"); // Alert added here

}



// Register the event listeners when the window has loaded
window.onload = function () {
  registerHandlers();
   // Attach the button event handler
   let registerButton = document.getElementById("register-btn");
   registerButton.onclick = registerHandlers;

   
// Attach the button event handler to remove handlers
let removeButton = document.getElementById("remove-btn");
removeButton.onclick = removeHandlers; // Call removeHandlers when the button is clicked

};
