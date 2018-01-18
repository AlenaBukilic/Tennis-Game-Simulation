var arr = [];
var playerOne6;
var playerTwo6;
var playerOne7;
var playerTwo7;
var i = 0;

function play() {

	var playerOne;
	var playerTwo;
	var scoreOne;
	var scoreTwo;

	setTimeout(function(){
		document.getElementById("but").style.display = "block";
	}, 250);

	setTimeout(function(){
		document.getElementById("one").innerHTML = "Novak Djokovic";
		document.getElementById("one").style.color = "#1f1fb7";
	}, 500);
	setTimeout(function(){
		document.getElementById("two").innerHTML = "Rafael Nadal";
		document.getElementById("two").style.color = "#961820";
	}, 1000);

	// Round 1.
	setTimeout(function() {
		document.getElementsByClassName("round")[0].innerHTML = "Round One";
		document.getElementsByClassName("round")[1].innerHTML = "Round One";
		}, 2000);

	var x1 = Math.random();

	if(x1 < 0.5){

		playerOne = 0;
		playerTwo = 15;
	}
	else {
		playerOne = 15;
		playerTwo = 0;
	}
	setTimeout(function(){document.getElementById("oneScore").innerHTML = playerOne}, 3000);
	setTimeout(function(){document.getElementById("twoScore").innerHTML = playerTwo}, 4000);
	
	
	setTimeout(function(){
		if(playerOne > playerTwo){
			document.getElementById("score").innerHTML = "Fifteen-Love";
			arr.push(" Fifteen-Love");
		}
		else{
			document.getElementById("score").innerHTML = "Love-Fifteen";
			arr.push(" Love-Fifteen");
		}
	},5000);

	//Round 2.
	setTimeout(function() {
		document.getElementsByClassName("round")[0].innerHTML = "Round Two";
		document.getElementsByClassName("round")[1].innerHTML = "Round Two";
		}, 7000);

	var x2 = Math.random();

	if(x2 < 0.5){

		scoreOne = playerOne;
		scoreTwo = playerTwo + 15;
	}
	else {
		scoreOne = playerOne + 15;
		scoreTwo = playerTwo;
	}
	setTimeout(function(){document.getElementById("oneScore").innerHTML = scoreOne}, 9000);
	setTimeout(function(){document.getElementById("twoScore").innerHTML = scoreTwo}, 10000);

	setTimeout(function(){
		if(scoreOne == 15 && scoreTwo == 15){
			document.getElementById("score").innerHTML = "Fifteen-All";
			arr.push(" Fifteen-All");
		}
		else if(scoreOne == 30){
			document.getElementById("score").innerHTML = "Thirty-Love";
			arr.push(" Thirty-Love");
		}
		else {
			document.getElementById("score").innerHTML = "Love-Thirty";
			arr.push(" Love-Thirty");
		}
	},11000);

	// Round 3.
	setTimeout(function() {
		document.getElementsByClassName("round")[0].innerHTML = "Round Three";
		document.getElementsByClassName("round")[1].innerHTML = "Round Three";
		}, 13000);

	var playerOne3;
	var playerTwo3;

	var x3 = Math.random();

	if (x3 < 0.5) {

		if(scoreTwo == 30){

			playerOne3 = scoreOne;
			playerTwo3 = scoreTwo + 10;
		}
		else {

			playerOne3 = scoreOne;
			playerTwo3 = scoreTwo + 15;	
		}
	}
	else {
		
		if(scoreOne == 30){

			playerTwo3 = scoreTwo;
			playerOne3 = scoreOne + 10;
		}
		else {
			playerTwo3 = scoreTwo;
			playerOne3 = scoreOne + 15;
		}
	}
	setTimeout(function(){document.getElementById("oneScore").innerHTML = playerOne3}, 14000);
	setTimeout(function(){document.getElementById("twoScore").innerHTML = playerTwo3}, 15000);

	setTimeout(function(){
		if(playerOne3 == 40){
			document.getElementById("score").innerHTML = "Fourty-Love";
			arr.push(" Fourty-Love");
		}
		else if(playerOne3 == 30 && playerTwo3 == 15){
			document.getElementById("score").innerHTML = "Thirty-Fifteen";
			arr.push(" Thirty-Fifteen");
		}
		else if(playerTwo3 == 40) {
			document.getElementById("score").innerHTML = "Love-Fourty";
			arr.push(" Love-Fourty");
		}
		else{
			document.getElementById("score").innerHTML = "Fifteen-Thirty";
			arr.push(" Fifteen-Thirty");	
		}
	},16000);

	//Round 4.
	setTimeout(function() {
		document.getElementsByClassName("round")[0].innerHTML = "Round Four";
		document.getElementsByClassName("round")[1].innerHTML = "Round Four";
		}, 18000);

	var playerOne4;
	var playerTwo4;

	var x4 = Math.random();

	if(x4 < 0.5){

		if(playerTwo3 == 40){
			setTimeout(function(){document.getElementById("twoScore").innerHTML = "Win!"}, 19000);
			setTimeout(function(){document.getElementById("oneScore").innerHTML = "Lose"}, 20000);
			setTimeout(function(){
				document.getElementById("score").innerHTML = "Win for Rafael Nadal";
				document.getElementById("score").style.color = "#961820";
				arr.push(" Win for Rafael Nadal");	
			}, 21000);
			return;
		}
		else if(playerTwo3 == 30){
			playerTwo4 = playerTwo3 + 10;
			playerOne4 = playerOne3;
			setTimeout(function(){document.getElementById("twoScore").innerHTML = playerTwo4}, 19000);
			setTimeout(function(){
				document.getElementById("score").innerHTML = "Fifteen-Fourty";
				arr.push(" Fifteen-Fourty");	
			}, 21000);
		}
		else if(playerTwo3 == 15){
			playerTwo4 = playerTwo3 + 15;
			playerOne4 = playerOne3;
			setTimeout(function(){document.getElementById("twoScore").innerHTML = playerTwo4}, 19000);
			setTimeout(function(){
				document.getElementById("score").innerHTML = "Thirty-All";
				arr.push(" Thirty-All");	
			}, 21000);
		}
		else {
			playerTwo4 = playerTwo3 + 15;
			playerOne4 = playerOne3;
			setTimeout(function(){document.getElementById("twoScore").innerHTML = playerTwo4}, 19000);
			setTimeout(function(){
				document.getElementById("score").innerHTML = "Fourty-Fifteen";
				arr.push(" Fourty-Fifteen");	
			}, 21000);
		}
	}
	else {
		if(playerOne3 == 40){
			setTimeout(function(){document.getElementById("oneScore").innerHTML = "Win!"}, 19000);
			setTimeout(function(){document.getElementById("twoScore").innerHTML = "Lose"}, 20000);
			setTimeout(function(){
				document.getElementById("score").innerHTML = "Win for Novak Djokovic";
				document.getElementById("score").style.color = "#1f1fb7";
				arr.push(" Win for Novak Djokovic");	
			}, 21000);
			return;
		}
		else if(playerOne3 == 30){
			playerOne4 = playerOne3 +10;
			playerTwo4 = playerTwo3;
			setTimeout(function(){document.getElementById("oneScore").innerHTML = playerOne4}, 19000);
			setTimeout(function(){
				document.getElementById("score").innerHTML = "Fourty-Fifteen";
				arr.push(" Fourty-Fifteen");	
			}, 21000);
		}
		else if(playerOne3 == 15) {
			playerOne4 = playerOne3 + 15;
			playerTwo4 = playerTwo3;
			setTimeout(function(){document.getElementById("oneScore").innerHTML = playerOne4}, 19000);
			setTimeout(function(){
				document.getElementById("score").innerHTML = "Thirty-All";
				arr.push(" Thirty-All");	
			}, 21000);
		}
		else {
			playerOne4 = playerOne3 + 15;
			playerTwo4 = playerTwo3;
			setTimeout(function(){document.getElementById("oneScore").innerHTML = playerOne4}, 19000);
			setTimeout(function(){
				document.getElementById("score").innerHTML = "Fifteen-Fourty";
				arr.push(" Fifteen-Fourty");	
			}, 21000);
		}
	}

	//Round 5.
	setTimeout(function() {
		document.getElementsByClassName("round")[0].innerHTML = "Round Five";
		document.getElementsByClassName("round")[1].innerHTML = "Round Five";
		}, 22000);

	var playerOne5;
	var playerTwo5;

	var x5 = Math.random();

	if(x5 < 0.5){

		if(playerTwo4 == 40){
			setTimeout(function(){document.getElementById("twoScore").innerHTML = "Win!"}, 23000);
			setTimeout(function(){document.getElementById("oneScore").innerHTML = "Lose"}, 24000);
			setTimeout(function(){
				document.getElementById("score").innerHTML = "Win for Rafael Nadal";
				document.getElementById("score").style.color = "#961820";
				arr.push(" Win for Rafael Nadal");	
			}, 25000);
			return;
		}
		else if(playerTwo4 == 30){
			playerTwo5 = playerTwo4 + 10;
			playerOne5 = playerOne4;
			setTimeout(function(){document.getElementById("twoScore").innerHTML = playerTwo5}, 23000);
			setTimeout(function(){
				document.getElementById("score").innerHTML = "Thirty-Fourty";
				arr.push(" Thirty-Fourty");	
			}, 25000);
		}
		else {
			playerTwo5 = playerTwo4 + 15;
			playerOne5 = playerOne4;
			setTimeout(function(){document.getElementById("twoScore").innerHTML = playerTwo5}, 23000);
			setTimeout(function(){
				document.getElementById("score").innerHTML = "Fourty-Thirty";
				arr.push(" Fourty-Thirty");	
			}, 25000);
		}
	}
	else {
		if(playerOne4 == 40){
			setTimeout(function(){document.getElementById("oneScore").innerHTML = "Win!"}, 23000);
			setTimeout(function(){document.getElementById("twoScore").innerHTML = "Lose"}, 24000);
			setTimeout(function(){
				document.getElementById("score").innerHTML = "Win for Novak Djokovic";
				document.getElementById("score").style.color = "#1f1fb7";
				arr.push(" Win for Novak Djokovic");	
			}, 25000);
			return;	
		}
		else if(playerOne4 == 30){
			playerOne5 = playerOne4 + 10;
			playerTwo5 = playerTwo4;
			setTimeout(function(){document.getElementById("oneScore").innerHTML = playerOne5}, 23000);
			setTimeout(function(){
				document.getElementById("score").innerHTML = "Fourty-Thirty";
				arr.push(" Fourty-Thirty");	
			}, 25000);
		}
		else {
			playerOne5 = playerOne4 + 15;
			playerTwo5 = playerTwo4;
			setTimeout(function(){document.getElementById("oneScore").innerHTML = playerOne5}, 23000);
			setTimeout(function(){
				document.getElementById("score").innerHTML = "Thirty-Fourty";
				arr.push(" Thirty-Fourty");	
			}, 25000);
		}
	}

	//Round 6.
	setTimeout(function() {
		document.getElementsByClassName("round")[0].innerHTML = "Round Six";
		document.getElementsByClassName("round")[1].innerHTML = "Round Six";
		}, 26000);

	var x6 = Math.random();

	if(x6 < 0.5){

		if(playerTwo5 == 40){
			setTimeout(function(){document.getElementById("twoScore").innerHTML = "Win!"}, 27000);
			setTimeout(function(){document.getElementById("oneScore").innerHTML = "Lose"}, 28000);
			setTimeout(function(){
				document.getElementById("score").innerHTML = "Win for Rafael Nadal";
				document.getElementById("score").style.color = "#961820";
				arr.push(" Win for Rafael Nadal");	
			}, 29000);
			return;
		}
		else if(playerTwo5 == 30){
			playerTwo6 = playerTwo5 + 10;
			playerOne6 = playerOne5;
			setTimeout(function(){document.getElementById("twoScore").innerHTML = playerTwo6}, 27000);
			setTimeout(function(){
				document.getElementById("score").innerHTML = "Fourty-All";
				arr.push(" Fourty-All");	
			}, 29000);
		}
	}
	else {
		if(playerOne5 == 40){
			setTimeout(function(){document.getElementById("oneScore").innerHTML = "Win!"}, 27000);
			setTimeout(function(){document.getElementById("twoScore").innerHTML = "Lose"}, 28000);
			setTimeout(function(){
				document.getElementById("score").innerHTML = "Win for Novak Djokovic";
				document.getElementById("score").style.color = "#1f1fb7";
				arr.push(" Win for Novak Djokovic");	
			}, 29000);
			return;	
		}
		else if(playerOne5 == 30){
			playerOne6 = playerOne5 + 10;
			playerTwo6 = playerTwo5;
			setTimeout(function(){document.getElementById("oneScore").innerHTML = playerOne6}, 27000);
			setTimeout(function(){
				document.getElementById("score").innerHTML = "Fourty-All";
				arr.push(" Fourty-All");	
			}, 29000);
		}
	}

	// Round 7.
	setTimeout(function() {
		document.getElementsByClassName("round")[0].innerHTML = "Round Seven";
		document.getElementsByClassName("round")[1].innerHTML = "Round Seven";
		}, 30000);

	playerOne6 = 40;
	playerTwo6 = 40;

	var x7 = Math.random();

	if(x7 < 0.5){
		
		playerOne7 = playerOne6;
		playerTwo7 = "Advantage";
		setTimeout(function(){document.getElementById("oneScore").innerHTML = 40}, 31000);
		setTimeout(function(){document.getElementById("twoScore").innerHTML = "Advantage"}, 32000);
		setTimeout(function(){
			document.getElementById("score").innerHTML = "Advantage for Rafael Nadal";
			arr.push(" Advantage for Rafael Nadal");	
		}, 33000);
	}
	else {
		playerTwo7 = playerTwo6;
		playerOne7 = "Advantage";
		setTimeout(function(){document.getElementById("oneScore").innerHTML = "Advantage"}, 31000);
		setTimeout(function(){document.getElementById("twoScore").innerHTML = 40}, 32000);
		setTimeout(function(){
			document.getElementById("score").innerHTML = "Advantage for Novak Djokovic";
			arr.push(" Advantage for Novak Djokovic");	
		}, 33000);
	}

	// Round 8.
	setTimeout(function() {
		document.getElementsByClassName("round")[0].innerHTML = "Round Eight";
		document.getElementsByClassName("round")[1].innerHTML = "Round Eight";
		}, 34000);

	var x8 = Math.random();

	if(x8 < 0.5) {

		if(playerTwo7 == "Advantage"){

			setTimeout(function(){document.getElementById("twoScore").innerHTML = "Win!"}, 36000);
			setTimeout(function(){document.getElementById("oneScore").innerHTML = "Lose"}, 36500);
			setTimeout(function(){
				document.getElementById("score").innerHTML = "Win for Rafael Nadal";
				document.getElementById("score").style.color = "#961820";
				arr.push(" Win for Rafael Nadal");
			}, 37000);
			return;
		}
		else if(playerOne7 == "Advantage") {
			playerTwo7 = playerTwo6;
			playerOne7 = playerOne6;
			setTimeout(function(){document.getElementById("twoScore").innerHTML = "Deuce"}, 36000);
			setTimeout(function(){document.getElementById("oneScore").innerHTML = "Deuce"}, 36500);
			setTimeout(function(){
				document.getElementById("score").innerHTML = "Deuce";
				arr.push(" Deuce");
			}, 37000);
			return deuce();
		}
	}
	else {

		if(playerOne7 == "Advantage"){

			setTimeout(function(){document.getElementById("oneScore").innerHTML = "Win!"}, 36000);
			setTimeout(function(){document.getElementById("twoScore").innerHTML = "Lose"}, 36500);
			setTimeout(function(){
				document.getElementById("score").innerHTML = "Win for Novak Djokovic";
				document.getElementById("score").style.color = "#1f1fb7";
				arr.push(" Win for Novak Djokovic");
			}, 37000);
			return;
		}

		else if(playerTwo7 == "Advantage") {
			playerTwo7 = playerTwo6;
			playerOne7 = playerOne6;
			setTimeout(function(){document.getElementById("oneScore").innerHTML = "Deuce"}, 36000);
			setTimeout(function(){document.getElementById("twoScore").innerHTML = "Deuce"}, 36500);
			setTimeout(function(){
				document.getElementById("score").innerHTML = "Deuce";
				arr.push(" Deuce");
			}, 37000);
			return deuce();
		}
	}

}

