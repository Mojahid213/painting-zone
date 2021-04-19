import React from 'react';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';
import "./Testimonials.css"

const allTestimoni = [
    {
        name:'Mojahid',
        profession:'student',
        details:'Their painting service is really really good. Both the quality of their product and their skill was really nice'
    },
    {
        name:'Jaber',
        profession:'CEO, Mr.Jet',
        details:'Their painting service is really really good. Both the quality of their product and their skill was really nice'
    },
    {
        name:'Fahmida',
        profession:'manager, BD Group',
        details:'Their painting service is really really good. Both the quality of their product and their skill was really nice'
    },
]

const Testimonials = () => {
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