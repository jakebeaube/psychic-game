var thenumber = Math.floor(Math.random()*100+1);
var numGuesses = 8;
var wins = 0
var losses = 0

function checkguess() 
{
	var guess = document.getElementById('guess');
	var output = document.getElementById('output');
	var myNumber = guess.value;

		numGuesses++;
	
	if (myNumber < thenumber) 
	{
		output.value = "Too Low!";
	}
	else if (myNumber > thenumber) 
	{
		output.value = "Too High!";
	}
	else if (myNumber == thenumber) 
	{
		output.value = "You Got It In Only "+numGuesses+" Tries! Play Again?";
		alert("The Number Was "+ thenumber +"!");
		thenumber = Math.floor(Math.random()*100+1);
		numGuesses = 0;
		wins++
		document.getElementById('wins');
	}

	/*else if (numGuesses == 0)

	{	
		output.value = "You Lose!"
		alert( "You Took Too Many Guesses");
		losses++
		document.getElementById('losses');
		
	}*/
	
	



	




	

	// do not redeclare here with the 'var'.
	// scope issues we'll talk about tonight...
	
}





