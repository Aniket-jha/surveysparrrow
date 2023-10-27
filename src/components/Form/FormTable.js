import React from 'react'
import { Card, Typography } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const TABLE_HEAD = ["Form Link","Form Title", "Form Template", "", ""];
 
const TABLE_ROWS = [
 
];
const FormTable = ({forms}) => {
  return (
    <div className='col-span-4 mx-6 mt-6' >
    <h4 className='text-[2rem] font-[600] my-3' >Created Forms</h4>
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
          {forms.map(({id,title, templateType }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={title}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                 <a href={`http://localhost:3000/#/form/${id}`}>http://localhost:3000/#/form/{id}</a>  
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {title}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {templateType}
                  </Typography>
                </td>
                
                <td className={classes}>
                <Link to={`/formResponse/${id}`} >
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

export default FormTable