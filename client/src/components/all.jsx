import React, { useEffect, useState } from 'react'
import axios from 'axios'
import List from './components/List.jsx'

const all = () => {
    const [items, setItems] = useState([])
    const [name, setName] = useState("")
    const [race, setRace] = useState("")
    const [age, setAge] = useState(0)
    const [price, setPrice] = useState(0)
   const [image, setImage] = useState("")
    const [reload, setReload] = useState(false)
  
  
    useEffect(() => {
      axios.get("/api/items/")
        .then((res) => {
          console.log("response.data ", res.data)
          setItems(res.data)
        })
        .catch((err) => console.error(err))
    }, [reload])
  
    const add = () => {
      axios.post("/api/items/", { name, race, age, price, image })
        .then((res) => setReload(!reload))
        .catch((err) => console.error(err))
    }
    const search = (race)=>{
      (!race) ? setReload(!reload) :
          axios.get(`/api/items/${race}`)
            .then((res) => {
              setItems(res.data)
            })
     }
  
     
    
  
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
  
    return (
      <div>
        <h1>Pets list</h1>
        <div>
        <label for="gsearch">Search Animal : </label> 
        <input placeholder='Search...' onChange={(e) => search(e.target.value)}></input>
        <input type="submit"></input> 
        </div>
       
        <div className = "App">
         <input type = "file" onChange = {(e)=> {console.log(e.target.file), setImage(e.target.files[0]) }}/> 
              <br/>
         <button className = 'btn-upload' onClick = {uploadImage}>upload !</button>
          </div>
    <br/>
        <input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} />
        <input placeholder='race' onChange={(e) => setRace(e.target.value)} />
        <input placeholder='age' onChange={(e) => setAge(e.target.value)} />
        <input placeholder='Price' onChange={(e) => setPrice(e.target.value)} />
        <input placeholder='image' value={image} onChange={(e) => setImage(e.target.value)} />
        <button onClick={add} >Add</button> <br/>
        <div>
        <List items={items} setReload={setReload} reload={reload}/> <br/>
        </div>
      </div>
    )
}

export default all;


