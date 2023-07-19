import React from "react";


function Links(props){

return (
    <div>

   <h3> Links</h3>
   <a href={props.linkedin}>{props.name} Linkedin link</a> 
   <a href ={props.github}>{props.name} Github link</a>    
    </div>
)
}

export default Links;