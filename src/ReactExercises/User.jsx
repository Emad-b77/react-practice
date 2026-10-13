import React from 'react'
import { useContext } from 'react'
import ThemeContext from '../ThemeContext'

const User = ({id,name,age,city , onSelect , onDelete , onEdit , onSelectOne}) => {
  const theme = useContext(ThemeContext)
  return (
    <>
    <div>{name} - {age} - {city} - {theme}</div>
    <button onClick={()=>onSelect(id)}>Select</button>
    <button onClick={()=>onDelete(id)}>Delete</button>
    <button onClick={()=>onEdit(id , name , age , city)}>Edit</button>

    <button onClick={()=>onSelectOne(id)}>Select-one</button>
    

    </>
    
    
  )
}

export default User