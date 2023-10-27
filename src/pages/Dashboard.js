import React,{useEffect,useState} from 'react'
import Sidebar from '../components/Layout/Sidebar'
  import { useNavigate } from 'react-router-dom'
import TopNumbers from '../components/Dashboard/TopNumbers'
import { deleteDoc,doc,getDocs,collection } from 'firebase/firestore'
import { db } from '../firebase.config'
import SurveyForm from '../components/Dashboard/SurveyForm'
const Dashboard = () => {
  const navigate = useNavigate()
  const [forms, setForms] = useState([])
  const fetchProducts =  async () =>{
    const querySnapshot = await getDocs(collection(db, "form"));
    querySnapshot.forEach((doc) => {
     setForms((prev)=>[...prev,{
      id:doc.id,
      ...doc.data()
     }])
   
  
    });
    }
   useEffect(() => {
        const checkUser = localStorage.getItem("user")
        if(!checkUser){
            navigate("/login")
        }
        fetchProducts()
    }, [])
  return (
    <div className='grid grid-cols-5' >
        <Sidebar />
        <div className='col-span-4' >
        <TopNumbers forms={forms} />
        <SurveyForm forms={forms} />
        </div>
    </div>
  )
}

export default Dashboard