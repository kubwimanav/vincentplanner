
import './Place.css'
import {React,  useEffect,  useState } from 'react';
import hero from '../../images/hero-imag.jpg'
import SignupForm from '../SignupForm';
import Edit from './Edit';
import axiosClient from '../../axiosClient';
function Places() {
  const[name,setName]=useState('')
  const[email,Email]=useState('')
  const [isEditModalOpen,setEditModalOpen]=useState(false);

  const handleEditclick= () => {
 setEditModalOpen((previsEditModal) =>!previsEditModal)
  };
  // const [users, setUsers] = useState([
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     email: "vincent.gmail.com",
  //     status: "Active",
  //     image: hero,
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Smith",
  //     email: "janesmith@gmail.com",
  //     status: "Inactive",
  //     image: hero,
  //   },
    
  // ]);
const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  function openForm() {
    setOpen((prevOpen) => !prevOpen);
  }
  // fetching
  useEffect(() => {
      const  fetchposts = async () => {
        try{
          const response =  await axiosClient.get ('https://holiday-planner-4lnj.onrender.com/api/v1/auth/users');
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

  return (
    <div className='friend-contnainer'>
    
    <table>
      <thead>
        <tr>
          <th>FullName</th>
          <th>Location</th>
          <th>Email</th>
          <th>PhoneNumber</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td> {user.fullName}</td>
            <td>{user.location}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td><button className='place-edit' onClick={openForm}>Edit</button></td>
            <td><button className='place-delete'>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    {open  &&(<Edit openForm={openForm} />)}
  </div>
  
  )
}

export default Places