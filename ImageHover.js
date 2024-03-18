var num=0;
function changeImage(){
   num++;
   console.log(num)
   if(num==1){
       document.getElementById("imageTag").src="./Assets/Images/bouquet-168831_1280.jpg";
       document.getElementById("headingTag").style.color="blueviolet";
   }
   else if(num==2){
       document.getElementById("imageTag").src="./Assets/Images/flower-729512_1280.jpg";
       document.getElementById("headingTag").style.color="purple";
   }
   else if(num==3){
       document.getElementById("imageTag").src="./Assets/Images/flower-729514_1280.jpg";
       document.getElementById("headingTag").style.color="Blue";
   }
   else if(num==4){
       document.getElementById("imageTag").src="./Assets/Images/flowers-19830_1280.jpg";
       document.getElementById("headingTag").style.color="darkorange";
   }
   else if(num==5){
        document.getElementById("imageTag").src="./Assets/Images/marguerite-729510_1280.jpg";
        document.getElementById("headingTag").style.color="white";
   }
   else if(num==6){
        document.getElementById("imageTag").src="./Assets/Images/rose-729509_1280.jpg";
        document.getElementById("headingTag").style.color="deeppink";
   }
   else if(num==7){
        document.getElementById("imageTag").src="./Assets/Images/sunflower-1127174_1280.jpg";
        document.getElementById("headingTag").style.color="yellow";
   }
   else{
       document.getElementById("imageTag").src="./Assets/Images/tulips-3339416_1280.jpg";
       document.getElementById("headingTag").style.color="pink";
       num=0;
   }
}