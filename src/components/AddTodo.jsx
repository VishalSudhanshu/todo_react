import React from "react";
import { IoMdAdd } from "react-icons/io";

const AddTodo = ({ handlerOnChange }) => {
  return (
    <>
      <div className="w-full md:w-8/12 mx-auto md:gap-6 lg:gap-8 flex p-4 gap-4 justify-center items-center">
        <div className="w-3/6">
          <input
            onKeyDown={handlerOnChange}
            type="text"
            className="w-full py-1 h-8 text-black focus:outline-none px-2"
          />
        </div>
        <div className="w-2/6">
          <input
            onChange={handlerOnChange}
            type="date"
            className="w-full py-1 h-8 text-black focus:outline-none px-2"
          />
        </div>
        <div className="w-1/6">
          <button className="bg-green-600 min-w-16 h-8 rounded-md hover:bg-green-700 outline-none">
            <IoMdAdd className="mx-auto" />
          </button>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
