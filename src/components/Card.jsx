import React from "react";
import { MdOutlineClose } from "react-icons/md";

const Card = () => {
  return (
    <div className="border border-gray-200 p-16 flex justify-center items-center relative h-32">
      <button>
        <MdOutlineClose className="text-gray-200 absolute top-0 right-0 mt-2 mr-3" />
      </button>
      <p>74</p>
    </div>
  );
};

export default Card;
