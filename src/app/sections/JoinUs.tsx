'use client'

import React, {useState} from 'react'
import './joinus.css'

// const initValues = {
//   name: '',
//   phone: '',
//   services:'',
//   location: '',
//   pincode: '',
// };

// const initState = { values: initValues };

export default function JoinUs() {

    // const [state, setState] = useState(initState);

    // const { values } = state;

    // const handleChange = ({target}: React.ChangeEvent<HTMLInputElement>) => 
    //   setState((prev) => ({
    //     ...prev, values: {
    //       ...prev.values, 
    //       [target.name]: target.value,
    //     }}));

  return (
    <section className='pb-0 container'>
      <form>
          <div className='joinusForm'>
            <div className="row d-flex justify-content-center">
              <div>
                <h2 className=''><a href="">Book our services & Join with us</a></h2>
              </div>  
              {/* <div className="col">
                <input type="text" name='name' className="form-control" placeholder="Full Name" value={initValues.name} onChange={handleChange} />
              </div>
              <div className="col">
                <input type="number" name='phone' className="form-control" placeholder="Contact number" value={initValues.phone} />
              </div> */}
              {/* <div className="col">
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
              </div> */}
              {/* <div className="col">
                <input type="text" className="form-control" placeholder="Location" />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Pincode" />
              </div>
              <div className='col'>
                <button className='btn' type="submit">Submit</button>
              </div> */}
            </div>
          </div>
        </form>
    </section>
  )
}
