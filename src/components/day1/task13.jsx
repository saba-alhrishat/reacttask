import React from "react";
import image from 



const cards = [
    {
      id: 1,
      title: "Card 1",
      description: "This is the first card",
      image: "https://media.discordapp.net/attachments/1314516379524923446/1314516749189775470/1708250582111.jpg?ex=6790b39f&is=678f621f&hm=176164641f9f03bca7c2ea11a37a6a94d61812621474f9ef7453e7a05956f757&=&format=webp&width=582&height=582",
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is the second card",
    //   image: "https://media.discordapp.net/attachments/1314516379524923446/1314516749189775470/1708250582111.jpg?ex=6790b39f&is=678f621f&hm=176164641f9f03bca7c2ea11a37a6a94d61812621474f9ef7453e7a05956f757&=&format=webp&width=582&height=582",
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is the third card",
//   image : "C:\Users\Orange\Desktop\reacttask\src\components\day1\image\1708250582111.webp"
    },
  ];


export default function Task13(){
return(
   <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
<div   
  key= {cards.id}
style={{   border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    width: "200px",
    textAlign: "center",}}

>  
<img src={cards.image} 

alt={cards.title }
style={{ width: "100%", borderRadius: "4px" }}
/>

<h2>cards.title</h2>
<p>cards.description</p>
</div>
</div>

)

}