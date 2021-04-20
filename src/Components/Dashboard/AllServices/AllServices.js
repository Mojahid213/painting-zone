import React from 'react';

const AllServices = ({service}) => {


    //Delete services
    const handleDeleteBtn = () =>{
       fetch(`https://calm-springs-36524.herokuapp.com/deleteServices/${service._id}`,{
           method:'DELETE',
           headers:{
               'content-type':'application/json'
           }
       })
    }
    return (
        <tr>
        <td>{service.srName}</td>
        <td>{service.srPrice}</td>
        <td><button onClick={handleDeleteBtn} className="btn btn-danger">Delete</button></td>
      </tr>
    );
};

export default AllServices;