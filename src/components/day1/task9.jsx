import React from "react"


const student = [ "student1" , " student2" , " student3" , "student4"];

export default function Task9 (props) {
 const lists = student.map((student) =>

<li key= {student.toString()}>
{student}

</li>

);
return(
    <div>

<ul>{lists}</ul>

    </div>
);
}