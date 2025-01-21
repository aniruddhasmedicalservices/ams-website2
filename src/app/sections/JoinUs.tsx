'use client'

import React, {useState} from 'react'
import './joinus.css'

export default function JoinUs() {
    // const initialForm = {
    //     name: '',
    //     email: '',
    //     phone: '',
    //     message: '',
    // };
    // const [form, setForm] = useState(initialForm);
  return (
    <form>
      <div className='container container-fluid'>
        <div className="row d-flex justify-content-center">
          <div>
            <h2 className='text-center m-5'>Book our services & Join with us</h2>
          </div>  
          <div className="col">
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Contact number" />
          </div>
          <div className="col">
            <div className="form-group">
              <select className="custom-select" required>
                <option value="">Services</option>
                <option value="1">Occupational Health Center</option>
                <option value="2">School Wellness Program</option>
                <option value="3">Ambulance Services</option>
                <option value="4">Medical Staffing Services</option>
                <option value="5">Home Care Nursing Services</option>
                <option value="6">Medical Equipments</option>
                <option value="7">Yoga and Wellness Program</option>
                <option value="8">Crech services</option>
                <option value="9">Vaccination Services</option>
                <option value="10">First aid and CPR Training Services</option> 
                <option value="11">Additional Nursing Services</option>
              </select>
              <div className="invalid-feedback">Example invalid custom select feedback</div>
            </div>
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Location" />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Pincode" />
          </div>
          <div className='col'>
            <button className='btn' type="submit">Submit</button>
          </div>
        </div>
      </div>
    </form>
  )
}
