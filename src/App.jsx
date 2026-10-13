import User from "./ReactExercises/User";
import { useState } from "react";
import Conditional from "./ReactExercises/Conditional";
import CounterEffect from "./ReactExercises/CounterEffect";
import ThemeContext from "./ThemeContext";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./Counter";
import ProductsAPI from "./ReactExercises/ProductsAPI";

function App() {
  const [selectedUser, setSelectedUser] = useState("");

  const [users , setUsers] = useState([
    {id:1 , name: "Emad" , age: 27 , city: "Tehran"},
    {id:2 , name: "Ali" , age: 25 , city: "Tabriz"},
    {id:3 , name: "Sara" , age: 24 , city: "Shiraz"},

  ]);
  const handleSelect = (id) => {
    setSelectedUser(id);
  };

  const handleDelete = (id) => {
    const newUsers = 
    users.filter((user)=>{
      return user.id !== id
    })
    setUsers(newUsers)
  };

  const handleAdd = () => {
    setUsers([...users , {id: Date.now() , name: "Reza" , age: 26 , city: "Kerman"}])
  };

  const [editingUser , setEditingUser] = useState(null)

  const handleEdit = (id ,name , age , city ) => {
    setEditingUserId(id)
    setEditingUser({
      name : name,
      age : age ,
      city : city
    })
  }

  const handleSave = () => {
    const newUsers = 
    users.map((user)=>{
      if(user.id === editingUserId){
        return{...user , ...editingUser}
      }
      return user
    })
    setUsers(newUsers)
    setEditingUser(null)
    setEditingUserId(null)
  }
  const handleCancel = () => {
    setEditingUser(null)
    setEditingUserId(null)
  }
  const [editingUserId , setEditingUserId]=
  useState(null)

  const selectedIndex = users.findIndex((user) => {
    return user.id === selectedUser
    
  })
  console.log(selectedIndex)

  const hasAdult = users.some((user) => {
    return user.age >25
  })
  console.log(hasAdult)

  const allAdults = users.every((user) => {
    return user.age >18
  })
  console.log(allAdults)

  const hasTehranUser = users.some((user) => {
    return user.city === "Tehran"
  })
  console.log(hasTehranUser)

  const allTehranUser = users.every((user) => {
    return user.city === "Tehran"
  })
  console.log(allTehranUser)

  const adultNames = users.filter((user)=>{
    return user.age > 25
  }).map((user)=> {
    return user.name
  })
  console.log(adultNames)

  const tehranUsers = users.filter((user)=>{
    return user.city === "Tehran"
  }).map((user)=> {
    return user.name
  })
  console.log(tehranUsers)

  const tehranCityUsers = users.filter((user)=>{
    return user.city === "Tehran"
  })
  console.log(tehranCityUsers)

  const result = users.filter((user)=>{
    return user.city === "Tehran" && user.age > 25
  })
  console.log(result)

  const result2 = users.filter((user)=>{
    return  user.age > 24 && (user.city === "Tehran" || user.city === "Tabriz")
  }).map((user)=> {
    return user.name
  })
  console.log(result2)

  const result3 = users.filter((user)=>{
    return  user.age > 24 
  }).map((user)=> {
    return `${user.name} - ${user.age}`
  })
  console.log(result3)

  const totalAge = users.reduce((total , user) => {
    return total + user.age
  } , 0)
  console.log(totalAge)


  const maxAge = users.reduce((max , user) => {
    return max < user.age ? user.age : max
  } , 0)
  console.log(maxAge)

  const user = users.find((user) => {
    return user.id === 2
  })
  console.log(user)

  const user1 = users.find((user) => {
    return user.age > 25
  })
  console.log(user1)

  const user2 = users.find((user) => {
    return user.age > 24 && user.city === "Tehran"
  })
  console.log(user2)

   const user3 = users.find((user) => {
    return user.city === "Tehran" || user.city === "Tabriz"
  })
  console.log(user3)

  const user4 = users.find((user) => {
    return user.age > 25
  })
  console.log(user4.name)


  const user5 = users.find((user) => {
    return user.age >= 30
  })
  console.log(user5?.name)

  const user6 = users.filter((user) => {
    return user.city === "Tehran"
  }).find((user)=> {
    return user.age > 20
  })
  console.log(user6)

  const userNames = users.filter((user) => {
    return user.age > 24 && (user.city === "Tehran" || user.city === "Tabriz") 
  }).map((user)=> {
    return user.name
  })
  console.log(userNames)

  const totalTehranAge = users.reduce((total , user) => {
    if(user.city === "Tehran"){
      return total + user.age
    }else{
      return total
    }
    
  } , 0)
  console.log(totalTehranAge)
  ///////////////////////////////////////////

  const tehranUsers1 = users.filter((user) => {
    return user.city === "Tehran"
  })
  const totalAge1 = tehranUsers1.reduce((total , user)=> {
    return total + user.age
  },0)
  const averageAge = totalAge1 / tehranUsers1.length
  console.log(averageAge)

  //////////////////////////////////////////

  const minAge = users.reduce((min , user)=>{
    return min > user.age ? user.age : min
  },100)
  console.log(minAge)

  //////////////////////////////////////////
  const youngestUser = users.reduce((youngest , user)=>{
    return youngest.age > user.age ? user : youngest
  },users[0])
  console.log(youngestUser)

  //////////////////////////////////////////

  const sortedUsers = [...users].sort((a,b)=>{
    return a.age - b.age
  })
  console.log(sortedUsers)
  //////////////////////////////////////////

  const sortedUsers1 = [...users].sort((a,b)=>{
    return b.age - a.age
  })
  console.log(sortedUsers1)
  //////////////////////////////////////////

  const sortedUsers2 = [...users].sort((a,b)=>{
    return a.name.localeCompare(b.name)
  })
  console.log(sortedUsers2)
  //////////////////////////////////////////

  const sortedUsers3 = [...users].sort((a,b)=>{
    return a.city.localeCompare(b.city)
  })
  console.log(sortedUsers3)
  //////////////////////////////////////////

  const result4 = users.filter((user)=>{
      return user.age > 24
  }).sort((a,b)=> {
    return a.age - b.age
  }).map((user)=>{
    return user.name
  })
  console.log(result4)
  //////////////////////////////////////////

  const totalAge2 = users.filter((user)=>{
    return user.age > 24
  }).reduce((total , user)=>{
    return total+user.age
  },0)
  console.log(totalAge2)
  //////////////////////////////////////////

  const tehranCount = users.reduce((count , user)=>{
    if(user.city === "Tehran"){

      return count + 1

    }
    return count
     
  },0)
  console.log(tehranCount)

  //////////////////////////////////////////

  const search = "Em"
  const result5 = users.filter((user)=>{

    return user.name.includes(search) 
     
  })
  console.log(result5)

  //////////////////////////////////////////

  const search2 = "a"
  const result6 = users.filter((user)=>{

    return user.name.includes(search2)  
  }).map((user)=>{
    return user.name
  })
  console.log(result6)

  //////////////////////////////////////////

  const search3 = "a"
  const result7 = users.filter((user)=>{

    return user.name.includes(search3) && user.age > 24
  }).map((user)=>{
    return user.name
  })
  console.log(result7)

  //////////////////////////////////////////

  const search4 = "a"
  const result8 = users.filter((user)=>{

    return user.name.includes(search4)
  }).sort((a,b)=>{
    return a.age - b.age
  }).map((user)=>{
    return user.name
  })
  console.log(result8)

  //////////////////////////////////////////

  const search5 = "a"
  const result9 = users.filter((user)=>{

    return user.name.includes(search5) && user.age > 24
  }).sort((a,b)=>{
    return a.age - b.age
  }).map((user)=>{
    return user.name
  })
  console.log(result9)
  //////////////////////////////////////////
  const handleDelete1 = (id) =>{
    const newUsers = users.filter((user) => {
      return user.id !== id
    })
    setUsers(newUsers)
  }
  const handleAdd1 = () => {
    setUsers([...users, {
      id : Date.now(),
      name : "Reza",
      age : 26,
      city : "Kerman"
    }])
  }
  const [selectedUser1 , setSelectedUser1] = useState(null)
  const handleSelect1 = (id) => {
   const user =  users.find((user)=>{
      return user.id === id
    })
    setSelectedUser1(user)
  }
  console.log(selectedUser1)
  /////////////////////////////////////

  const [theme , setTheme] = useState("light")


  



  





  return (
    <>
    <button onClick={handleAdd}>Add User</button>
      {/* {users.map((user) => {
        return <User key={user.id} id={user.id} name={user.name} age={user.age} city={user.city}  onSelect={handleSelect} onDelete={handleDelete} onEdit={handleEdit}  onSelectOne={handleSelect1}/>;
      })} */}

      <p>Selected user : {selectedIndex}</p>
      <p>Editing user : {editingUser ?.name}</p>
      <p>Selected user : {selectedUser1?.name}</p>

      {editingUser && (
        <>
        <input value={editingUser?.name} onChange={(e)=> setEditingUser({...editingUser, name: e.target.value})} /> <button onClick={handleSave}>Save</button> <button onClick={handleCancel}>Cancel</button>
        <input type="number" value={editingUser?.age} onChange={(e)=> setEditingUser({...editingUser, age: Number(e.target.value)})} />
        <input value={editingUser?.city} onChange={(e)=> setEditingUser({...editingUser, city: e.target.value})} />
        </>
      )}

      <Conditional />
      <CounterEffect />

      <ThemeContext.Provider value= {theme}>

        {users.map((user)=>{
          return <User  key={user.id} id={user.id} name={user.name} age={user.age} city={user.city}  onSelect={handleSelect} onDelete={handleDelete} onEdit={handleEdit}  onSelectOne={handleSelect1}/>

        })}

      </ThemeContext.Provider>

      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>


      <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/about" element = {<About />} />

    </Routes>
    </BrowserRouter>

    <Counter/>

    <ProductsAPI />

    </>
    
  );
}

export default App;
