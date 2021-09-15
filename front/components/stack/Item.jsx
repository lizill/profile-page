import React from "react";

const Item = ({ image, title, content }) => {
  return (
    <li>
      <div>
        <img src={image} alt="" />
      </div>
      <article>
        <strong>{title}</strong>
        <p>{content}</p>
      </article>
    </li>
  )
}

export default Item;
