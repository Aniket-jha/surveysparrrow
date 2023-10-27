import React,{useState,useEffect} from 'react'
import Sidebar from '../components/Layout/Sidebar'
import FormTable from '../components/Form/FormTable'
import { deleteDoc,doc,getDocs,collection } from 'firebase/firestore'
import { db } from '../firebase.config'
const FormList = () => {
      const [forms, setForms] = useState([])
  const deleteProduct = async (id) =>{
     await deleteDoc(doc(db, "products", id)).
    then(()=>{
      console.log("Product Removed Succesfully")
    }).catch((err)=>{
      console.log(err.message)
    })
  
  }
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
   

fetchProducts()
  },[] )
  return (
    <div className='grid grid-cols-5 grid-flow-col'>
        <Sidebar />
        <FormTable forms={forms} />
    </div>
  )
}

export default FormList