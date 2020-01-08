
// alert("Hello world");
/* console.log("Hello from the console");*/
// prompt("Name:");

var sentence="Cohort 6";


console.log(sentence);

sentence=sentence.concat("", "is the best cohort ever...");
console.log(sentence);
sentence=sentence.replace('best','worst');
console.log(sentence);


var num1=parseInt(prompt("Number 1: "));
var num2=parseInt(prompt("Number 2: "));

var sum = num1+num2;
var rest =num1 - num2;
var mult = num1 * num2;
var div = num1/num2;


var email = prompt("Please write your email: ");
//console.log(name);
document.getElementById('division').innerHTML=`<h2> Calculator </h2> <br> <br> Num1: ${num1} <br> Num2: ${num2} <br> Sum = ${sum} <br> Rest = ${rest} <br> Mult = ${mult} <br> Div = ${div}`;

for(var i=0;i<10;i++){
    console.log("Hello JS ");
}

var n=email.includes("@");

if(num1>num2){
    console.log("The largest number is num 1");   
}
else if(num1==num2){
    console.log('The numbers are equal');
}
else{
    console.log("The largest number is num 2");
}

let animals = ['Dog', 'Cat','Frog', 'Bear'];

for(var j=0; j<animals.length;j++)
{
    alert(animals[j]);
}

