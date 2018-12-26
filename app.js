
window.addEventListener('DOMContentLoaded', function () {



    //Using math.floor to round down numbers to nearest integer value and multiplying it by 5 to get a number between 0 and 4.
    let randomLoc = Math.floor(Math.random() * 5);

    //storing random and assigning value to variable 
    let location1 = randomLoc;

    //adding 1 to location1 varaible and storing value in location2.
    let location2 = location1 + 1;

    //adding 1 to location2 and storing value in location3.
    let location3 = location2 + 1;

    //declaring variable to check if user value entered is between 0 and 6.
    let guess;

    //declaring variable to store number of hits in order to exit for loop and assigning it 0 value.
    let hits = 0;

    //declaring variable to store number of guesses and assigning value to 0.
    let guesses = 0;

    //boolean variable for loop set up
    let isSunk = false;

    //declaring variable to hold stats
    let stats;

    //Created h1 element and text node then appended text node to h1 element.
    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode('Play Battleship!');
    h1.appendChild(h1Text);

    //Appended div container to body.
    document.body.appendChild(h1);


    //while loop set to false (if true, loop exits)
    while (isSunk == false) {







        //user prompt to enter value and store value
        guess = prompt("Ready, aim, and fire! Enter a number from 0-6:");

        //check to see if user entered value is valid
        if (guess < 0 || guess > 6) {
            alert("Please enter a valide cell number!");
        } else {
            //increment guesses to later calculate stats on accuracy of shooting
            guesses = guesses + 1;

            //check to see if guesses equal 
            if (guess == location1 || guess == location2 || guess == location3) {
                //if guesses equal, then alert message
                alert("Hit!");
                //increment hits
                hits = hits + 1;
                //check to see if hits equal to 3
                if (hits == 3) {
                    //boolean set to true and exit loop
                    isSunk = true;
                    alert("You sank my battleship!");
                }
            } else {
                //alert message if guesses does not equal random value
                alert("Missed!");
            }

        }
    }

    //calculate and store stats (average of shooting) and count of guesses
    stats = "You took " + guesses + " guesses to sink the battleship, " + " which means your shooting accuracy was " + (3 / guesses);
    //alert stats
    alert(stats);


});