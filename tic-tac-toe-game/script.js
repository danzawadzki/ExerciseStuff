
//Player object
function Player(name, className) {
    this.name = name; //Player name
    this.className = className; //CSS class name
    this.cells= []; //Selected cells
    this.results = []; //MagicSquare results
}

//Method to select field
Player.prototype.selectField = function(selectTarget) {
    var target = selectTarget;
    target.className += this.className;
    this.cells.push(Number(target.getAttribute("data-value"))); //Adding number to array
    this.results = []; //Array reset to avoid double check
    Util.getAllPossibleCombinations(this.cells, 3, this.results);

    for(var i=0; i<this.results.length; i++){

            if(this.results[i].reduce(function(prev, cur) {
                return prev + cur;
            }) === 15){
                alert(this.name + " win!");
                window.location.reload();
        }
    }
};

//Method to get all possible 3 numbers combinations from Player's array
//Author: https://www.ibm.com/developerworks/community/blogs/hazem/entry/javascript_getting_all_possible_combinations?lang=en
var Util = function() {
};

Util.getCombinations = function(array, size, start, initialStuff, output) {
if (initialStuff.length >= size) {
    output.push(initialStuff);
} else {
    var i;
    
    for (i = start; i < array.length; ++i) {    
    Util.getCombinations(array, size, i + 1, initialStuff.concat(array[i]), output);
    }
}
};

Util.getAllPossibleCombinations = function(array, size, output) {
    Util.getCombinations(array, size, 0, [], output);
};

//Method to check if click target is already taken
function hasClass( el, cl ) {
    return (" " + el.className + " " ).indexOf( " "+cl+" " ) > -1;
}

//Varibles and Objects
var round = 1,
    counter = 0;
    
player1 = new Player("Player 1", "x");
player2 = new Player("Player 2", "o");


function game(event) {
    var target = event.target;

    //Checking whether the move is available
    if(hasClass(target, player1.className) || hasClass(target, player2.className) ){
    	alert("Taken.");
    	return;
    }

    //Turn of Player 1
    if(round === 1){
        player1.selectField(target);
    	round = 0;

    }   

    //Turn of Player 2
    else {
        player2.selectField(target);
        round = 1;
    }

    //Draw Check
    counter++;
    if(counter === 9){
        alert("Game Over.\n It's a draw.");
        window.location.reload();
    }

}
