'use client'

import React, {useState} from 'react'
import './joinus.css'

export default function JoinUs() {
    const initialForm = {
        name: '',
        email: '',
        phone: '',
        message: '',
    };

    const [form, setForm] = useState(initialForm);

  return (
    <div>JoinUs</div>
  )
}
