// In this studio, you are going to write code to display the 
// very important Launch Checklist LC04.

// LC04 displays information related to the space shuttle, 
// astronauts, and rockets before launch.

// ----------------------------------------------------------------//
// Step 1. 

// Declare and initialize a variable for every data point listed below. 
// Remember to account for the different data types.

// Variable               Value
// ---------------------  -------------------
// date	                  Monday 2019-03-18
// time	                  10:05:34 AM
// astronautCount	         7
// astronautStatus	      ready
// averageAstronautMassKg	80.7
// crewMassKg	            astronautCount * averageAstronautMassKg
// fuelMassKg	            760,000
// shuttleMassKg	        74842.31
// totalMassKg	          crewMassKg + fuelMassKg + shuttleMassKg
// fuelTempCelsius	      -225
// fuelLevel	            100%
// weatherStatus	        clear

// ---------------------------------------------------//
// Step 2. Generate the LC04 Form
//
// Display LC04 to the console using the variables you declared 
// and initialized.

// The generated report should look exactly like the 
// example below---including spaces and symbols (-, >, and *).

// -------------------------------------
// > LC04 - LAUNCH CHECKLIST
// -------------------------------------
// Date: Monday 2019-03-18
// Time: 10:05:34 AM

// -------------------------------------
// > ASTRONAUT INFO
// -------------------------------------
// * count: 7
// * status: ready

// -------------------------------------
// > FUEL DATA
// -------------------------------------
// * Fuel temp celsius: -225 C
// * Fuel level: 100%

// -------------------------------------
// > MASS DATA
// -------------------------------------
// * Crew mass: 564.9 kg
// * Fuel mass: 760000 kg
// * Shuttle mass: 74842.31 kg
// * Total mass: 835407.21 kg

// -------------------------------------
// > FLIGHT PLAN
// -------------------------------------
// * weather: clear

// -------------------------------------
// > OVERALL STATUS
// -------------------------------------
// * Clear for takeoff: YES

// ------------------------------------------------//

// Step 3. Get Astronaut count from the user.
//
// Use readline-sync to prompt the user to enter the value for astronautCount.

// The values printed for astronautCount, crewMassKg, and totalMassKg 
// should change based on the number of astronauts on the shuttle. 
// (Don't forget to convert the input value from a string to a number).
// Refer to this page for how to use readline-sync
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/data-and-variables/input.html

