function sanityCheck() {
	console.log("I'm fine!")
}
sanityCheck()

//random
//www.thecocktaildb.com/api/json/v1/1/random.php

// by name
// https://www.thecocktaildb.com/api/json/v1/1/search.php?s=

// Get Random Drink

async function getRandomDrink(e)	{
	e.preventDefault()
	const urlRandom = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
	const response = await fetch(urlRandom)
	const data = await response.json()
	console.log(data.drinks[0].strDrink)
	$("#randomOutput").html(data.drinks[0].strDrink)
}

$('button').click(getRandomDrink)

// get by ingredient 

async function getIngredient(e) {
	e.preventDefault()
	const userInput = $('input[type="text"]').val()
	const urlIngredient = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`
	const response = await fetch(urlIngredient)
	const data = await response.json()
	console.log(data.drinks)
	$('#drink1').html(data.drinks[0].strDrink)
	$('#drink2').html(data.drinks[1].strDrink)
	$('#drink3').html(data.drinks[2].strDrink)
}

$(".input2").click(getIngredient)
