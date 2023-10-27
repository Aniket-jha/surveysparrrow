import React from 'react'
import { Stepper, Step, Button } from "@material-tailwind/react";
const TempOne = ({formData,formResponse,setFormResponse,name,setName,handleFormResponse}) => {
    const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
 
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
  return (
    <div className='bg-[#000000] text-white h-[100vh] px-[200px] flex items-center flex-col justify-center' >
       
        <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step onClick={() => setActiveStep(0)}>1</Step>
        <Step onClick={() => setActiveStep(1)}>2</Step>
        <Step onClick={() => setActiveStep(2)}>3</Step>
        <Step onClick={() => setActiveStep(3)}>4</Step>
        <Step onClick={() => setActiveStep(4)}>5</Step>
        <Step onClick={() => setActiveStep(5)}>6</Step>
        
      </Stepper>
      {activeStep === 0 && <div className='w-[600px]  flex items-center justify-center flex-col my-16' >
            <h4 className='text-[2rem] text-center mt-12 font-[600]' >{formData.title}</h4>
            <p className='text-center ' >{formData.description}</p>
             <label className='text-[2rem] mt-12 font-[600]' >Enter your Name</label>
            <input value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter your Answer' className='outline-none placeholder:text-gray-200 w-[300px] px-2 py-2 my-4 bg-transparent border-b-[1px] border-gray-200 ' type="text" />
        </div>}
          {activeStep === 1 && (
            <div className='w-[600px] flex items-center justify-center flex-col my-16 ' >
            <label className='text-[2rem] font-[600]' >{formData?.questions?.questionOne}</label>
            <input value={formResponse.answerOne} onChange={(e)=>{setFormResponse({...formResponse,answerOne:e.target.value})}} placeholder='Enter your Answer' className='outline-none placeholder:text-gray-200 w-[300px] px-2 py-2 my-4 bg-transparent border-b-[1px] border-gray-200 ' type="text" />
        </div>)}
          {activeStep === 2 &&  <div className='w-[600px] flex items-center justify-center flex-col my-16 ' >
            <label className='text-[2rem] font-[600]' >{formData?.questions?.questionTwo}</label>
            <input value={formResponse.answerTwo} onChange={(e)=>{setFormResponse({...formResponse,answerTwo:e.target.value})}} placeholder='Enter your Answer' className='outline-none placeholder:text-gray-200 w-[300px] px-2 py-2 my-4 bg-transparent border-b-[1px] border-gray-200 ' type="text" />
        </div>}
          {activeStep === 3 &&  <div className='w-[600px] flex items-center justify-center flex-col my-16 ' >
            <label className='text-[2rem] font-[600]' >{formData?.questions?.questionThree}</label>
            <input value={formResponse.answerThree} onChange={(e)=>{setFormResponse({...formResponse,answerThree:e.target.value})}} placeholder='Enter your Answer' className='outline-none placeholder:text-gray-200 w-[300px] px-2 py-2 my-4 bg-transparent border-b-[1px] border-gray-200 ' type="text" />
        </div>}
          {activeStep === 4 && <div className='w-[600px] flex items-center justify-center flex-col my-16 ' >
            <label className='text-[2rem] font-[600]' >{formData?.questions?.questionFour}</label>
            <input value={formResponse.answerFour} onChange={(e)=>{setFormResponse({...formResponse,answerFour:e.target.value})}} placeholder='Enter your Answer' className='outline-none placeholder:text-gray-200 w-[300px] px-2 py-2 my-4 bg-transparent border-b-[1px] border-gray-200 ' type="text" />
        </div>}
         {activeStep === 5 && <div className='w-[600px] flex items-center justify-center flex-col my-16 ' >
            <label className='text-[2rem] font-[600]' >{formData?.questions?.questionFive}</label>
            <input value={formResponse.answerFive} onChange={(e)=>{setFormResponse({...formResponse,answerFive:e.target.value})}} placeholder='Enter your Answer' className='outline-none placeholder:text-gray-200 w-[300px] px-2 py-2 my-4 bg-transparent border-b-[1px] border-gray-200 ' type="text" />
        </div>}
      <div className="mt-16 flex justify-between">
        <Button className='mx-12 disabled:bg-gray-200 disabled:text-black bg-blue-500 ' onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </Button>
        <Button className='mx-12 bg-blue-400 ' onClick={handleNext} disabled={isLastStep}>
          Next
        </Button>
        {
            isLastStep && <Button className='mx-12 bg-blue-400 ' onClick={handleFormResponse} >
          Submit
        </Button>
        }
      </div>
    </div>
  )
}

export default TempOne