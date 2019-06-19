console.log( 'js' );

// road trip planner;
let seatsInCar = 7;
let passengers = 5;
let infants = 1;
let infantSeats = 1;
let fullTank = false;

//check that there is enough room for everyone in the car;

if ( seatsInCar >= passengers && infantSeats >= infants){
  console.log( 'We are ready for the trip!' );
if (fullTank === true) {
  console.log( 'ready to hit the highway');
}//end fullTank
else {
  console.log( 'you gotta buy some gas bro');
}
} // end enough seats
else {
  console.log( 'check passengers, seats, and equipment.  You are missing something!' );
} // end not enough seats


// doggy daycare planner;
let dogsNeeded = 5
let dogsInHouse = 5
let leashesOwned = 4
let leashesNeeded = 4

//check that we have enough dogs and supplies;
if (dogsInHouse >= dogsNeeded && leashesOwned >= leashesNeeded) {
  console.log( 'You have enough dogs and dog things' );
}

else {
  console.log( 'You really ought to grab more dogs or dog things.' );
}
