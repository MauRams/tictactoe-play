	
	var player = 1;//set player


	function clickBtn(btn){//action for when button is clicked

		if(player ==1){
		document.getElementById(btn).value = "X";
		document.getElementById(btn).style.color="blue";
		document.getElementById(btn).disabled = "disabled";
		player -=1;
		winner();
	}else{
		document.getElementById(btn).value = "O";
		document.getElementById(btn).style.color="orange";
		document.getElementById(btn).disabled = "disabled";
		player +=1;
		winner();
	}
};

function winner(){//determine the winning conditions 
	var p1 = "Player 1"
	var p2 = "Player 2"
	if(document.getElementById("btn1").value == "X" &&
		document.getElementById("btn2").value == "X" &&
		document.getElementById("btn3").value == "X" ||
		document.getElementById("btn4").value == "X" &&
		document.getElementById("btn5").value == "X" &&
		document.getElementById("btn6").value == "X" ||
		document.getElementById("btn7").value == "X" &&
		document.getElementById("btn8").value == "X" &&
		document.getElementById("btn9").value == "X" ||
		document.getElementById("btn1").value == "X" &&
		document.getElementById("btn4").value == "X" &&
		document.getElementById("btn7").value == "X" ||
		document.getElementById("btn2").value == "X" &&
		document.getElementById("btn5").value == "X" &&
		document.getElementById("btn8").value == "X" ||
		document.getElementById("btn3").value == "X" &&
		document.getElementById("btn6").value == "X" &&
		document.getElementById("btn9").value == "X" ||
		document.getElementById("btn1").value == "X" &&
		document.getElementById("btn5").value == "X" &&
		document.getElementById("btn9").value == "X" ||
		document.getElementById("btn3").value == "X" &&
		document.getElementById("btn5").value == "X" &&
		document.getElementById("btn7").value == "X"
		){
		alert(p1 + " WINS!!");
		reset();//manually refresh the page
		
		}else if(document.getElementById("btn1").value == "O" &&
		document.getElementById("btn2").value == "O" &&
		document.getElementById("btn3").value == "O" ||
		document.getElementById("btn4").value == "O" &&
		document.getElementById("btn5").value == "O" &&
		document.getElementById("btn6").value == "O" ||
		document.getElementById("btn7").value == "O" &&
		document.getElementById("btn8").value == "O" &&
		document.getElementById("btn9").value == "O" ||
		document.getElementById("btn1").value == "O" &&
		document.getElementById("btn4").value == "O" &&
		document.getElementById("btn7").value == "O" ||
		document.getElementById("btn2").value == "O" &&
		document.getElementById("btn5").value == "O" &&
		document.getElementById("btn8").value == "O" ||
		document.getElementById("btn3").value == "O" &&
		document.getElementById("btn6").value == "O" &&
		document.getElementById("btn9").value == "O" ||
		document.getElementById("btn1").value == "O" &&
		document.getElementById("btn5").value == "O" &&
		document.getElementById("btn9").value == "O" ||
		document.getElementById("btn3").value == "O" &&
		document.getElementById("btn5").value == "O" &&
		document.getElementById("btn7").value == "O"
		){
		// http://www.webdeveloper.com/forum/showthread.php?226907-need-a-simple-script-for-count-up-counter
			var counter = 0;//set this to what ever you want the start # to be
			countUP ();//call the function once	

			function countUP (winner) {
			counter++;//increment the counter by 1
			setTimeout ( "countUP()", 1000 );//runs itsself after 1000 miliseconds
			//console.log(counter);uncomment to can see it in action, only with firebug
			}
			alert(p2 + " WINS!!");
			reset();//manually refresh the page
		}
		
			
		}

function reset(){
		location.reload();//reload page
	}


//players object
var model = {
	players : [
		{
			name: "Player 2",
			symbol: "X",
			field:[]
		
		},
		{
			name: "Player 2",
			symbol: "O",
			field:[]
		}
		],
		
	turn_no: 0,
	current_player: {},
	winLines: [[1,2,3], [4,5,6], [7,8,9],
				[1,4,7], [2,5,8],[3,6,9],
				[1,5,9], [7,5,3]
				],
	nextTurn: function(){
		model: current_player = model.players(turn_no%2);
		model.turn_no +=1;
	},
	
	isWinner: function(){
		for(var l = model.winLines.length; i--;){
			if(3 ===model.winLines[1].intersect(fields).length){
				throw (model.current_player.name + " wins!")
			}
		}
	}
}

