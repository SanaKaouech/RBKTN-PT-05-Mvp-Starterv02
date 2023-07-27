import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import List from './components/List.jsx'

const App = () => {
  const [items, setItems] = useState([])
  const [name, setName] = useState("")
  const [race, setRace] = useState("")
  const [age, setAge] = useState(0)
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState("")
  const [reload, setreload] = useState(false)


  useEffect(() => {
    axios.get("/api/animal/")
      .then((res) => {
        console.log("response.data ", res.data)
        setItems(res.data)
      })
      .catch((err) => console.error(err))
  }, [reload])

  const add = () => {
    axios.post("/api/animal/", { name, age, race, price, image })
      .then((res) => setreload(!reload))
      .catch((err) => console.error(err))
  }
  const search = (name)=>{
    (!name) ? setRefresh(!reload) :
        axios.get(`/api/animal/${name}`)
          .then((res) => {
            setItems(res.data)
          })
   }

  return (
    <div>
      <h1>Pets list</h1>
      <div>
      <input placeholder='Search animal' onChange={(e) => search(e.target.value)}></input>
      <List items={items} setreload={setreload} reload={reload}/> <br/> 
      </div>
      <List items={items} />
      <input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} />
      <input placeholder='race' onChange={(e) => setRace(e.target.value)} />
      <input placeholder='age' onChange={(e) => setAge(e.target.value)} />
      <input placeholder='Price' onChange={(e) => setPrice(e.target.value)} />
      <input placeholder='image' onChange={(e) => setImage(e.target.value)} />
      <button onClick={() => add()} >Add</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
