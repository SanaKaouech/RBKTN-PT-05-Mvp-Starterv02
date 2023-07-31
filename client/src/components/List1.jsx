import React, { useState } from 'react';

const List1 = ({ item, reload, setReload }) => {



   return (

      <div className="list">
         <p> Name : {item.name} </p>
         <p> race : {item.race} </p>
         <p> age : {item.age} </p>
         <p> price :  {item.price} DT</p>
         <img className="imgpetslist" src={item.image} />
        


         <br />

      </div>

   )
}

export default List1;