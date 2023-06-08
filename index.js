var randomnumber1=Math.floor(Math.random()*6)+1;

var image="dice"+randomnumber1+".png";

var randomimage="images/"+image;

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimage);

var randomnumber2=Math.floor(Math.random()*6)+1;

var randomimage2="images/dice"+randomnumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomimage2);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML=" PLAYER 1 WIN";
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML=" PLAYER 2 WIN";
}
else{
    document.querySelector("h1").innerHTML="  DRAW  ";
}
