import React from 'react'

function Signup() {
  return (
    <>
    <h2>Sign Up</h2>
    <form className="signup-form">
       <label>
        Name:
        <input type="text" name="Name" placeholder="Enter Name"  required />
      </label>

      <label>
        Age:
        <input type="number" name="age" placeholder="Enter Age"  required />
      </label>

      <label>
        Email:
        <input type="email" name="email" placeholder="Enter Email"  required />
      </label>

      <label>
        Mobile Number:
        <input type="tel" name="mobile" placeholder="Enter Mobile Number"  required />
      </label>

      <label>
        Address:
        <input type="text" name="address" placeholder="Enter Address"  required />
      </label>

      <label>Gender:</label>
      <div className='geneder_wrapper'>
        <input type="radio" name="gender" value="male" /> Male
        <input type="radio" name="gender" value="female" /> Female
      </div>
      <hr className="bottom-line" />
      <label>
        <input type="checkbox" name="agree"  required /> I agree to the terms and conditions
      </label>

      <button type="submit">Sign Up</button>
    </form>
    </>
  )
}

export default Signup
