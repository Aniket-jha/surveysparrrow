import React, { useState } from 'react'
import Sidebar from '../components/Layout/Sidebar'
import NewForm from '../components/Form/NewForm'
import { addDoc, collection } from "firebase/firestore";
import { db } from '../firebase.config';
const CreateForm = () => {
    const [formTitle, setFormTitle] = useState("")
    const [template, setTemplate] = useState("")
    const [description, setDescription] = useState("")
    const user = localStorage.getItem("user")
    const [questions, setQuestions] = useState({
      questionOne:"",
      questionTwo:"",
      questionThree:"",
      questionFour:"",
      questionFive:""
    })
    console.log({
       title:formTitle,
        templateType:template,
        questions:questions,
        user:user
    })
    const handleCreateForm = () =>{
      addDoc(collection(db, "form"),{
        title:formTitle,
        templateType:template,
        questions:questions,
        description:description,
        user:user,
        date:new Date()
      } ).then((result)=>{
        setFormTitle("")
        setTemplate("")
        setDescription("")
        setQuestions({
      questionOne:"",
      questionTwo:"",
      questionThree:"",
      questionFour:"",
      questionFive:""
    })
      })
    }

  return (
    <div className='grid grid-cols-5 grid-flow-col' >
    <Sidebar />
    <NewForm description={description} setDescription={setDescription} handleCreateForm={handleCreateForm} formTitle={formTitle} setFormTitle={setFormTitle} template={template} setTemplate={setTemplate} questions={questions} setQuestions={setQuestions}  />
    </div>
  )
}

export default CreateForm