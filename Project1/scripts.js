
 var hard = document.querySelectorAll("button")[0].addEventListener("click", execute)
var pap = document.querySelectorAll("button")[1].addEventListener("click",execute2);
var sharp = document.querySelectorAll("button")[2] .addEventListener("click", execute3);
var set = document.querySelectorAll("button")[3].addEventListener("click",execute4)
var play =document.querySelectorAll('button')[4].addEventListener("click",autoPlay);

var finalResult ="";

var object1 = JSON.parse(localStorage.getItem('score'))|| {wins : 0,
loses : 0,tie : 0 ,}


// if(object1===null){
//   object1= {
//     wins : 0,
//     loses : 0,
//     tie : 0 ,
//   }

// }



function execute (){

first();

forAll("rock");


}


function execute2 (){
first();
forAll("paper");

}

function execute3 (){
first();
forAll("scisser");
}

function execute4(){
 object1.wins=0;
 object1.loses=0;
 object1.tie=0;
 localStorage.removeItem('score');
 updateScore();
 document.querySelector('#html2').innerHTML="";
 document.querySelector('#html1').innerHTML= "";
//  document.querySelector('#html3').innerHTML= "";

}

// this is for the auto play code
var isautoplaying = false;
var intervalId;
function autoPlay(){
  if(isautoplaying===false){
    intervalId=setInterval(function(){
      // we are giving the param for the forall in that we have 
   var item = first();
   forAll(item);
  },1000)
   isautoplaying = true;
  }else{
    clearInterval(intervalId);
    isautoplaying=false;
  }
  
}


document.querySelector('#html3').innerHTML=`wine: ${object1.wins} lose: ${object1.loses} tie: ${object1.tie} `;

function first() {
 var frstResult ="";
//  the random generator mustbe inside this function only so that we can generate new number without refresh
var number1 = Math.floor(Math.random()*3 + 1);
  if(number1 === 1){
    frstResult= "rock";
}else if (number1===2){
    frstResult = 'paper';
}else{
    frstResult = 'scisser';
}
// we shold return the function we use here var so that there is no problem if we use let then there is a problem so we should return it
return frstResult;
}

function forAll (item){
// here we should get the previous function so that we can see the random rock or paper or scisser is generated so we should define it . 
var frstResult = first();
if(item == "rock" ){
       
    if(frstResult === "rock"){
        finalResult = 'tie';
      }else if ( frstResult === 'paper'){
        finalResult = 'lose';
      }else {
        finalResult = 'win';
      }
       
}else if ( item === "paper"){
    
    if(frstResult === "rock"){
      finalResult = 'win';
    }else if ( frstResult === 'paper'){
      finalResult = 'tie';
    }else {
      finalResult = 'lose';
    }
  }else {
    if(frstResult === "rock"){
      finalResult = 'lose';
    }else if ( frstResult === 'paper'){
      finalResult = 'win';
    }else {
      finalResult = 'tie';
    }
   
  }
  winees();
  // alert(`you have played ${item} and the computer have played ${frstResult}  and 
  // you have wine${object1.wins} and you have lost ${object1.loses} and you have tie ${object1.tie}`);
  document.querySelector('#html1').innerHTML= finalResult;
  
  document.querySelector("#html2").innerHTML= `You : <img src="../Project1/images/${item}.jpg" class="img-ss"/>:      Computer : <img src="../Project1/images/${frstResult}.jpg" class="img-ss"/> `;
  
  updateScore();
  
}


function winees (){
  if(finalResult ==='win' ){
     object1.wins++;
  }else if(finalResult==='lose'){
    object1.loses++;

  }else{
    object1.tie++;
  }
localStorage.setItem('score',JSON.stringify(object1)) ;
}


function updateScore() {
 
  document.querySelector("#html3").innerHTML=`wine: ${object1.wins} lose: ${object1.loses} tie: ${object1.tie} `
}