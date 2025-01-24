import React,{useState} from "react";

 function Task8(){

 const[x , y] = useState(0);
const  increment= ()=> y(x+1)
 const  descrement=()=> y(x-1)
 return( 
     <div>
         <h1>Counter</h1>
         <h1>{x}</h1>
         <button onClick={increment}>Increment </button><hr/>
         <h1>Counter</h1>
         <button onClick={descrement}>Decrement</button><hr/>
     </div>
 )
 }
 export default Task8;