import React from "react";

function ListComponent({ iconName, ListItem }) {
  return (
    <li className="flex items-center gap-1">
      <ion-icon name={iconName} className=""></ion-icon>
      <a href="#Home">{ListItem}</a>
    </li>
  );
}

export default ListComponent;
