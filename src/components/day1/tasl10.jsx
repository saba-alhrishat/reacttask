import React from "react";
const student = ["student 1", "student 2", "student 3", "student 4"];


export default function Task10() {
const lists = student.map((student) => <li key={student.toString()}

style={{ background :"orange" ,
    color :"white",
    gap:"10px",
    display:"grid",
    margin:"10px",
    textAlign:"center",
    width:"150px",
}}
>
{student}

</li>);


return(<ul>
    {lists}
</ul>);

}
