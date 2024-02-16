import React from "react";
import { MdDelete } from "react-icons/md";

const TodoItems = ({ todoList }) => {
  return (
    <>
      <div>
        {todoList.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-8/12 mx-auto md:gap-6 lg:gap-8 flex p-4 gap-4 justify-center items-center "
          >
            <p className="w-3/6 px-2 text-center">{item.task}</p>
            <p className="w-2/6 px-2 text-center"> {item.date}</p>
            <div className="w-1/6">
              <button className=" bg-red-600 min-w-16 h-8 rounded-md hover:bg-red-700 outline-none">
                <MdDelete className="mx-auto" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
