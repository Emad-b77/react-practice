// import React from 'react'
import { useState } from 'react'

const Form = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        setErrors({
            name : "", age: "", message: "" , accepted: ""
        })
        if(user.name === ""){
            setErrors({
                ...errors , name: "Error name"
            })
            return 
        }if(user.age < 18){
            setErrors({
                ...errors , age: "Error age"
            })
            return 
        }if(user.message === ""){
            setErrors({
                ...errors , message: "Error message"
            })
            return 
        }if(user.accepted === false){
            setErrors({
                ...errors , accepted: "Error accepted"
            })
            return 
        }
        




    }
    // const [name , setName] = 
    // useState("")

    // const [age , setAge] = 
    // useState("")

    const [user , setUser]=
    useState({
        name : "", age: "" , message : "" , accepted: false , gender:""
    })
    const [errors , setErrors]=
    useState({
        name : "", age: "" , message : "" , accepted: ""
    })
    

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" value={user.name} onChange={(event)=> {setUser ({...user , name: event.target.value})} } />
        {errors.name && <p>{errors.name}</p>}
        <input type="number" value={user.age} onChange={(event)=> {setUser ({...user , age: event.target.value})} } />
        {errors.age && <p>{errors.age}</p>}
        <textarea value={user.message} onChange={(event)=> {setUser ({...user , message: event.target.value})} }></textarea>
        {errors.message && <p>{errors.message}</p>}
        <input type="checkbox" checked={user.accepted} onChange={(event)=> {setUser ({...user , accepted: event.target.checked})} } />
        {errors.accepted && <p>{errors.accepted}</p>}
        

        <button>Submit</button>
        <input type="radio" value="man" checked = {user.gender === "man"} onChange={(event)=> {setUser ({...user , gender: event.target.value})} } /> 
        <label>man</label>

        <input type="radio" value="woman" checked = {user.gender === "woman"} onChange={(event)=> {setUser ({...user , gender: event.target.value})} } /> 
        <label>woman</label>
        <h2>{user.name}-{user.age}</h2>
    </form>
    </>
  )
}

export default Form