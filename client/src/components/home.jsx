import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NewList from './userlist.jsx'

const All = () => {
    const [items, setItems] = useState([])
    const [reload, setReload] = useState(false)
  
  
    useEffect(() => {
      axios.get("/api/items/")
        .then((res) => {
          console.log("response.data ", res.data)
          setItems(res.data)
        })
        .catch((err) => console.error(err))
    }, [reload])
  
    return (
      <div>
   
    
        <div>
        <NewList items={items} setReload={setReload} reload={reload}/> <br/>
        </div>
      </div>
    )
}

export default All;


