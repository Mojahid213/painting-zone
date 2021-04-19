import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
        <div className="contact-main">
            <div className="text-center mb-5">
                <h2>Stay <span style={{color:'#4C4B7D'}}>Connected</span> With Us</h2>
            </div>
            <div style={{backgroundColor:'#4C4B7D',padding:'30px 0px'}}>
                <div className="w-50 m-auto">
                    <input type="email" className="form-control my-1" placeholder="your email"/>
                    <input type="text" className="form-control my-1" placeholder="your subject"/>
                    <textarea rows="5" cols="5" className="form-control my-1" placeholder="Write your message"></textarea>
                    <div className="text-center mt-2">
                    <button className="btn btn-warning">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;