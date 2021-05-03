import React from 'react';
import emailjs from 'emailjs-com';

const ContactPage = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_z18klwv', e.target, 'user_MSVsPqs2b48PsqwJKW6TL')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

    return (
        <div className="contact">
        <div className="container contact-content">
            <h2 className="pb-4" style={{color:'lightSalmon', textAlign: 'center'}}>Contact Me</h2>
        <div className="row mb-3">
            <div className="col-md-4 offset-md-1 mt-5">
                <h3>Let us handle your work, professionally.</h3>
                <p>I strive to maintain accuracy and consistency in task completion, individual performance and
team goal achievement.My ability to
produce excellent code and to clearly communicate and collaborate with coworker’s, client and
management have led to company success.</p>
            </div>
            <div className="col-md-6 offset-md-1">
                <form onSubmit={sendEmail} action="">
                    <input type="text" name="name" className="form-control" placeholder="Name" id=""/>
                    <input type="email" name="email" className="form-control my-4" placeholder="Email" id=""/>
                    <input type="text" name="subject" className="form-control" placeholder="Subject" id=""/>
                    <textarea id="message" name="message" className="form-control mb-4" rows="8" cols="72" placeholder="Your Message"></textarea>
                    <button className="btn btn-primary">Send</button>
                </form>
            </div>
        </div>
        <div className="footer text-center">
            <small>copyright Orange labs 2020</small>
        </div>
        </div>
    </div>
    );
};

export default ContactPage;