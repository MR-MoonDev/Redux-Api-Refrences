import Navbar from "./Component/Navbar";
import Todo from "./Component/Todo";
export default function App() {
  return (
    <div className="flex flex-col gap-6 mx-10 mt-2">
      <Navbar/>
      <Todo />
    </div>
  );
}
