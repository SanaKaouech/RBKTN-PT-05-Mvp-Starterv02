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

       <div className = "Container">
      <p> Name : {item.name} </p>
      <p> race : {item.race} </p>
      <p> age : {item.age} </p>
      <p> price :  {item.price} DT</p>
       <img src={item.image}  /> 

    
      <button className ='btn-delete' onClick= {()=>{remove(item.idanimal)}}>Delete</button>
      <br />
      <button className = 'btn-update' onClick={()=>setShow(!show)}>Update</button>

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