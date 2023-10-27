import { Routes,Route, useNavigate } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import CreateForm from './pages/CreateForm';
import Login from './pages/Login';
import { useEffect } from 'react';
import FormList from './pages/FormList';
import Form from './pages/Form';
import Sucess from './components/TemplateForm/Sucess';
import FormResponse from './pages/FormResponse';
import ResponseDetails from './pages/ResponseDetails';
import Template from './pages/Template';

function App() {
 const navigate =  useNavigate()
  useEffect(() => {
   const checkUser = localStorage.getItem("user")
        if(!checkUser){
            navigate("/login")
        }
  }, [])
  return (
    <div className="App">
    <Routes >
      <Route exact path="/" element={<Dashboard />}   />
      <Route exact path="/createForm" element={<CreateForm />}   />
      <Route exact path="/template" element={<Template />}   />
        <Route exact path="/login" element={<Login />}   />
        <Route exact path="/formList" element={<FormList />}   />
        <Route exact path="/form/:id" element={<Form />}   />
         <Route exact path="/formResponse/:id" element={<FormResponse />}   />
           <Route exact path="/formResponse/:id/:response" element={<ResponseDetails />}   />
         <Route exact path="/success" element={<Sucess />}   />
    </Routes>  
    </div>
  );
}

export default App;
