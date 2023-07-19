import React from "react";
import Links from "./Links";
import user from "../data/user";

function About(props) {
  
  let html =props.bio;
  if(html!==""){
    return (
      <div id="about">
        <h2>About Me</h2>
         <p>{html}</p>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        {<Links name ={user.name} linkedin ={props.linkedin}  github ={props.github}/>}
  
      </div>
    )

   }
  else{

    return (
      <div id="about">
        <h2>About Me</h2>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        {<Links name ={user.name} linkedin ={props.linkedin}  github ={props.github}/>}
  
      </div>
    )


  
  }
 

}

export default About;
