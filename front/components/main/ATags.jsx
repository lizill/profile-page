import React from "react";
import { BsArrowRight } from 'react-icons/bs';

const ATags = ({ link, content }) => {
  return (
    <a href={link}>
      <span>{content}</span>
      <BsArrowRight/>
    </a>
  )
}

export default ATags;
