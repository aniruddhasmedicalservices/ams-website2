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
      <div className="form-row">
        <div className="col">
          <input type="text" className="form-control" placeholder="Name" />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Contact number" />
        </div>
        <div className="col">
        <div className="form-group">
          <select className="custom-select" required>
            <option value="">Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
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
      </div>
    </form>
  )
}
