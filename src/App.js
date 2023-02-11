import { Route, Routes } from "react-router-dom";
import "./App.css";
import FillForm from "./components/FillForm/FillForm";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      {/* 
      First Component Login page's validation is done using react and conditional 
      statements only, regex is used for email id validation.

      Second Component Home Page's validation is done using external library "yup" and "formik".

      Redux is implement to maintain the state of email entered in login page.
       */}
      <Routes>
        <Route path="/" element={<Login />} exact></Route>
        <Route path="/home" element={<FillForm />} exact></Route>
      </Routes>
    </div>
  );
}

export default App;
