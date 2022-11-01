import React from "react";
import { MdOutlineClose } from "react-icons/md";

const Card = ({ card, handleDeleteCard }) => {
  return (
    <div className="border border-gray-200 p-16 flex justify-center items-center relative max-h-32 transition duration-500">
      <button>
        <MdOutlineClose
          className="text-gray-200 absolute top-0 right-0 mt-2 mr-3"
          onClick={() => handleDeleteCard(card.value)}
        />
      </button>
      <p>{card.value}</p>
    </div>
  );
};

export default Card;
