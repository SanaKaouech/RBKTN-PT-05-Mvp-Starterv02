import React from "react";
import ListItem from "./ListItem.jsx";

const List = (props) => (
  <div className="Titre1">
    {console.log("props: ",props)}
    <h4 className="Titre1">  Your Animal is HERE </h4>
      There are {props.items.length} Animals.
    <br/>
    <br/>
    <br/>
    {props.items.map((item, index) => (
      <div key={index}>
        <ListItem item={item} setReload={props.setReload} reload={props.reload} />
      </div>
      
    ))}
  </div>
);

export default List;
