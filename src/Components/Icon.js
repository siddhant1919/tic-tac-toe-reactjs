import React from "react";
import { FaTimes, FaPen, FaRegCircle, FaObjectGroup } from "react-icons/fa";

const Icon = ({ name }) => {
  switch (name) {
    case 'circle':
      return <FaRegCircle className="iconc" />
      break;

    case 'cross':
      return <FaTimes className="iconc" />
      break;

    default :
      return <FaPen className="iconc" />
      break;

  }
};


export default Icon;