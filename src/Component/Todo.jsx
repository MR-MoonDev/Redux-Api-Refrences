import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "../redux/TodoSlicer";
const Todo = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todo);
  useEffect(() => {
    dispatch(fetchTodo());
  }, []);
  console.log(data);
  return (
    <div className="flex flex-col gap-4 ">
     <div className="flex justify-center">
     <div className="text-center text-4xl font-bold p-3 rounded-lg w-max bg-slate-300">
        API Refrece Fetching Data
      </div>
     </div>
      {data.isLoading ? (
        <h1 className="text-xl font-bold text-gray-700">Loading...</h1>
      ) : (
        <div>
          {data.data.map((todo, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md mb-4 hover:bg-gray-50 transition duration-300"
            >
              <p className="text-lg font-medium text-gray-900">{"ID : "+todo.id}</p>
              <p className="text-lg font-medium text-gray-900">{"Title : "+todo.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Todo;
