var yellow = document.querySelector(".yellow");
var green = document.querySelector(".green");
 var red = document.querySelector(".red");
 var blue= document.querySelector(".blue");
 var zero = document.querySelector(".zero");
 var level = 0;
 var pattern =[];
 var userPattern =[];
 var colors = [yellow, green, red, blue];
 var speed = 2000;
 var elementScore =  document.getElementById("zero");
  score = elementScore.innerHTML;
 var score = 0;
 var elementHigh= document.getElementById("high");
  highScore = elementHigh.innerHTML;
  var highScore = 0;
  var speed = 2000;
 /* Patrick Carroll (19253548)- "Simon Says" game below is all of my own original work and ideas and therefore did
 not reference. The game apears to run fine, but there are a couple of bugs i can point out. The first is
 that my highscore stops at 9 for some reason and wont increment any higher. Also i was not able to get the buttons 
 to disable before the pattern is finsihed flashing. The game works otherwise with speed increasing after rounds
 9 and 13, and user always has five seconds to enter pattern or else game is over. If you want to test higher rounds and
cant get passed lower rounds you can change speed variable or click as they flash.  

/*  The code below uses jquery to start the game once the start button is clicked, there is only a
a two second delay as my flash is slow. */


$(document).ready(function(){
  $(".rectangle").click(function(){
	   $(".light").css('background-color', 'green');
    setTimeout(function (){
		startGame();
      // $(".light").css('background-color', 'green');
    }, 3000);
	//startGame();
	
  });
});


function startGame(){
/* Once the game starts, a random color is sent into an array called "pattern" which is globally 
declared*/
var randomItem = [];
userPattern = [];
pattern.push(colors[Math.floor(Math.random()*colors.length)]);
 console.log(pattern);

/* A for loop is created to scan the array and send out a flash for each color in the pattern. */
for (let i = 0; i<pattern.length; i++){
	
	timeFlash(i);
	
	/*This timeout is set so it will give the user five seconds to enter the pattern once the
	computer finishes it's flashes. its set to 6 seconds as my flashes are a bit slow*/
	if (i === pattern.length-1){

		setTimeout(checkSequence, speed * i + 6000)
	}
	
}

/* I had to create a function for the flashes and set a timeout relative to the size of the array
in order to get the flashes to occur one after another. i then call this function in the for loop
to produce each flash. */
   function timeFlash(i){
	  setTimeout(function(){
   // var speed = 2000;	   
  if (pattern[i] == yellow){
      function flash() {
      $('.yellow').fadeOut(500);
      $('.yellow').fadeIn(500);
      }
      setTimeout(flash, 1000);
  }
  
  
  if (pattern[i] == green){
       function flash() {
       $('.green').fadeOut(500);
       $('.green').fadeIn(500);
      }
      setTimeout(flash, 1000);
  }
  
  if (pattern[i]==blue){
     function flash() {
      $('.blue').fadeOut(500);
      $('.blue').fadeIn(500);
      }
      setTimeout(flash, 1000);
  }
  
  if (pattern[i]== red){
    function flash() {
      $('.red').fadeOut(500);
      $('.red').fadeIn(500);
      }
      setTimeout(flash, 1000);
  }
  // speed here is multipled by the number of iterations in order to time  flashes
	  }, speed * i);
	 
   }
   

   
}
  /*This function  takes the users pattern and computers pattern and checks if they are equal. 
  If they are, the score will increase. It will then check to see if the current score is a high score, if it is,
  it will update the highscore as well*/
   function checkSequence(){
	   console.log("checking");
	  if (JSON.stringify(pattern) === JSON.stringify(userPattern)){
			elementScore.innerHTML ++;
			if(elementHigh.innerHTML < elementScore.innerHTML){
			 elementHigh.innerHTML++;
			}
	/* The next level function is called if they are, if not end game.*/	
		  
		  console.log("next");
	      nextLevel();
	  }
		else {
		
			endGame();
		} 
   }
   

	
  /* This function is called when the patterns match, if the game reaches a certain level, it speeds up
   the speed variable is changed which then speeds up the flashes in flash function and also adjusts 
   the checkSequence so that the user still has five seconds to finish sequence. Start game is called again and 
   game repeats until the user gets sequence wrong , or runs out of time*/

function nextLevel(){
	alert("Simon Says...")
	 if (elementScore.innerHTML > 9 && elementScore.innerHTML < 13){
	    speed = 1500;
	   console.log(speed);
     }
	 if(elementScore.innerHTML > 13){
		 speed = 1000;
	    console.log(speed);
	 }
	 
	startGame();
}
function endGame(){
	
	//Turn light red when game ends
    $(".light").css('background-color', 'red');  
	
	// All colors flash four times when game ends
	var j = 0;
	while (j<5){
		j++;
	
	 for (let i = 0; i<colors.length; i++){
		 
	 if (colors[i] === yellow){
	 function flash() {
      $('.yellow').fadeOut(500);
      $('.yellow').fadeIn(500);
      }
      setTimeout(flash, 1000);
	 }
	 
	 if (colors[i] === red){
	   function flash() {
      $('.red').fadeOut(500);
      $('.red').fadeIn(500);
      }
      setTimeout(flash, 1000);
	 }
	 if (colors[i] === green){
	   function flash() {
      $('.green').fadeOut(500);
      $('.green').fadeIn(500);
      }
      setTimeout(flash, 1000);
	 }
	 if(colors[i] === blue){
	 function flash() {
     $('.blue').fadeOut(500);
     $('.blue').fadeIn(500);
     }
     setTimeout(flash, 1000);
	 }
	}
}
// reset score, pattern and user pattern.
	elementScore.innerHTML = 0;
	userPattern = [];
	pattern = [];
	
}

/*
    $('.green').attr('disabled', 'disabled');
	  setTimeout(removeAt, 3000);
	  
	   $(".green").bind("click", function(e) {
		   setTimeout(removeAt, 3000);
	   userPattern.push(green);
	   });
	   
	   function removeAt(){
		   $('.green').removeAttr('disabled');
	   }
   */
/* when each color is clicked it is  added into the user pattern so i can compare. I wasn't able to get the buttons 
disabled after flashes. */

   $(".green").bind("click", function(e) {
	userPattern.push(green);
	console.log(userPattern);
	});
	
	$(".yellow").bind("click", function(e) {
	userPattern.push(yellow);
	console.log(userPattern);
	});
	
	
	$(".blue").bind("click", function(e) {
	userPattern.push(blue);
	console.log(userPattern);
	});
	
	$(".red").bind("click", function(e){
	userPattern.push(red);
	console.log(userPattern);
	});