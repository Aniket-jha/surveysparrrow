import React from "react";

const NewForm = ({
  formTitle,
  setFormTitle,
  template,
  setTemplate,
  questions,
  setQuestions,
  handleCreateForm,
  description,
  setDescription,
}) => {
  return (
    <div className="col-span-4 bg-gray-300 flex items-center justify-center flex-col ">
      <h4 className="text-[2rem] font-[600]">Create a New Form</h4>
      <div className="flex items-center justify-center flex-col">
        <input
          placeholder="Enter your Survey Name"
          value={formTitle}
          onChange={(e) => setFormTitle(e.target.value)}
          className="border-[1px] outline-none w-[400px] rounded-lg my-3  border-gray-300 px-6 py-3 "
          type="text"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border-[1px] outline-none w-[400px] rounded-lg my-3  border-gray-300 px-6 py-3 "
          placeholder="Enter Description"
        />
        <select
          value={template}
          onChange={(e) => setTemplate(e.target.value)}
          className=" bg-white border-[1px] border-gray-300 placeholder:text-gray-400 px-3 py-3 rounded-[10px] w-[400px] outline-none"
        >
          <option selected disabled>
            Choose a Template
          </option>
          <option value="temp1">Template 1</option>
          <option value="temp2">Template 2</option>
          <option value="temp3">Template 3</option>
        </select>
        <div className="flex items-center justify-center flex-col">
          <input
            className="border-[1px] outline-none w-[400px] rounded-lg my-3  border-gray-300 px-6 py-3 "
            type="text"
            value={questions.questionOne}
            onChange={(e) => {
              setQuestions({ ...questions, questionOne: e.target.value });
            }}
            placeholder="Enter Question One"
          />
          <input
            className="border-[1px] outline-none w-[400px] rounded-lg my-3  border-gray-300 px-6 py-3 "
            type="text"
            value={questions.questionTwo}
            onChange={(e) => {
              setQuestions({ ...questions, questionTwo: e.target.value });
            }}
            placeholder="Enter Question Two"
          />
          <input
            className="border-[1px] outline-none w-[400px] rounded-lg my-3  border-gray-300 px-6 py-3 "
            type="text"
            value={questions.questionThree}
            onChange={(e) => {
              setQuestions({ ...questions, questionThree: e.target.value });
            }}
            placeholder="Enter Question Three"
          />
          <input
            className="border-[1px] outline-none w-[400px] rounded-lg my-3  border-gray-300 px-6 py-3 "
            type="text"
            value={questions.questionFour}
            onChange={(e) => {
              setQuestions({ ...questions, questionFour: e.target.value });
            }}
            placeholder="Enter Question Four"
          />
          <input
            className="border-[1px] outline-none w-[400px] rounded-lg my-3  border-gray-300 px-6 py-3 "
            type="text"
            value={questions.questionFive}
            onChange={(e) => {
              setQuestions({ ...questions, questionFive: e.target.value });
            }}
            placeholder="Enter Question Five"
          />
        </div>

        <div>
          <button
            onClick={handleCreateForm}
            className="w-[400px] mt-3 bg-blue-500 py-4  text-white text-[1.2rem] rounded-lg "
          >
            Create Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewForm;
