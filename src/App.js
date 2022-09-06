import {FiEye,FiEyeOff} from "react-icons/fi";
import {useState} from "react";

function App() {
    const [icon,setIcon] = useState(FiEyeOff);
    const [type,setType] = useState("password");
    const handleChange = () => {
        if (type === "password"){
            setType("text");
            setIcon(FiEye)
        }else{
            setType("password");
            setIcon(FiEyeOff);
        }
    }
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-pink-300">
      <div className="w-60 rounded-2xl bg-white px-4 py-2 flex justify-between items-center">
          <input type={type} className="outline-0"/>
          <span className="text-2xl cursor-pointer" onClick={handleChange}>{icon}</span>
      </div>
    </div>
  );
}

export default App;
