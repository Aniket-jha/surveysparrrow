import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  doc,
  setDoc,
  addDoc,
  collection,
  where,
  query,
  getDoc,
  getDocs,
  onSnapshot,
  updateDoc
} from "firebase/firestore";
import { database,db } from "../firebase.config";
import TempOne from '../components/TemplateForm/TempOne';
import TempTwo from '../components/TemplateForm/TempTwo';
const Form = () => {
   const {id} = useParams()
   const [formData, setFormData] = useState({})
   const [name, setName] = useState("")
   const navigate = useNavigate()
    const [formResponse, setFormResponse] = useState({
        answerOne:"",
        answerTwo:"",
        answerThree:"",
        answerFour:"",
        answerFive:""
    })
    console.log({ name:name,
        answers:formResponse,
        formId:formData?.id,
        formName:formData.formTitle,})
    const handleFormResponse = () =>{
        if(id && formData.title){
              addDoc(collection(db, "formResponse"),{
        name:name,
        answers:formResponse,
        formId:id,
        formName:formData.title,
        date:new Date()
      } ).then((result)=>{
        setName("")
        
        setFormResponse({
        answerOne:"",
        answerTwo:"",
        answerThree:"",
        answerFour:"",
        answerFive:""
    })
    navigate("/success")
      })
        }
         
    }

   useEffect(() => {
     const  formAllData = onSnapshot(doc(db, "form", id), (doc) => {
    console.log("Current data: ", doc.data());

    const data = doc.data()
        setFormData(data)
    });
   }, [id])
   console.log(formData)

  return (
    <div>
      {formData.templateType === "temp1" &&  <TempOne handleFormResponse={handleFormResponse} name={name} setName={setName} formResponse={formResponse} setFormResponse={setFormResponse} formData={formData} />}
       {formData.templateType === "temp2" && <TempTwo handleFormResponse={handleFormResponse} name={name} setName={setName} formResponse={formResponse} setFormResponse={setFormResponse} formData={formData} />}
    </div>
  )
}

export default Form