function deuce(){

	i = i + 4000;
	var y1 = Math.random();

	var y2 = Math.random();

	if(y1 < 0.5){
		playerOne7 = 40;
		playerTwo7 = "Advantage";
		setTimeout(function(){document.getElementById("oneScore").innerHTML = 40}, 38000 + i);
		setTimeout(function(){document.getElementById("twoScore").innerHTML = "Advantage"}, 38500 + i);
		setTimeout(function(){
			document.getElementById("score").innerHTML = "Advantage for Rafael Nadal";
			arr.push(" Advantage for Rafael Nadal");	
		}, 39000 + i);
		
		if(y2 < 0.5) {
			setTimeout(function(){document.getElementById("twoScore").innerHTML = "Win!"}, 40000 + i);
			setTimeout(function(){document.getElementById("oneScore").innerHTML = "Lose"}, 40500 + i);
			setTimeout(function(){
				document.getElementById("score").innerHTML = "Win for Rafael Nadal";
				document.getElementById("score").style.color = "#961820";
				arr.push(" Win for Rafael Nadal");
			}, 41000 + i);
			return;
		}
		else {

			playerOne7 = playerOne6;
			playerTwo7 = playerTwo6;
			setTimeout(function(){document.getElementById("twoScore").innerHTML = "Deuce"}, 40000 + i);
			setTimeout(function(){document.getElementById("oneScore").innerHTML = "Deuce"}, 40500 + i);
			setTimeout(function(){
				document.getElementById("score").innerHTML = "Deuce";
				arr.push(" Deuce");
			}, 41000 + i);
			deuce();
			
		}

	}
	else {
		playerTwo7 = 40;
		playerOne7 = "Advantage";
		setTimeout(function(){document.getElementById("oneScore").innerHTML = "Advantage"}, 38000 + i);
		setTimeout(function(){document.getElementById("twoScore").innerHTML = 40}, 38500 + i);
		setTimeout(function(){
			document.getElementById("score").innerHTML = "Advantage for Novak Djokovic";
			arr.push(" Advantage for Novak Djokovic");	
		}, 39000 + i);
		
		if(y2 >= 0.5){
			setTimeout(function(){document.getElementById("oneScore").innerHTML = "Win!"}, 40000 + i);
			setTimeout(function(){document.getElementById("twoScore").innerHTML = "Lose"}, 40500 + i);
			setTimeout(function(){
				document.getElementById("score").innerHTML = "Win for Novak Djokovic";
				document.getElementById("score").style.color = "#1f1fb7";
				arr.push(" Win for Novak Djokovic");
			}, 41000 + i);
			return;
		}
		else {
			playerTwo7 = playerTwo6;
			playerOne7 = playerOne6;
			setTimeout(function(){document.getElementById("oneScore").innerHTML = "Deuce"}, 40000 + i);
			setTimeout(function(){document.getElementById("twoScore").innerHTML = "Deuce"}, 40500 + i);
			setTimeout(function(){
				document.getElementById("score").innerHTML = "Deuce";
				arr.push(" Deuce");
			}, 41000 + i);
			deuce();
		}
	}

}


function restart(){
	location.reload();
	//history.go(0);
}

function points(){

	var a = document.getElementById("poin");

	if(a.style.display == "block")
		a.style.display = "none";
	else{
		a.style.display = "block";
		a.innerHTML = arr;
	}
}

