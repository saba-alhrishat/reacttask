import React from "react";



const numbers = [ "1" , " 2" , " 3" , "4" , "5" , "6" , " 7" , "8" , "9"];

export default function Task11 () {

    return(

<div>

 <ul>
    {numbers.map((num) =>
    <li key={num}>
<mark>double</mark> number  is {num*2}


    </li>
    )}
</ul>

</div>

    );
}
