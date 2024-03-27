import { BrowserRouter, Route, Routes } from "react-router-dom"
import Employee_func from "./components/Employee.func.component";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Employee_func />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;