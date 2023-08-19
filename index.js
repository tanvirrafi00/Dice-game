const play_btn=document.querySelector(".play-btn")

const winner = document.querySelector(".winner_name")
const img1=document.querySelector(".img1")
const img2=document.querySelector(".img2")


play_btn.onclick=function() {


   const randvar1=Math.floor(Math.random()*6)+1;
   const randvar2=Math.floor(Math.random()*6)+1;
   const change_img1=`images/dice${randvar1}.png`;
   const change_img2=`images/dice${randvar2}.png`;

   img1.setAttribute("src",change_img1);
   img2.setAttribute("src",change_img2);

   if(randvar1>randvar2)
   winner.innerHTML="Player1 WIN"
else if(randvar2>randvar1)
winner.innerHTML="Player-2 WIN"
else
winner.innerHTML="DRAW"




}


