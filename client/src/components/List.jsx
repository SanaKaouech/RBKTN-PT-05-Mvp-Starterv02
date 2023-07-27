import React from "react";
import ListItem from "./ListItem.jsx";

const List = (props) => (
  <div>
    {console.log("props: ",props)}
    <h4> List Component </h4>
    There are {props.items.length} items.
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
