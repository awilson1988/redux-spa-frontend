import React, { useRef}  from 'react'; 
import { connect } from 'react-redux'
import emailjs from 'emailjs-com'; 

export const ContactUs = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('gmail', 'template_svcqwpo', form.current, 'user_DcicovIVQqPpPtWQA9urK')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div>
            <form className="container" onSubmit={sendEmail}>
              <label>Subject</label>
                <input type="text" name="subject" />
                <label>Name</label>
                <input type="text" name="name" />
              <label>Email</label>
                <input type="email" name="email" />
              <label>Message</label>
                <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
        </div>
    )
}

export default ContactUs