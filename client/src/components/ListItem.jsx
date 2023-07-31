import React, { useState } from 'react';
import axios from "axios"


const ListItem = ({ item,reload,setReload })=> {

 const[name, setName]= useState("")
 const[race, setRace]= useState("")
 const[age, setAge]= useState(0)
 const[price, setPrice]= useState(0)
 const[image, setImage]= useState("")
 const[show, setShow] = useState(false)
 

 const uploadImage = () => {

  const data = new FormData()
  data.append('file', image)
  data.append('upload_preset', 'sanaSisita')
  data.append("cloud_name", "sisita")

  fetch("https://api.cloudinary.com/v1_1/sisita/image/upload", {
    method: "post",
    body: data
  })
    .then((res) => res.json())
    .then((data) => {
      setImage(data.secure_url);
    }).catch((err) => {
      console.log(err)
    })
  }

const update = (id)=>{
   axios.put('/api/items/' + id, {name, race, age, price, image}) 
  .then((res)=>{console.log(res),
    setReload(!reload)})
  .catch((err)=>console.log(err))
}

const remove = (id)=>{
  axios.delete('/api/items/' + id)
  .then((res)=>console.log(res))
  setReload(!reload)
  .catch((err)=>console.log(err))
}

    return (

       <div className = "list">
      <p> Name : {item.name} </p>
      <p> Race : {item.race} </p>
      <p> Age : {item.age} </p>
      <p> Price :  {item.price} DT</p>
       <img className="imghome" src={item.image}  /> 

       <br /><br /><br />
       
      <button className="ButtonA"  onClick= {()=>{remove(item.idanimal)}}>Delete</button> 
      <button className="ButtonA" onClick={()=>setShow(!show)}>Update</button>
      <br /><br /><br />
    
     {show &&
      <div>
        <input type = "file" onChange = {(e)=> {setImage(e.target.files[0]) }}/> 
       <button className = 'btn-upload' onClick = {uploadImage}>upload !</button>
        <input placeholder='New name' onChange = {(e)=>setName(e.target.value)}/>
        <input placeholder = 'New race' onChange = {(e)=>setRace(e.target.value)}/>
        <input placeholder = 'New age' onChange = {(e)=>setAge(e.target.value)}/>
        <input placeholder = 'New price' onChange = {(e)=>setPrice(e.target.value)}/>
        <input placeholder = 'New image' value={image} onChange = {(e)=>setImage(e.target.value)}/>
        
        <button className = 'btn-ok' onClick={()=>{setShow(!show), 
          update(item.idanimal)}}>Done</button>
         </div>
        }
        <br/>

       </div>

    )
  }

export default ListItem;