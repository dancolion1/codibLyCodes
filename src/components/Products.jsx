import React from 'react'

const Products = ({data}) => {
    
  return (  
    <table className="table">
        <thead>
            <tr>
                <th scope='col'>ID</th>
                <th scope='col'>Name</th>
                <th scope='col'>Year</th>
                

            </tr>
        </thead>
        <tbody>
            {data.map(item => (
                <tr>
                    <td>{item.id} </td>
                    <td>{item.name} </td>
                    <td>{item.year} </td>
                    
                </tr>
            ))}
        </tbody>
    </table>
  ) 
}

export default Products