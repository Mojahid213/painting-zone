import React, { useEffect, useState } from 'react';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';
import "./Testimonials.css"


const Testimonials = () => {
    const[allTestimoni,setAllTestimoni] = useState([]);
    useEffect(()=>{
        fetch("https://calm-springs-36524.herokuapp.com/getTestimonial")
        .then(res => res.json())
        .then(data => setAllTestimoni(data))
    },[])
    return (
        <div className="testimonial-main">
            <div className="text-center mb-5">
                <h2>Our Clients <span style={{color:"#4C4B7D"}}>Feedback</span></h2>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    allTestimoni.map(testi => <TestimonialDetails detail={testi}></TestimonialDetails>)
                }
            </div>
        </div>
    );
};

export default Testimonials;