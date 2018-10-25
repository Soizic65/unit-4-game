//Total score needs to change after every win or loss between 19-120
//4 Crystals and a random result
//Every crystal needs a random value between 1-12
//Generate new random number should generate every win or loss
//When crystal is clicked, it should add to previous until total score is hit
//If it goes over, you lose
//If it is equal, increment a win counter
var playerTotal=0;
var losses=0;
var wins=0;

num1= Math.floor(Math.random()*11+1);
num2= Math.floor(Math.random()*11+1);
num3= Math.floor(Math.random()*11+1);
num4= Math.floor(Math.random()*11+1);
 
function reset(){
    totalNumber=Math.floor(Math.random()*101+19);
    console.log(totalNumber);
    $('#targetNumber').text( "Number Goal: " + totalNumber);
    num1= Math.floor(Math.random()*11+1);
    num2= Math.floor(Math.random()*11+1);
    num3= Math.floor(Math.random()*11+1);
    num4= Math.floor(Math.random()*11+1);
    playerTotal= 0;
    $('#totalScore').text(playerTotal);
    } 

function winner(){
    alert("Congratulations, you won!");
        wins++; 
        $('#wins').text("Wins: " + wins);
        reset();
    }

function loser(){
    alert ("Sorry, you lost!");
        losses++;
        $('#losses').text("Losses: " + losses);
        reset()
    }
        
$(document).ready(function(){

totalNumber = Math.floor(Math.random() * 102) + 19;
     $("#targetNumber").text("Number Goal: " + totalNumber);


$('#blue').on ('click', function(){
    playerTotal = playerTotal + num1;
    console.log("New userTotal= " + playerTotal);
    $("#totalScore").text("Total Score: " + playerTotal); 
    if (playerTotal == totalNumber){
        winner();
      }
      else if ( playerTotal > totalNumber){
        loser();
      }   
})  


$('#green').on ('click', function(){
    playerTotal = playerTotal + num2;
    console.log("New userTotal= " + playerTotal);
    $("#totalScore").text("Total Score: " + playerTotal); 
    if (playerTotal == totalNumber){
        winner();
      }
      else if ( playerTotal > totalNumber){
        loser();
      }   
})  


$('#red').on ('click', function(){
    playerTotal = playerTotal + num3;
    console.log("New userTotal= " + playerTotal);
    $("#totalScore").text("Total Score: " + playerTotal); 
    if (playerTotal == totalNumber){
        winner();
      }
      else if ( playerTotal > totalNumber){
        loser();
      }   
})  


$('#yellow').on ('click', function(){
    playerTotal = playerTotal + num4;
    console.log("New userTotal= " + playerTotal);
    $("#totalScore").text("Total Score: " + playerTotal); 
    if (playerTotal == totalNumber){
        winner();
      }
      else if ( playerTotal > totalNumber){
        loser();
      }   
})  

});










