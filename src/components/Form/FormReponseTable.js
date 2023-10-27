import React from 'react'
import { Card, Typography } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const TABLE_HEAD = ["Name","Form Title", "Form ID", "", ""];
const FormReponseTable = ({formsResponse}) => {
    console.log(formsResponse)
  return (
   <div className='col-span-4 mx-6 mt-6' >
         <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {formsResponse?.map(({formId,name, formName,id}, index) => {
            const isLast = index === formsResponse.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={formId}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
               {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {formName}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {formId}
                  </Typography>
                </td>
                
                <td className={classes}>
                <Link to={`/formResponse/${formId}/${id}`} >
                  <Typography
                   
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    View Responses
                  </Typography>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default FormReponseTable