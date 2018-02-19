$(document).ready( function() {

var vRandomNumToMatch=0;
var vCrystalNum1;
var vCrystalNum2;
var vCrystalNum3;
var vCrystalNum4;

var vScore=0;
var vWins=0;
var vLoss=0;
var vResult="";
var vNewGame=true;

function initializeScreen() {

    vCrystalNum1=Math.floor(Math.random()*10)+2;
    vCrystalNum2=Math.floor(Math.random()*10)+2;
    vCrystalNum3=Math.floor(Math.random()*10)+2;
    vCrystalNum4=Math.floor(Math.random()*10)+2;

    vRandomNumToMatch=Math.floor(Math.random()*101)+19;
    $('#idRandomNumber').text(vRandomNumToMatch);
    $('#idResult').empty();
    $('#idWins').text("Wins: " +vWins);
    $('#idLoss').text("Loss: " +vLoss);
    $('#idScore').text(vScore);
    vResult="";
    vNewGame=false;
}
// $('.letter-button').on('click', function(){
$('.crystal').on('click', function() {
//get the crystal number
//check if the score is equla/less/greater than random number and write result
    console.log("34):"+vNewGame);
    var vCrystalNumber;
    if( vNewGame ) {
        vScore=0;
        initializeScreen();
    } 
    vCrystalNumber = $(this).attr('data-crystal-number');
    console.log("42): "+vCrystalNumber);
    console.log("43)num1: "+vCrystalNum1);
    console.log("44)num2: "+vCrystalNum2);
    console.log("45)num3: "+vCrystalNum3);
    console.log("46)num4: "+vCrystalNum4);

    switch(vCrystalNumber){
        case "1":
            vScore+=vCrystalNum1;
            break;
        case "2":
            vScore+=vCrystalNum2;
            break;
        case "3":
            vScore+=vCrystalNum3;
            break;
        case "4":
            vScore+=vCrystalNum4;
    }
    console.log("60): "+vScore);
    checkScore();   

});

function checkScore() {
    console.log("66): Here");
    if( vScore === vRandomNumToMatch ) {
        vResult="You Won!"
        vWins++;
        vNewGame=true;
    } else if ( vScore > vRandomNumToMatch ) {
        vResult="You Lost!"
        vLoss++;
        vNewGame=true;
    }
    $('#idScore').text(vScore);
    $('#idResult').text(vResult);
    $('#idWins').text("Wins: "+vWins);
    $('#idLoss').text("Loss: "+vLoss);


}


initializeScreen();




});