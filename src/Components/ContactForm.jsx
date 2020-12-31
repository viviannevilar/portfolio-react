import React, { useState } from 'react'
import { Axios, db } from '../firebase/firebaseConfig'
import './ContactForm.scss'

const ContactForm = (props) => {

  const { passContactActive } = props

  const [formData, setFormData] = useState({})
  const [contactName, setContactName] = useState()
  const [messageSent, setMessageSent] = useState(false)

  
  const [errorMessage, setErrorMessage] = useState();
  const [errorKey, setErrorKey] = useState();

  const [confirmation, setConfirmation] = useState(`Thank you, ${contactName}, your message has been sent!`)

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()


    if (!formData.name) {
      setErrorKey("name");
      setErrorMessage("This field is mandatory");
    } 

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
        setConfirmation("There was an error. Please try again or contact me via viviannevilar at gmail dot com.")

      })
  }

  const handleClick = event => {
    event.preventDefault()
    setMessageSent(false)
  }

  function handleClickClose() {
    passContactActive(false)
    setMessageSent(false)
  }

  // function handleClickClose() {
  //   passContactActive(false)
  //   setMessageSent(false)
  // }

  console.log("messageSent ", messageSent)

  return (
    <div className="contact-overlay-container">
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
        
        <div className="button-wrapper">
          <button type="submit">Submit</button>
          <button type="button" href='#' onClick={handleClickClose}>Cancel</button>
          
          {/* <a href='#' onClick={handleClickClose}>Cancel</a> */}
        </div>
      </form>

      <div className={`contact-overlay ${messageSent ? "overlay-active" : "overlay-inactive"}`}>
          <p>Thank you, {contactName}, your message has been sent!</p>
          <div className="button-wrapper">
            <button className="button-a" href='#' onClick={handleClick}>Send another message</button>
            <button className="button-a" href='#' onClick={handleClickClose}>Close</button>
          </div>
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