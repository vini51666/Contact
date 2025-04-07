import React from 'react'
import "./Contact.css"

const contact = () => {
  return (
    <div class="contact-info">
<h2>For any other Query you may also Contact us on:</h2>      
<div class="contact-cards">
    <div class="card">
        <img src="/images/email.img" alt="Email" />
        <p><strong>Email:</strong> Falguni.Vahora@blissquants.com</p>
    </div>
    <div class="card">
        <img src="/images/msg.img" alt="Messenger" />
        <p><strong>Messenger:</strong> Chat with us for quick response</p>
    </div>
    <div class="card">
        <img src="/images/loc.img" alt="Address" />
        <p><strong>Address:</strong>D - 422,ITC Building, BlissQuants Datalytics LLP, Majuragate, Surat 395002</p>
    </div>
</div>
</div>
  )
}

export default contact
