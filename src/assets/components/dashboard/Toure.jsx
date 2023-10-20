
import { Form, Link } from 'react-router-dom'
import {React, useEffect, useState } from 'react';
import './Toure.css'
import Edit from './Edit';
import axiosClient from '../../axiosClient';
function Toure({Places,onClose,onSave,openForm}) {


  
  const [tour, setTour] = useState([]);

  useEffect(() => {
    const  fetchposts = async () => {
      try{
        const response =  await axiosClient.get ('https://holiday-api-zj3a.onrender.com/api/v1/tour/all');
        console.log(response.data)
        setUsers(response.data );

      } catch (err){
        if (err.response){
          console.log;(err.response.data);
          console.log;(err.response.status);
          console.log;(err.response.headers);
                } else{
                  console.log('error: ${err.message}');
                }


        }
      }
      fetchposts()

    
},[])











  const [isToureModalOpen,setToureModalOpen]=useState(false);

  const handleToureclick= () => {
 setToureModalOpen((previsEditModal) =>!previsToureModal)
  };

  const [open, setOpen] = useState(false);
  function openForm() {
    setOpen((prevOpen) => !prevOpen);
  }

  const handleSave = () =>{
    onSave();
    onClose();}
  return (
    <div className='charts'>
<table>
    <thead>
      <tr>
        <th>Image</th>
        <th>People</th>
        <th>Country</th>
        <th>Discription</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    {tour.map((invo)=>(
        <tr>
          <td>
            <img src={invo.image} alt={invo.name} width="50" height="50" />
          </td>
          <td>{invo.price}</td>
          <td>{invo.country}</td>
          <td>${invo.Description}</td>
          <td className='tourebuttons'>
            <button className='toure-edit'onClick={openForm}>  Edit</button>
            <button className='toure-delete' onClick={handleSave}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>

  {open  &&(<Edit openForm={openForm} />)}
 
 
    </div>
  )
}

export default Toure 