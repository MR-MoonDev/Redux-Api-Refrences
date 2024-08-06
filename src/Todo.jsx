import React, { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { fetchTodo } from './redux/TodoSlicer'
const Todo = () => {
    const dispatch = useDispatch();
    const data = useSelector(state=>state.todo)
    useEffect(()=>{
    dispatch(fetchTodo())
    },[])
    console.log(data)
  return (
    <div className="p-6">
  {data.isLoading ? (
    <h1 className="text-xl font-bold text-gray-700">Loading...</h1>
  ) : (
    <div>
      {data.data.map((todo, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4 hover:bg-gray-50 transition duration-300">
          <p className="text-lg font-medium text-gray-900">{todo.title}</p>
        </div>
      ))}
    </div>
  )}
</div>

  )
}

export default Todo