import React from "react";
import List1 from "./List1.jsx";

const Userlist = (props) => (
  <div>
    {console.log("props: ",props)}
    <h4> Animal for sale  </h4>
    There are {props.items.length} Animals.
    <br/>
    <br/>
    <br/>
    {props.items.map((item, index) => (
      <div key={index}>
        <List1 item={item} setReload={props.setReload} reload={props.reload} />
      </div>
    ))}
  </div>
);

export default Userlist;
