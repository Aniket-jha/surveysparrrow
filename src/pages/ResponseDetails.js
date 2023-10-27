import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import {
  doc,

  onSnapshot,

} from "firebase/firestore";
import { database,db } from "../firebase.config";
import Sidebar from '../components/Layout/Sidebar';
const ResponseDetails = () => {
    const {id,response} = useParams()
    const [formResponse, setFormResponse] = useState({})
    const [formData, setFormData] = useState({})
     useEffect(() => {
     const  formReponseData = onSnapshot(doc(db, "formResponse", response), (doc) => {
    console.log("Current data: ", doc.data());

    const data = doc.data()
        setFormResponse(data)
    });
      const  formAllData = onSnapshot(doc(db, "form", id), (doc) => {
    console.log("Current data: ", doc.data());

    const data = doc.data()
        setFormData(data)
    });
   }, [id,response])
   console.log(formResponse,formData)
  return (
    <div className='grid grid-cols-5 grid-flow-col' >
        <Sidebar />
        <div className='col-span-4' >
            <div className='flex items-center mt-[150px] justify-center flex-col' >
                <div className='my-3 text-[1.5rem]' >
                    <h4>Name of the User : {formResponse?.name}</h4>
                </div>
                <div>
                    <p className='text-[1.2rem] mt-3 font-[600]' >1) {formData?.questions?.questionOne}</p>
                    <p>Ans: {formResponse?.answers?.answerOne}</p>
                </div>
                 <div>
                    <p className='text-[1.2rem] mt-3 font-[600]' >2) {formData?.questions?.questionTwo}</p>
                    <p>Ans: {formResponse?.answers?.answerTwo}</p>
                </div>
                 <div>
                    <p className='text-[1.2rem] mt-3 font-[600]' >3) {formData?.questions?.questionThree}</p>
                    <p>Ans: {formResponse?.answers?.answerThree}</p>
                </div>
                 <div>
                    <p className='text-[1.2rem] mt-3 font-[600]' >4) {formData?.questions?.questionFour}</p>
                    <p>Ans: {formResponse?.answers?.answerFour}</p>
                </div>
                 <div>
                    <p className='text-[1.2rem] mt-3 font-[600]' >5) {formData?.questions?.questionFive}</p>
                    <p>Ans: {formResponse?.answers?.answerFive}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResponseDetails