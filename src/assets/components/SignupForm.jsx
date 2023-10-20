import React, { useState } from 'react';
import './SignupForm.css'
function SignupForm({Places,onClose,onSave,openForm}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server or validate inputs).
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className='signupform'>
      <h2 className='signuph2'>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='signuplabel'>Name:</label>
          <input className='signupinput'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className='signuplabel'>Email:</label>
          <input className='signupinput'
            placeholder="example@gmail.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className='signuplabel'>Password:</label>
          <input className='signupinput'
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className='signuplabel'>Coform your password:</label>
          <input className='signupinput'
            type="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className='signupbutton'  type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupForm;