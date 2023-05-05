import { createContext, useContext, useState } from "react";
import "./App.css";
import Quantity from "./components/Quantity";

// tạo ngữ cảnh

export const themeContext = createContext();

function App() {
  const [count, setCount] = useState(1);
  const [string, setString] = useState("RA");
  const [student, setStudent] = useState({ id: "SV1", name: "Hùng" });

  const handleChangeCount = () => {
    setCount((prev) => prev + 5);
    setString("React Hook");
    setStudent({ id: "SV03", name: "Mạnh" });
  };

  return (
    <themeContext.Provider value={string}>
      <div className="App">
        <span>{count}</span>
        <p>{string}</p>
        <div>
          <span> ID : {student.id}</span>
          <p>Name : {student.name}</p>
        </div>
        <button onClick={handleChangeCount}>Change count</button>

        <Quantity count={count}>{string}</Quantity>
      </div>
    </themeContext.Provider>
  );
}

export default App;
