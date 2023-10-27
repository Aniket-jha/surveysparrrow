import React,{useState,useEffect} from 'react'
import Sidebar from '../components/Layout/Sidebar'
import FormReponseTable from '../components/Form/FormReponseTable'
import { deleteDoc,doc,getDocs,collection } from 'firebase/firestore'
import { db } from '../firebase.config'
const FormResponse = () => {
        const [formsResponse, setFormsResponse] = useState([])
  const deleteProduct = async (id) =>{
     await deleteDoc(doc(db, "products", id)).
    then(()=>{
      console.log("Product Removed Succesfully")
    }).catch((err)=>{
      console.log(err.message)
    })
  
  }
  const fetchProducts =  async () =>{
    const querySnapshot = await getDocs(collection(db, "formResponse"));
    querySnapshot.forEach((doc) => {
     setFormsResponse((prev)=>[...prev,{
      id:doc.id,
      ...doc.data()
     }])
   
  
    });
    }
   useEffect(() => {
   

fetchProducts()
  },[] )
  return (
    <div className='grid grid-cols-5 grid-flow-col'>
        <Sidebar />
        <FormReponseTable formsResponse={formsResponse} />
    </div>
  )
}

export default FormResponse