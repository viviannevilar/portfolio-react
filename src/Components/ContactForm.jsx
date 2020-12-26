import React, { useState } from 'react'
import { Axios, db } from '../firebase/firebaseConfig'
import './ContactForm.scss'

const ContactForm = () => {
  const [formData, setFormData] = useState({})
  const [contactName, setContactName] = useState()
  const [messageSent, setMessageSent] = useState(false)

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    sendEmail()
    setContactName(formData.name)
    setMessageSent(true)
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  const sendEmail = () => {
    Axios.post(
      'https://us-central1-portfolio-425e2.cloudfunctions.net/submit',
      formData
    )
      .then(res => {
        db.collection('emails').add({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleClick = event => {
    event.preventDefault()
    setMessageSent(false)
  }


  console.log("messageSent ", messageSent)

  return (
    <div className="page-wrapper contact-overlay-container">
      <form onSubmit={handleSubmit} className={messageSent ? "overlay-inactive" : "overlay-active"}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={updateInput}
          value={formData.name || ''}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={updateInput}
          value={formData.email || ''}
        />
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          onChange={updateInput}
          value={formData.message || ''}
        ></textarea>
        <button type="submit">Submit</button>
      </form>

      <div className={`contact-overlay ${messageSent ? "overlay-active" : "overlay-inactive"}`}>
          <p>Thank you, {contactName}, your message has been sent!</p>
          <button className="button-a" href='#' onClick={handleClick}>Send another message</button>
      </div>
    </div>
  )
}

export default ContactForm




///// overlay

// .overlay {
//   display: none;
// }

// .overlay-container:hover .overlay {
//   display: block;
//   // transition: 2s;
// }

// // might delete this, just seeing if it helps with deployed version
// .overlay-container:hover .overlay-top {
//   display: block;
//   transition: 2s;
// }

// .overlay-container:hover .bf-overlay {
//   filter: contrast(calc(0.5)) brightness(1);
//  //filter: contrast(calc(0.5/1.5)) brightness(1.5);
// }

// .python-overlay-container {
//   position: relative;
// }