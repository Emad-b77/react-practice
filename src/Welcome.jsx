// import React from 'react'

const Welcome = ({name , age}) => {
    // const name = "Emad"
    // const age = 27
    const skills = ["HTML" , "CSS" , "JavaScript"]
    const handleClick = (event) => {
      console.log(event.target.textContent)

      document.getElementById("title").textContent = "Hello React"

    }
    
    
  return (
    <>
    <div>
        <h1>Hello {name},{age >= 18  ?  "You Are An Adult" : "You Are A Minor" }</h1>

        <ul>
          {skills.map(function(skill){
            return <li key={skill}>{skill}</li>
          })}
        </ul>

        <button onClick={handleClick}>Click Me</button>

        <h2 id="title">Hello Emad</h2>
        <button onClick={handleClick}>Change Text</button>
        
    </div>
    </>
  )
}

export default Welcome