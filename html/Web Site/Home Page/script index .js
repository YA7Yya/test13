console.log("javascript codes = & & var & & alert & & var array & & var object")
    /*javascript codes = var= Examble
    var yhaya = "test";
    document.getElementById("id").innerHTML = الحاجه الي عايز اكتبها;
              Array Examble = var id10 = ["yahya", "25", "egypt"] ; alert(id10[0] + id10[1] + id10[2]
      
          Object  Examble = var rase = {first:"yahya", second:"mohamed" , third: "fatah" }; and 
            
                    object examble :
                    var rase = {};

    rase.first = 'yahya';
    console.log(rase.first)

if Examble  = 
var yahya = 10,
    mohamed = 7,
    omar = 3;



if (omar >= 4) {
    console.log("ناجح")
} 
else {
    console.log("راسب")
}
switch Examble =  
var myName = "yahya";
switch (myName) {
    case "yahya":
        alert("True")
}


While Loop Example = 
var a = 1;
while (a <= 10) {
    document.getElementById("nouvil").innerHTML += a;
    a++
}
Function Example = 
function test() {
    var yahya = 1;
    alert("yahya");
}
test()
  
Function Example 2 = 

function names(number, number2, number3, number4) {

    console.log("yyyy " +
        number, number2, number3, number4)

}
names("Amiraa", "yasien", "omar", "yahya")
Function Example 3 = 
function employees(Officer, Officer2, Officer3, Officer4, Officer5, Officer6, Officer7, Officer8, Officer9, Officer10) {
    console.log(Officer, Officer2, Officer3, Officer4, Officer5, Officer6, Officer7, Officer8, Officer9, Officer10)

}
employees('abdelrahman', 'gamal', 'ahmed',
    'mohamed', 'yahya', 'omar', 'yasien', 'hamza', 'mahmoud', 'yousef')
function Return Examble=


function test(age){                                            
    var x = 365 * 24;
    return age * x                                                                  
}                                          
var y = prompt('calculate age in hours');                                                                                
document.getElementById("nouvil").innerHTML = test(y) + "hours";   



function test (salary){
    var x =  300;
    return salary-x;
}

document.getElementById("nouvil").innerHTML = test(7000) + "$";                     
              

محرر اكواد  

   
<style>
    #textarea{
        width: 100%;
height: 300px;
background: black;
color: white;
    }
    #button{
        width: 100%;
margin-bottom: 6px;
    }
    #output{
        width: 100%;
height: 300px;
background: black;
color: white;
        
    }
</style>
<textarea id="textarea"></textarea>
<button type="button" id="button" onclick="input()">تحويل</button>
<div id="output"></div>


function input(){
    var name1 = document.getElementById("textarea").value
    document.getElementById("output").innerHTML = name1;
}

on click = 
window.ondblclick = function test(){

document.getElementById("nouvil").innerHTML = "welcome to klamatastore.com"
    
}



events = 
var myButton = document.getElementById("button"),
     myText = document.getElementById("text"),
     mySite = document.getElementById("nouvil");
    onkeyup or onkeydown or onkeypress=  function calculate(){
   mySite.innerHTML = myText.value * 365;

     }
    */
     
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 950 || document.documentElement.scrollTop > 950) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


   
